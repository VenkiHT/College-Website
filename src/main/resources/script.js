// 1. Faculty Data (Easy to add or edit members here!)
const facultyList = [
    {
        name: "Dr. Rajesh Sharma",
        role: "Head of Department",
        subject: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200"
    },
    {
        name: "Prof. Priya Nair",
        role: "Associate Professor",
        subject: "Data Structures & Algorithms",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200"
    },
    {
        name: "Dr. Arjun Verma",
        role: "Assistant Professor",
        subject: "Cybersecurity & Networks",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
    },
    {
        name: "Prof. Sneha Kulkarni",
        role: "Assistant Professor",
        subject: "Web Development & Cloud",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200"
    }
];

// 2. Function to display faculty cards on the page
function displayFaculty(data) {
    const grid = document.getElementById("faculty-grid");
    grid.innerHTML = ""; // Clear previous cards

    data.forEach(person => {
        const card = `
      <div class="card">
        <img src="${person.image}" alt="${person.name}">
        <h3>${person.name}</h3>
        <p><strong>${person.role}</strong></p>
        <p>${person.subject}</p>
      </div>
    `;
        grid.innerHTML += card;
    });
}

// Load all faculty when page opens
displayFaculty(facultyList);

// 3. Live Search Filter for Faculty
function filterFaculty() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = facultyList.filter(person =>
        person.name.toLowerCase().includes(query) ||
        person.subject.toLowerCase().includes(query)
    );
    displayFaculty(filtered);
}

// 4. Dynamic Notice Switcher
const notices = [
    "Admissions open for 2026!",
    "National Hackathon registration closes this Friday.",
    "Semester exam timetable has been published."
];
let noticeIndex = 0;

function changeNotice() {
    noticeIndex = (noticeIndex + 1) % notices.length;
    document.getElementById("notice-text").innerText = notices[noticeIndex];
}

// 5. Smooth Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// 6. Handle Contact Form Submission
function submitForm(event) {
    event.preventDefault(); // Stops page from refreshing
    const name = document.getElementById("studentName").value;
    document.getElementById("formResponse").innerText = `Thanks ${name}! Your query has been received.`;
    document.getElementById("contactForm").reset();
}