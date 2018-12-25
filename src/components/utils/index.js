export function sliderMain(){
  // if ( !isMobile.any() ) {
  $('.js-fullheight').css('height', $(window).height());
  $(window).resize(function(){
    $('.js-fullheight').css('height', $(window).height());
  });
  // }
  $('#navbar a:not([class="external"])').click(function(event){
    var section = $(this).data('nav-section'),
    navbar = $('#navbar');

    if ( $('[data-section="' + section + '"]').length ) {
      $('html, body').animate({
        scrollTop: $('[data-section="' + section + '"]').offset().top - 55
      }, 500);
    }

    if ( navbar.is(':visible')) {
      navbar.removeClass('in');
      navbar.attr('aria-expanded', 'false');
      $('.js-colorlib-nav-toggle').removeClass('active');
    }

    event.preventDefault();
    return false;
  });

  $('#colorlib-hero .flexslider').flexslider({
    animation: "fade",
    slideshowSpeed: 5000,
    directionNav: true,
    start: function(){
      setTimeout(function(){
        $('.slider-text').removeClass('animated fadeInUp');
        $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
      }, 500);
    },
    before: function(){
      setTimeout(function(){
        $('.slider-text').removeClass('animated fadeInUp');
        $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
      }, 500);
    }
  });
}

export function contentWayPoint() {
  var i = 0;
  $('.animate-box').waypoint( function( direction ) {

    if( direction === 'down' && !$(this.element).hasClass('animated') ) {

      i++;

      $(this.element).addClass('item-animate');
      setTimeout(function(){

        $('body .animate-box.item-animate').each(function(k){
          var el = $(this);
          setTimeout( function () {
            var effect = el.data('animate-effect');
            if ( effect === 'fadeIn') {
              el.addClass('fadeIn animated');
            } else if ( effect === 'fadeInLeft') {
              el.addClass('fadeInLeft animated');
            } else if ( effect === 'fadeInRight') {
              el.addClass('fadeInRight animated');
            } else {
              el.addClass('fadeInUp animated');
            }

            el.removeClass('item-animate');
          },  k * 200, 'easeInOutExpo' );
        });

      }, 100);

    }

  } , { offset: '85%' } );
}
