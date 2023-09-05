'use strict';



/*Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/*PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/*MOBILE NAV TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);



/*HEADER
 * 
 * active header when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);



//js logic for custom cursor 
let crsr = document.querySelector("#cursor")
let crsrblr = document.querySelector("#cursorblur")

document.addEventListener("mousemove", function(sets){
      crsr.style.left = sets.x + "px"
      crsr.style.top= sets.y +"px"
      crsrblr.style.left = sets.x - 200 + "px"
      crsrblr.style.top= sets.y - 200 +"px"
})


// nav bar scrool down scrool up effect logic code 
gsap.to("#nav", {
    backgroundColor : "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger:"#nav",
        scroller: "body",
        // markers: true
        start: "top -10%" ,
        end : "top -11%",
        scrub : 1
    }
 })

// scroll down colour fade effect gsap logic 

 gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top 25%" ,
        end: "top -70%",
        scrub : 1
    }
 })