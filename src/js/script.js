import "remixicon/fonts/remixicon.css";

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

const page7Animation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".why-us-section",
      start: "top 0%",
      end: "top -100%",
      scrub: true,
      pin: true,
    },
  });
  tl.to(".page7-elem", {
    width: "24%",
    stagger: 0.1,
    backgroundColor: "#e2ffdf",
    color: "#07003f",
  });
};

page7Animation();

//JavaScript of responsive navigation menu

const menuBtn = document.querySelector(".menu-btn");
const navegation = document.querySelector(".navegation");

menuBtn.addEventListener("click", () => {
  //si la clase "active" está presente la elimina, de lo contrario la añade
  menuBtn.classList.toggle("active");
  navegation.classList.toggle("active");
});

//JavaScript for video slider navegation STARTS
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  //button
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  //video
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  //content
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  //button
  btns[manual].classList.add("active");
  //video
  slides[manual].classList.add("active");
  //content
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});
//JavaScript for video slider navigation ENDS

// COUNTER SECTION CODE  STARTS
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 400;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 40);
    } else counter.innerText = target;
  };
  updateCounter();
});

// COUNTER SECTION CODE  ENDS

// TEXT ON SCROLL EFFECT JAVASCRIPT  starts

gsap.set(".highlight", { width: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".highlight",
      scrub: 1,
      start: "top 80%",
      end: "top 10%",
      //markers: true
    },
  })
  .to(".highlight", {
    width: "100%",
    duration: 1,
    ease: "none",
    stagger: 1,
  });
// TEXT ON SCROLL EFFECT JAVASCRIPT ends

//  EXPERTISE SLIDER JS starts

const expertiseSlider = document.querySelector(".expertise-slider");
function activate(e) {
  const items = document.querySelectorAll(".expertise-item");
  e.target.matches(".expertise-next") && expertiseSlider.append(items[0]);
  e.target.matches(".expertise-prev") &&
    expertiseSlider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.set("#linesvg", { opacity: 1 });
gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
gsap.set("#tractor", { transformOrigin: "50% 50%" });
let rotateTo = gsap.quickTo("#tractor", "rotation"),
  prevDirection = 0;

gsap.to("#motionSVG", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "top center",
    end: () =>
      "+=" +
      document.querySelector("#motionPath").getBoundingClientRect().height,
    scrub: 0.5,
    markers: true,
    onUpdate: (self) => {
      if (prevDirection !== self.direction) {
        // only run this when we're changing direction
        rotateTo(self.direction === 1 ? 0 : -180);
        prevDirection = self.direction;
      }
    },
  },
  ease: pathEase("#motionPath"), // a custom ease that helps keep the tractor centered
  immediateRender: true,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
  },
});

//  EXPERTISE SLIDER JS ends
