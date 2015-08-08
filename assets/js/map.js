var map;
function initialize() {
  map = new google.maps.Map(document.getElementById('map1'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  map = new google.maps.Map(document.getElementById('map2'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  map = new google.maps.Map(document.getElementById('map3'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  map = new google.maps.Map(document.getElementById('map4'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
