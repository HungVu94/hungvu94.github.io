document.addEventListener("DOMContentLoaded", function(){
    var select_option = document.getElementById("slide_effects"),
        slide_effects = select_option.value, //Pre-selected option will apply effect to slide onload
        left_nav = document.querySelector(".left_nav"),
        right_nav = document.querySelector(".right_nav"),
        slide = document.querySelectorAll(".slides_wrapper ul.slide_content li"),
        slide_index = 0,
        status = "false"; //True mean slide's animation is running
    // If different type of effect is selected, the slide_effects will be the value of that option
    select_option.addEventListener("change", effectOption);
    function effectOption(){
        slide_effects = select_option.value;
        return slide_effects;
    }
    //Call function when either buttons are clicked;
    right_nav.addEventListener("click", showSlide);
    left_nav.addEventListener("click", showSlide);
    // Function for slide effect
    function showSlide(){
        var button = event.target.classList[0], //This will determine which button is pressed
            status_animation = 0,
            current_slide,
            follow_slide;
        if (status == "true") {return false} //Not allow to press any button until the slide effect is completed
        status = "true";
        for (let i = 0; i < slide.length; i++) {slide[i].classList.remove("active", "soft_scale_follow_slide_next", "soft_scale_current_slide_prev", "soft_scale_current_slide_next", "soft_scale_follow_slide_prev", "press_away_current_slide_next", "press_away_follow_slide_next", "press_away_current_slide_prev", "press_away_follow_slide_prev", "make_entrance_current_slide_next", "make_entrance_follow_slide_next", "make_entrance_current_slide_prev", "make_entrance_follow_slide_prev", "side_swing_current_slide_next", "side_swing_follow_slide_next", "side_swing_current_slide_prev", "side_swing_follow_slide_prev", "fortune_wheel_current_slide_next", "fortune_wheel_follow_slide_next", "fortune_wheel_current_slide_prev", "fortune_wheel_follow_slide_prev", "swipe_current_slide_next", "swipe_follow_slide_next", "swipe_current_slide_prev", "swipe_follow_slide_prev", "push_reveal_current_slide_next", "push_reveal_follow_slide_next", "push_reveal_current_slide_prev", "push_reveal_follow_slide_prev", "snap_in_current_slide_next", "snap_in_follow_slide_next", "snap_in_current_slide_prev", "snap_in_follow_slide_prev", "let_me_in_current_slide_next", "let_me_in_follow_slide_next", "let_me_in_current_slide_prev", "let_me_in_follow_slide_prev")} // Remove any class remain before add new class
        current_slide = slide[slide_index]; // Determine which is the slide that currently be viewed
        slide_index = (button == "right_nav") ? ((slide_index < slide.length-1) ? (slide_index + 1) : 0) : ((slide_index > 0) ? (slide_index - 1) : (slide.length - 1)); //slide index rule change according to the button pressed
        follow_slide = slide[slide_index];  // Determine which slide will receive effect
        current_slide.classList.add((button == "right_nav") ? (slide_effects + "_current_slide_next") : (slide_effects + "_current_slide_prev")); //classes will be added according to type of slide effects and which button is pressed
        follow_slide.classList.add((button == "right_nav") ? (slide_effects + "_follow_slide_next") : (slide_effects + "_follow_slide_prev"));
        current_slide.addEventListener("animationend",function(){
            status_animation++; //count how many animation has ended
            status = (status_animation == 2) ? ("false") : status; //check if the animations are completed, then allow to press next or prev
        })
        follow_slide.addEventListener("animationend",function(){
            status_animation++;
            status = (status_animation == 2) ? ("false") : status;
        })
    }
},false)