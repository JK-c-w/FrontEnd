let tl=gsap.timeline();
tl.from("nav h3",{
    y:" -50px",
    duration:0.7,
    stagger:0.2
})
tl.from(".name div",{
    x:-710,
    duration:0.8,
    stagger:0.3,
})
tl.from("img",{
    opacity:0,
    rotate:"90deg",
    duration:0.4,
    stagger:0.2
})
tl.from("footer",{
    y:50,
    duration:0.5
})
