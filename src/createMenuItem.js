function createMenuItem(name, description) {

    const item = document.createElement('div');
    item.textContent = `${name}: ${description}`;
    item.classList.toggle('menuItem');

    return item;

}

export default createMenuItem;