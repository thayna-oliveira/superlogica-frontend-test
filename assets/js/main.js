
jQuery(document).ready(function ($) {

    // efeitos na carregamento
    ScrollReveal().reveal(".bg-header #content", {
        origin: "bottom",
        distance: "10px",
        duration: 800,
        interval: 300,
        delay: 200
    });

    ScrollReveal().reveal("#plans .container", {
        origin: "bottom",
        distance: "10px",
        duration: 800,
        interval: 300,
        delay: 200
    });

    ScrollReveal().reveal(".gallery #gallery", {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        interval: 100,
        delay: 100
    });

});


$('.menu-bars').on('click touchstart', function(e){
    $(".navbar-collapse").addClass("side");
    $('body').addClass('lock-scroll');
    $(".exit-nav").addClass("show");
    
});

$('.exit-nav').on('click touchstart', function(e){
    $(".navbar-collapse").removeClass("side"); 
    $(".exit-nav").removeClass("show");
    $('body').removeClass('lock-scroll');
});



$("a[href='#header']").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});


$("#back_to_top").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $("#back_to_top").addClass("on");
        $(".navbar").addClass("nav-fix");
    } else {
        $("#back_to_top").removeClass("on");
        $(".navbar").removeClass("nav-fix");
    }
});

