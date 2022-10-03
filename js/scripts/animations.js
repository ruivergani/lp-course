gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({defaults: { duration: 1.5 }}) // default duration for all child configuration
timeline
    .from('.tag-title', {
        x: '-15%',
        opacity: 0
    }) 
    .from('.h1', {
        x: '-15%',
        opacity: 0
    }, "<") // means insert at the start of the previous animation
    .from('.subtitle', {
        x: '-15%',
        opacity: 0
    }, "<")

// ScrollTrigger

// Clouds
gsap.to(".cloud-2", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".cloud-2",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
});
gsap.to(".cloud-3", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".cloud-3",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
});

gsap.to(".cloud-1", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".cloud-1",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
});