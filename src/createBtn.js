import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";
import clearPage from "./clearPage";

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

export default createBtn;