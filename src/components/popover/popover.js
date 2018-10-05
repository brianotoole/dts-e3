// Popover

$(document).ready(function() {
  var popover = $('.popover');
  $('#js-popover').on('click', function () {
    popover.toggleClass('in');
    var isOpen = popover.hasClass('in');
    if (isOpen) {
      popover.toggleClass('in out');
    }
  });
});
