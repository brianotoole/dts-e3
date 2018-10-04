// Popover

$(document).ready(function() {
  var popover = $('.popover');
  $('#js-popover').on('click', function () {
    popover.toggleClass('in');
    var isOpen = popover.hasClass('in');
    if (isOpen) {
      popover.addClass('in');
      popover.removeClass('out');
    } else {
      popover.addClass('out');
      popover.removeClass('in');
    }
  });
});
