const pw1 = document.querySelector("#pass1");
const pw2 = document.querySelector("#pass2");
const error = document.querySelector("#errormessage");

pw2.addEventListener("keyup", checkSame);

function checkSame() {
  if (pw1.value !== pw2.value) {
    error.textContent = "Passwords don't match!";
    error.style.visibility = "visible"; 
    pw2.style.backgroundColor = "#f00"; 
    pw2.style.color = "#fff"; 
  } else {
    error.textContent = ""; 
    error.style.visibility = "hidden"; 
    pw2.style.backgroundColor = "#fff"; 
    pw2.style.color = "#000"; 
  }
}


// 
const ratingInput = document.getElementById("ratingInput");
const ratingValue = document.getElementById("ratingValue");

// Update the displayed value when the input changes
ratingInput.addEventListener("input", function() {
  ratingValue.textContent = this.value; // Update the text content with the current value
});

// Optionally, set the initial displayed value
ratingValue.textContent = ratingInput.value; // Set the initial value on page load