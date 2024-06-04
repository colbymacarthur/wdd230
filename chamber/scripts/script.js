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

const timestampInput = document.getElementById('timestamp');
timestampInput.value = new Date().toISOString();