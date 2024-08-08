ymaps.ready(init);
function init(ymaps){
    const myMap = new ymaps.Map("map", {
        center: [59.907478, 30.324395],
        zoom: 15
    });
    const myPlacemark = new ymaps.Placemark([59.907478, 30.324395], {
        hintContent: 'Это место!',
        balloonContent: 'Здесь'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/union.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-15, -42] 
    });

    myMap.geoObjects.add(myPlacemark);
}

export default init;
