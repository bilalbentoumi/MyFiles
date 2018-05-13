function toggleNav() {

            if ($('.toggle').hasClass('show')) {
                toggle('.wrapper', 'hide');
                $(window).scrollTop(parseInt($('#scroll_position').val()));
            } else {
                $('#scroll_position').val($(window).scrollTop());
                setTimeout(function(){
                    toggle('.wrapper', 'hide');
                }, 1000);
            }

            toggle('.toggle', 'show');

        }

        function toggle(e, c) {
            $(e).toggleClass(c);
        }

        $(window).scroll(function(){
          var sticky = $('.navbar'),
              scroll = $(window).scrollTop();

          if (scroll >= 100)
    		sticky.addClass('navbar-dark');
          else
    		sticky.removeClass('navbar-dark');
        });

        if (screen.width <= 991) {
            $('.toggle').height(screen.height - $('.navbar-header').outerHeight());
        }

        window.onresize = function(event) {
    		if (screen.width <= 991) {
            	$('.toggle').height(screen.height - $('.navbar-header').outerHeight());
                if ($('.toggle').hasClass('show'))
                    $('.wrapper').addClass('hide');
            } else {
                $('.toggle').height('auto');
                $('.wrapper').removeClass('hide');
            }
        };

        window.onscroll = function(event) {
    		if (screen.width <= 991) {
            	$('.toggle').height(screen.height - $('.navbar-header').outerHeight());
            } else {
                $('.toggle').height('auto');
            }
        };

        $(".social").hover(function() {
            $(this).addClass('social-focus').siblings().addClass('social-sib');
        }, function() {
            $(this).removeClass('social-focus').siblings().removeClass('social-sib');
        });
