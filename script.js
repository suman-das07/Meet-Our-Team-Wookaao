function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init();

var btn=document.querySelector("button");

btn.addEventListener("click", function(){
    window.open("https://www.wookaao.com/")
})

btn.addEventListener("mouseenter",function(){
    btn.style.backgroundColor="rgb(11, 167, 223)";
    btn.style.color="black";
})
btn.addEventListener("mouseleave",function(){
    btn.style.backgroundColor="white";
    btn.style.color="black";
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".nav",
    scroller: ".main",
    // markers: true,
    start: "top -19%",
    end: "top -11%",
    scrub: 3
  }
})
.to(".nav", {
  backgroundColor:"rgba(0, 0, 0, 0.3)",
  backdropFilter:"blur(10px)",
  duration: 0.3,
}, 0) 
// .to("button", {
//   backgroundColor: "black",
//   color: "white",
//   duration: 0.3
// },0); 

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers:true,
    start: "top 30%",
    end: "top 0%",
    scrub: 2
  }
});

tl.fromTo("#left", { x: 0 }, { x: -250, ease:"power1.out"}, 0)
  .fromTo("#right", { x: 0 }, { x: 250, ease:"power1.out" }, 0);
