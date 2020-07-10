$(document).ready(function () {
    tl = new TimelineMax;
    tl.from($(".heading h1"),1,{scale : 3, opacity : 0, ease : "expo.out"})
        .from($(".column p"),1,{x : -100, opacity : 0},"+=0.5")
        .from($(".column .trigger_event"),1,{x : 100, opacity : 0, stagger : 0.25},"+=0.5");

    $("button.trigger_event").click(function () {
        var modal_id = $(this).data("modal");
        $("#" + modal_id).addClass("modal_show");
        $(".overlay").addClass("modal_show");
    });
    $("button.close, .overlay").click(function() {
        $(".modal").removeClass("modal_show");
        $(".overlay").removeClass("modal_show");
    });
});