import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";
import clearPage from "./clearPage";

const content = document.querySelector('#content');

function createBtn(button) {
    let btn = document.createElement('button');
    btn.textContent = button;
    let lowerCase = button.toLowerCase();
    btn.classList.toggle(`${lowerCase}Btn`);
    btn.addEventListener('click', () => {
        clearPage();
        `${lowerCase}Page`();
    });
}

const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
homeBtn.classList.toggle('homeBtn');
homeBtn.addEventListener('click', () => {
    clearPage();
    homePage();
});
content.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.classList.toggle('menuBtn');
menuBtn.addEventListener('click', () => {
    clearPage();
    menuPage();
});
content.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact';
contactBtn.classList.toggle('contactBtn');
contactBtn.addEventListener('click', () => {
    clearPage();
    contactPage();
});
content.appendChild(contactBtn);

homePage();

export { content };