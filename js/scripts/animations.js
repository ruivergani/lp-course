gsap.registerPlugin(ScrollTrigger);

gsap.from('.header', {
    duration: 1,
    y: ' -100%', 
    ease: "bounce.out"
})