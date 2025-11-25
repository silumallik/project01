const scroll = new FeatherScroll({
  smooth: true, // Enable smooth scrolling
  duration: 1.2, // Scroll duration (seconds)
  easing: (t) => 1 - Math.pow(1 - t, 3), // Easing function
  direction: 'vertical', // 'vertical' | 'horizontal'
  gestureDirection: 'both', // Mouse/touch gesture control
  mouseSensitivity: 1, // Sensitivity for wheel scrolling
  touchSensitivity: 2, // Sensitivity for touch scrolling
  infinite: false // Infinite scrolling
});
// gsap.registerPlugin(ScrollTrigger, SplitText);

// Split the text into lines
// const split = new SplitText("#p6", { type: "lines chars" });
// const lines = split.chars;
// gsap.from(lines, {
//   scrollTrigger: {
//     trigger: ".s2",
//   top: "top 60%",
//   end:"top 0%",
//     scrub: 1,},
//     y:80,
//     duration:1,ease:"circ.inout",
//   })
 gsap.to(".s4img",{
    x:-40,duration:3,ease:"back.inout",
    scrollTrigger:{
        trigger:".s4lft",
        start:"top 10%",
        end:"top 0%",
        scrub:1,
    }
 })
 gsap.registerPlugin(ScrollTrigger);
 gsap.to(".lm",{
    x:-300,duration:1,ease:"back.inout",rotate:-20,
    scrollTrigger:{
        trigger:".lm",
        start:"top 30%",
        end:"top 0%",
        scrub:1,
    }
 })
 gsap.registerPlugin(ScrollTrigger);
 gsap.to(".rm",{
    x:300,duration:1,ease:"back.inout",
    scrollTrigger:{
        trigger:".rm",
        start:"top 30%",
        end:"top 0%",
        scrub:1,
    }
 })
 gsap.from("nav h3",{
    y:-50,ease:"back.out",
    stagger:{
      each:.5,
      from:"start",
    }
 })
 gsap.from("#s",{
    y:30,ease:"power4.out",opacity:0,duration:4,
 })