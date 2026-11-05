(() => {
  'use strict';

  // Public presentation data only. Source repositories and research stay outside this site.
  const projects = [
    {
      id: 'hiregrip', name: 'HireGrip', group: 'featured', category: 'Career technology',
      color: '#64b58a', icon: 'career', image: 'images/hiregrip.jpg',
      description: 'A career toolkit that brings resume analysis, job matching, and document workflows into one considered experience.',
      features: ['Resume and ATS analysis', 'Job matching', 'Career document workflows'],
      stack: { Languages: ['TypeScript'], Frameworks: ['Angular', '.NET'], 'AI & tools': ['Gemini'] },
      links: [{ label: 'Visit HireGrip', url: 'https://hiregrip.app/' }]
    },
    {
      id: 'aurelius', name: 'Aurelius', group: 'featured', category: 'Transport & booking',
      color: '#b6a278', icon: 'journey', image: 'images/aurelius.jpg',
      description: 'An executive transport booking experience, with a clear path from planning a journey to arranging the ride.',
      features: ['Journey planning', 'Chauffeur booking experience', 'Responsive web interface'],
      stack: { Languages: ['TypeScript'], Frameworks: ['Express'], Platform: ['Web'] },
      links: []
    },
    {
      id: 'hateem', name: 'Hateem', aliases: ['Mawaqeet'], group: 'featured', category: 'Everyday faith · Android',
      color: '#c6a762', icon: 'faith', image: 'images/hateem.jpg',
      description: 'A prayer companion designed around everyday practice, thoughtful reminders, and continuity over time.',
      features: ['Prayer companion', 'Three-tier prayer reminders', 'Legacy tracking'],
      stack: { Languages: ['Kotlin'], Interface: ['Jetpack Compose'], 'Platform & tools': ['Android', 'Room', 'WorkManager'] },
      links: [{ label: 'Developer on Google Play', url: 'https://play.google.com/store/apps/dev?id=6898751755730675916' }]
    },
    {
      id: 'momo-lab', name: 'Momo Lab', group: 'featured', category: 'Food & brand experience',
      color: '#94a971', icon: 'food', image: 'images/momo-lab.jpg',
      description: 'A food venture built around handcrafted dumplings, Asian fusion, and an identity with a little personality.',
      features: ['Handcrafted dumplings', 'Asian fusion', 'A playful food brand'],
      stack: {}, links: [{ label: 'Explore Momo Lab', url: 'https://www.foodpanda.pk/restaurant/ta1s/momo-lab-ta1s' }]
    },
    {
      id: 'image-master', name: 'Image Master Suite', group: 'android', origins: ['android', 'ai'], category: 'Image toolkit',
      color: '#6b64d9', icon: 'image', image: 'images/image-master-suite.jpg', illustrated: true,
      description: 'From format conversion to the details hidden in a photo. An image toolkit for everyday work.',
      features: ['Image conversion and compression', 'DPI editing', 'EXIF privacy scrubbing', 'Avatar cutouts', 'AI image assistance'],
      stack: { Languages: ['Kotlin'], Interface: ['Jetpack Compose'], 'Platform & tools': ['Android', 'AndroidX ExifInterface', 'Coil'], 'Creation tools': ['Google AI Studio'] },
      tags: ['Kotlin', 'Compose', 'Image tools'], links: []
    },
    {
      id: 'audio-master', name: 'Audio Master Suite', group: 'android', origins: ['android', 'ai'], category: 'Audio toolkit',
      color: '#46a8ce', icon: 'wave', image: 'images/audio-master-suite.jpg', illustrated: true,
      description: 'A collection of audio utilities for shaping, converting, and making more of recorded sound.',
      features: ['Audio editing and conversion', 'Trimming and merging', 'Volume boosting and compression', 'AI transcription'],
      stack: { Languages: ['Kotlin'], Interface: ['Jetpack Compose'], 'Platform & tools': ['Android', 'FFmpeg Kit Audio', 'Room'], 'Creation tools': ['Google AI Studio'] },
      tags: ['Kotlin', 'FFmpeg', 'Audio tools'], links: []
    },
    {
      id: 'pdf-tools', name: 'AI PDF Tools', aliases: ['PDF Master', 'PDF Master Suite', 'PDF-Master-Tools-AI'], group: 'android', origins: ['android', 'ai'], category: 'Document toolkit',
      color: '#497be3', icon: 'document', image: 'images/ai-pdf-tools.jpg', illustrated: true,
      description: 'Practical document tools, from a simple merge to AI-assisted summaries and translation.',
      features: ['Merge and split PDFs', 'Compress and rotate', 'Protection, signatures, and watermarks', 'Document conversion', 'AI summaries and translation'],
      stack: { Languages: ['Kotlin'], Interface: ['Jetpack Compose'], 'Platform & tools': ['Android', 'PDFBox Android', 'Room'], 'Creation tools': ['Google AI Studio'] },
      tags: ['Kotlin', 'PDFBox', 'Documents'], links: []
    },
    {
      id: 'mio', name: 'Mio', aliases: ['SoundVault'], group: 'android', category: 'Media & discovery',
      color: '#b29a67', icon: 'play', image: 'images/mio.jpg', illustrated: true,
      description: 'Music, video, and podcasts in a media experience with offline playback and a playlist vault.',
      features: ['Music, video, and podcast discovery', 'Offline playback', 'Playlist vault'],
      stack: { Languages: ['Kotlin'], Interface: ['Jetpack Compose'], 'Platform & tools': ['Android', 'Media3 ExoPlayer', 'Room'] },
      tags: ['Kotlin', 'Media3', 'Media'], links: []
    },
    {
      id: 'hotel-pos', name: 'Hotel POS', group: 'android', category: 'Business utility',
      color: '#d4982b', icon: 'receipt', image: 'images/hotel-pos.jpg', illustrated: true,
      description: 'Point of sale and accounting for hotels and restaurants, including everyday credit transactions.',
      features: ['Hotel and restaurant point of sale', 'Cash and online accounting', 'Udhaar credit accounting', 'Reports'],
      stack: { Languages: ['Kotlin'], Interface: ['Jetpack Compose'], 'Platform & tools': ['Android', 'Room'] },
      tags: ['Kotlin', 'Room', 'Point of sale'], links: []
    },
    {
      id: 'seektune', name: 'SeekTune', group: 'ai', category: 'Audio recognition · Prototype',
      color: '#42a66a', icon: 'recognition', image: 'images/seektune.jpg', illustrated: true,
      description: 'An exploration of sound recognition, real-time microphone input, and digital signal processing.',
      features: ['Audio recognition concept', 'Real-time microphone processing', 'Digital signal processing'],
      stack: { Interface: ['React'], 'Creation tools': ['Google AI Studio'] },
      tags: ['React', 'Audio', 'Prototype'], links: []
    },
    {
      id: 'blueprint', name: 'Blueprint to Code', fullName: 'System Blueprint to Code Generator', group: 'ai', category: 'Developer tool · Prototype',
      color: '#b89955', icon: 'code', image: 'images/blueprint-to-code.jpg', illustrated: true,
      description: 'An AI-assisted experiment that turns a system blueprint into a starting structure of code and files.',
      features: ['System blueprint input', 'Code-structure generation', 'File generation'],
      stack: { 'AI & tools': ['Gemini API', 'Google AI Studio'] },
      tags: ['Gemini API', 'Code generation', 'Prototype'], links: []
    },
    {
      id: 'velvet-bears', name: 'Velvet & Bears', group: 'ai', category: 'Playful experience · Prototype',
      color: '#ab8452', icon: 'heart', image: 'images/velvet-and-bears.jpg', illustrated: true,
      description: 'A playful digital space for shared daily rituals, with animated bears and a softer pace.',
      features: ['Shared daily rituals', 'Animated bear characters', 'Wake and sleep experiences'],
      stack: { 'Creation tools': ['Google AI Studio'] },
      tags: ['Interaction', 'Animation', 'Prototype'], links: []
    },
    {
      id: 'ab-down', name: 'ab-down', group: 'ai', category: 'AI Studio · Experiment',
      color: '#7388a6', icon: 'code', image: 'images/ab-down.jpg', illustrated: true,
      description: 'An experimental application built in Google AI Studio.',
      features: ['Application experimentation'],
      stack: { 'Creation tools': ['Google AI Studio'] },
      tags: ['Google AI Studio', 'Experiment'], links: []
    }
  ];

  const catalogue = projects.filter(project => project.group !== 'featured');
  const techIds = { Kotlin: 'kotlin', 'Jetpack Compose': 'compose', Android: 'android', TypeScript: 'typescript', Angular: 'angular', '.NET': 'dotnet', Gemini: 'gemini', 'Gemini API': 'gemini', Python: 'python', Git: 'git', 'GitHub Actions': 'githubactions' };
  const paths = {
    image: ['M5 6h22v20H5z', 'm5 21 7-7 6 6 4-4 5 5', 'M23 11h.01'],
    wave: ['M5 13v6m5-12v18m6-22v26m6-20v14m5-10v6'],
    document: ['M8 3h11l6 6v20H8z', 'M19 3v7h6', 'M12 16h9m-9 5h9'],
    play: ['M16 3a13 13 0 1 0 0 26 13 13 0 0 0 0-26', 'm13 10 9 6-9 6z'],
    receipt: ['M7 3v26l3-2 3 2 3-2 3 2 3-2 3 2V3l-3 2-3-2-3 2-3-2-3 2z', 'M11 11h10m-10 5h10m-10 5h5'],
    recognition: ['M10 4H5v6m17-6h5v6M5 22v6h5m12 0h5v-6', 'M10 13v6m6-10v14m6-10v6'],
    code: ['m11 9-7 7 7 7m10-14 7 7-7 7M19 5l-6 22'],
    heart: ['M16 27 5 16C-3 7 10-1 16 9 22-1 35 7 27 16z'],
    career: ['M4 10h24v17H4z', 'M11 10V5h10v5M4 16h24m-14 0v4h4v-4'],
    journey: ['M6 26h20M8 22l3-13h10l3 13zM9 17h14M12 5h8'],
    faith: ['M5 11 16 5l11 6v15l-11 5-11-5zM5 11l11 5 11-5M16 16v15'],
    food: ['M3 17h26c-1 15-25 15-26 0M8 12c-4-4 4-5 0-9m8 9c-4-4 4-5 0-9m8 9c-4-4 4-5 0-9']
  };

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function symbol(kind, className = 'app-symbol') {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 32 32');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', className);
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.4');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    (paths[kind] || paths.code).forEach(d => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      svg.append(path);
    });
    return svg;
  }
  function externalLink(label, url, className = 'button button-primary tactile') {
    const link = element('a', className, label);
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const arrow = element('span', '', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    link.append(arrow);
    return link;
  }

  const grid = document.querySelector('#project-grid');
  const search = document.querySelector('#project-search');
  const stackFilter = document.querySelector('#stack-filter');
  const filterButtons = [...document.querySelectorAll('[data-project-filter]')];
  const viewButtons = [...document.querySelectorAll('[data-view]')].filter(node => node.tagName === 'BUTTON');
  let category = 'all';
  const allStack = project => Object.values(project.stack).flat();

  if (stackFilter) {
    const names = [...new Set(projects.flatMap(allStack))].sort((a, b) => a.localeCompare(b));
    const all = element('option', '', 'All technologies');
    all.value = '';
    stackFilter.replaceChildren(all, ...names.map(name => {
      const option = element('option', '', name);
      option.value = name;
      return option;
    }));
  }

  function renderCatalogue() {
    if (!grid) return;
    const query = (search?.value || '').trim().toLocaleLowerCase();
    const stack = stackFilter?.value || '';
    const pool = query || stack || category === 'android' ? projects : catalogue;
    const matching = pool.filter(project => {
      const corpus = [project.name, project.fullName || '', ...(project.aliases || []), project.description, project.category, ...project.features, ...allStack(project), ...(project.tags || [])].join(' ').toLocaleLowerCase();
      const inCategory = category === 'all' || project.group === category || project.origins?.includes(category) || (category === 'android' && project.id === 'hateem');
      return inCategory && (!stack || allStack(project).includes(stack)) && (!query || corpus.includes(query));
    });
    const fragment = document.createDocumentFragment();
    matching.forEach(project => {
      const card = element('button', 'app-card tactile');
      card.type = 'button';
      card.dataset.openProject = project.id;
      card.style.setProperty('--project-color', project.color);
      card.setAttribute('aria-haspopup', 'dialog');
      card.setAttribute('aria-label', `Explore ${project.name}`);
      const head = element('span', 'app-card-head');
      const icon = element('span', 'app-icon');
      if (project.illustrated && project.image) {
        const logo = element('img');
        logo.src = project.image.replace('images/', 'images/brand/').replace(/\.jpg$/, '.svg');
        logo.alt = '';
        logo.width = 36;
        logo.height = 36;
        logo.loading = 'lazy';
        logo.addEventListener('error', () => { icon.replaceChildren(symbol(project.icon)); }, { once: true });
        icon.append(logo);
      } else icon.append(symbol(project.icon));
      const projectIndex = catalogue.indexOf(project);
      head.append(icon, element('span', 'app-index', projectIndex < 0 ? 'FEATURED' : String(projectIndex + 1).padStart(2, '0')));
      const tags = element('span', 'app-tags');
      (project.tags || allStack(project).slice(0, 3)).forEach(tag => tags.append(element('span', '', tag)));
      const foot = element('span', 'app-card-foot');
      const arrow = element('span', 'app-arrow', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      foot.append(element('span', '', 'Explore project'), arrow);
      if (project.image) {
        const art = element('span', 'app-art');
        const image = element('img');
        image.src = project.image;
        image.alt = '';
        image.loading = 'lazy';
        image.width = 1000;
        image.height = 650;
        image.addEventListener('error', () => { art.replaceChildren(symbol(project.icon, 'project-symbol')); }, { once: true });
        art.append(image);
        card.append(art);
      }
      card.append(head, element('span', 'app-category', project.category), element('h3', 'app-title', project.name), element('p', 'app-description', project.description), tags, foot);
      fragment.append(card);
    });
    if (!matching.length) {
      const empty = element('div', 'catalogue-empty');
      empty.append(element('h3', '', 'No projects in this orbit.'), element('p', '', 'Try another technology, category, or search term.'));
      const reset = element('button', 'button button-secondary tactile', 'Clear filters');
      reset.type = 'button';
      reset.addEventListener('click', () => {
        if (search) search.value = '';
        if (stackFilter) stackFilter.value = '';
        setCategory('all');
        search?.focus();
      });
      empty.append(reset);
      fragment.append(empty);
    }
    grid.replaceChildren(fragment);
    const count = document.querySelector('#project-count');
    if (count) count.textContent = `${String(matching.length).padStart(2, '0')} ${matching.length === 1 ? 'project' : 'projects'}`;
  }

  function setCategory(value) {
    category = ['all', 'android', 'ai'].includes(value) ? value : 'all';
    filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.projectFilter === category)));
    renderCatalogue();
  }
  filterButtons.forEach(button => button.addEventListener('click', () => setCategory(button.dataset.projectFilter)));
  search?.addEventListener('input', renderCatalogue);
  stackFilter?.addEventListener('change', renderCatalogue);
  viewButtons.forEach(button => button.addEventListener('click', () => {
    const view = button.dataset.view === 'list' ? 'list' : 'grid';
    if (grid) grid.dataset.view = view;
    viewButtons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.view === view)));
  }));
  renderCatalogue();

  const dialog = document.querySelector('#project-dialog');
  const dialogContent = document.querySelector('#project-dialog-content');
  let returnFocus = null;
  let previousOverflow = '';
  let previousPadding = '';
  function closeProject() { if (dialog?.open) dialog.close(); }

  function openProject(id, trigger) {
    const project = projects.find(item => item.id === id);
    if (!project || !dialog || !dialogContent) return;
    const hero = element('div', `project-modal-hero project-hero-${project.id}`);
    hero.style.setProperty('--project-color', project.color);
    if (project.image) {
      const image = element('img');
      image.src = project.image;
      image.alt = `${project.name} ${['hiregrip', 'aurelius'].includes(project.id) ? 'interface' : 'brand identity'}`;
      image.addEventListener('error', () => { hero.replaceChildren(symbol(project.icon, 'project-symbol')); }, { once: true });
      hero.append(image);
    } else hero.append(symbol(project.icon, 'project-symbol'));
    const heading = element('div', 'project-modal-heading');
    heading.append(element('p', 'eyebrow', project.category));
    const title = element('h2', '', project.fullName || project.name);
    title.id = 'project-dialog-title';
    heading.append(title);
    heading.append(element('p', 'project-modal-description', project.description));

    const body = element('div', 'project-modal-body');
    const features = element('section', 'project-features');
    features.append(element('h3', '', project.group === 'ai' ? 'The exploration' : 'Inside the project'));
    const list = element('ul');
    project.features.forEach(feature => list.append(element('li', '', feature)));
    features.append(list);
    body.append(features);

    if (Object.keys(project.stack).length) {
      const stack = element('section', 'project-stack');
      stack.append(element('h3', '', 'Behind the build'));
      Object.entries(project.stack).forEach(([group, technologies]) => {
        const row = element('div', 'stack-group');
        row.append(element('h4', '', group));
        const chips = element('div', 'stack-chips');
        technologies.forEach(technology => {
          const id = techIds[technology];
          const chip = element(id ? 'button' : 'span', 'stack-chip', technology);
          if (id) {
            chip.type = 'button';
            chip.setAttribute('aria-label', `Explore ${technology} in the toolkit`);
            chip.addEventListener('click', () => {
              returnFocus = null;
              closeProject();
              document.dispatchEvent(new CustomEvent('portfolio:tech', { detail: { id } }));
            });
          }
          chips.append(chip);
        });
        row.append(chips);
        stack.append(row);
      });
      body.append(stack);
    }
    const actions = element('div', 'project-modal-actions');
    project.links.forEach(link => actions.append(externalLink(link.label, link.url)));
    actions.append(externalLink('Discuss the project', 'https://www.linkedin.com/in/lit-abdullah/', 'button button-secondary tactile'));
    dialogContent.replaceChildren(hero, heading, body, actions);
    dialog.setAttribute('aria-labelledby', 'project-dialog-title');
    if (!dialog.open) {
      returnFocus = trigger || document.activeElement;
      previousOverflow = document.body.style.overflow;
      previousPadding = document.body.style.paddingRight;
      const scrollbar = Math.max(0, innerWidth - document.documentElement.clientWidth);
      if (scrollbar) document.body.style.paddingRight = `${scrollbar}px`;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
    }
    dialog.scrollTop = 0;
    document.querySelector('#close-project')?.focus({ preventScroll: true });
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-open-project]');
    if (button) openProject(button.dataset.openProject, button);
  });
  document.querySelector('#close-project')?.addEventListener('click', closeProject);
  dialog?.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProject();
  });
  dialog?.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    document.body.style.paddingRight = previousPadding;
    if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
    returnFocus = null;
  });

  // This endpoint is public and unauthenticated. Only public GitHub repositories are shown.
  const baseline = [
    { name: 'colour-detection', language: 'Python', fork: false, description: 'An exploration in colour detection.', url: 'https://github.com/litabdullah/colour-detection' },
    { name: 'litpunjabi', language: 'HTML', fork: false, description: '', url: 'https://github.com/litabdullah/litpunjabi' },
    { name: 'Java-Helps-Android', language: '', fork: true, description: '', url: 'https://github.com/litabdullah/Java-Helps-Android' }
  ];
  const repoList = document.querySelector('#repository-list');
  const repoStatus = document.querySelector('#repository-status');
  const repoCount = document.querySelector('#repository-count');
  const retry = document.querySelector('#repo-retry');
  let fetching = false;

  function renderRepos(repositories) {
    if (!repoList) return;
    repoList.replaceChildren(...repositories.map(repo => {
      const row = element('a', 'repo-row');
      row.href = repo.url;
      row.target = '_blank';
      row.rel = 'noopener noreferrer';
      const mark = element('span', 'repo-mark');
      mark.append(symbol('code'));
      const copy = element('span', 'repo-copy');
      copy.append(element('strong', '', repo.name));
      if (repo.description) copy.append(element('p', '', repo.description));
      const meta = element('span', 'repo-meta');
      if (repo.language) meta.append(element('span', 'repo-language', repo.language));
      if (repo.fork) meta.append(element('span', 'repo-badge', 'Fork'));
      if (repo.archived) meta.append(element('span', 'repo-badge', 'Archived'));
      const arrow = element('span', 'repo-arrow', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      row.append(mark, copy, meta, arrow);
      return row;
    }));
    if (!repositories.length) repoList.append(element('p', 'repo-empty', 'No public repositories are available right now.'));
    if (repoCount) repoCount.textContent = String(repositories.length).padStart(2, '0');
  }
  function repoMessage(message, state) {
    if (!repoStatus) return;
    repoStatus.textContent = message;
    repoStatus.dataset.state = state;
  }
  function publicRepo(raw) {
    if (!raw || raw.private !== false || typeof raw.name !== 'string' || raw.owner?.login?.toLowerCase() !== 'litabdullah') return null;
    const name = raw.name;
    if (!/^[a-zA-Z0-9_.-]+$/.test(name)) return null;
    return {
      name, language: typeof raw.language === 'string' ? raw.language.slice(0, 50) : '',
      description: typeof raw.description === 'string' ? raw.description.slice(0, 240) : '',
      fork: raw.fork === true, archived: raw.archived === true,
      url: `https://github.com/litabdullah/${encodeURIComponent(name)}`
    };
  }
  async function fetchRepos() {
    if (!repoList || fetching) return;
    fetching = true;
    retry && (retry.disabled = true);
    repoMessage('Connecting to GitHub…', 'loading');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      let page = 1;
      const received = [];
      while (true) {
        const response = await fetch(`https://api.github.com/users/litabdullah/repos?type=owner&sort=updated&per_page=100&page=${page}`, { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' }, credentials: 'omit' });
        if (!response.ok) throw new Error(response.status === 403 || response.status === 429 ? 'rate-limit' : 'unavailable');
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error('invalid-response');
        received.push(...data.map(publicRepo).filter(Boolean));
        if (data.length < 100) break;
        page++;
      }
      const unique = [...new Map(received.map(repo => [repo.name.toLowerCase(), repo])).values()];
      renderRepos(unique);
      repoMessage('Updated from GitHub · public repositories', 'live');
      if (retry) retry.hidden = true;
    } catch (error) {
      renderRepos(baseline);
      repoMessage(error?.message === 'rate-limit' ? 'Saved selection · GitHub is temporarily rate limited' : 'Saved selection · live update unavailable', 'fallback');
      if (retry) retry.hidden = false;
    } finally {
      clearTimeout(timeout);
      fetching = false;
      retry && (retry.disabled = false);
    }
  }
  renderRepos(baseline);
  repoMessage('Public repositories · selected work', 'saved');
  retry?.addEventListener('click', fetchRepos);
  if (repoList) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          observer.disconnect();
          fetchRepos();
        }
      }, { rootMargin: '250px' });
      observer.observe(repoList);
    } else fetchRepos();
  }
})();
