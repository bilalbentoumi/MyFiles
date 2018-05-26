//var scroll_position = 0;

/* Toggle Navbar */
function toggleNav() {
    toggle('body', 'hide');
    toggle('.toggle', 'show');
}

/* Toggle Class */
function toggle(e, c) {
    $(e).toggleClass(c);
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

/* Social Icons Hover */
$(".social").hover(function() {
    $(this).addClass('social-focus').siblings().addClass('social-sib');
}, function() {
    $(this).removeClass('social-focus').siblings().removeClass('social-sib');
});
