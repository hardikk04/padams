import "remixicon/fonts/remixicon.css";
import Lenis from "lenis";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Clutter Animation
const clutterAnimation = (element) => {
  const htmlTag = document.querySelector(element);
  let clutter = "";

  // Splitting the text content into individual letters and wrapping each in a span with a class
  htmlTag.textContent.split(" ").forEach((word) => {
    clutter += `<span class="inline-block">${word}</span>`;
  });

  // Updating the HTML content of the element with the animated spans
  htmlTag.innerHTML = clutter;
};

// Clutter Animation
const clutterAnimationWord = (element) => {
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

window.addEventListener("DOMContentLoaded", () => {
  gsap.to(".main-loader", {
    opacity: 0,
    onComplete: () => {
      gsap.to(".main-loader", {
        zIndex: -10,
      });
    },
  });
});

const search = () => {
  const openSearch = document.querySelector(".search-open");
  const closeSearch = document.querySelector(".search-close");

  openSearch.addEventListener("click", () => {
    const tl = gsap.timeline();
    tl.to(".search", {
      top: "0",
    });
  });
  closeSearch.addEventListener("click", () => {
    const tl = gsap.timeline();
    tl.to(".search", {
      top: "-30%",
    });
  });
};
search();

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
      } else if (index === 7) {
        gsap.to(".menu-elem8>h1", {
          y: -40,
        });
      } else {
        gsap.to(".menu-elem9>h1", {
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

const page1Animations = () => {
  clutterAnimationWord(".page1-t1>h1");
  clutterAnimationWord(".page1-t2>h1");

  gsap.to(".page1-t1>h1>span", {
    color: "#fff",
    stagger: {
      amount: 0.8,
    },
  });

  gsap.to(".page1-t2>h1>span", {
    color: "#fff",
    stagger: {
      amount: 0.8,
    },
  });
};
page1Animations();

const textFillSection = () => {
  clutterAnimation(".text-fill>h1");

  gsap.to(".text-fill>h1>span", {
    color: "#000",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".text-fill",
      start: "top 50%",
      end: "top 0%",
      scrub: true,
      // markers: true,
    },
  });
};

textFillSection();

const expertiseAnimation = () => {
  const allExpertiseCard = document.querySelectorAll(".expertise-card");
  allExpertiseCard.forEach((item) => {
    item.addEventListener("mousemove", (dets) => {
      gsap.to(".build-cursor", {
        scale: 1,
        left: dets.clientX - 50,
        top: dets.clientY - 50,
      });
    });

    item.addEventListener("mouseleave", (dets) => {
      gsap.to(".build-cursor", {
        scale: 0,
      });
    });
  });

  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".expertise",
        start: "top 0%",
        end: "top -300%",
        scrub: true,
        // markers: true,
        pin: true,
      },
    })
    .to(
      ".expertise-top",
      {
        top: "-100%",
      },
      "a"
    )
    .to(
      ".expertise-bottom",
      {
        top: "150%",
      },
      "a"
    )
    .from(".expertise-card1", {
      left: "-100%",
      rotate: "10deg",
    })
    .from(".expertise-card2", {
      left: "150%",
      rotate: "-10deg",
    })
    .from(".expertise-card6", {
      left: "-100%",
      rotate: "-10deg",
    })
    .from(".expertise-card4", {
      left: "150%",
      rotate: "10deg",
    })
    .from(".expertise-card3", {
      left: "-100%",
      rotate: "-10deg",
    })
    .from(".expertise-card5", {
      left: "150%",
      rotate: "10deg",
    });
};
expertiseAnimation();

const page3Animation = () => {
  clutterAnimation(".page3-card1>.page3-card-left>p");
  clutterAnimation(".page3-card2>.page3-card-left>p");
  clutterAnimation(".page3-card3>.page3-card-left>p");
  clutterAnimation(".page3-card4>.page3-card-left>p");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3-cards",
      start: "top 0%",
      end: "top -300%",
      scrub: true,
      // markers: true,
      pin: true,
    },
  });

  gsap.from(
    ".page3-card1>.page3-card-left>h1 , .page3-card1>.page3-card-left>p>span",
    {
      opacity: 0,
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        scroller: "body",
        trigger: ".page3-cards",
        start: "top 40%",
        end: "top 0%",
        // markers: true,
        scrub: 1,
      },
    }
  );

  tl.to(
    ".page3-card2",
    {
      top: "50%",
      left: "50%",
      scale: 0.98,
      transform: " translate(-50%, -50%)",
    },
    "a"
  )
    .from(
      ".page3-card2>.page3-card-left>h1 , .page3-card2>.page3-card-left>p>span",
      {
        opacity: 0,
        stagger: {
          amount: 0.4,
        },
      },
      "a"
    )
    .to(
      ".page3-card3",
      {
        top: "50%",
        left: "50%",
        scale: 0.96,

        transform: " translate(-50%, -50%)",
      },
      "b"
    )
    .from(
      ".page3-card3>.page3-card-left>h1 , .page3-card3>.page3-card-left>p>span",
      {
        opacity: 0,
        stagger: {
          amount: 0.4,
        },
      },
      "b"
    )
    .to(
      ".page3-card4",
      {
        top: "50%",
        scale: 0.94,
        left: "50%",
        transform: " translate(-50%, -50%)",
      },
      "c"
    )
    .from(
      ".page3-card4>.page3-card-left>h1 , .page3-card4>.page3-card-left>p>span",
      {
        opacity: 0,
        stagger: {
          amount: 0.4,
        },
      },
      "c"
    );
};

page3Animation();

const counterNumberAnimation = (
  elem,
  finalNumber,
  speed,
  finalOP,
  numberSpeed = 30
) => {
  let randomNumber = 0;
  const myInterval = setInterval(() => {
    randomNumber = randomNumber + Math.floor(Math.random() * numberSpeed) + 1;
    if (randomNumber > finalNumber - numberSpeed) {
      document.querySelector(elem).textContent = finalOP;
      clearInterval(myInterval);
    } else {
      document.querySelector(elem).textContent = randomNumber;
    }
  }, 30);
};

const counterSection = () => {
  gsap.from(".coutner-elem", {
    opacity: 0,
    y: 50,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".coutner-section",
      start: "top 80%",
      end: "top 50%",
      scrub: true,
    },
  });

  gsap.from(".coutner-elem1>h1", {
    scrollTrigger: {
      trigger: ".coutner-section",
      start: "top 50%",
      end: "top 50%",
      // markers: true,
    },
    onComplete: () => {
      counterNumberAnimation(".coutner-elem1>h1", 600, 50, "600+");
    },
  });

  gsap.from(".coutner-elem2>h1", {
    text: "0 Mn+",
    scrollTrigger: {
      trigger: ".coutner-section",
      start: "top 50%",
      end: "top 50%",
      // markers: true,
    },
  });

  gsap.from(".coutner-elem3>h1", {
    scrollTrigger: {
      trigger: ".coutner-section",
      start: "top 50%",
      end: "top 50%",
      // markers: true,
    },
    onComplete: () => {
      counterNumberAnimation(".coutner-elem3>h1", 5000, 5, "5000+", 180);
    },
  });

  gsap.from(".coutner-elem4>h1", {
    scrollTrigger: {
      trigger: ".coutner-section",
      start: "top 50%",
      end: "top 50%",
      // markers: true,
    },
    onComplete: () => {
      counterNumberAnimation(".coutner-elem4>h1", 9, 50, "9+", 1);
    },
  });

  gsap.from(".coutner-elem5>h1", {
    text: "0+",
    scrollTrigger: {
      trigger: ".coutner-section",
      start: "top 50%",
      end: "top 50%",
      // markers: true,
    },
    onComplete: () => {
      counterNumberAnimation(".coutner-elem5>h1", 30, 50, "30+", 3);
    },
  });
};

counterSection();

const allSlidersSwitch = () => {
  const video = document.querySelector("video");
  let videoNumber = 0;

  video.addEventListener("ended", () => {
    if (videoNumber === 0) {
      document.querySelector(".home-video").src = "/videos/google cut (1).mp4";

      allSliders[0].style.backgroundColor = "#dfdfdf5f";
      allSliders[1].style.backgroundColor = "#dfdfdfec";
      allSliders[2].style.backgroundColor = "#dfdfdf5f";
      allSliders[3].style.backgroundColor = "#dfdfdf5f";
      document.querySelector(".page1-text").style.opacity = 1;

      videoNumber = 1;
    } else if (videoNumber === 1) {
      document.querySelector(".home-video").src =
        "/videos/padams factory (1).mp4";

      allSliders[0].style.backgroundColor = "#dfdfdf5f";
      allSliders[1].style.backgroundColor = "#dfdfdf5f";
      allSliders[2].style.backgroundColor = "#dfdfdfec";
      allSliders[3].style.backgroundColor = "#dfdfdf5f";
      document.querySelector(".page1-text").style.opacity = 1;

      videoNumber = 2;
    } else if (videoNumber === 2) {
      document.querySelector(".home-video").src = "/videos/barclays cut.mp4";

      allSliders[0].style.backgroundColor = "#dfdfdf5f";
      allSliders[1].style.backgroundColor = "#dfdfdf5f";
      allSliders[2].style.backgroundColor = "#dfdfdf5f";
      allSliders[3].style.backgroundColor = "#dfdfdfec";
      document.querySelector(".page1-text").style.opacity = 0;

      videoNumber = 3;
    } else {
      document.querySelector(".home-video").src =
        "/videos/padam samarak cut.mp4";

      allSliders[0].style.backgroundColor = "#dfdfdfec";
      allSliders[1].style.backgroundColor = "#dfdfdf5f";
      allSliders[2].style.backgroundColor = "#dfdfdf5f";
      allSliders[3].style.backgroundColor = "#dfdfdf5f";
      document.querySelector(".page1-text").style.opacity = 1;

      videoNumber = 0;
    }
  });

  const allSliders = document.querySelectorAll(".page1-sliders-tab");
  allSliders.forEach((slider, index) => {
    slider.addEventListener("click", () => {
      if (index === 0) {
        document.querySelector(".home-video").src =
          "/videos/padam samarak cut.mp4";

        allSliders[index].style.backgroundColor = "#dfdfdfec";
        allSliders[1].style.backgroundColor = "#dfdfdf5f";
        allSliders[2].style.backgroundColor = "#dfdfdf5f";
        allSliders[3].style.backgroundColor = "#dfdfdf5f";
        document.querySelector(".page1-text").style.opacity = 1;

        videoNumber = 0;
      } else if (index === 1) {
        document.querySelector(".home-video").src =
          "/videos/google cut (1).mp4";

        allSliders[0].style.backgroundColor = "#dfdfdf5f";
        allSliders[index].style.backgroundColor = "#dfdfdfec";
        allSliders[2].style.backgroundColor = "#dfdfdf5f";
        allSliders[3].style.backgroundColor = "#dfdfdf5f";
        document.querySelector(".page1-text").style.opacity = 1;

        videoNumber = 1;
      } else if (index === 2) {
        document.querySelector(".home-video").src =
          "/videos/padams factory (1).mp4";

        allSliders[0].style.backgroundColor = "#dfdfdf5f";
        allSliders[1].style.backgroundColor = "#dfdfdf5f";
        allSliders[index].style.backgroundColor = "#dfdfdfec";
        allSliders[3].style.backgroundColor = "#dfdfdf5f";
        document.querySelector(".page1-text").style.opacity = 1;

        videoNumber = 2;
      } else {
        document.querySelector(".home-video").src = "/videos/barclays cut.mp4";

        allSliders[0].style.backgroundColor = "#dfdfdf5f";
        allSliders[1].style.backgroundColor = "#dfdfdf5f";
        allSliders[2].style.backgroundColor = "#dfdfdf5f";
        allSliders[index].style.backgroundColor = "#dfdfdfec";
        document.querySelector(".page1-text").style.opacity = 0;

        videoNumber = 3;
      }
    });
  });
};
allSlidersSwitch();
