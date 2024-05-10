// get last updated date
document.getElementById("lastModified").textContent = "Last Modified: " + new Date().toLocaleDateString();
// get todays year
document.getElementById("year").innerHTML = new Date().getFullYear();

// hamburger button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// dark mode
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
});

// get visits
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome to my home page.`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);