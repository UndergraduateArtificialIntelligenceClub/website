// This is where it all goes :)
console.log('%cif ur reading this, hi ;)', 'color: lightseagreen; font-size: 24px;');


$(document).ready(function() {
    $('.carousel').slick({
        //dots: true,
        lazyLoad: 'ondemand',
        centerMode: true,
        autoplay: true,
        infinite: true,
        centerMode: true,
        autoplaySpeed: 2000,
        adaptiveWidth: true
    });
});