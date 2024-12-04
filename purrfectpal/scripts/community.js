document.addEventListener("DOMContentLoaded", () => {
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

    const imgButtons = document.querySelectorAll('.img-btn');
    const modal = document.getElementById('myModal');
    const modalParagraph = document.getElementById('modal-paragraph');
    const closeButton = document.querySelector('.close');
    const form = document.querySelector("form");

    if (imgButtons && modal && modalParagraph && closeButton) {
        imgButtons.forEach(button => {
            button.addEventListener('click', event => {
                modal.style.display = 'block';
                modalParagraph.textContent = event.currentTarget.dataset.info; // Set the paragraph content
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
