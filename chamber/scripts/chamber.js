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


async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (response.ok) {
            const members = await response.json();
            console.log('Members data:', members); 
            displaySpotlights(members);
        } else {
            throw new Error('Failed to load members data');
        }
    } catch (error) {
        console.error(error);
    }
}


function displaySpotlights(members) {
    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = '';

    const eligibleMembers = members.filter(member => member['Membership level'] === '2' || member['Membership level'] === '3');
    console.log('Eligible members:', eligibleMembers); // Log the eligible members

    eligibleMembers.sort(() => Math.random() - 0.5);

    const selectedMembers = eligibleMembers.slice(0, Math.floor(Math.random() * 2) + 2);
    console.log('Selected members:', selectedMembers); // Log the selected members

    selectedMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        const logo = document.createElement('img');
        logo.src = member.Image;
        logo.alt = `${member['Company name']} logo`;
        card.appendChild(logo);

        const companyName = document.createElement('h3');
        companyName.textContent = member['Company name'];
        card.appendChild(companyName);

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member['Phone number']}`;
        card.appendChild(phone);

        const address = document.createElement('p');
        address.textContent = `Address: ${member.Address}`;
        card.appendChild(address);

        const website = document.createElement('p');
        const websiteLink = document.createElement('a');
        websiteLink.href = `http://${member.Website}`;
        websiteLink.textContent = member.Website;
        website.appendChild(websiteLink);
        card.appendChild(website);

        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member['Membership level']}`;
        card.appendChild(membershipLevel);

        spotlightContainer.appendChild(card);
    });
}

fetchMembers();
