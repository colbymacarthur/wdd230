const requestURL = 'https://colbymacarthur.github.io/wdd230/chamber/directory/data.json';
const cards = document.querySelector('.cards');
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) { 
const businesses = jsonObject['businesses'];
  businesses.forEach(displayBusinesses);
});

let s1 = document.createElement('section');
document.querySelector('div.cards').appendChild(s1);

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
    Website: ${businesses["website"]}
    Description: ${businesses["description"]}`;
  
    
    logo.setAttribute('src', `${businesses["imageURL"]}`);
    logo.setAttribute('alt', `Logo of ${businesses["name"]}`);
    logo.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(p1);
   
    document.querySelector('div.cards section').appendChild(card);

  }


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("cards");
}

gridbutton.addEventListener("click",showGrid);

function showGrid(){
    display.classList.add("cards");
    display.classList.remove("list");
}