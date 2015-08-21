$(document).ready(function() {
  'use strict';

  // Get navbar offset from top window to calculate when to affix the navbar to the top
  if ( $('body').attr('data-page') === 'home' ) {
    var navbarOffsetHome = $('#navbar-fixed-home').offset().top;
    $('#navbar-fixed-home').affix({
      offset: {
        top: navbarOffsetHome - 30,
        bottom: 0
      }
    });
  }

  // WOW.js configuration
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true        // act on asynchronously loaded content (default is true)

    }
  );

  // Initialize wow.js for animations on scrolls
  wow.init();

  // Initialize bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();

  $('body').on('click', '[data-scroll-target]', function(e){
    e.preventDefault();
    var target = $(this).attr('data-scroll-target');
    $('html, body').animate({
      scrollTop: ($('#'+target).offset().top - 60
    )}, 800);
  });

  // Set up PACE options
  Pace.on('done', function(){
      $('.cover').fadeOut(2000);
  });

  $('.nav-controls-right li:first-child').addClass('active');

  // Set up nav controls on right to detect scroll position
  $(window).scroll(function(e){
    var scrollPos = $(document).scrollTop() + 26;

    $('.nav-controls-right li').each(function () {
        var currLink = $(this);
        var targetElement = $('#' + currLink.attr('data-scroll-target'));
        if ( targetElement.offset().top <= scrollPos && targetElement.offset().top + targetElement.height() > scrollPos ) {
            $('.nav-controls-right li').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
  }); // End window scroll event




});
