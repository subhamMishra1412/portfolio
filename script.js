window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);
  window.scrollTo({ top: 0, behavior: "auto" });

  // Hero Section
  gsap.from('.hero h1', {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
  });

  // About Section
  gsap.from('.about h2', {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 1.2,
    scrollTrigger: {
      trigger: '.about h2',
      start: 'top 85%',
    },
  });

  gsap.from('.about p', {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 1.7,
    scrollTrigger: {
      trigger: '.about p',
      start: 'top 85%',
    },
  });

  // Skills Section
  gsap.from('.skills h3', {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 2.4,
    scrollTrigger: {
      trigger: '.skills h3',
      start: 'top 85%',
    },
  });

  gsap.from('.skills ul li', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 3.1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.skills ul',
      start: 'top 85%',
    },
  });
  // PROJECTS Section
gsap.from('.projects .section-title', {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 4.2, // fine, let it come in sequence
  scrollTrigger: {
    trigger: '.projects',
    start: 'top 85%',
  },
});

// 🔥 Reduce delays below for better flow 🔥

gsap.from('.project-title', {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.2, // starts just after heading shows
  scrollTrigger: {
    trigger: '.project-title',
    start: 'top 85%',
  },
});

gsap.from('.project-description li', {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.4, // just a bit later than the title
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.project-description',
    start: 'top 85%',
  },
});

  gsap.from('.tools .section-title', {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.tools .section-title',
    start: 'top 85%',
  },
});

gsap.from('.tool-list li', {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.tool-list',
    start: 'top 80%', // only triggers *after heading is visible*
  },
});
gsap.from('.contact .section-title', {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.contact .section-title',
    start: 'top 85%',
  },
});

gsap.from('.contact-text', {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.contact-text',
    start: 'top 80%',
  },
});

gsap.from('.contact-info p', {
  x: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.contact-info',
    start: 'top 80%',
  },
});
});
