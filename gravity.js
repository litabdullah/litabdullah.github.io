(() => {
  'use strict';

  const canvas = document.querySelector('.gravity-particles');
  if (!canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;

  // Match the SVG coordinate space so the animated and still artwork align.
  const width = 1000;
  const height = 360;
  const center = { x: 500, y: 162 };
  const horizonRadius = 68;
  const tilt = -Math.PI / 18;
  const sinTilt = Math.sin(tilt);
  const cosTilt = Math.cos(tilt);
  const turn = 2 * Math.PI;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const colors = {
    light: { dust: ['#7855ba', '#9984cc', '#ad7bd1'], disk: ['#8450d7', '#ad70f5', '#f7e4ff'] },
    dark: { dust: ['#ad84ed', '#c6adfa', '#e5d8ff'], disk: ['#ac74ff', '#d5aaff', '#fff0fd'] },
  };
  let palette = colors.light;
  function readTheme() {
    palette = document.documentElement.dataset.theme === 'dark' ? colors.dark : colors.light;
  }
  readTheme();

  // Keep the pattern stable across resizing and theme changes.
  let seed = 64739;
  function random() {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  }

  const dust = Array.from({ length: 84 }, () => ({
    x: 500 + (random() + random() - 1) * 470,
    y: 151 + (random() + random() - 1) * 145,
    speed: 1.8 + random() * 5.2,
    phase: random() * turn,
    size: 0.55 + random() ** 2 * 1.65,
    brightness: 0.15 + random() * 0.32,
    ink: Math.floor(random() * 3),
  }));

  const disk = Array.from({ length: 146 }, (_, index) => {
    const radius = 86 + random() ** 1.5 * 218;
    const onRim = index < 16;
    return {
      radius: onRim ? 71 + random() * 9 : radius,
      flattening: onRim ? 0.96 : 0.15 + random() * 0.08,
      phase: random() * turn,
      speed: 0.5 * Math.sqrt(100 / radius),
      size: 0.48 + random() ** 2 * 1.55,
      brightness: 0.3 + random() * 0.43,
      ink: Math.floor(random() * 3),
      streak: index % 8 === 0,
    };
  });

  function drawDust(time) {
    for (const grain of dust) {
      const dx = (grain.x + time * grain.speed + 100) % 1200 - 100 - center.x;
      const dy = grain.y + 8 * Math.sin(time * 0.2 + grain.phase) - center.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 0.001) continue;
      // The outer image of a point lens shifts farther out near the horizon.
      // Stars following straight paths appear to swing around the dark center.
      const scale = (distance + Math.hypot(distance, 148)) / (2 * distance);
      const x = center.x + dx * scale;
      const y = center.y + dy * scale;
      const fade = Math.max(0, Math.min(1, x / 110, (width - x) / 110));
      if (fade === 0) continue;
      context.globalAlpha = fade * grain.brightness * (0.76 + 0.24 * Math.sin(time * 1.1 + grain.phase));
      context.fillStyle = palette.dust[grain.ink];
      context.beginPath();
      context.arc(x, y, grain.size, 0, turn);
      context.fill();
    }
  }

  function drawDisk(time) {
    for (const grain of disk) {
      const angle = grain.phase + time * grain.speed;
      const major = Math.cos(angle) * grain.radius;
      const minor = Math.sin(angle) * grain.radius * grain.flattening;
      const x = center.x + major * cosTilt - minor * sinTilt;
      const y = center.y + major * sinTilt + minor * cosTilt;
      // The event horizon obscures the back of the tilted disk.
      if (minor < 0 && major * major + minor * minor < horizonRadius ** 2) continue;

      const glimmer = 0.81 + 0.19 * Math.sin(angle * 3 + grain.phase);
      context.globalAlpha = grain.brightness * glimmer * (minor < 0 ? 0.62 : 1);
      context.fillStyle = palette.disk[grain.ink];
      context.beginPath();
      context.arc(x, y, grain.size, 0, turn);
      context.fill();

      if (grain.streak) {
        const tail = angle - 0.043;
        const tailMajor = Math.cos(tail) * grain.radius;
        const tailMinor = Math.sin(tail) * grain.radius * grain.flattening;
        context.globalAlpha *= 0.55;
        context.strokeStyle = palette.disk[grain.ink];
        context.lineWidth = grain.size;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(center.x + tailMajor * cosTilt - tailMinor * sinTilt,
          center.y + tailMajor * sinTilt + tailMinor * cosTilt);
        context.stroke();
      }
    }
  }

  let frame = 0;
  let lastPaint = null;
  let elapsed = 0;
  let inView = !('IntersectionObserver' in window);
  let hasSize = false;

  function clear() {
    context.clearRect(0, 0, width, height);
  }

  function draw(now) {
    frame = 0;
    if (lastPaint === null || now - lastPaint >= 1000 / 30 - 0.5) {
      if (lastPaint !== null) elapsed += Math.min(0.08, (now - lastPaint) / 1000);
      lastPaint = now;
      clear();
      drawDust(elapsed);
      drawDisk(elapsed);
      context.globalAlpha = 1;
    }
    frame = requestAnimationFrame(draw);
  }

  function syncAnimation() {
    const running = hasSize && inView && !document.hidden && !motion.matches;
    if (running && !frame) {
      frame = requestAnimationFrame(draw);
    } else if (!running && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
      lastPaint = null;
    }
    if (motion.matches) clear();
  }

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    hasSize = bounds.width > 0 && bounds.height > 0;
    if (hasSize) {
      const scale = Math.min(window.devicePixelRatio || 1, 1.75, 1600 / bounds.width);
      const pixelWidth = Math.max(1, Math.round(bounds.width * scale));
      const pixelHeight = Math.max(1, Math.round(bounds.height * scale));
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      context.setTransform(pixelWidth / width, 0, 0, pixelHeight / height, 0, 0);
    }
    syncAnimation();
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncAnimation();
    }).observe(canvas);
  }
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
  if ('MutationObserver' in window) {
    new MutationObserver(readTheme).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
  }

  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', syncAnimation);
  if (motion.addEventListener) motion.addEventListener('change', syncAnimation);
  else motion.addListener(syncAnimation);
  resize();
})();
