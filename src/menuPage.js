import { content } from './index';
import createMenuItem from './createMenuItem';

function menuPage() {

    const menu = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'The Low-Carb Menu';
    title.classList.toggle('title');
    menu.appendChild(title);

    const itemOne = createMenuItem('name one', 'description one');
    const itemTwo = createMenuItem('name two', 'description two');
    const itemThree = createMenuItem('name three', 'description three');

    menu.appendChild(itemOne);
    menu.appendChild(itemTwo);
    menu.appendChild(itemThree);

    content.appendChild(menu);
    
}

export default menuPage;