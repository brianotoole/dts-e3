// Sidebar panel navigation

$(function() {
  $("#js-sidebar-toggle").click(function() {
    $("body").toggleClass("sidebar-active");
    $(".sidebar").toggleClass("sidebar-active");
    $(".overlay").toggleClass("sidebar-active");
    if ($("body").hasClass("sidebar-active")) {
      $(this).focus();
    } else {
      $(this).blur();
    }
  });
});

$(document)
  .click(function(e) {
    if (
      !$(e.target).closest(".sidebar-collapse, #js-sidebar-toggle").length &&
      $("body").hasClass("sidebar-active")
    ) {
      e.preventDefault();
      $("#js-sidebar-toggle").trigger("click");
    }
  })
  .keyup(function(e) {
    if (e.keyCode == 27 && $("body").hasClass("sidebar-active")) {
      $("#js-sidebar-toggle").trigger("click");
    }
  });
