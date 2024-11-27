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
    const visitMessage = document.getElementById('visit-message');
    
    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = currentDate - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
        }
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }
    
    localStorage.setItem('lastVisit', currentDate);
});
