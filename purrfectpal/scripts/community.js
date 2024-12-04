// community.js

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

    // Community page-specific functionality
    const imgButtons = document.querySelectorAll('.img-btn');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modal-img');
    const closeButton = document.querySelector('.close');
    const form = document.querySelector("form");

    if (imgButtons && modal && modalImg && closeButton) {
        imgButtons.forEach(button => {
            button.addEventListener('click', event => {
                modal.style.display = 'block';
                modalImg.src = event.currentTarget.dataset.imgSrc;
            });
        });

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', event => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        console.error("One or more required elements are missing in the DOM.");
    }

    if (form) {
        form.addEventListener("submit", (event) => {
            const timestamp = new Date().toISOString();
            document.getElementById("timestamp").value = timestamp;
        });
    } else {
        console.error("Form element not found in the DOM.");
    }
});
