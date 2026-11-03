// Replaces the Webflow "fade in on scroll" interactions.
// Usage: <div class="fade-in-heading" use:reveal>
export function reveal(node) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  node.style.opacity = '0';
  node.style.transform = 'translate3d(0, 24px, 0)';
  node.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      node.style.opacity = '';
      node.style.transform = '';
      io.disconnect();
    },
    { threshold: 0.15 }
  );
  io.observe(node);

  return { destroy: () => io.disconnect() };
}

// Autoplaying, muted, looping background video.
// Svelte sets `muted` as a property late, so browsers can block autoplay – set it explicitly.
export function bgvideo(node) {
  node.muted = true;
  const p = node.play();
  if (p) p.catch(() => {});
}
