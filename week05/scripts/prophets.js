// Declare API JSON data
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
// Declare Variable in HTML
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        // Format name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        // Set picture values
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${fullName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('hieght', '340');
        portrait.setAttribute('width', '440');
        // extra
        birthdate.textContent = `Date of birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of birth: ${prophet.birthplace}`;
        // Add data to individual card
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);
        // Add card to html 
        cards.appendChild(card);
    });
}

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();