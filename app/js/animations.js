gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

mm.add("(min-width: 1440px)", () => {

gsap.from(".tours__title", {
  scrollTrigger: {
    trigger: ".tours",
    end: "-150 0",
    toggleActions: "restart none none none",
  },
  y: 100,
  autoAlpha: 0,
  duration: 0.5,
});

gsap.from(".tours__image:nth-child(1)", {
  scrollTrigger: {
    trigger: ".tours__image:nth-child(1)",
    end: "-250 0",
    toggleActions: "restart none none none",
  },
  duration: .3,
  scaleX: 1.1,
});

gsap.from(".tours__image:nth-child(2)", {
  scrollTrigger: {
    trigger: ".tours__image:nth-child(2)",
    end: "0 0",
    toggleActions: "restart none none none",
  },
  duration: .3,
  scaleX: 1.1,
});

gsap.from(".how-to-book__title", {
    scrollTrigger: {
      trigger: ".how-to-book",
      end: "30 0",
      toggleActions: "restart none none none",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".terms-of-return__title", {
    scrollTrigger: {
      trigger: ".terms-of-return__inner",
      end: "10 0",
      toggleActions: "restart none none none",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".terms-of-return__text", {
    scrollTrigger: {
      trigger: ".terms-of-return__inner",
      end: "10 0",
      toggleActions: "restart none none none",
    },
    y: 50,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".how-to-book__img--anim-1", {
    scrollTrigger: {
      trigger: ".how-to-book__img--anim-1",
      end: "200 0",
      toggleActions: "restart none none none",
    },
    duration: 1.1,
    ease: Back.easeOut.config(1),
    css: {
      width: 50,
    },
  });

  gsap.from(".how-to-book__img--anim-2", {
    scrollTrigger: {
      trigger: ".how-to-book__img--anim-2",
      end: "-120 0",
      toggleActions: "restart none none none",
    },
    duration: 0.7,
    delay: 0.1,
    ease: Back.easeOut.config(1),
    css: {
      height: 40,
    },
  });

  gsap.from(".terms-of-return__img--anim-1", {
    scrollTrigger: {
      trigger: ".terms-of-return__img--anim-1",
      end: "0 0",
      toggleActions: "restart none none none",
    },
    duration: 1.1,
    ease: Back.easeOut.config(1),
    css: {
      width: 50,
    },
  });

  gsap.from(".phrase__text", {
    scrollTrigger: {
      trigger: ".phrase__text",
      end: "0 0",
      toggleActions: "restart none none none",
    },
    y: 50,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".phrase__text--anim-2", {
    scrollTrigger: {
      trigger: ".phrase__text",
      end: "0 0",
      toggleActions: "restart none none none",
    },
    y: 120,
    autoAlpha: 0,
    duration: 0.4,
  });

  gsap.from(".phrase__text--anim-1", {
    scrollTrigger: {
      trigger: ".phrase__text",
      end: "0 0",
      toggleActions: "restart none none none",
    },
    duration: 1.1,
    ease: Back.easeOut.config(1),
    css: {
      width: 50,
    },
  });

  gsap.from(".gallery__title", {
    scrollTrigger: {
      trigger: ".gallery__title",
      end: "30 0",
      toggleActions: "restart none none none",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

  gsap.from(".footer__title", {
    scrollTrigger: {
      trigger: ".footer__title",
      end: "30 0",
      toggleActions: "restart none none none",
    },
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

})