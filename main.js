// other pages animations
let tl2 = gsap.timeline();
let tl3 = gsap.timeline();
tl2.from(".about-content",{
  opacity:0,
  x:-150,
  duration:0.5,
})
tl2.from(".about-img",{
  opacity:0,
  x:150,
  duration:0.5,
})
gsap.from(".project-heading",{
  opacity:0,
  y:-80,
  duration:0.5,
})
gsap.from(".project-card",{
  opacity:0,
  x:-150,
  duration:0.5,
})
tl3.from(".contact-heading",{
  opacity:0,
  x:150,
  duration:0.3,
})
tl3.from(".contact-form",{
  opacity:0,
  x:-150,
  duration:0.3,
})




var typed = new Typed('#element', {
    strings: ['Web Developer', 'Quick Learner','Web Designer'],
    typeSpeed: 50,
  });
  // home page animations 
  let tl = gsap.timeline();
  
  tl.from(".nav",{
    y:-50,
    opacity:0,
    duration:0.5,
  })
  tl.from(".page1 .circle",{
    x:-150,
    opacity:0,
    duration:0.2,
  })
  tl.from(".page1 .content",{
    x:-150,
    opacity:0,
    duration:0.5,
  })
  tl.from(".page1 .img-container",{
    x:150,
    opacity:0,
    duration:0.5,
  })
  gsap.from(".page2-heading",{
    scale:0.7,
    opacity:0,
    y:50,
    scrollTrigger:{
      trigger:".page2-heading",
      scroller:"body",
      start:"top 90%",
      end:"top 110%",
    },
  })
  gsap.from(".bar-section1",{
    opacity:0,
    x:-100,
    scrollTrigger:{
      trigger:".bar-section1",
      scroller:"body",
      start:"top 70%",
      end:"top 110%",
    },
  })
  gsap.from(".bar-section2",{
    opacity:0,
    x:100,
    scrollTrigger:{
      trigger:".bar-section1",
      scroller:"body",
      start:"top 70%",
      end:"top 110%",
    },
  })