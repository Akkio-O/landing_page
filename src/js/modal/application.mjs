// const tariff = document.querySelector('.tariff__modal');
const tariffThx = document.querySelector('.tariff__modal_thanks');
const tariff = document.querySelector('.tariff__modal_formWrapper');
const activeF = 'activeF';
const activeB = 'activeB';

const dataTariff = () => {
    const openModal = (block, active) => {
        block.classList.add(active);
        document.body.classList.add('overlay')
    }
    const closeModal = (block, active) => {
        block.classList.remove(active);
        document.body.classList.remove('overlay')
    }

    window.addEventListener('click', (e) => {
        // thx
        if (e.target.dataset.application === "") {
            openModal(tariffThx, activeB);
        } else if (!tariff.contains(e.target) || !tariffThx.contains(e.target)) {
            closeModal(tariffThx, activeB);
        }

        // tariff form
        if (e.target.dataset.tariff) {
            openModal(tariff, activeF);
        } else if (!tariff.contains(e.target) || e.target.classList.contains('close') || e.target.dataset.application === "") {
            closeModal(tariff, activeF);
        }
    });
}

export default dataTariff;
