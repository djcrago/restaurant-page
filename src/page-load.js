function pageLoad() {

    const content = document.querySelector('#content');
    
    const title = document.createElement('h1');
    title.textContent = 'The Low-Carb Restaurant';
    title.classList.toggle('title');
    content.appendChild(title);

    const image = document.createElement('img');
    image.src = '../src/images/image.jpg';
    image.alt = 'The PCOS Plan';
    image.classList.toggle('image');
    content.appendChild(image);

    const headline = document.createElement('p');
    headline.textContent = 'Prevent and Reverse Polycystic Ovary Syndrome '
    + 'through Diet and Fasting';
    headline.classList.toggle('headline');
    content.appendChild(headline);

}

export default pageLoad;