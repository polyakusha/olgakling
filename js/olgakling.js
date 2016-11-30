$(document).ready(function() {
    //todo: сделать красивее код
    //image-sliders
    $("#lightSlider").lightSlider({
        item: 1,
        thumbItem: 0,
        gallery: false,
        pager: false
    });

    $("#lightSlider2").lightSlider({
        item: 1,
        thumbItem: 0,
        gallery: false,
        pager: false
    });

    $("#lightSlider3").lightSlider({
        item: 1,
        thumbItem: 0,
        gallery: false,
        pager: false
    });

    $("#lightSlider4").lightSlider({
        item: 1,
        thumbItem: 0,
        gallery: false,
        pager: false
    });

    $("#lightSlider5").lightSlider({
        item: 1,
        thumbItem: 0,
        gallery: false,
        pager: false
    });

    $("#lightSlider6").lightSlider({
        item: 1,
        thumbItem: 0,
        gallery: false,
        pager: false
    });

    $("#lightSlider7").lightSlider({
        item: 2,
        loop: true,
        adaptiveHeight:true,
        responsive: [
            {
                breakpoint:800,
                settings: {
                    item:1
                }
            }
        ]
    });

    //меню
    $('.nav-item').click(function () {
        var a_href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(a_href).offset().top
        }, 2000);
        console.log(a_href);
    });

    var $toggle = $('#nav-toggle');
    var $menu = $('#nav-menu');

    $toggle.click(function() {
        $(this).toggleClass('is-active');
        $menu.toggleClass('is-active');
    });

});