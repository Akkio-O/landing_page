const nav = document.getElementById("nav");
nav.addEventListener('click', async () => {
    const hamburger = document.querySelector('.hamburger');
    try {
        if (nav.className === "topnav") {
            nav.className += " responsive";
        } else {
            nav.className = "topnav";
        }
        hamburger.classList.toggle('hamburger_active');
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
});
export { nav };
