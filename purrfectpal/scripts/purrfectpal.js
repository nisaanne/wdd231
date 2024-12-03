const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;

document.addEventListener("DOMContentLoaded", () => {
    const breedsContainer = document.getElementById("breeds-container");
    const toggleButton = document.getElementById("toggle-view");
    const gridIcon = document.getElementById("grid-icon");
    const listIcon = document.getElementById("list-icon");
    let isGridView = false;

    async function fetchBreeds() {
        try {
            const response = await fetch('data/catbreeds.json');
            const data = await response.json();
            displayBreeds(data);
        } catch (error) {
            console.error("Error fetching breeds:", error);
        }
    }

    function displayBreeds(breeds) {
        breedsContainer.innerHTML = '';
        breeds.forEach(breed => {
            const breedDiv = document.createElement('div');
            breedDiv.className = 'breed';
            breedDiv.innerHTML = `
                <h3>${breed.breed}</h3>
                <p>Origin: ${breed.origin}</p>
                <p>Description: ${breed.description}</p>
                <p>Temperament: ${breed.temperament}</p>
            `;
            breedsContainer.appendChild(breedDiv);
        });
        updateView();
    }

    function updateView() {
        if (isGridView) {
            breedsContainer.classList.add('breed-grid');
            breedsContainer.classList.remove('breed-list');
            gridIcon.style.display = 'inline';
            listIcon.style.display = 'none';
        } else {
            breedsContainer.classList.add('breed-list');
            breedsContainer.classList.remove('breed-grid');
            gridIcon.style.display = 'none';
            listIcon.style.display = 'inline';
        }
    }

    toggleButton.addEventListener('click', () => {
        isGridView = !isGridView;
        updateView();
    });

    fetchBreeds();
});

const mainnav = document.querySelector("#animateme");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");  
});


