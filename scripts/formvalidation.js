const pw1 = document.querySelector("#pass1");
const pw2 = document.querySelector("#pass2");
const error = document.querySelector("#errormessage");

pw2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pw1.value !==  kp2.value) {
        error.textContent = "Password doesn't match!";
        error.style.visibility = "show";
        pw2.style.backgroundColor = "#fff";
        pw2.style.color = "000";
    } else {
        message.style.display = "none";
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