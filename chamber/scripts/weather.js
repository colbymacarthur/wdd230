const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=18.65152616569545&lon=-91.80733212405362&appid=3eb325ab65d99506c2c19bf68bc5f315&units=imperial";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=18.65152616569545&lon=-91.80733212405362&appid=3eb325ab65d99506c2c19bf68bc5f315&units=imperial&cnt=3";


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

const displayWeather = (data) => {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentTemp.innerHTML = `
    <p>${data.main.temp}&deg;F</p>
    <p>${desc}</p>`;
}

// Forcast weather

async function forecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

forecastFetch();

const displayForecast = (data) => {
    const forecastList = document.querySelector("#forecast-list"); // Assuming you have an element for forecast
  
    // Clear any existing forecast entries
    forecastList.innerHTML = "";
  
    for (let i = 0; i < 3; i++) { // Loop through the first 3 forecast days
        const forecastData = data.list[i]; // Access data for each day directly (assuming 3-hour intervals)
        const iconsrc = `https://openweathermap.org/img/wn/${forecastData.weather[0].icon}.png`;
        let desc = forecastData.weather[0].description;
    
        // Create a new element for each day's forecast
        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item"); // Add CSS class for styling
    
        // Format and display the forecast data
        
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1 + i); // Add 1 day
        
        const dayOfWeek = tomorrow.toLocaleDateString("en-US", { weekday: 'short' });
        forecastItem.innerHTML = `
            <p>${dayOfWeek}</p>
            <img src="${iconsrc}" alt="${desc}" />
            <p>${forecastData.main.temp}&deg;F</p>
            <p>${desc}</p>`;
    
        forecastList.appendChild(forecastItem);
        }
  }
