const banner = document.getElementById('banner');
const closeButton = document.getElementById('closeBanner');

// Check if today is Monday, Tuesday, or Wednesday
const today = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
const showDays = [1, 2, 3]; // Monday = 1, Tuesday = 2, Wednesday = 3

if (showDays.includes(today)) {
  banner.classList.remove('closed'); // Remove 'closed' class to show the banner
}

closeButton.addEventListener('click', () => {
  banner.classList.add('closed'); // Add 'closed' class to hide the banner again
});
