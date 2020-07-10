document.addEventListener("DOMContentLoaded", function(){
    // Header - Slide - Menu
    var slides = document.getElementsByClassName("slides_content"),
        slides_bullet = document.getElementsByClassName("bullet");
    // Automatic slide
    var slides_index = 0;
    var time;
    slides_show();
    function slides_show() {
        for (let k = 0; k < slides.length; k++) {
            slides[k].classList.remove("active");
            slides[k].classList.remove("prev_active");
            slides_bullet[k].classList.remove("active_bullet");
        }
        slides_index++;
        if (slides_index > slides.length) {
            slides_index = 1;
        }
        slides_bullet[slides_index - 1].classList.add("active_bullet");
        slides[slides_index - 1].classList.add("active");
        if (slides[slides_index - 1].previousElementSibling == null) {
            slides[slides.length-1].classList.add("prev_active");
        } else{
            slides[slides_index - 1].previousElementSibling.classList.add("prev_active");
        }
        time = setTimeout(slides_show,4000);
    }
    //Turn slide on click
    for (let i = 0; i < slides.length; i++) {
        slides_bullet[i].onclick = function(){
            clearTimeout(time);
            for (let j = 0; j < slides_bullet.length; j++) {
                slides_bullet[j].classList.remove("active_bullet");
            }
            slides_bullet[i].classList.add("active_bullet");
            for (let j = 0; j < slides_bullet.length; j++) {
                slides[j].classList.remove("active");
                slides[j].classList.remove("prev_active");
            }
            slides[i].classList.add("active");
            if (slides[i - 1].previousElementSibling == null) {
                slides[slides.length-1].classList.add("prev_active");
            } else{
                slides[i - 1].previousElementSibling.classList.add("prev_active");
            }
            var index = i;
            slides_show();
            function slides_show() {
                for (let k = 0; k < slides.length; k++) {
                    slides[k].classList.remove("active");
                    slides[k].classList.remove("prev_active");
                    slides_bullet[k].classList.remove("active_bullet");
                }
                index++;                
                if (index > slides.length) {
                    index = 1;
                }
                slides_bullet[index - 1].classList.add("active_bullet");
                slides[index - 1].classList.add("active");
                if (slides[index - 1].previousElementSibling == null) {
                    slides[slides.length-1].classList.add("prev_active");
                } else{
                    slides[index - 1].previousElementSibling.classList.add("prev_active");
                }
                time = setTimeout(slides_show,4000);
            }
        }
    }
    // menu
    var icon = document.querySelector(".icon_menu"),
        menu = document.querySelector(".menu_content");
        nav_icon = document.querySelector(".nav_icon");
    nav_icon.onclick = function(){
        menu.classList.toggle("active_menu");
        nav_icon.classList.toggle("active_icon_menu");
    }
},false)