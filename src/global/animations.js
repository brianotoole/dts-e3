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

// Stagger News Items
// when scrolled to triggerElement return a tween to timeline
function staggerCardItems() {
  var newsScene = new ScrollMagic.Scene({
    //scene options
    triggerElement: this,
    triggerHook: 0.9,
    reverse: false
  })
    .setTween(tl)
    //.addIndicators() //debug only
    .addTo(controller);
  return tl.staggerFrom(
    cardItem,
    0.5,
    { y: 5, autoAlpha: 0, ease: Power1.easeOut },
    0.2
  );
}

// On ready
$(function() {
  // If has items
  if ($(".card-list").length > 0) {
    staggerCardItems();
  }
});

var navFooterItem = $(".nav-footer .nav__btns a");
navFooterItem.click(function() {
  $(this).addClass("active");
});
