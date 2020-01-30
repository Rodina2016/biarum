$(document).ready(function(){
    $('#banner').owlCarousel({
        items: 1,
    });

    $('#slider').owlCarousel({
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3
            }
        },
        dots: false,
        nav: true,
        navText: [" ", " "],
        navClass: ['cards-btn cards-btn--prev', 'cards-btn cards-btn--next'],
    });

    $('#burger').click(function () {
        $('.header__menu').toggleClass('show');
        $(this).toggleClass('show');
    });

    $('input').change(function () {
        if($(this).val().length) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});