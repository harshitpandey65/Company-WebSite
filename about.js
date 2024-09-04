// JavaScript for About Us page interactivity

// Function to dynamically display a greeting message based on the time of day
function displayGreeting() {
    const greetingElement = document.querySelector('.hero p');
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning! We create, innovate, and develop solutions to bring your vision to life.";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good Afternoon! We create, innovate, and develop solutions to bring your vision to life.";
    } else {
        greetingMessage = "Good Evening! We create, innovate, and develop solutions to bring your vision to life.";
    }

    greetingElement.textContent = greetingMessage;
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle visibility of the 'Our Values' section
const valuesSection = document.querySelector('.about-text ul');
const toggleButton = document.createElement('button');
toggleButton.textContent = "Show/Hide Our Values";
document.querySelector('.about-text').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    valuesSection.classList.toggle('hidden');
    if (valuesSection.classList.contains('hidden')) {
        toggleButton.textContent = "Show Our Values";
    } else {
        toggleButton.textContent = "Hide Our Values";
    }
});

// Initial function calls
document.addEventListener('DOMContentLoaded', () => {
    displayGreeting();
});