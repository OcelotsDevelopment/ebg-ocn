import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Second animation
gsap.registerPlugin(ScrollTrigger);

gsap.from(".scroll-news", {
    // transform: "translateY(200%)",
    scrollTrigger: {
        trigger: ".main-news",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top -100%",
        // scrub: 2,
        // pin: true,
    }
})