const sidebarMessage = document.getElementById('visits');

function displayMessage() {
  const today = new Date();
  let prevVisit = null;

  if (localStorage.getItem('lastVisit')) {
    prevVisit = new Date(localStorage.getItem('lastVisit'));
  }

  if (!prevVisit) {
    sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysSinceVisit = Math.floor((today - prevVisit) / (1000 * 60 * 60 * 24));
    
    if (daysSinceVisit === 0) {
      sidebarMessage.textContent = "Back so soon! Awesome!";
    } else {
      const message = daysSinceVisit === 1 ? "day" : "days";
      sidebarMessage.textContent = `You last visited ${daysSinceVisit} ${message} ago.`;
    }
  }

  localStorage.setItem('lastVisit', today.toISOString());
}

displayMessage();