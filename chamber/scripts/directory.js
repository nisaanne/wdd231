var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  
let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;

document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members-container");

    async function fetchMembers() {
        try {
            const response = await fetch('members.json');
            const data = await response.json();
            displayMembers(data);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'member';
            memberDiv.innerHTML = `
                <h3>${member['Company name']}</h3>
                <p>Address: ${member['Address']}</p>
                <p>Phone: ${member['Phone number']}</p>
                <p>Website: <a href="${member['Website']}">${member['Website']}</a></p>
                <img src="${member['Image']}" alt="${member['Company name']}" height="100">
                <p>Membership Level: ${member['Membership level']}</p>
            `;
            membersContainer.appendChild(memberDiv);
        });
    }

    fetchMembers();
});