document.addEventListener("DOMContentLoaded", function(){
    var img_container = document.getElementsByClassName("img_container");
    var toggle = document.getElementsByClassName("toggle");
    var status = "off";

    for (let i = 0; i < img_container.length-1; i++) {
        toggle[i].onclick = function(){
            var effect = this.getAttribute("data-effect");
            img_container[i].classList.toggle(effect);
        }
    }
    toggle[toggle.length-1].onclick = function(){
        var last_effect = this.getAttribute("data-effect");
        if (status == "off") {
            img_container[img_container.length-1].classList.add(last_effect);
            img_container[img_container.length-1].classList.remove('return_normal');
            status = "on";
        } else if (status == "on") {
            img_container[img_container.length-1].classList.remove(last_effect);
            img_container[img_container.length-1].classList.add('return_normal');
            status = "off";
        }
    }
},false)