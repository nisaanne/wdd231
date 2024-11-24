document.addEventListener("DOMContentLoaded", () => {
    const currentURL = window.location.href;
    console.log("Current URL:", currentURL);
  
    const everything = currentURL.split('?');
    console.log("Split URL:", everything);
  
    if (everything.length > 1) {
      let formData = everything[1].split('&');
      console.log("Form Data Array:", formData);
  
      function show(cup) {
        console.log("Looking for:", cup);
        let result = "";
        formData.forEach((element) => {
          console.log("Element:", element);
          if (element.startsWith(cup)) {
            result = decodeURIComponent(element.split('=')[1].replace(/\+/g, ' '));
          }
        });
        return result;
      }
  
      const showInfo = document.querySelector('#results');
      if (showInfo) {
        showInfo.innerHTML = `
          <p>Name: ${show("first")} ${show("last")}</p>
          <p>Title: ${show("title")}</p>
          <p>Email: ${show("email")}</p>
          <p>Phone number: ${show("phone")}</p>
          <p>Business: ${show("business")}</p>
          <p>Membership Level: ${show("level")}</p>
          <p>Comments: ${show("comments")}</p>
          <p>Timestamp: ${show("timestamp")}</p>
        `;
      }
    } else {
      console.log("No query parameters found.");
    }
  });
  


