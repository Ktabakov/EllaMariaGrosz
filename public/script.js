// Mobile navigation toggle
function setupMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  const close = () => {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when a link is tapped
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

// Portfolio filtering (cards carry a space-separated data-category list)
function setupPortfolioFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.painting-card');
  if (!buttons.length || !items.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;
      items.forEach((item) => {
        const cats = (item.dataset.category || '').split(/\s+/);
        const show = filter === 'all' || cats.includes(filter);
        item.classList.toggle('is-hidden', !show);
      });
    });
  });
}

// Shrink header on scroll for a more refined feel
function setupHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// [data-back] links: return to whatever page the visitor came from,
// falling back to the link's own href when there's no usable history.
function setupBackLinks() {
  document.querySelectorAll('[data-back]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (window.history.length > 1 && document.referrer) {
        event.preventDefault();
        window.history.back();
      }
    });
  });
}

// Multi-photo update cards: arrow buttons step the track one slide at a time.
function setupCarousels() {
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    if (!track) return;

    const step = (dir) => track.scrollBy({ left: track.clientWidth * dir, behavior: 'smooth' });

    carousel.querySelector('[data-carousel-prev]')?.addEventListener('click', (e) => {
      e.preventDefault();
      step(-1);
    });
    carousel.querySelector('[data-carousel-next]')?.addEventListener('click', (e) => {
      e.preventDefault();
      step(1);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupMobileNav();
  setupPortfolioFilter();
  setupHeaderScroll();
  setupBackLinks();
  setupCarousels();
});
