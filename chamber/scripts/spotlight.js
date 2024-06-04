const members = fetch('https://colbymacarthur.github.io/wdd230/chamber/data/members.json')
.then(response => response.json())
.then(data => data.businesses);

function createSpotlightMember(member) {
    const spotlightSection = document.createElement('section');
    spotlightSection.classList.add('member-spotlight');

    const image = document.createElement('img');
    image.src = member.imageURL;
    image.alt = member.name;

    const name = document.createElement('h3');
    name.textContent = member.name;

    spotlightSection.appendChild(image);
    spotlightSection.appendChild(name);

    return spotlightSection;
}

// Function to display random spotlight members (you can adjust the number to display)
function displaySpotlightMembers(numMembers = 3) {
    members.then(data => {
    const filteredMembers = data.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
    const shuffledMembers = filteredMembers.sort(() => Math.random() - 0.5); // Shuffle the array randomly

    for (let i = 0; i < numMembers; i++) {
        const randomMember = shuffledMembers[i];
        const spotlightSection = createSpotlightMember(randomMember);
        document.querySelector('.spotlight').appendChild(spotlightSection);
    }
});
}

// Call the displaySpotlightMembers function to populate the spotlight section
displaySpotlightMembers();