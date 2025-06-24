import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Second animation
gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".card");
const spacer = 0;
const minScale = 1;

const distributor = gsap.utils.distribute({ base: minScale, amount: 0.1 });

cards.forEach((card, index) => {
  const scaleVal = distributor(index, cards[index], cards);

  gsap.to(card, {
    scrollTrigger: {  
      trigger: card,
      start: `top 50%`,
      scrub: true,
    //   markers: true,
      invalidateOnRefresh: true,
    },
    ease: "none",
    scale: scaleVal,
    // scale: 1,
  });

  ScrollTrigger.create({
    trigger: card,
    // start: `top-=${index * spacer} top`,
    start: "top 15%",
    endTrigger: ".cards",
    end: `bottom top+=${200 + cards.length * spacer}`,
    pin: true,
    pinSpacing: false,
    // markers: true,
    id: "pin",
    invalidateOnRefresh: true,
  });
});
