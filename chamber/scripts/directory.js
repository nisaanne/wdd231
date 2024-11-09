var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  
    let lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;