const requestURL = 'https://colbymacarthur.github.io/wdd230/chamber/data/members.json';
const members = document.querySelector('#view');

fetch(requestURL)
    .then(function (response) {
  return response.json();
})
    .then(function (jsonObject) { 
const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
});

let s1 = document.createElement('section');
document.querySelector('#view').appendChild(s1);

function displayBusinesses(businesses) {
    let card = document.createElement('div');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let logo = document.createElement('img');

    logo.className = 'businessImg';
    card.className = 'businessData';
    p1.className = 'card-desc';
    h2.textContent = `${businesses["name"]}`
    p1.textContent = 
    `Address: ${businesses["address"]}
    Phonenumber: ${businesses["phonenumber"]}
    Website: ${businesses["website"]}`;
  
    logo.setAttribute('src', `${businesses["imageURL"]}`);
    logo.setAttribute('alt', `Logo of ${businesses["name"]}`);
    logo.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(p1);
   
    document.querySelector('#view').appendChild(card);
}


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
display.classList.add("grid");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
	display.classList.remove("grid");
});

