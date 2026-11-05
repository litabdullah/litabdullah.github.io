(() => {
  'use strict';

  // Only presentation-safe names, technologies and summaries belong here.
  // Account access, private source and research notes stay outside /site.
  const androidApps = ['Hateem', 'Mio', 'AI PDF Tools', 'Hotel POS', 'Image Master Suite', 'Audio Master Suite'];
  const tools = [
    { id: 'kotlin', name: 'Kotlin', icon: 'kotlin', type: 'LANGUAGE', group: 'engineering', description: 'The language behind a growing collection of native Android experiences, from everyday utilities to purpose-led products.', projects: androidApps },
    { id: 'cplusplus', name: 'C++', icon: 'cplusplus', type: 'LANGUAGE', group: 'engineering', description: 'Compiled programming for native software, algorithms, and performance-sensitive systems.', projects: ['Native development', 'Algorithms', 'Performance-focused software'], label: 'WHAT IT SUPPORTS' },
    { id: 'csharp', name: 'C#', icon: 'csharp', type: 'LANGUAGE', group: 'engineering', description: 'Application development with C# and the .NET ecosystem, from structured business logic to backend services.', projects: ['.NET applications', 'Backend services', 'Object-oriented development'], label: 'WHAT IT SUPPORTS' },
    { id: 'compose', name: 'Jetpack Compose', icon: 'jetpackcompose', type: 'UI FRAMEWORK', group: 'engineering', description: 'A shared foundation for building clear, responsive interfaces across the Android collection.', projects: androidApps },
    { id: 'android', name: 'Android', icon: 'android', type: 'PLATFORM', group: 'engineering', description: 'Mobile products designed for the everyday: prayer, media, documents, images, audio, and point of sale.', projects: androidApps },
    { id: 'typescript', name: 'TypeScript', icon: 'typescript', type: 'LANGUAGE', group: 'engineering', description: 'Typed web applications that connect a considered interface with the logic behind it.', projects: ['HireGrip', 'Aurelius'] },
    { id: 'angular', name: 'Angular', icon: 'angular', type: 'WEB FRAMEWORK', group: 'engineering', description: 'The application framework behind HireGrip’s resume and job-matching experience.', projects: ['HireGrip'] },
    { id: 'dotnet', name: '.NET', icon: 'dotnet', type: 'APPLICATION PLATFORM', group: 'engineering', description: 'Backend application architecture supporting resume analysis, job matching, and document workflows.', projects: ['HireGrip'] },
    { id: 'gemini', name: 'Gemini', icon: 'gemini', type: 'AI INTEGRATION', group: 'engineering', description: 'AI assistance connected to practical product workflows, including career tools and turning structured ideas into code.', projects: ['HireGrip', 'System Blueprint to Code Generator'] },
    { id: 'python', name: 'Python', icon: 'python', type: 'LANGUAGE', group: 'engineering', description: 'Practical exploration through code, including colour detection and image analysis.', projects: ['Colour Detection'] },
    { id: 'git', name: 'Git', icon: 'git', type: 'VERSION CONTROL', group: 'engineering', description: 'A consistent way to evolve the work, track changes, and connect development across products.', projects: ['Web products', 'Android collection'] },
    { id: 'githubactions', name: 'GitHub Actions', icon: 'githubactions', type: 'BUILD WORKFLOW', group: 'engineering', description: 'Automated build workflows that support repeatable development and release preparation.', projects: ['HireGrip', 'Android build workflows'] },
    { id: 'firebase', name: 'Firebase', icon: 'firebase', type: 'APP PLATFORM', group: 'platforms', description: 'Managed app services for authentication, cloud data, and release workflows.', projects: ['Authentication', 'Cloud Firestore', 'App hosting'], label: 'WHAT IT SUPPORTS' },
    { id: 'supabase', name: 'Supabase', icon: 'supabase', type: 'BACKEND PLATFORM', group: 'platforms', description: 'A Postgres-based platform for app data, authentication, and file storage.', projects: ['Database APIs', 'Authentication', 'Object storage'], label: 'WHAT IT SUPPORTS' },
    { id: 'postgresql', name: 'PostgreSQL', icon: 'postgresql', type: 'RELATIONAL DATABASE', group: 'platforms', description: 'Relational data modelling and SQL for software with structured records and clear relationships.', projects: ['Data modelling', 'SQL queries', 'Transactions'], label: 'WHAT IT SUPPORTS' },
    { id: 'wagtail', name: 'Wagtail', icon: 'wagtail', type: 'CONTENT MANAGEMENT', group: 'platforms', description: 'A Django-based content management system for structured websites and editorial workflows.', projects: ['Page modelling', 'Content editing', 'Editorial workflows'], label: 'WHAT IT SUPPORTS' },
    { id: 'jira', name: 'Jira', icon: 'jira', type: 'PRODUCT & DELIVERY', group: 'delivery', description: 'Turning product direction into a shared backlog, clear priorities, and manageable delivery cycles.', projects: ['Sprint planning', 'Backlog management', 'Team coordination'], label: 'IN THE PROCESS' },
    { id: 'clickup', name: 'ClickUp', icon: 'clickup', type: 'PRODUCT & DELIVERY', group: 'delivery', description: 'Connecting plans, ownership, and follow-through so teams can keep the next important thing in focus.', projects: ['Roadmaps', 'Delivery tracking', 'Cross-functional planning'], label: 'IN THE PROCESS' },
    { id: 'confluence', name: 'Confluence', icon: 'confluence', type: 'DOCUMENTATION', group: 'delivery', description: 'Clear documentation that keeps requirements, decisions, and shared understanding close to the work.', projects: ['Requirements', 'Technical documentation', 'Knowledge sharing'], label: 'IN THE PROCESS' }
  ];

  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const themeButton = document.querySelector('#theme-button');
  function applyTheme(theme) {
    root.dataset.theme = theme;
    const action = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    themeButton?.setAttribute('aria-label', action);
    themeButton?.setAttribute('title', action);
    document.querySelector('#theme-color')?.setAttribute('content', theme === 'dark' ? '#0b0a11' : '#f7f7fb');
  }
  // Follow the device on arrival, when its appearance changes, and on return
  // from the browser's back/forward cache. A manual toggle is never saved.
  function syncSystemTheme() {
    applyTheme(systemTheme.matches ? 'dark' : 'light');
  }
  syncSystemTheme();
  themeButton?.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });
  if (typeof systemTheme.addEventListener === 'function') {
    systemTheme.addEventListener('change', syncSystemTheme);
  } else {
    systemTheme.addListener?.(syncSystemTheme);
  }
  window.addEventListener('pageshow', syncSystemTheme);

  const menu = document.querySelector('#navigation');
  const menuButton = document.querySelector('#menu-button');
  function setMenu(open) {
    menu?.classList.toggle('is-open', open);
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }
  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', event => {
    if (!menu?.contains(event.target) && !menuButton?.contains(event.target)) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
  window.addEventListener('resize', () => { if (innerWidth > 700) setMenu(false); }, { passive: true });

  const grid = document.querySelector('#tool-grid');
  const detail = document.querySelector('#tool-detail');
  const filters = [...document.querySelectorAll('[data-tool-filter]')];
  let selectedTool = 'kotlin';
  let selectedGroup = 'all';
  if (grid && detail) {
    const fragment = document.createDocumentFragment();
    tools.forEach(tool => {
      const button = document.createElement('button');
      button.className = 'tool-button';
      button.dataset.tech = tool.id;
      button.dataset.group = tool.group;
      button.setAttribute('aria-pressed', String(tool.id === selectedTool));
      button.setAttribute('aria-label', `Explore ${tool.name}`);
      const image = document.createElement('img');
      image.src = `images/tech/${tool.icon}.svg`;
      image.alt = '';
      image.width = 28;
      image.height = 28;
      const label = document.createElement('span');
      label.textContent = tool.name;
      button.append(image, label);
      button.addEventListener('click', () => selectTool(tool.id));
      fragment.append(button);
    });
    grid.append(fragment);
  }
  function selectTool(id, announce = true) {
    const tool = tools.find(item => item.id === id);
    if (!tool || !detail) return;
    selectedTool = id;
    grid?.querySelectorAll('[data-tech]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.tech === id)));
    const image = document.querySelector('#tool-image');
    image.src = `images/tech/${tool.icon}.svg`;
    document.querySelector('#tool-title').textContent = tool.name;
    document.querySelector('#tool-type').textContent = tool.type;
    document.querySelector('#tool-description').textContent = tool.description;
    document.querySelector('#association-label').textContent = tool.label || 'IN THE WORK';
    document.querySelector('#tool-projects').replaceChildren(...tool.projects.map(project => {
      const span = document.createElement('span');
      span.textContent = project;
      return span;
    }));
    if (!reducedMotion.matches) {
      detail.classList.remove('detail-change');
      requestAnimationFrame(() => detail.classList.add('detail-change'));
    }
    if (announce) document.querySelector('#tool-announcement').textContent = `${tool.name}. ${tool.label ? 'Supports' : 'Used in'}: ${tool.projects.join(', ')}.`;
  }
  function filterTools(group) {
    selectedGroup = group;
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.toolFilter === group)));
    grid?.querySelectorAll('[data-tech]').forEach(button => { button.hidden = group !== 'all' && button.dataset.group !== group; });
    const current = tools.find(tool => tool.id === selectedTool);
    if (group !== 'all' && current?.group !== group) selectTool(tools.find(tool => tool.group === group).id);
  }
  filters.forEach(button => button.addEventListener('click', () => filterTools(button.dataset.toolFilter)));
  function exploreTechnology(id) {
    if (selectedGroup !== 'all') filterTools('all');
    selectTool(id);
    const destination = innerWidth <= 700 ? detail : document.querySelector('#toolkit');
    destination?.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    detail?.focus({ preventScroll: true });
  }
  document.querySelectorAll('[data-pick-tech]').forEach(button => button.addEventListener('click', () => exploreTechnology(button.dataset.pickTech)));
  document.addEventListener('portfolio:tech', event => {
    // Let the native dialog finish restoring scroll before moving to the toolkit.
    requestAnimationFrame(() => exploreTechnology(event.detail.id));
  });
  selectTool(selectedTool, false);

  // Reveals enhance visible content; they never gate rendering or image loading.
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
  const navigationLinks = [...document.querySelectorAll('.navigation a')];
  const navigationSections = document.querySelectorAll('#main > section');
  let scrollFrame = null;
  function updateScroll() {
    const available = document.documentElement.scrollHeight - innerHeight;
    const progress = available > 0 ? Math.max(0, Math.min(1, scrollY / available)) : 0;
    document.querySelector('#page-progress').style.transform = `scaleX(${progress})`;
    let current = 'home';
    navigationSections.forEach(section => {
      if (section.getBoundingClientRect().top <= innerHeight * 0.4) {
        current = section.id === 'project-catalogue' ? 'work' : section.id;
      }
    });
    navigationLinks.forEach(link => {
      if (link.getAttribute('href') === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scrollFrame = null;
  }
  function queueScroll() { if (scrollFrame === null) scrollFrame = requestAnimationFrame(updateScroll); }
  window.addEventListener('scroll', queueScroll, { passive: true });
  window.addEventListener('resize', queueScroll, { passive: true });
  updateScroll();
  document.querySelector('#back-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' }));

  document.querySelectorAll('img').forEach(image => {
    image.addEventListener('error', () => image.parentElement.classList.add('is-image-error'), { once: true });
  });

  // A light follows the pointer on fine-input devices. No scroll hijacking,
  // motion on touch, or continuous animation loop is needed for this effect.
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  let pointerFrame = null;
  document.addEventListener('pointermove', event => {
    if (!finePointer.matches || reducedMotion.matches) return;
    const card = event.target.closest('.app-card');
    if (!card || pointerFrame !== null) return;
    const x = event.clientX, y = event.clientY;
    pointerFrame = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--pointer-x', `${x - rect.left}px`);
      card.style.setProperty('--pointer-y', `${y - rect.top}px`);
      pointerFrame = null;
    });
  }, { passive: true });
})();
