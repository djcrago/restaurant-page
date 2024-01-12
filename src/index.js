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
const menuBtn = createBtn('Menu');
const contactBtn = createBtn('Contact');

buttons.appendChild(homeBtn);
buttons.appendChild(menuBtn);
buttons.appendChild(contactBtn);

homePage();

export { content };