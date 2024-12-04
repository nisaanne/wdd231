// home.js

document.addEventListener("DOMContentLoaded", () => {
    // Common functionality
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;

    const mainnav = document.querySelector("#animateme");
    const hambutton = document.querySelector("#menu");

    if (mainnav && hambutton) {
        hambutton.addEventListener("click", () => {
            mainnav.classList.toggle("show");
            hambutton.classList.toggle("show");
        });
    } else {
        console.error("Navigation elements are missing in the DOM.");
    }

    // Home page-specific functionality
    const fetchCatButton = document.getElementById('fetch-cat');

    if (fetchCatButton) {
        fetchCatButton.addEventListener('click', fetchCatImage);
    }

    function fetchCatImage() {
        const url = 'https://api.thecatapi.com/v1/images/search';
        const apiKey = 'live_PeGZ35LGkDQCAWWQnvMNRDn7d65lDtdVx3XWtKfqJ6pYKg6OR9q705Jeilh3eDmK';

        fetch(url, {
            headers: {
                'x-api-key': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            const catContainer = document.getElementById('cat-container');
            if (catContainer) {
                catContainer.innerHTML = ''; // Clear previous image
                const img = document.createElement('img');
                img.src = data[0].url;
                img.alt = 'Random Cat';
                catContainer.appendChild(img);
            } else {
                console.error('Element with ID "cat-container" not found.');
            }
        })
        .catch(error => console.error('Error fetching cat image:', error));
    }
});
