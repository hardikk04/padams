import "remixicon/fonts/remixicon.css";
import Lenis from "lenis";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { preloadImages } from "./utils.js"; // Utility function for preloading images
import { InteractiveTilt } from "./interactive-tilt.js";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

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

const page1Animations = () => {
  clutterAnimation(".page1-t2>h1");

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

const codeDrop = () => {
  // Define a variable to store the Lenis smooth scrolling object
  let lenis;

  // Initializes Lenis for smooth scrolling with specific properties
  const initSmoothScrolling = () => {
    // Instantiate the Lenis object with specified properties
    lenis = new Lenis({
      lerp: 0.1, // Lower values create a smoother scroll effect
      smoothWheel: true, // Enables smooth scrolling for mouse wheel events
    });

    // Update ScrollTrigger each time the user scrolls
    lenis.on("scroll", () => ScrollTrigger.update());

    // Define a function to run at each animation frame
    const scrollFn = (time) => {
      lenis.raf(time); // Run Lenis' requestAnimationFrame method
      requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
    };
    // Start the animation frame loop
    requestAnimationFrame(scrollFn);
  };

  // Sets up default animation settings and merges with options
  const setupAnimationDefaults = (itemElement, options) => {
    // Default settings for clip paths and scroll trigger
    let defaults = {
      clipPaths: {
        step1: {
          initial: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          final: "polygon(50% 0%, 50% 50%, 50% 50%, 50% 100%)",
        },
        step2: {
          initial: "polygon(50% 50%, 50% 0%, 50% 100%, 50% 50%)",
          final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
      // Default scroll trigger settings
      scrollTrigger: {
        trigger: itemElement,
        start: "top 50%",
        end: "+=50%",
        scrub: true,
      },
      // Default perspective setting
      perspective: false,
    };

    // Merge defaults with options provided
    if (options && options.scrollTrigger) {
      defaults.scrollTrigger = {
        ...defaults.scrollTrigger,
        ...options.scrollTrigger,
      };
    }

    // Merge and return the complete settings
    return {
      ...defaults,
      ...options,
      scrollTrigger: defaults.scrollTrigger,
    };
  };

  // Prepares text within an element for animation by splitting it into characters and setting their initial opacity.
  const prepareTextForAnimation = (itemElement) => {
    // Query for the span elements within the itemElement
    const textSpans = itemElement.querySelectorAll(".content__text > span");

    // Perform the splitting operation
    Splitting({ target: textSpans });

    // Initialize an array to hold arrays of characters for each span
    const charsArray = Array.from(textSpans).map((span) => {
      // Query for chars inside this span and return them as an array
      return Array.from(span.querySelectorAll(".char"));
    });

    // Set the opacity of all characters to 0 using GSAP
    charsArray.forEach((charArray) => {
      gsap.set(charArray, { opacity: 0 });
    });

    // Return the charsArray
    return charsArray;
  };

  // Animation profiles for each item

  // First animation effect
  const fx1 = (itemElement, options) => {
    // Set up the animation settings
    const settings = setupAnimationDefaults(itemElement, options);
    // Select the elements to animate
    const imageElement = itemElement.querySelector(".content__img");
    const innerElements = imageElement.querySelectorAll(".content__img-inner"); // Now it selects both inners
    // Prepare the text for animation and retrieve the character arrays
    const charsArray = prepareTextForAnimation(itemElement);

    // Define and return the GSAP timeline for the animation
    const tl = gsap
      .timeline({
        // Default easing for all animations in this timeline
        defaults: {
          ease: "none",
        },
        // Event hook for when the timeline starts
        onStart: () => {
          // Apply perspective if specified
          if (settings.perspective) {
            gsap.set(imageElement, {
              perspective: settings.perspective,
            });
          }
        },
        // ScrollTrigger configuration for this timeline
        scrollTrigger: settings.scrollTrigger,
      })
      // The sequence of animation steps
      .fromTo(
        imageElement,
        {
          // Initial state for the animation
          filter: "brightness(100%)",
          "clip-path": settings.clipPaths.step1.initial,
        },
        {
          ease: "sine.in",
          // Final state for the animation
          filter: "brightness(800%)",
          "clip-path": settings.clipPaths.step1.final,
        },
        0
      )
      .to(
        innerElements[0],
        {
          ease: "sine.in",
          // Rotation and scale effect for the inner element
          rotationY: -40,
          scale: 1.4,
        },
        0
      )
      // Switch image
      .add(() => {
        // Toggle the visibility of the inner elements
        innerElements[0].classList.toggle("content__img-inner--hidden");
        innerElements[1].classList.toggle("content__img-inner--hidden");
      })
      .to(imageElement, {
        // Start state for the next animation step
        startAt: {
          "clip-path": settings.clipPaths.step2.initial,
        },
        // Final state for the next animation step
        "clip-path": settings.clipPaths.step2.final,
        filter: "brightness(100%)",
      })
      .to(
        innerElements[1],
        {
          // Start state for rotation and scale reset
          startAt: { rotationY: 40, scale: 1.4 },
          // Reset rotation and scale to original
          rotationY: 0,
          scale: 1,
        },
        "<"
      ) // '<' indicates that this step starts at the same time as the previous one
      .addLabel("texts", "<-=0.3");

    charsArray.forEach((charArray, index) => {
      const staggerDirection = index % 2 === 0 ? 1 : -1; // Alternate stagger direction

      tl.to(
        charArray,
        {
          startAt: { opacity: 1, scale: 0.2 },
          opacity: 1,
          scale: 1,
          yPercent: -staggerDirection * 40,
          stagger: staggerDirection * 0.04,
        },
        "texts"
      );
    });

    return tl;
  };

  const fx2 = (itemElement, options) => {
    // Set up the animation settings
    const settings = setupAnimationDefaults(itemElement, options);
    // Select the elements to animate
    const imageElement = itemElement.querySelector(".content__img");
    const innerElements = imageElement.querySelectorAll(".content__img-inner"); // Now it selects both inners
    const charsArray = prepareTextForAnimation(itemElement);

    const tl = gsap
      .timeline({
        defaults: {
          ease: "none",
        },
        onStart: () => {
          if (settings.perspective) {
            gsap.set([imageElement, itemElement], {
              perspective: settings.perspective,
            });
          }
        },
        scrollTrigger: settings.scrollTrigger,
      })
      .fromTo(
        imageElement,
        {
          filter: "brightness(100%) hue-rotate(0deg)",
          "clip-path": settings.clipPaths.step1.initial,
        },
        {
          filter: "brightness(800%) hue-rotate(90deg)",
          "clip-path": settings.clipPaths.step1.final,
        },
        0
      )
      .to(
        innerElements[0],
        {
          rotationZ: -5,
          scaleX: 1.8,
        },
        0
      )
      // Switch image
      .add(() => {
        // Toggle the visibility of the inner elements
        innerElements[0].classList.toggle("content__img-inner--hidden");
        innerElements[1].classList.toggle("content__img-inner--hidden");
      })
      .to(imageElement, {
        startAt: {
          "clip-path": settings.clipPaths.step2.initial,
        },
        "clip-path": settings.clipPaths.step2.final,
        filter: "brightness(100%) hue-rotate(0deg)",
      })
      .to(
        innerElements[1],
        {
          startAt: { rotationZ: 5, scaleX: 1.8 },
          rotationZ: 0,
          scaleX: 1,
        },
        "<"
      )
      .addLabel("texts", "<-=0.3");

    charsArray.forEach((charArray, index) => {
      charArray.sort(() => Math.random() - 0.5);
      const staggerDirection = index % 2 === 0 ? 1 : -1; // Alternate stagger direction

      tl.to(
        charArray,
        {
          duration: 0.1,
          opacity: 1,
          stagger: staggerDirection * 0.04,
        },
        "texts"
      );
    });

    return tl;
  };

  const fx3 = (itemElement, options) => {
    // Set up the animation settings
    const settings = setupAnimationDefaults(itemElement, options);
    // Select the elements to animate
    const imageElement = itemElement.querySelector(".content__img");
    const innerElements = imageElement.querySelectorAll(".content__img-inner"); // Now it selects both inners
    const text = itemElement.querySelector(".content__text");

    return (
      gsap
        .timeline({
          defaults: {
            ease: "none",
          },
          onStart: () => {
            if (settings.perspective) {
              gsap.set([imageElement, itemElement], {
                perspective: settings.perspective,
              });
            }
          },
          scrollTrigger: settings.scrollTrigger,
        })
        .fromTo(
          imageElement,
          {
            scale: 0.3,
            filter: "brightness(100%) contrast(100%)",
            "clip-path": settings.clipPaths.step1.initial,
          },
          {
            ease: "sine",
            rotationX: -35,
            rotationY: 35,
            filter: "brightness(60%) contrast(400%)",
            scale: 0.7,
            "clip-path": settings.clipPaths.step1.final,
          },
          0
        )
        .to(
          innerElements[0],
          {
            ease: "sine",
            skewY: 10,
            scaleY: 1.2,
          },
          0
        )

        // Switch image
        .add(() => {
          // Toggle the visibility of the inner elements
          innerElements[0].classList.toggle("content__img-inner--hidden");
          innerElements[1].classList.toggle("content__img-inner--hidden");
        }, ">")
        .to(
          imageElement,
          {
            ease: "sine.in",
            startAt: {
              "clip-path": settings.clipPaths.step2.initial,
            },
            "clip-path": settings.clipPaths.step2.final,
            filter: "brightness(100%) contrast(100%)",
            scale: 1,
            rotationX: 0,
            rotationY: 0,
          },
          "<"
        )
        .to(
          innerElements[1],
          {
            ease: "sine.in",
            startAt: { skewY: 10, scaleY: 2 },
            skewY: 0,
            scaleY: 1,
          },
          "<"
        )

        .fromTo(
          text,
          {
            opacity: 0,
            yPercent: 40,
          },
          {
            opacity: 1,
            yPercent: 0,
          },
          ">"
        )
        .to(
          imageElement,
          {
            ease: "sine",
            startAt: {
              filter: "brightness(100%) contrast(100%) opacity(100%)",
            },
            filter: "brightness(60%) contrast(400%) opacity(0%)",
            rotationX: 25,
            rotationY: 2,
            scale: 1.2,
          },
          "<"
        )
    );
  };

  const fx4 = (itemElement, options) => {
    // Set up the animation settings
    const settings = setupAnimationDefaults(itemElement, options);
    // Select the elements to animate
    const imageElement = itemElement.querySelector(".content__img");
    const innerElements = imageElement.querySelectorAll(".content__img-inner"); // Now it selects both inners
    // Prepare the text for animation and retrieve the character arrays
    const charsArray = prepareTextForAnimation(itemElement);

    const tl = gsap
      .timeline({
        defaults: {
          ease: "power1.inOut",
        },
        onStart: () => {
          if (settings.perspective) {
            gsap.set([imageElement, itemElement], {
              perspective: settings.perspective,
            });
          }
        },
        scrollTrigger: settings.scrollTrigger,
      })
      .fromTo(
        imageElement,
        {
          filter: "brightness(100%) grayscale(0%)",
          "clip-path": settings.clipPaths.step1.initial,
        },
        {
          rotationZ: 90,
          scale: 0.6,
          filter: "brightness(800%) grayscale(100%)",
          "clip-path": settings.clipPaths.step1.final,
        },
        0
      )
      .to(
        innerElements[0],
        {
          rotationZ: -5,
          scaleX: 1.4,
        },
        0
      )
      // Switch image
      .add(() => {
        // Toggle the visibility of the inner elements
        innerElements[0].classList.toggle("content__img-inner--hidden");
        innerElements[1].classList.toggle("content__img-inner--hidden");
      })
      .to(imageElement, {
        startAt: {
          "clip-path": settings.clipPaths.step1.final,
          rotationZ: -90,
        },
        "clip-path": settings.clipPaths.step2.final,
        filter: "brightness(100%) grayscale(0%)",
        rotationZ: 0,
        scale: 1,
      })
      .to(
        innerElements[1],
        {
          startAt: { rotationZ: -350, scaleX: 1.4 },
          rotationZ: -360,
          scaleX: 1,
        },
        "<"
      )
      .addLabel("texts", "<-=0.3");

    charsArray.forEach((charArray, index) => {
      const staggerDirection = index % 2 === 0 ? 1 : -1; // Alternate stagger direction

      tl.to(
        charArray,
        {
          startAt: { opacity: 1, scale: 0.2 },
          opacity: 1,
          scale: 1,
          yPercent: staggerDirection * 400,
          stagger: staggerDirection * 0.02,
        },
        "texts"
      );
    });

    return tl;
  };

  const fx5 = (itemElement, options) => {
    // Set up the animation settings
    const settings = setupAnimationDefaults(itemElement, options);
    // Select the elements to animate
    const imageElement = itemElement.querySelector(".content__img");
    const innerElements = imageElement.querySelectorAll(".content__img-inner"); // Now it selects both inners
    const charsArray = prepareTextForAnimation(itemElement);

    const tl = gsap
      .timeline({
        defaults: {
          ease: "back.out(1.5)",
        },
        onStart: () => {
          if (settings.perspective) {
            gsap.set([imageElement, itemElement], {
              perspective: settings.perspective,
            });
          }
        },
        scrollTrigger: settings.scrollTrigger,
      })
      .fromTo(
        imageElement,
        {
          filter: "brightness(100%) saturate(100%)",
          "clip-path": settings.clipPaths.step1.initial,
        },
        {
          ease: "back.in(1.5)",
          rotationZ: 90,
          scale: 0.6,
          filter: "brightness(300%) saturate(200%)",
          "clip-path": settings.clipPaths.step1.final,
        },
        0
      )
      .to(
        innerElements[0],
        {
          ease: "back.in(1.5)",
          scaleX: 1.4,
        },
        0
      )
      // Switch image
      .add(() => {
        // Toggle the visibility of the inner elements
        innerElements[0].classList.toggle("content__img-inner--hidden");
        innerElements[1].classList.toggle("content__img-inner--hidden");
      })
      .to(imageElement, {
        startAt: {
          "clip-path": settings.clipPaths.step1.final,
          rotationZ: -90,
        },
        "clip-path": settings.clipPaths.step2.final,
        filter: "brightness(100%) saturate(100%)",
        rotationZ: 0,
        scale: 1,
      })
      .to(
        innerElements[1],
        {
          startAt: { scaleX: 1.4 },
          scaleX: 1,
        },
        "<"
      )
      .addLabel("texts", "<-=0.3");

    charsArray.forEach((charArray, index) => {
      charArray.sort(() => Math.random() - 0.5);
      const staggerDirection = index % 2 === 0 ? 1 : -1; // Alternate stagger direction

      tl.fromTo(
        charArray,
        {
          opacity: 1,
          transformOrigin: `50% ${staggerDirection < 0 ? 100 : 0}%`,
          scaleY: 0,
        },
        {
          duration: 0.1,
          ease: "none",
          scaleY: 1,
          stagger: staggerDirection * 0.02,
        },
        "texts"
      );
    });

    return tl;
  };

  const fx6 = (itemElement, options) => {
    // Set up the animation settings
    const settings = setupAnimationDefaults(itemElement, options);
    // Select the elements to animate
    const imageElement = itemElement.querySelector(".content__img");
    const inner = imageElement.querySelector(".content__img-inner");
    const charsArray = prepareTextForAnimation(itemElement);

    // Define and return the GSAP timeline for the animation
    const tl = gsap
      .timeline({
        // Default easing for all animations in this timeline
        defaults: {
          ease: "power2.inOut",
        },
        // Event hook for when the timeline starts
        onStart: () => {
          // Apply perspective if specified
          if (settings.perspective) {
            gsap.set(imageElement, {
              perspective: settings.perspective,
            });
          }
        },
        // ScrollTrigger configuration for this timeline
        scrollTrigger: settings.scrollTrigger,
      })
      // The sequence of animation steps
      .fromTo(
        imageElement,
        {
          // Initial state for the animation
          scale: 0.2,
          filter: "brightness(50%)",
          "clip-path": settings.clipPaths.step1.initial,
          transformOrigin: "75% 50%",
        },
        {
          // Final state for the animation
          scale: 1,
          filter: "brightness(100%)",
          "clip-path": settings.clipPaths.step1.final,
        },
        0
      )
      .fromTo(
        inner,
        {
          // Rotation and scale effect for the inner element
          rotationY: 40,
          scale: 2,
        },
        {
          // Rotation and scale effect for the inner element
          rotationY: 0,
          scale: 1,
        },
        0
      );

    charsArray.forEach((charArray, index) => {
      const staggerDirection = index % 2 === 0 ? 1 : -1; // Alternate stagger direction

      tl.fromTo(
        charArray,
        {
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          scale: 1,
          yPercent: staggerDirection * 100,
          stagger: staggerDirection * -0.02,
        },
        0
      );
    });

    return tl;
  };

  // First animation effect
  const fxIntro = (itemElement, options) => {
    // Set up the animation settings
    const settings = setupAnimationDefaults(itemElement, options);
    // Select the elements to animate
    const imageElement = itemElement.querySelector(".content__img");
    const inner = imageElement.querySelector(".content__img-inner");

    // Define and return the GSAP timeline for the animation
    return (
      gsap
        .timeline({
          // Default easing for all animations in this timeline
          defaults: {
            ease: "none",
          },
          // Event hook for when the timeline starts
          onStart: () => {
            // Apply perspective if specified
            if (settings.perspective) {
              gsap.set(imageElement, {
                perspective: settings.perspective,
              });
            }
          },
          // ScrollTrigger configuration for this timeline
          scrollTrigger: settings.scrollTrigger,
        })
        // The sequence of animation steps
        .fromTo(
          imageElement,
          {
            scale: 1,
            xPercent: 0,
            filter: "brightness(100%)",
            "clip-path": settings.clipPaths.step1.initial,
          },
          {
            scale: 0.5,
            xPercent: -50,
            "clip-path": settings.clipPaths.step1.final,
            filter: "brightness(500%)",
          },
          0
        )
        .to(
          inner,
          {
            rotationY: -40,
            scale: 1.4,
          },
          0
        )
        .to(imageElement, {
          startAt: {
            "clip-path": settings.clipPaths.step2.initial,
          },
          scale: 0,
          xPercent: -100,
          "clip-path": settings.clipPaths.step2.final,
          filter: "brightness(100%)",
        })
        .to(
          inner,
          {
            startAt: { rotationY: 40 },
            rotationY: 0,
            scale: 1,
          },
          "<"
        )
    );
  };

  // Main function to apply scroll-triggered animations
  const scroll = () => {
    // Define items and associate them with their animation profiles and options
    const items = [
      {
        id: "#item-3",
        animationProfile: fx3,
        options: {
          clipPaths: {
            step1: {
              initial: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              final: "polygon(50% 0%, 50% 50%, 50% 50%, 50% 100%)",
            },
            step2: {
              initial: "polygon(50% 50%, 50% 0%, 50% 100%, 50% 50%)",
              final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            },
          },
          scrollTrigger: {
            start: "center center",
            end: "+=150%",
            pin: true,
          },
          perspective: 400,
        },
      },
    ];

    // Iterate over the items and apply their animations
    items.forEach((item) => {
      const itemElement = document.querySelector(item.id);
      // Check if element exists and has an animation profile
      if (itemElement && item.animationProfile) {
        // Apply the animation profile to the element with the specified options
        item.animationProfile(itemElement, item.options);

        // Check if the interactive tilt effect should be applied
        if (item.interactiveTilt) {
          // Instantiate the InteractiveTilt object for this item
          new InteractiveTilt(itemElement);
        }
      } else {
        // Warn if the element or animation profile is not found
        console.warn(
          `Element with ID ${item.id} or its animation profile is not defined.`
        );
      }
    });
  };

  // Preloading all images specified by the selector
  preloadImages(".content__img-inner").then(() => {
    // Once images are preloaded, remove the 'loading' indicator/class from the body
    document.body.classList.remove("loading");
    // Initialize Lenis
    initSmoothScrolling();
    // Apply scroll-triggered animations to each item
    scroll();
  });
};
codeDrop();

const realityAnimation = () => {
  let flag = true;
  const allElems = document.querySelectorAll(".reality-elem");
  allElems.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      if (flag) {
        gsap.to(elem, {
          height: "8vw",
        });
        flag = false;
      } else {
        gsap.to(elem, {
          height: "2vw",
        });
        flag = true;
      }
    });
  });
};

realityAnimation();