import "remixicon/fonts/remixicon.css";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Clutter Animation
const clutterAnimation = (element) => {
  const htmlTag = document.querySelector(element);
  let clutter = "";

  // Splitting the text content into individual letters and wrapping each in a span with a class
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span class="inline-block">${word}</span>`;
  });

  // Updating the HTML content of the element with the animated spans
  htmlTag.innerHTML = clutter;
};

// Lenis js
const lenis = new Lenis();
const lenisJs = () => {
  lenis.on("scroll", (e) => {});

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 500);
  });

  gsap.ticker.lagSmoothing(0);
};
lenisJs();

const menu = () => {
  const allMenuElem = document.querySelectorAll(".menu-elem");
  allMenuElem.forEach((elem, index) => {
    elem.addEventListener("mouseenter", () => {
      if (index === 0) {
        gsap.to(".menu-elem1>h1", {
          y: -40,
        });
      } else if (index === 1) {
        gsap.to(".menu-elem2>h1", {
          y: -40,
        });
      } else if (index === 2) {
        gsap.to(".menu-elem3>h1", {
          y: -40,
        });
      } else if (index === 3) {
        gsap.to(".menu-elem4>h1", {
          y: -40,
        });
      } else if (index === 4) {
        gsap.to(".menu-elem5>h1", {
          y: -40,
        });
      } else if (index === 5) {
        gsap.to(".menu-elem6>h1", {
          y: -40,
        });
      } else if (index === 6) {
        gsap.to(".menu-elem7>h1", {
          y: -40,
        });
      } else {
        gsap.to(".menu-elem8>h1", {
          y: -40,
        });
      }
    });

    elem.addEventListener("mouseleave", () => {
      gsap.to(".menu-elem>h1", {
        y: 0,
      });
    });
  });

  const openMenu = document.querySelector(".menu-open");
  const closeMenu = document.querySelector(".menu-close");
  openMenu.addEventListener("click", () => {
    const tl = gsap.timeline();
    tl.to(".menu", {
      left: "60%",
    });
    tl.from(
      ".menu-elem>h1",
      {
        opacity: 0,

        stagger: 0.1,
        y: 40,
      },
      "a"
    );
  });

  closeMenu.addEventListener("click", () => {
    gsap.to(".menu", {
      left: "100%",
    });
  });
};
menu();




const cards = () => {
  clutterAnimation(".card1>.card-heading>h1");
  gsap.from(".card1>.card-heading>h1>span", {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card1",
      start: "top 80%",
      end: "top 50%",
      // markers: true,
      scrub: 1,
    },
  });
  gsap.from(".card1>.card-img>img", {
    y: 100,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card1",
      start: "top 100%",
      end: "top 0%",
      scrub: 1,
    },
  });
  gsap.from(".card1>p", {
    opacity: 0,
    y: 40,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card1",
      start: "top 20%",
      end: "top -10%",
      // markers: true,
      scrub: 1,
    },
  });

  clutterAnimation(".card2>.card-heading>h1");
  gsap.from(".card2>.card-heading>h1>span", {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card2",
      start: "top 80%",
      end: "top 50%",
      // markers: true,
      scrub: 1,
    },
  });
  gsap.from(".card2>.card-img>img", {
    y: 100,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card2",
      start: "top 100%",
      end: "top 0%",
      scrub: 1,
    },
  });
  gsap.from(".card2>p", {
    opacity: 0,
    y: 40,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card2",
      start: "top 20%",
      end: "top -10%",
      // markers: true,
      scrub: 1,
    },
  });

  clutterAnimation(".card3>.card-heading>h1");
  gsap.from(".card3>.card-heading>h1>span", {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card3",
      start: "top 80%",
      end: "top 50%",
      // markers: true,
      scrub: 1,
    },
  });
  gsap.from(".card3>.card-img>img", {
    y: 100,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card3",
      start: "top 100%",
      end: "top 0%",
      scrub: 1,
    },
  });
  gsap.from(".card3>p", {
    opacity: 0,
    y: 40,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card3",
      start: "top 20%",
      end: "top -10%",
      // markers: true,
      scrub: 1,
    },
  });

  clutterAnimation(".card4>.card-heading>h1");
  gsap.from(".card4>.card-heading>h1>span", {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card4",
      start: "top 80%",
      end: "top 50%",
      // markers: true,
      scrub: 1,
    },
  });
  gsap.from(".card4>.card-img>img", {
    y: 100,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card4",
      start: "top 100%",
      end: "top 0%",
      scrub: 1,
    },
  });
  gsap.from(".card4>p", {
    opacity: 0,
    y: 40,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card4",
      start: "top 20%",
      end: "top -10%",
      // markers: true,
      scrub: 1,
    },
  });

  clutterAnimation(".card5>.card-heading>h1");
  gsap.from(".card5>.card-heading>h1>span", {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card5",
      start: "top 80%",
      end: "top 50%",
      // markers: true,
      scrub: 1,
    },
  });
  gsap.from(".card5>.card-img>img", {
    y: 100,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card5",
      start: "top 100%",
      end: "top 0%",
      scrub: 1,
    },
  });
  gsap.from(".card5>p", {
    opacity: 0,
    y: 40,
    scrollTrigger: {
      scroller: "body",
      trigger: ".card5",
      start: "top 20%",
      end: "top -10%",
      // markers: true,
      scrub: 1,
    },
  });
};
cards();

const sheryJSAnimations = () => {
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    Shery.imageEffect(".card-img", {
      style: 5,
      gooey: true,
      config: {
        a: { value: 2, range: [0, 30] },
        b: { value: 0.75, range: [-1, 1] },
        zindex: { value: "9", range: [-9999999, 9999999] },
        aspect: { value: 0.8247337522494615 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.12, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.92, range: [0, 10] },
        metaball: { value: 0.31, range: [0, 2], _gsap: { id: 20 } },
        discard_threshold: { value: 0.35, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.31, range: [0, 2] },
        noise_scale: { value: 11.45, range: [0, 100] },
      },
    });
  }
};

// sheryJSAnimations();
