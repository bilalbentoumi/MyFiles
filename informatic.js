/* Toggle Navbar */
function toggleNav() {
    $('.toggle').toggleClass('show');
    $('#toggle-btn').toggleClass('change');
    $('body').toggleClass('hide');
}

/* Toggle Dropdown */
function toggleDropdown(btn, dropdown) {
    $(btn).toggleClass('dropdown-active');
    $(dropdown).toggleClass('dropdown-visible');
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

/* Fix Comment Author Picture */
$(function(){
	$('.avatar-image-container img').each(function(){
		var e = $(this);
		e.attr('src', e.attr('src').replace('/s35', '/s60'));
	});
});

/* Time Ago */
function timeAgo(date) {
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var interval = Math.floor(seconds / 31536000);
    
    // Years
    if (interval >= 1) {
        if (interval == 1) {
            return "منذ سنة";
        } else if (interval == 2) {
            return "منذ سنتين";
        } else if (interval <= 10) {
            return "منذ " + interval + " سنوات";
        } else {
            return "منذ " + interval + " سنة";
        }
    }

    // Months
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        if (interval == 1) {
            return "منذ شهر";
        } else if (interval == 2) {
            return "منذ شهرين";
        } else if (interval <= 10) {
            return "منذ " + interval + " أشهر";
        } else {
            return "منذ " + interval + " شهر";
        }
    }

    // Days
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        if (interval == 1) {
            return "منذ يوم";
        } else if (interval == 2) {
            return "منذ يومين";
        } else if (interval <= 10) {
            return "منذ " + interval + " أيام";
        } else {
            return "منذ " + interval + " يوم";
        }
    }

    // Hours
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        if (interval == 1) {
            return "منذ ساعة";
        } else if (interval == 2) {
            return "منذ ساعتين";
        } else if (interval <= 10) {
            return "منذ " + interval + " ساعات";
        } else {
            return "منذ " + interval + " ساعة";
        }
    }

    // Minutes
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        if (interval == 1) {
            return "منذ دقيقة";
        } else if (interval == 2) {
            return "منذ دقيقتين";
        } else if (interval <= 10) {
            return "منذ " + interval + " دقائق";
        } else {
            return "منذ " + interval + " دقيقة";
        }
    }

    // Seconds
    return "منذ " + Math.floor(seconds) + " ثانية";
}

function setTimeAgo(e) {
    var date = e.attr("title");
    e.html(timeAgo(date));

    setTimeout(function(){
        setTimeAgo(e);
    }, 60000);
}

$(function(){
	$('.timeago').each(function(){
	    var e = $(this);
		setTimeAgo(e);
	});
});

/* Sticky Widget */
$(function(){
    if ($('#HTML1').length) { // Check if widget exsits
        var sticky = $('#HTML1');
        var container = $('.main-wrapper');
        var sidebar = $('.sidebar');

        var stickyTop = sticky.offset().top;
        var stickyHeight = sticky.height();
        var stickyWidth = sticky.width();
        var sidebarHeight = sidebar.height();
        var sidebarElementsHeight = 0;
        sidebar.children().each(function(){
            sidebarElementsHeight = sidebarElementsHeight + $(this).height();
        });
        var containerBottom = container.offset().top + container.height();

        $(window).scroll(function(){
            var limit = containerBottom - stickyHeight - 60;
            var windowTop = $(window).scrollTop();

            if ((stickyTop - 80) < windowTop && sidebarHeight > (sidebarElementsHeight + 60)){
                sticky.css({ position: 'fixed', top: 80, width: stickyWidth });
            } else {
                sticky.css('position','static');
            }

            if (limit < windowTop) {
                var diff = limit - windowTop + 80;
                sticky.css({top: diff});
            }
        });
    }
});

/* Get RSS Posts */
function getPosts() {
	var posts;
	var dara_url = "https://www.googleapis.com/blogger/v3/blogs/6634912471318911972/posts?key=AIzaSyAkhAVRoHk3jGgsJ4_yqQQXOmPRIVeioAs&fetchImages=true";

	$.ajax({
		url: dara_url,
		dataType: 'json',
		async: false,
		success: function(data) {
			posts = data['items'];
		}
	});

	return posts;
}		

/* Initialize Slideshow */
function initSlideshow() {
	var posts = getPosts();
	for (var i = 0; i < posts.length; i++) {
		var post = posts[i];
		var postTitle = posts[i].title;
		var postLink = posts[i].url;
		var postAuthor = posts[i].author.displayName;
		var postAuthorPic = posts[i].author.image.url;
		var postImage = post.images[0].url;
		/* Slideshow */
		$("#slideshow").append("<div class='slide'><img class='slide-image' src='" + postImage + "'><div class='slide-overlay'></div><a href='" + postLink + "' class='slide-link'><h2 class='slide-title'>" + postTitle + "</h2></a></div>");
	}

	$('#slideshow').owlCarousel({
		rtl:true,
		nav:true,
		navText: ['<i class="fa fa-chevron-right"></i>', '<i class="fa fa-chevron-left"></i>'],
		dots:false,
		loop:true,
		items:1
	});
}

/* Initialize Post Header */
function initPostHeader(title, img_url) {
	$('.post-title').html(title);
	$('.post-image').attr('src', img_url);
}
