"use strict";gsap.registerPlugin(ScrollTrigger);var timeline=gsap.timeline({defaults:{duration:1.5}}),mobileButton=(timeline.from(".tag-title",{x:"-15%",opacity:0}).from(".h1",{x:"-15%",opacity:0},"<").from(".subtitle",{x:"-15%",opacity:0},"<"),AOS.init({duration:1e3,once:!0}),document.getElementById("js-menu-button")),btnPrimary=(mobileButton.addEventListener("click",function(){mobileButton.classList.toggle("is-active"),document.documentElement.classList.toggle("menu-opened")}),document.getElementById("js-btn-primary")),imgNotion=document.getElementById("img-notion");function changeImgWhite(){imgNotion.setAttribute("src","/img/icon-notion-white.svg")}function changeImgBlack(){imgNotion.setAttribute("src","/img/icon-notion-black.svg")}btnPrimary.addEventListener("mouseover",changeImgWhite),btnPrimary.addEventListener("mouseout",changeImgBlack);