ymaps.ready(function () {
  var address = "г. Казань, ул. Чистопольская д. 22"
  var hint = ymaps.geocode(address, {results: 1}).then(function (res) {
    var object = res.geoObjects.get(0),
    coords = object.geometry.getCoordinates();
    var myMap = new ymaps.Map('map', {
      center: coords,
      zoom: 15,
      controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
    });
    myPlacemark = new ymaps.Placemark(coords, { hintContent: 'Станнум' });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add('zoomControl', { left: 5, top: 5 })
  });
});
