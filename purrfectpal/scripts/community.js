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
