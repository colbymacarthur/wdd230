const baseURL = "https://colbymacarthur.github.io/wdd230/";
const linksURL = "https://colbymacarthur.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log("Load succesful");
            displayLinks(data.weeks);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

getLinks();

async function displayLinks(weeks) {
  let listHTML = "";
    weeks.forEach((week) => {
      const weekNumber = week.week;
      const links = week.links;
      let linkDisplay = [];

      links.forEach(link => {
        const linkTitle = link.title;
        const linkUrl = link.url;
        linkDisplay.push(`<a href="${linkUrl}">${linkTitle}<a/>`);
      });
      listHTML += `<li>${weekNumber}: ${linkDisplay.join('|')}</li>`;
    });
    const activityList = document.querySelector('#weeks');
    activityList.innerHTML=listHTML
  }