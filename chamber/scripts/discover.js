document.addEventListener("DOMContentLoaded", () => {
    var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  
    let lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;
  
    const mainnav = document.querySelector("#animateme");
    const hambutton = document.querySelector("#menu");
  
    hambutton.addEventListener("click", () => {
        mainnav.classList.toggle("show");
        hambutton.classList.toggle("show");  
    });

    const currentDate = new Date();
    const lastVisit = localStorage.getItem('lastVisit');
    
   
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.classList.add('popup-box');  
    const popupContent = document.createElement('div');
    
    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = currentDate - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
        if (daysDifference < 1) {
            popupContent.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            popupContent.textContent = "You last visited 1 day ago.";
        } else {
            popupContent.textContent = `You last visited ${daysDifference} days ago.`;
        }
    } else {
        popupContent.textContent = "Welcome! Let us know if you have any questions.";
    }
    
    popup.appendChild(popupContent);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.classList.add('close-btn'); 
    
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.appendChild(closeBtn);
    document.body.appendChild(popup);
    
    localStorage.setItem('lastVisit', currentDate);
});

