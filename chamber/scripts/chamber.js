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

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "05af6ab2e391031ce939791e499633e2";
const myLat = '49.75';
const myLon = '6.64';


const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const temp = data.main.temp;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;

    currentTemp.innerHTML = `${temp} &deg;F`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

apiFetch();
