$(document).ready(function () {
    var menu_top = $(".menu").offset().top,
        menu_bottom = menu_top + $(".menu").height(),
        viewed_column = false,
        one_fourth_column_content_top = $(".intro .one_fourth_column_content_wrapper").offset().top,
        one_fourth_column_content_bottom = one_fourth_column_content_top + $(".intro .one_fourth_column_content_wrapper").height(),
        viewed_appointment = false,
        appointment_top = $("a.appointment").offset().top,
        appointment_bottom = appointment_top + $("a.appointment").height(),
        viewed_fact_column = false;
        fact_column_top = $(".fact .one_third_column_content").offset().top,
        fact_column_bottom = fact_column_top + $(".fact .one_third_column_content").height(),
        viewed_fact_title = false,
        fact_title_top = $(".fancy_heading_line").offset().top,
        fact_title_top_bottom = fact_title_top + $(".fancy_heading_line").height(),
        viewed_heart_rate = false,
        heart_rate_top = $("img.heart_rate").offset().top;
        heart_rate_bottm = heart_rate_top + $("img.heart_rate").height();

    // Effect when load and view immediately
    // fixed menu
    if ($(window).scrollTop() >= menu_bottom) {
        $(".menu_bar").addClass("fixed_menu");
    } else if ($(window).scrollTop() < menu_bottom) {
        $(".menu_bar").removeClass("fixed_menu");
    }
    // zoom in animation for intro section's columns
    if ((one_fourth_column_content_top >= $(window).scrollTop() && ($(window).scrollTop() + $(window).height())>= one_fourth_column_content_bottom) && (!viewed_column)) {
        viewed_column = true;
        $(".intro .one_fourth_column_content_wrapper").addClass("zoom_in");
    }
    // bounce in animation for intro section's appointment button
    if ((appointment_top >= $(window).scrollTop() && ($(window).scrollTop() + $(window).height())>= appointment_bottom) && (!viewed_appointment)) {
        viewed_appointment = true;
        $("a.appointment").addClass("bounce_in");
    }
    // zoom in animation for fact section's title
    if ((fact_title_top >= $(window).scrollTop() && ($(window).scrollTop() + $(window).height())>= fact_title_top_bottom) && (!viewed_fact_title)) {
        viewed_fact_title = true;
        $(".fancy_heading_line").addClass("fadein_up");
    }
    // zoom in animation for fact section's columns
    if ((fact_column_top >= $(window).scrollTop() && ($(window).scrollTop() + $(window).height())>= fact_column_bottom) && (!viewed_fact_column)) {
        viewed_fact_column = true;
        $(".fact .one_third_column_content").addClass("zoom_in");
    }
    // bounce in animation for team section's appointment img
    if ((heart_rate_top >= $(window).scrollTop() && ($(window).scrollTop() + $(window).height())>= heart_rate_bottm) && (!viewed_heart_rate)) {
        viewed_heart_rate = true;
        $("img.heart_rate").addClass("bounce_in");
    }

    // Effect when scroll to section
    $(window).scroll(function () {
        var doc_top = $(window).scrollTop();
        var doc_bottom = doc_top + $(window).height();
        // fixed menu
        if (doc_top >= menu_bottom) {
            $(".menu_bar").addClass("fixed_menu");
        } else if (doc_top < menu_bottom) {
            $(".menu_bar").removeClass("fixed_menu");
        }
        // zoom in animation for intro section's columns
        if ((one_fourth_column_content_top >= doc_top && doc_bottom >= one_fourth_column_content_bottom) && (!viewed_column)) {
            viewed_column = true;
            $(".intro .one_fourth_column_content_wrapper").addClass("zoom_in");
        }
        // bounce in animation for intro section's appointment button
        if ((appointment_top >= doc_top && doc_bottom >= appointment_bottom) && (!viewed_appointment)) {
            viewed_appointment = true;
            $("a.appointment").addClass("bounce_in");
        }
        // zoom in animation for fact section's title
        if ((fact_title_top >= doc_top && doc_bottom >= fact_title_top_bottom) && (!viewed_fact_title)) {
            viewed_fact_title = true;
            $(".fancy_heading_line").addClass("fadein_up");
        }
        // zoom in animation for fact section's columns
        if ((fact_column_top >= doc_top && doc_bottom >= fact_column_bottom) && (!viewed_fact_column)) {
            viewed_fact_column = true;
            $(".fact .one_third_column_content").addClass("zoom_in");
        }
        // bounce in animation for team section's appointment img
        if ((heart_rate_top >= doc_top && doc_bottom >= heart_rate_bottm) && (!viewed_heart_rate)) {
            viewed_heart_rate = true;
            $("img.heart_rate").addClass("bounce_in");
        }
    });

    // back to top
    $("a.back_to_top").click(function(){
        event.preventDefault();
        $('html, body').animate({
            scrollTop : '0'
        },800);
    });
});