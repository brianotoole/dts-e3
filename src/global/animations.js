// Animations
// uses GSAP (TweenMax) + ScrollMagic

import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import TweenMax from "gsap/src/uncompressed/TweenMax";
import TimelineMax from "gsap/src/uncompressed/TimelineMax";

// ScrollMagic init controller
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

// Fade in each card list item
var cardItem = $(".card-list .card");
cardItem.each(function() {
  //build tween
  var tween = TweenMax.from($(this), 1, {
    autoAlpha: 0,
    //scale: 0.95,
    y: "+=10",
    ease: Power1.easeOut
  });
  //build scene
  var projectScene = new ScrollMagic.Scene({
    //scene options
    triggerElement: this,
    triggerHook: 0.8,
    reverse: false //dont repeat scene on scroll back up
  })
    .setTween(tween) //trigger tween
    //.addIndicators({name: 'tween:module',}) //DEBUG ONLY; uses plugin
    .addTo(controller);
});
