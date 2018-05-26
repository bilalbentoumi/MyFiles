/* Toggle Navbar */
function toggleNav() {
    $('body').toggleClass('hide');
    $('.toggle').toggleClass('show');
}

/* Scroll Navbar */
$(window).scroll(function(){
    var sticky = $('.navbar'),
      scroll = $(window).scrollTop();

    if (scroll >= 100)
        sticky.addClass('navbar-dark');
    else
        sticky.removeClass('navbar-dark');
});
