// sizes
const mediaQuery = window.matchMedia('(max-width: 979px)');
// div
const contactsWrapper = document.querySelector('.contacts__wrapper');
// img
const planetCommunity = document.querySelector('.crmRequest__wrapper_img');
const blockPhone = document.querySelector('.usefully__wrapper_device');
//wrapper
const usefullyWrapper = document.querySelector('.usefully__wrapper');
const crmRequestWrapper = document.querySelector('.crmRequest__wrapper');
const feedBackQuestionTittle = document.querySelector('.feedBackQuestion__wrapper_tittle');
//text
const textBlocks = document.querySelectorAll('.usefully__wrapper_text p');
const blockPhoneNewText = [
    'Любому бизнесу, работающему с клиентской базой',
    'Бизнесу, управляющему ассортиментом',
    'Бизнесу, где есть задачи, планирование, отчетность и KPI'
];
const feedBackQuestionNewText = document.createElement('h4');
feedBackQuestionNewText.innerHTML = "Команда Alpha marketing";

const contactsWrapperLink = document.createElement('div');
contactsWrapperLink.classList.add('contacts__wrapper_link');
contactsWrapperLink.innerHTML = `
                <a class="contacts__wrapper_link_active" href="./index" class="active">
                    <h2>Меню</h2>
                </a>
                <a href="#" class="active">
                    <h2>Услуги</h2>
                </a>
                <a href="#" class="active">
                    <h2>Кейсы</h2>
                </a>
                <a href="#" class="active">
                    <h2>Ещё</h2>
                </a>`;

// function
const originalTexts = Array.from(textBlocks).map(block => block.textContent);
function handleTabletChange(e) {
    if (e.matches) {
        // window <= 980px
        textBlocks.forEach((block, index) => {
            block.textContent = originalTexts[index] || block.textContent;
        });
        planetCommunity.remove();
        blockPhone.remove();
        feedBackQuestionNewText.remove();
        contactsWrapperLink.remove();
    } else {
        textBlocks.forEach((block, index) => {
            block.textContent = blockPhoneNewText[index] || block.textContent;
        });
        usefullyWrapper.appendChild(blockPhone);
        crmRequestWrapper.appendChild(planetCommunity);
        feedBackQuestionTittle.appendChild(feedBackQuestionNewText)
        contactsWrapper.insertBefore(contactsWrapperLink, contactsWrapper.firstChild);
    }
}

mediaQuery.addListener(handleTabletChange);

handleTabletChange(mediaQuery);

export default handleTabletChange;
