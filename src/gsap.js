import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let heroTextAnimation = gsap.timeline({ repeat: -1, ease: "power4.inOut" });

let targets = document.querySelectorAll(".contr .swd");
let numberOfTargets = targets.length;
let duration = 0.8; //change this
let pause = 3; // change this
let stagger = duration + pause;
let repeatDelay = stagger * (numberOfTargets - 1) + pause;

function init() {
  gsap.set(".words", { autoAlpha: 1 });
  heroTextAnimation
    .from(targets, {
      y: 80,
      duration: duration,
      opacity: 0,
      stagger: {
        each: stagger,
        repeat: -1,
        repeatDelay: repeatDelay,
      },
    })
    .to(
      targets,
      {
        y: -80,
        duration: duration,
        opacity: 0,
        stagger: {
          each: stagger,
          repeat: -1,
          repeatDelay: repeatDelay,
        },
      },
      stagger
    );
}

init();


