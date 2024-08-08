import { effectHamburger } from './header/hamburger.mjs';
import dataTariff from './modal/application.mjs';
import init from './map/map.mjs';

document.addEventListener('DOMContentLoaded', () => {
    dataTariff();

    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        effectHamburger(hamburger);
    });
    init();
});