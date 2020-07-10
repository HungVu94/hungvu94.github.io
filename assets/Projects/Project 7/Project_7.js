$(document).ready(function () {
    tl = new TimelineMax({onComplete: loadContent});
    tl.from($(".loading_screen"),0.5,{opacity : 0})
        .from($(".loading_content"),1,{scale : 2, opacity : 0})
        .to($(".loading_content"),1,{scale : 0.3, ease : "bounce.out"})
        .to($(".loading_content"),1,{scale : 1, ease : "elastic.out(1, 0.3)"})
        .to($(".loading_content"),1,{scale : 7, opacity : 0, ease : "power1.out"})
        .to($(".loading_screen"),1,{x : "100%", ease: "power1.out"});

    function loadContent (){content_loading.play();}
    content_loading = new TimelineMax({paused:true});
    content_loading.from($("header span"),1,{y : 50, opacity : 0, ease : "bounce.out"})
        .from($("header h1"),1,{y : 50, opacity : 0, ease : "bounce.out"}, "+=0.5")
        .from($("header nav a"),1,{y : 50, opacity : 0, stagger : 0.25}, "+=0.5")
        .from($("section.buttonslide h2"),1,{x : -50, opacity : 0}, "+=0.5")
        .from($("section.buttonslide button.show_menu"),1,{x : -50, opacity : 0, stagger : 0.25}, "+=0.5")
        .from($("section.buttonset h2"),1,{x : 50, opacity : 0}, "+=0.5")
        .from($("section.buttonset button.show_menu"),1,{x : 50, opacity : 0, stagger : 0.25}, "+=0.5");
    
    $("button.showLeft").click(function () {
        $("button.show_menu").not(this).toggleClass("disable");
        $(this).toggleClass("active");
        $(".menu_left").toggleClass("slideLeft");
    });
    $("button.showRight").click(function () {
        $("button.show_menu").not(this).toggleClass("disable");
        $(this).toggleClass("active");
        $(".menu_right").toggleClass("slideRight");
    });
    $("button.showTop").click(function () {
        $("button.show_menu").not(this).toggleClass("disable");
        $(this).toggleClass("active");
        $(".menu_top").toggleClass("slideTop");
    });
    $("button.showBottom").click(function () {
        $("button.show_menu").not(this).toggleClass("disable");
        $(this).toggleClass("active");
        $(".menu_bottom").toggleClass("slideBottom");
    });
    $("button.showLeftPush").click(function () {
        $("button.show_menu").not(this).toggleClass("disable");
        $(this).toggleClass("active");
        $(".menu_left").toggleClass("pushLeft");
        $("body").toggleClass("pushLeftBody");
    });
    $("button.showRightPush").click(function () {
        $("button.show_menu").not(this).toggleClass("disable");
        $(this).toggleClass("active");
        $("body").toggleClass("pushRightBody");
        $(".menu_right").toggleClass("pushRight");
    });
});