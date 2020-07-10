$(document).ready(function () {
    // hide pre-loader after page finish loading
    $(".mask").css("display", "none");
    $("#intro-loader").css("display", "none");
    //init wow js
    new WOW().init();
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
    // scrolling to section for menu
    $("#my-nav a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        $('#my-nav li').removeClass('active');
        $('#my-nav li').has("a[href='"+hash+"']").addClass('active');
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
        // highlight section when page finish loading
    $('section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');
        if ($(window).scrollTop() >= target) {
            $('#my-nav li').removeClass('active');
            $('#my-nav li').has("a[href='#"+id+"']").addClass('active');
        }
    });
    $(window).scroll(function() {
        var position = $(this).scrollTop() + 75;
        $('section').each(function() {
            var target = $(this).offset().top;
            var id = $(this).attr('id');
            if (position >= target) {
                $('#my-nav li').removeClass('active');
                $('#my-nav li').has("a[href='#"+id+"']").addClass('active'); //find the id of each target section then when scroll to them, the link that has href = #id will be highlighted
            }
        });
    });
    // counter
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
        if (scrolledIntoView($(".number-counters")) && !viewed_counter) { //if the counter start enter browser window and not view yet then start run counter
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
    }
    // isotope
    $("#portfolio-items").isotope({
        itemSelector : 'article',
        layoutMode: 'fitRows'                                                
    });
    $("ul.portfolio-filter-list a").click(function (){
        event.preventDefault();
        $("ul.portfolio-filter-list a").removeClass('active');
        $(this).addClass('active');
        var category = $(this).data('cat');
        $("#portfolio-items").isotope({ filter : "." + category });
    });
    // Circliful
    $(window).scroll(viewChart);
    var viewed_chart = false;
    function viewChart (){
        if (scrolledIntoView($(".chart")) && !viewed_chart){
            viewed_chart = true;
            $(".chart").each(function(){
                var chart_percent = $(this).data('percent');
                $(this).circliful({
                    animationStep: 5,
                    foregroundBorderWidth: 5,
                    backgroundBorderWidth: 15,
                    foregroundColor: '#474d5d',
                    backgroundColor: '#f9f9f9',
                    foregroundBorderWidth: 20,
                    backgroundBorderWidth: 20,
                    percent: chart_percent
                });
            });
        }
    };
    // Progress bar
    $(window).scroll(viewBarChart);
    var viewed_bar = false;
    function viewBarChart (){
        if (scrolledIntoView($(".skillBar")) && !viewed_bar){
            viewed_bar = true;
            $(".skillBar span").each(function(){
                var chart_percent = $(this).data('width');
                $(this).animate({width : chart_percent},600, "swing");
            });
        }
    };
});