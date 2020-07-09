$(document).ready(function () {
    // hide pre-loader after page finish loading
    $(".mask").css("display", "none");
    $("#intro-loader").css("display", "none");
    //nav bar on load
    if ($(window).scrollTop() > 0) {
        $(".navbar").addClass("darken");
        $(".navbar").addClass("minified");
    } else {
        $(".navbar").removeClass("darken");
        $(".navbar").removeClass("minified");
    }
    // nav bar on scroll
    $(window).scroll(function(){
        var page_top = $(this).scrollTop();
        if (page_top > 0) {
            $(".navbar").addClass("darken");
            $(".navbar").addClass("minified");
        } else {
            $(".navbar").removeClass("darken");
            $(".navbar").removeClass("minified");
        }
    });
    // Open menu on phone
    $(".navbar-toggle").click(function () {
        if ($(".navbar-toggle").hasClass("navbar-toggle-active")) {
            $(".navbar-toggle").removeClass("navbar-toggle-active")
            $("#my-nav").addClass("collapse");
            $("#my-nav").removeClass("in");
            return false;
        }
        $(".navbar-toggle").addClass("navbar-toggle-active")
        $("#my-nav").removeClass("collapse");
        $("#my-nav").addClass("in");
    });
    //home backgrounds
    var slideTimer = setInterval(nextSlide,3000);
    $(".next-button").click(function () {
        clearInterval(slideTimer);
        nextSlide();
        slideTimer = setInterval(nextSlide,3000);
    });
    $(".prev-button").click(function () {
        clearInterval(slideTimer);
        prevSlide();
        slideTimer = setInterval(nextSlide,3000);
    });
    function nextSlide (){
        if ($("li.home-bg-slide:last-child").hasClass("active-slide")) {
            $("li.home-bg-slide:last-child").removeClass("active-slide");
            $("li.home-bg-slide:first-child").addClass("active-slide");
            return false;
        }
        $("li.home-bg-slide:first-child").removeClass("active-slide");
        $("li.home-bg-slide:last-child").addClass("active-slide");
    };
    function prevSlide(){
        if ($("li.home-bg-slide:first-child").hasClass("active-slide")) {
            $("li.home-bg-slide:first-child").removeClass("active-slide");
            $("li.home-bg-slide:last-child").addClass("active-slide");
            return false;
        }
        $("li.home-bg-slide:last-child").removeClass("active-slide");
        $("li.home-bg-slide:first-child").addClass("active-slide");
    };
});