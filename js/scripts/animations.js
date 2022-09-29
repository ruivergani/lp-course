import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// // GSAP animations code
// gsap.to(".cloud-1", {
//     yPercent: -500,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".s-clouds",
//        start: "top bottom", // the default values
//        end: "bottom top",
//       scrub: true
//     }
// });

// Pre Loader
// Pace.on('done', () => {
//     gsap.timeline()
//     .add('p')
//     .to('.pace', {
//         transform: 'scale(10, 1)', // scale horizontally
//         duration: 3
//     }, "+=.2") // timing changes
//     .to('.pace', {
//         duration: 2,
//         delay: .1,
//         opacity: 0,
//         yPercent: -400,
//         ease: "BezierEasing(0.19,1,0.22,1)"
//     }, "-=2.5")
//     .to('.loading__text', {
//         delay: .2, 
//         duration: 2, 
//         opacity: 0, 
//         yPercent: -400, 
//         ease: "BezierEasing(0.19,1,0.22,1)"
//     }, 'p')
//     .to('.main-page-content', {
//         duration: 1,
//         css: {zIndex: 2026},
//         ease: "slow(0.7, 0.7, false)",
//     }, '-=2.5')
// })