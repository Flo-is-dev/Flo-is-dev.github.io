// LENIS
// const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// ---------------
// ---------------
// ---------------

class App {
  constructor() {
    this.heroImages = [...document.querySelectorAll(".hero__images img")];
    this.texts = [...document.querySelectorAll(".text__effect")];

    this._initialize();
    this._render();
  }

  _initialize() {
    this._setInitialStates();
    this._createLenis();
    this._createIntro();
    this._createHero();
    this._createTextAnimation();
    this._createPinnedSection();
  }

  _setInitialStates() {
    gsap.set(".hero__title span, .fullwidth-image__text", {
      y: 32,
      opacity: 0,
    });

    gsap.set(".hero__images img", {
      opacity: 0,
      //   on prend un nombre random entre un max de 100 et min 50
      y: gsap.utils.random(100, 50),
    });

    gsap.set(".fullwidth-image img", {
      scale: 1.3,
    });
  }

  _createLenis() {
    this.lenis = new Lenis({
      lerp: 0.1,
    });
  }

  _createIntro() {
    const tl = gsap.timeline();

    tl.to(".hero__title div", {
      opacity: 1,
    })
      .to(".hero__title span", {
        y: 0,
        opacity: 1,
        ease: "expo.out",
        duration: 2,
        stagger: 0.05,
      })
      .to(
        ".hero__images img",
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 2,
          stagger: 0.04,
        },
        0.5
      );
  }

  _createHero() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        // Quand le top du hero touche le top tu vewport
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });

    this.heroImages.forEach((image) => {
      tl.to(
        image,
        {
          ease: "none",
          yPercent: gsap.utils.random(-100, -50),
        },
        0
      );
    });
  }

  _createTextAnimation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-block",
        start: "top bottom-=20%",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });

    this.texts.forEach((text, index) => {
      const overlay = text.querySelector(".text__overlay");
      const content = text.querySelector("p");

      tl.to(overlay, {
        scaleX: 0,
      });
    });
  }

  _createPinnedSection() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fullwidth-image",
        start: "top top",
        // On continue l'aniamtion pour +1500 px
        end: "+=1500",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    tl.to(".fullwidth-image__overlay", {
      opacity: 0.4,
    })
      .to(
        ".fullwidth-image",
        {
          "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        0
      )
      .to(
        ".fullwidth-image img",
        {
          scale: 1,
        },
        0
      )
      .to(
        ".fullwidth-image__text",
        {
          y: 0,
          opacity: 1,
        },
        0
      );
  }

  _render(time) {
    this.lenis.raf(time);

    requestAnimationFrame(this._render.bind(this));
  }
}

new App();

gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true,
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed",
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth,
    },
    x: -horizontalScrollLength,
    ease: "none",
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});
