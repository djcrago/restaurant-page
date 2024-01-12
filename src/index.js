import createBtn from "./createBtn";
import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";
import clearPage from "./clearPage";

const body = document.querySelector('body');
const content = document.querySelector('#content');

const buttons = document.createElement('div');
body.insertBefore(buttons, content);

const homeBtn = createBtn('Home');
buttons.appendChild(homeBtn);

const menuBtn = createBtn('Menu');
buttons.appendChild(menuBtn);

const contactBtn = createBtn('Contact');
buttons.appendChild(contactBtn);

homePage();

export { content };