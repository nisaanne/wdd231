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

const currentURL = window.location.href;


const everything=currentURL.split("?")


let formData = everything[1].split("&")


function show(cup) {
   
    formData.forEach((element)=> {
        
        if (element.startsWith(cup)){
            result=element.split('=')[1].replace("%40" , "@")
            
        }
    })
    return(result)
}

const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")}</p>
<p>Proxy ${show('ordinance')} on ${show('fecha')} in the ${show('location')} Temple. </p>
<p>Your Phone: ${show("phone")}</p>
<p>Your Email: <a href="mailto:${show("email")}">${show("email")}</a>

`

  
});


