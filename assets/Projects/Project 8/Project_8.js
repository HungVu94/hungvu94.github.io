$(document).ready(function () {
    // if the page is loaded and the view window is not on top, add effect to the nav bar
    if ($(window).scrollTop() > 0) {$(".nav_bar").addClass("fixed_nav");}
    // adding effect to nav bar when scroll
    $(window).scroll(function () {
        page_top = $(this).scrollTop();
        if (page_top > 0) {
            $(".nav_bar").addClass("fixed_nav");
        } else if (page_top == 0) {$(".nav_bar").removeClass("fixed_nav");}
        // highlight nav links when scroll to their correspond sections
        $("section").each(function () {
            var section_top = $(this).offset().top,
                section_id = $(this).attr('id'),
                section_first_top = $("section#services").offset().top;
            if (page_top >= section_top) {
                $("a.nav_link").removeClass("highligh_link");
                $("[href='#"+section_id+"']:not(.heading_btn)").addClass("highligh_link");
            } else if (page_top < section_first_top) {$("a.nav_link").removeClass("highligh_link");}
        })
    })
    // scrolling to section for menu
    $("a.nav_link").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top //scroll top position of the selected section
        }, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        }
    });
    // back to top
    $("a[href$='#page_top']").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    })
    // check if all boxes are filled before submit
    $(".submit_btn button").click(function () {
        $('#contact input').each(function () {
            if ($(this).val() === '') {
                $(this).next().addClass("alert");
            }
        })
        if ($('#contact textarea').val() === '') {
            $('#contact textarea').next().addClass("alert");
        }
    })
    // modals
    $("a.portfolio_link").click(function () {
        event.preventDefault();
        var modal_id = $(this).data("modal");
        $("#" + modal_id).addClass("show_modal");
        $('body').addClass("modal_open");
    })
    $(".close_modal, .modal_background, .modal_body button").click(function () {
        $('.modal_portfolio').removeClass("show_modal");
        $('body').removeClass("modal_open");
    })
});