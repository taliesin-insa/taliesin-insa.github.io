(function ($) {

    // Preloader
    $(window).on('load', function() {
        $("#preloader").delay(600).fadeOut();
    });

    // Show carousel captions on hover
    $('.carousel-inner').hover(
        // When entering hover
        function () {
            $(this).find('.carousel-caption').addClass('d-md-block');
            $(this).find('.caption-overlay').show();
        }, // Leaving hover
        function () {
            $(this).find('.carousel-caption').removeClass('d-md-block');
            $(this).find('.caption-overlay').hide();
        }
    );

    // Show personal link for face images on hover
    $('.face-image-wrap').hover(
        // When entering hover
        function () {
            $(this).find('.show-on-hover').addClass('d-block');
        }, // Leaving hover
        function () {
            $(this).find('.show-on-hover').removeClass('d-block');
        }
    );

    // Smooth scroll sections
    $(".main-nav a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });

    // Smooth scroll logo
    $(".navbar-brand a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });

})(jQuery);
