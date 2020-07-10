$(document).ready(function () {
    // mega menu
    $("ul.catagories li").hover(function(){
        var category_id = $(this).data('catagory');
        $(".catagories_content").removeClass('active');
        $("#" + category_id).addClass('active');
    });
    // search form
    $("a.search_icon").click(function () {
        event.preventDefault();
        $(".search_form").addClass('active_form');
    })
    $(".close_button").click(function () {
        $(".search_form").removeClass('active_form');
    })
    // fixed menu when scroll and hide back to top button when reach top
    if ($(window).scrollTop() == 0) {
        $(".back_to_top").addClass("deactivate_button");
    }
    $(window).scroll(function(){
        var page_top = $(this).scrollTop();
        if (page_top > 0) {
            $("nav.menu_bar").addClass('triggerd_menu');
            $(".back_to_top").removeClass("deactivate_button");
        } else if (page_top == 0) {
            $("nav.menu_bar").removeClass('triggerd_menu');
            $(".back_to_top").addClass("deactivate_button");
        }
    });
    // fixed menu when load
    if ($(window).scrollTop() > 0) {
        $("nav.menu_bar").addClass('triggerd_menu');
    }
    // clicked masonry
    $(".filter_masonry").click(function(){
        event.preventDefault();
        $(".filter_masonry").removeClass("active_masonry");
        $(this).addClass("active_masonry");
    });
    // back to top button
    $(".back_to_top").click(function(){
        $('html, body').animate({
            scrollTop : 0
        },800);
    });
    // isotope
    $("ul.item_list").isotope({
        itemSelector : 'li.item',
        layoutMode: 'fitRows'                                                
    });
    $("a.filter_masonry").click(function (){
        var category = $(this).data('filter');
        $("ul.item_list").isotope({ filter : "." + category });
    });
});