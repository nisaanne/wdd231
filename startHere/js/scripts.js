const currentURL = window.location.href;
console.log(currentUrl);

const everything=currentURL.split("?")
console.log(everything)

let formData = everything[1].split("&")
console.log(formData)