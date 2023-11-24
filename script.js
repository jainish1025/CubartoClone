function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);


  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

}
init();


function page1Animation() {
  var t1 = gsap.timeline({
    duration: 1.1,
    stagger: 0.3,
  })

  t1.from("#page-1>#nav", {
    scale: 0,
    stagger: 1,
  })

  t1.from("#hero-content>h1", {
    y: "-100%",
    delay: 5,
  })
}


function page5Animation() {
  var t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-5",
      scroller: "#main",
      markers: true,
      start: "top 10%",
      end: "top -200%",
      scrub: 2,
      // pin: true,
    },
  });

  t2.to(".head", {
    transform: "translateX(-100%)",
  });

}





function page5SocialLinks(){
  var elems = document.querySelectorAll(".marquee-item");
  elems.forEach(function (elem) {
    var index = 0;


    // gsap.to(elem[index], {
    //   x: "-=100%",
    //   ease: Expo.easeInOut,
    //   duration: 1,
    //   onComplete: function () {
    //     gsap.set(this._targets[0], {
    //       x: "100%",
    //     });
    //     animating = false;
    //   },
    // });

    index === elem.length - 1 ? (index = 0) : index++;


    // gsap.to(elem[index], {
    //   x: "-=100%",
    //   ease: Expo.easeInOut,
    //   duration: 1,
    // });

  });
}


function page6VideoGlitch(){
  let video = document.querySelector("#page-6>.glitch-video");
  let Hoverbtn = document.querySelector("#hero-btn");

  
Hoverbtn.addEventListener('mouseenter', function() {
  video.classList.add('glitch');
});

Hoverbtn.addEventListener('mouseleave', function() {
  video.classList.remove('glitch');
});

}


var follous = document.querySelectorAll(".head");

follous.forEach(function (elem) {
  var index = 0;
  index === elem.length - 1 ? (index = 0) : index++;
});


page1Animation();
page5Animation();
page5SocialLinks();
page6VideoGlitch();