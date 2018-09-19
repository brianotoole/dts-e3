// Header fixed scroll

$(document).ready(function() {
  // Header
  var fixedHeader = $(".header");
  var profile = $(".page-body__header .profile");
  var targetHeader = $(".page-body__header");
  var targetHeaderBgColor = targetHeader.css("backgroundColor"); // returns rgba value: rgb(234, 140, 42)
  var targetHeaderHeight = targetHeader.outerHeight();

  // Profile image
  var targetProfileImage = $(".page-body__header .profile__img");
  var targetProfileImageHeight = targetProfileImage.outerHeight();

  // we need value without precentage (4th match)
  var convertToRGB = getRGBValue(targetHeaderBgColor);
  var targetRGBString =
    "rgba(" +
    convertToRGB.red +
    "," +
    convertToRGB.green +
    "," +
    convertToRGB.blue;
  //console.log(convertToRGB.red, convertToRGB.green, convertToRGB.blue);

  $(document).scroll(function(e) {
    var scrollPercent =
      (targetHeaderHeight - window.scrollY) / targetHeaderHeight;
    if (scrollPercent >= 0.9) {
      //target.css('opacity', scrollPercent);
      //targetHeader.css('background-color', targetRGBString + ',' + scrollPercent);
    }
    var scrollPercent =
      (targetProfileImageHeight - window.scrollY) / targetProfileImageHeight;
    if (scrollPercent >= 0.5) {
      fixedHeader.removeClass("header-fixed");
      profile.removeClass("push-up");
      targetProfileImage.css("transform", "scale(" + scrollPercent + ")");
    } else {
      fixedHeader.addClass("header-fixed");
      profile.addClass("push-up");
    }
  });
});

function getRGBValue(str) {
  var match = str.match(
    /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
  );
  return match
    ? {
        red: match[1],
        green: match[2],
        blue: match[3]
      }
    : {};
}
