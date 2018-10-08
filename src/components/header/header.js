// Header fixed scroll

$(document).ready(function() {
  // Header
  var fixedHeader = $(".header");
  var profile = $(".page-body__header .profile");
  var targetHeader = $(".page-body__header");
  var imageIcon = $(".page-body__header .profile__header .card-image-icon");
  var imageIconHeight = imageIcon.outerHeight();
  var targetHeaderBgColor = targetHeader.css("backgroundColor"); // returns rgba value: rgb(234, 140, 42)
  var targetHeaderHeight = targetHeader.outerHeight();

  // Profile image
  var targetProfileImage = $(".page-body__header .profile__img");
  var targetProfileImageHeight = targetProfileImage.outerHeight();

  $(document).scroll(function(e) {
    var scrollPercent =
      (targetHeaderHeight - window.scrollY) / targetHeaderHeight;
    if (scrollPercent >= 0.9) {
      //target.css('opacity', scrollPercent);
      //targetHeader.css('background-color', targetRGBString + ',' + scrollPercent);
    }
    var scrollPercent =
      (targetProfileImageHeight - window.scrollY) / targetProfileImageHeight;
      var scrollPixels = window.scrollY - targetProfileImageHeight;
    if (scrollPercent >= 0.5) {
      fixedHeader.removeClass("header-fixed");
      profile.removeClass("push-up");
      //targetProfileImage.css("transform", "scale(" + scrollPercent + ")");
      //imageIcon.css("margin-left", 55 + scrollPixels++);
      //imageIcon.css("transform", "scale(" + scrollPercent + ")");
    } else {
      fixedHeader.addClass("header-fixed");
      profile.addClass("push-up");
    }
  });
});
