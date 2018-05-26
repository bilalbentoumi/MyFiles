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


$('.timeago').each(function(){
    var e = $(this);
	setTimeAgo(e);
});
