// Cursor pet
$(window).mousemove(function (e) {
    $('.cursor')
        .eq(0)
        .css({
            left: e.pageX,
            top: e.pageY
        });
    setTimeout(function () {
        $('.cursor')
            .eq(1)
            .css({
                left: e.pageX,
                top: e.pageY
            });
    }, 180);
})

$("a, input, .hover").mouseover(function () {
    var cssSelector = anime({
        targets: '.pet',
        scale: 1.7,
        easing: 'easeOutExpo',
    });

});

$("a, input, .hover").mouseout(function () {
    var cssSelector = anime({
        targets: '.pet',
        scale: 1,
        easing: 'easeOutExpo',
    });
});

//smooth scroll
$('.smooth-scroll').on("click", function () {
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 90
    }, 1000);
    return false;
});