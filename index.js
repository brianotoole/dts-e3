/*********************************************************
  Main.js = main js entry point
*********************************************************/
import jquery from "jquery";
window.$ = window.jQuery = jquery;
import "popper.js";
import "bootstrap";

import "./main.scss";

// Header fixed scroll
jQuery("document").ready(function($) {
  var header = $(".header");
  var scrollToEl = $("#js-scroll-to");
  var visible = false;

  $(window).scroll(function() {

    if ($(this).scrollTop() >= scrollToEl.offset().top) {
      header.addClass("header-fixed");
      if (!visible) {
        visible = true;
      }
    } else {
      header.removeClass("header-fixed");
      if (visible) {
        visible = false;
      }
    }

  });

});