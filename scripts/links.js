const baseURL = "https://colbymacarthur.github.io/wdd230/";
const linksURL = "https://colbymacarthur.github.io/wdd230/data/links.json";

const weeks = document.querySelector('#weeks');


async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
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

async function displayLinks(weeks) {
    weeks.forEach((week) => {
      let test = document.createElement('li');
      test.textContent = `${week.week}`; // Access week property within each week object
  
      let link = document.createElement('a');
      link.textContent = `${week.link}`; // There's no "link" property within week objects
  
      // Assuming you meant to access links within each week:
      week.links.forEach(linkObject => {
        link.href = linkObject.url; // Set link href
        link.textContent = linkObject.title; // Set link text content
        test.appendChild(link); // Append link to list item
      });
  
      weeks.appendChild(test); // Append list item to the weeks element
    });
  }
  

getLinks();