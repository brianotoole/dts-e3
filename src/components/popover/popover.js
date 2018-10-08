// Popover

$(document).ready(function () {
  var popover = $('.popover');
  $('#js-popover').on('click', function () {

    var isOpen = popover.hasClass('in');

    if (isOpen) {
      popover.removeClass('in').addClass('out');
      $("html, body").animate({ scrollTop: 0 }, "slow");
    } else {
      popover.removeClass("out").addClass("in");
      $("html, body").animate({ scrollTop: popover.offset().top - popover.outerHeight()}, "slow");
    }
  });

});
