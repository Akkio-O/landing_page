// const nav = document.getElementById("nav");
const link = document.querySelector('#link');

const effectHamburger = (hamburger) => {
    if (link.className === "header__wrapper_info-link") {
        link.className += " responsive";
    } else {
        link.className = "header__wrapper_info-link";
    }
    hamburger.classList.toggle("hamburger_active");
}

export { effectHamburger };
