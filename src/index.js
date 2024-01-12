import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";
import clearPage from "./clearPage";

const content = document.querySelector('#content');

function createBtn(name) {
    let btn = document.createElement('button');
    btn.textContent = name;
    let lowerCaseName = name.toLowerCase();
    btn.classList.toggle(`${lowerCaseName}Btn`);
    btn.addEventListener('click', clearPage);
    if (name === 'Home') {
        btn.addEventListener('click', homePage);
    } else if (name === 'Menu') {
        btn.addEventListener('click', menuPage);
    } else if (name === 'Contact') {
        btn.addEventListener('click', contactPage);
    }
    return btn;
}

// const homeBtn = document.createElement('button');
// homeBtn.textContent = 'Home';
// homeBtn.classList.toggle('homeBtn');
// homeBtn.addEventListener('click', () => {
//     clearPage();
//     homePage();
// });
const homeBtn = createBtn('Home');
content.appendChild(homeBtn);

// const menuBtn = document.createElement('button');
// menuBtn.textContent = 'Menu';
// menuBtn.classList.toggle('menuBtn');
// menuBtn.addEventListener('click', () => {
//     clearPage();
//     menuPage();
// });
const menuBtn = createBtn('Menu');
content.appendChild(menuBtn);

// const contactBtn = document.createElement('button');
// contactBtn.textContent = 'Contact';
// contactBtn.classList.toggle('contactBtn');
// contactBtn.addEventListener('click', () => {
//     clearPage();
//     contactPage();
// });
const contactBtn = createBtn('Contact');
content.appendChild(contactBtn);

homePage();

export { content };