ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.818847, 49.114732],
    zoom: 15,
    controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
  }),

      myPlacemark = new ymaps.Placemark([55.818847, 49.114732], {
        hintContent: 'Станнум'
      });
  myMap.geoObjects.add(myPlacemark);
  myMap.controls
  // Кнопка изменения масштаба.
    .add('zoomControl', { left: 5, top: 5 })
});
