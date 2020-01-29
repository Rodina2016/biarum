$(document).ready(function(){
    $('#banner').owlCarousel({
       items: 1,
    });

    $('#slider').owlCarousel({
        items: 3,
        dots: false,
        nav: true,
        navText: [" ", " "],
        navClass: ['cards-btn cards-btn--prev', 'cards-btn cards-btn--next'],
    });

    $('input').change(function () {
        if($(this).val().length) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});