var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  
let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;

const mainnav = document.querySelector("#animateme")
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () =>{
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");  
});

const myLat = '49.75'; 
const myLon = '6.64'; 
const myKey = '05af6ab2e391031ce939791e499633e2';

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


async function fetchCurrentWeather() {
    try {
        const response = await fetch(currentWeatherURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayCurrentWeather(data) {
    const temp = data.main.temp;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;

    currentTemp.innerHTML = `${temp} &deg;F`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}


async function fetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            displayForecast(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast');

    
    forecastContainer.innerHTML = '';

    
    const today = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    
    for (let i = 0; i < data.list.length; i += 8) { 
        if (i >= 24) break; 
        
        const dayData = data.list[i];
        const temp = dayData.main.temp;
        const date = new Date(dayData.dt_txt);
        const dayLabel = i === 0 ? 'Today' : daysOfWeek[(today.getDay() + i / 8) % 7]; // Label today and the next two days

        
        const forecastItem = document.createElement('p');
        forecastItem.textContent = `${dayLabel}: ${temp} °F`;

        
        forecastContainer.appendChild(forecastItem);
    }
}


fetchCurrentWeather();
fetchForecast();


setInterval(fetchCurrentWeather, 900000); 
setInterval(fetchForecast, 900000); 

