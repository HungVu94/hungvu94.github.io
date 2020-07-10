document.addEventListener("DOMContentLoaded",function(){
    var btn = document.getElementsByClassName("button"),
        side_bar = document.getElementsByClassName("sidebar"),
        main_page = document.querySelector('.main_page')
        layer = document.querySelector('.layer'),
        content = document.querySelector('.content')
    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function(){
            var effect_main_page = btn[i].getAttribute('data-effect'),
                effect_menu = side_bar[i].getAttribute('data-sidebar');
            content.classList.add('content_effect_' + i);
            layer.classList.add('effect_layer');
            side_bar[i].classList.add(effect_menu);
            main_page.classList.add(effect_main_page);
            layer.onclick = function(){
                content.classList.remove('content_effect_' + i);
                layer.classList.remove('effect_layer');
                side_bar[i].classList.remove(effect_menu);
                main_page.classList.remove(effect_main_page);
            }
        }
    }
},false)