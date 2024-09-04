// Job data
const jobs = [
    { title: "Frontend Developer", location: "Remote", type: "Full-Time", experience: "2+ years" },
    { title: "Backend Developer", location: "India", type: "Full-Time", experience: "3+ years" },
    { title: "Full Stack Developer", location: "Remote", type: "Contract", experience: "4+ years" },
    { title: "UI/UX Designer", location: "Remote", type: "Freelance", experience: "2+ years" },
    { title: "QA Engineer", location: "India", type: "Full-Time", experience: "3+ years" }
];

// Filter logic
function filterJobs(location) {
    const filteredJobs = jobs.filter(job => job.location === location || location === "All");
    displayJobs(filteredJobs);
}

// Function to display jobs
function displayJobs(jobsToDisplay) {
    const jobListings = document.querySelector('.job-listings');
    jobListings.innerHTML = ''; // Clear existing jobs

    jobsToDisplay.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        
        jobCard.innerHTML = `
            <h2>${job.title}</h2>
            <p>Location: ${job.location} | ${job.type}</p>
            <p>Experience: ${job.experience}</p>
            <button><a href="apply.html">Apply Now</a></button>
        `;
        
        jobListings.appendChild(jobCard);
    });
}

// Event listeners for filter buttons
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        const location = this.getAttribute('data-location');
        filterJobs(location);
    });
});

// Initial display of all jobs
displayJobs(jobs);
