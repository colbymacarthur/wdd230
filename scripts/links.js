const baseURL = "https://github.com/colbymacarthur/wdd230/";
const linksURL = "https://github.com/colbymacarthur/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.prophets);
    // displayProphets(data.prophets);
}

getLinks();