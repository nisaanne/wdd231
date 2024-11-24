document.addEventListener("DOMContentLoaded", () => {
  var currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;

  let lastModifiedDate = document.lastModified;
  document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;

  const mainnav = document.querySelector("#animateme");
  const hambutton = document.querySelector("#menu");

  hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");  
  });

  const form = document.querySelector("form");
  const timestampInput = document.getElementById("timestamp");

  form.addEventListener("submit", (event) => {
    const now = new Date();
    
    // Convert to PST
    const options = { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'};
    const pstDate = new Intl.DateTimeFormat('en-US', options).format(now);

    timestampInput.value = pstDate;
    console.log("Timestamp set to PST:", timestampInput.value);
  });

  // Membership levels and modal logic
  const membershipLevels = [
    {
      subject: 'Gold Membership',
      number: '001',
      title: 'Gold Membership Benefits',
      cost: '$1000',
      certificate: 'Yes',
      description: 'Benefits of the Gold Membership include access to exclusive events, premium resources, and personalized support.',
      benefits: ['Exclusive Events', 'Premium Resources', 'Personal Support']
    },
    {
      subject: 'Silver Membership',
      number: '002',
      title: 'Silver Membership Benefits',
      cost: '$500',
      certificate: 'Yes',
      description: 'Benefits of the Silver Membership include access to networking events, valuable resources, and community support.',
      benefits: ['Networking', 'Valuable Resources', 'Community Support']
    },
    {
      subject: 'Bronze Membership',
      number: '003',
      title: 'Bronze Membership Benefits',
      cost: '$250',
      certificate: 'Yes',
      description: 'Benefits of the Bronze Membership include access to basic resources and participation in community events.',
      benefits: ['Basic Resources', 'Community Events']
    },
    {
      subject: 'Non-profit Membership',
      number: '004',
      title: 'Non-profit Membership Benefits',
      cost: 'Complimentary',
      certificate: 'Yes',
      description: 'Benefits of the Non-profit Membership include access to grants, volunteer support, and community outreach programs.',
      benefits: ['Grants', 'Volunteer Support', 'Community Outreach']
    }
  ];

  document.querySelectorAll('.learn-more').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const index = link.dataset.courseIndex;
      const course = membershipLevels[index];
      displayCourseDetails(course);
    });
  });

  function displayCourseDetails(course) {
    const courseDetails = document.getElementById('courseDetails');
    courseDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Cost</strong>: ${course.cost}</p>
      <p><strong>Certificate</strong>: ${course.certificate}</p>
      <p>${course.description}</p>
      <p><strong>Benefits</strong>: ${course.benefits.join(', ')}</p>
    `;
    courseDetails.showModal();
    
    document.getElementById('closeModal').addEventListener('click', () => {
      courseDetails.close();
    });
  }
});
