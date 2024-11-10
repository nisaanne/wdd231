var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  
let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;

document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members-container");
    const toggleButton = document.getElementById("toggle-view");
    let isGridView = false;

    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
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
                <p>Website: <a href="http://${member['Website']}">${member['Website']}</a></p>
                <img src="${member['Image']}" alt="${member['Company name']}" height="100">
                <p>Membership Level: ${member['Membership level']}</p>
            `;
            membersContainer.appendChild(memberDiv);
        });
        updateView();
    }

    function updateView() {
        if (isGridView) {
            membersContainer.classList.add('member-grid');
            membersContainer.classList.remove('member-list');
        } else {
            membersContainer.classList.add('member-list');
            membersContainer.classList.remove('member-grid');
        }
    }

    toggleButton.addEventListener('click', () => {
        isGridView = !isGridView;
        updateView();
    });

    fetchMembers();
});
