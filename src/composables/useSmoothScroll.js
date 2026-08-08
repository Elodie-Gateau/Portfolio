function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function useSmoothScroll({ duration = 600, offset = 0 } = {}) {
  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let activeFrame = null;

  function scrollToElement(el) {
    if (!el) return;

    if (activeFrame !== null) {
      cancelAnimationFrame(activeFrame);
      activeFrame = null;
    }

    const resolvedOffset = typeof offset === 'function' ? offset() : offset;
    const targetY = el.getBoundingClientRect().top + window.scrollY - resolvedOffset;

    if (prefersReducedMotion()) {
      window.scrollTo(0, targetY);
      return;
    }

    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutQuad(progress));
      activeFrame = progress < 1 ? requestAnimationFrame(step) : null;
    }

    activeFrame = requestAnimationFrame(step);
  }

  function scrollToId(id) {
    scrollToElement(document.getElementById(id));
  }

  function onAnchorClick(event) {
    const href = event.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    event.preventDefault();
    scrollToId(href.slice(1));
  }

  return { scrollToId, scrollToElement, onAnchorClick };
}