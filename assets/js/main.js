$(document).ready(function() {
  'use strict';

  // Get navbar offset from top window to calculate when to affix the navbar to the top
  var navbarOffsetHome = $('#navbar-fixed-home').offset().top;

  // Use bootstrap's 'affix' plugin to pin the navbar
  $('#navbar-fixed-home').affix({
    offset: {
      top: navbarOffsetHome - 30,
      bottom: 0
    }
  });

  $('#navbar-fixed').affix({
    offset: {
      top: 0,
      bottom: 0
    }
  })

  // WOW.js configuration
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      }
    }
  );

  // Initialize wow.js for animations on scrolls
  wow.init();

  // Initialize bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();

  $('body').on('click', '[data-scroll-target]', function(e){
    e.preventDefault();
    var target = $(this).attr('data-scroll-target');
    $('.nav-controls-right ul [data-scroll-target]').removeClass('active');
    $('.nav-controls-right ul [data-scroll-target="'+target+'"]').addClass('active');
    $('html, body').animate({
      scrollTop: ($('#'+target).offset().top - 60
    )}, 800);
  });


    $(window).on('scroll', function(e) {

    });



});
