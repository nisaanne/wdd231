document.addEventListener("DOMContentLoaded", () => {
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

  
});


