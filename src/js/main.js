import { effectHamburger } from './header/hamburger.mjs';
import dataTariff from './modal/application.mjs';
import init from './map/map.mjs';
import media from './media/media.mjs';

document.addEventListener('DOMContentLoaded', () => {
    dataTariff();

    const hamburger = document.querySelector('.header__nav_hamburger');
    hamburger.addEventListener('click', () => {
        effectHamburger(hamburger);
    });
    init();
});