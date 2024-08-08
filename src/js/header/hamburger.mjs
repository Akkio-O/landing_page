const nav = document.getElementById("nav");

const effectHamburger = (hamburger) => {
    if (nav.className === "header__nav") {
        nav.className += " responsive";
    } else {
        nav.className = "header__nav";
    }
    hamburger.classList.toggle('hamburger_active');
}

export { effectHamburger };
