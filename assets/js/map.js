var map;
function initialize() {
  map = new google.maps.Map(document.getElementById('map1'), {
    zoom: 15,
    center: {lat: 39.644863, lng: -78.761775}
  });
  map = new google.maps.Map(document.getElementById('map2'), {
    zoom: 15,
    center: {lat: 39.596348, lng: -77.805691}
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
