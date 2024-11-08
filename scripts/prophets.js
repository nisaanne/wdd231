document.addEventListener('DOMContentLoaded', () => {
    getProphetData();
});

async function getProphetData() {
    const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        displayProphets(data.prophets); 
    } catch (error) {
        console.error(error.message);
    }
}

const displayProphets = (prophets) => {
    const container = document.getElementById('prophet-cards');
    container.innerHTML = ''; 
    
    prophets.forEach(prophet => {
        const card = document.createElement('div');
        card.className = 'prophet-card';

        const name = document.createElement('h2');
        name.textContent = `${prophet.name} ${prophet.lastname}`;

        const birthdate = document.createElement('p');
        birthdate.textContent = `Birthdate: ${prophet.birthdate}`;

        const birthplace = document.createElement('p');
        birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

        const image = document.createElement('img');
        image.src = prophet.imageurl;
        image.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;

        card.appendChild(name);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(image);

        container.appendChild(card);
    });
};
