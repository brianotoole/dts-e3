/*********************************************************
  Main.js = main js entry point
*********************************************************/
import jquery from "jquery";
window.$ = window.jQuery = jquery;
import "popper.js";
import "bootstrap";

import "./main.scss";

// Header fixed scroll
(function ($) {
  var header = $(".header");
  var profile = $(".page-body__header .profile__header");
  var profileTop = profile.offset().top;
  var profileHeight = profile.outerHeight();
  var visible = false;

  $(window).scroll(function () {

    if ($(this).scrollTop() >= (profileTop + profileHeight)) {
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

})(jQuery);


(function ($) {
  var target = $('.page-body__header');
  var targetBgColor = target.css('backgroundColor'); // returns rgba value: rgb(234, 140, 42)
  var targetHeight = target.outerHeight();

  // we need value without precentage (4th match)
  var convertToRGB = getRGBValue(targetBgColor);
  var targetRGBString = 'rgba(' + convertToRGB.red + ',' + convertToRGB.green + ',' + convertToRGB.blue;
  console.log(targetRGBString);
  //console.log(convertToRGB.red, convertToRGB.green, convertToRGB.blue);

  $(document).scroll(function (e) {
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if (scrollPercent >= 0.1) {
      //target.css('opacity', scrollPercent);
      target.css('background-color', targetRGBString + ',' + scrollPercent);
    }
  });


})(jQuery);

function getRGBValue(str) {
  var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
  return match ? {
    red: match[1],
    green: match[2],
    blue: match[3]
  } : {};
}

