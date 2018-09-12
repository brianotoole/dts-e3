/*********************************************************
  Main.js = main js entry point
*********************************************************/
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
import 'popper.js';
import 'bootstrap';


import './main.scss';

$(window).scroll(function() {
  var hT = $('#js-scroll-to').offset().top,
      hH = $('#js-scroll-to').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
   console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    alert('you have scrolled to the h1!');
  }
});
