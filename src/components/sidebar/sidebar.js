// Sidebar panel navigation

$(function () {
    $('#js-sidebar-toggle').click(function () {
        $('body').toggleClass('out');
        $('sidebar-fixed-top').toggleClass('out');
        if ($('body').hasClass('out')) {
            $(this).focus();
        } else {
            $(this).blur();
        }
    });
});

$(document).click(function (e) {
    if (!$(e.target).closest('.sidebar-collapse, #js-sidebar-toggle').length && $('body').hasClass('out')) {
        e.preventDefault();
        $('#js-sidebar-toggle').trigger('click');
    }
}).keyup(function (e) {
    if (e.keyCode == 27 && $('body').hasClass('out')) {
        $('#js-sidebar-toggle').trigger('click');
    }
});