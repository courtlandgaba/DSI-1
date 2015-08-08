$(document).ready(function() {
  'use strict';

  var navbarOffset = $('#navbar-fixed').offset().top;

  $('#navbar-fixed').affix({
    offset: {
      top: navbarOffset - 30,
      bottom: 0
    }
  });

});
