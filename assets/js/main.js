$(document).ready(function() {
  'use strict';

  var navbarOffset = $('#navbar-fixed').offset().top;

  // Use bootstrap's 'affix' plugin to pin the navbar
  $('#navbar-fixed').affix({
    offset: {
      top: navbarOffset - 30,
      bottom: 0
    }
  });
<<<<<<< HEAD


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
  $('[data-toggle="tooltip"]').tooltip()


=======
>>>>>>> 4daa5bc9cc7b190b94422b6a4cb24022da01f225
});
