$(document).ready(function () {
    // Morphext for menu
    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "flipInX",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
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
    // highlight section when scroll to it
    if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= $(window).height()) {
        $('a.back_to_top').addClass('active_section');//home page nav is always highlighted after page finish loading
    }
    $(window).scroll(function() {
        var position = $(this).scrollTop() + 75;
        $('section').each(function() {
            var target = $(this).offset().top;
            var id = $(this).attr('id');
            if (position >= target) {
                $('a.nav_link').removeClass('active_section');
                $("[href='#"+id+"']").addClass('active_section'); //find the id of each target section then when scroll to them, the link that has href = #id will be highlighted
            }
            if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= $(window).height()) {//highlight home page after scroll back to top
                $('a.nav_link').removeClass('active_section');
                $('a.back_to_top').addClass('active_section');
            } else {$('a.back_to_top').removeClass('active_section');}
        });
    });
    //back to top button
    $(".back_to_top").on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: '0' //scroll top position of the selected section
        }, "slow");
        }
    );
    // slide for gallery
    var gallery = document.getElementsByClassName('gallery_img'),
        galerry_translate_index = 0, //this will be add or subtract the width of a img then plug into translateX, depeding on which button is clicked
        galerry_active = document.getElementsByClassName('active');
    
    $('button').click(function () {
        var button_class = this.classList; //Determine the class of the clicked button - prev or next
        if (button_class[0] == "next") {
            $('button.prev').removeClass('disable'); //once a button is clicked, the other will remove class disable
            if (gallery[gallery.length-1].classList[1] == 'active') {
                return false; //if the slide reach final img, that img will have class active and when that happened, that button cannot be clicked
            }
            galerry_translate_index = galerry_translate_index - 269.8;
            galerry_active[galerry_active.length-1].nextElementSibling.classList.add('active'); //the next slide comes into the screen wil be added active class
            galerry_active[0].classList.remove('active'); //the slide exists the screen will be removed active class
            if (gallery[gallery.length-1].classList[1] == 'active') {
                $('button.next').addClass('disable'); //at the end or the start of the slide, the next or prev button will be disable
            }
        } else {
            $('button.next').removeClass('disable');
            if (gallery[0].classList[1] == 'active') {
                return false;
            }
            galerry_translate_index = galerry_translate_index + 269.8;
            galerry_active[0].previousElementSibling.classList.add('active');
            galerry_active[galerry_active.length-1].classList.remove('active');
            if (gallery[0].classList[1] == 'active') {
                $('button.prev').addClass('disable');
            }
        }
        $('.gallery_content_wrapper').css({'transform': 'translateX(' + galerry_translate_index + 'px)'});
    });
    // counter and parallax background
    $(window).scroll(testScroll);
    var viewed_counter = false;
    // Determine when element is visible in browser window
    function scrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop(); //top of browser window
        var docViewBottom = docViewTop + $(window).height(); //bottom of browser window
        var elemTop = $(elem).offset().top; //top of element
        var elemBottom = elemTop + $(elem).height(); //bottom of element
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)); //return the value when element is inside browser window
    }
    // Determine when element is outside browser window
    function scrolledVisibleView(elem) {
        var docViewTop = $(window).scrollTop(); //top of browser window
        var docViewBottom = docViewTop + $(window).height(); //bottom of browser window
        var elemTop = $(elem).offset().top; //top of element
        var elemBottom = elemTop + $(elem).height(); //bottom of element
        return ((elemBottom <= docViewBottom) || (elemTop >= docViewTop)); //return the value when element is outside browser window
    }
    //counter
    function testScroll() {
        if (scrolledIntoView($("#counter")) && !viewed_counter) { //if the counter start enter browser window and not view yet then start run counter
            viewed_counter = true; //being viewed
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                    }, {
                        duration: 1500,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now)); //round up the data number
                        }
                });
            });
        }
        if (scrolledVisibleView($("#parallax_video"))) {
            $('img.parallax_img_background').css({"bottom": (($(window).scrollTop()-$("#parallax_video").offset().top)/3) + 'px'});
        }
    }
    // popup video
    $("a.popup_video").click(function() {
        event.preventDefault();
        $(".popup_video_section").css({"display" : "block"});
    });
    $(".close_popup").click(function() {
        $(".popup_video_section").css({"display" : "none"});
    });
});