const baseURL = "https://github.com/colbymacarthur/wdd230/";
const linksURL = "https://github.com/colbymacarthur/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksurl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}