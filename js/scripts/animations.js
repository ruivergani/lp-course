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