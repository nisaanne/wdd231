const currentURL = window.location.href;
console.log(currentURL);

const everything=currentURL.split('?')
console.log(everything)

let formData = everything[1].split('&')
console.log(formData)

function show(cup) {
    console.log(cup)
    formData.forEach((element)=> {
        console.log(element)
        if (element.startsWith(cup)) {
          result=element.split('=')[1] .replace("%40","@").replace("+"," ")
          
        }
    })
    return(result)
}

const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
<p>Name: ${show("first")} ${show("last")}</p>
<p>Title: ${show("title")} </p>
<p>Email: ${show("email")}</p>
<p>Phone number: ${show("phone")}</p>
<p>Business: ${show("business")}</p>
<p>Membership Level: ${show("level")}</p>
`



