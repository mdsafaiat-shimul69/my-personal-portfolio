console.log("Hello! Welcome to my Portfolio.");

console.log("I am Safaiat Hossain Shimul.");

console.log("Electronics & Photonics Enthusiast");

// Select HTML elements
const greetingBtn = document.getElementById("greetingBtn");
const greetingText = document.getElementById("greetingText");

// Add click event
greetingBtn.addEventListener("click", function () {

    if (greetingText.hidden === true) {

        greetingText.hidden = false;
        greetingBtn.textContent = "Hide Message";

    } else {

        greetingText.hidden = true;
        greetingBtn.textContent = "Say Hello";

    }

});

// Select form elements
const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const formFeedback = document.getElementById("formFeedback");

// Listen for form submission
contactForm.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();

    // Get input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Check empty fields
    if (name === "" || email === "" || message === "") {

        formFeedback.textContent = "Please fill in all fields.";
        formFeedback.style.color = "#f87171";

    }

    // Check email format
    else if (!email.includes("@") || !email.includes(".")) {

        formFeedback.textContent = "Please enter a valid email.";
        formFeedback.style.color = "#f87171";

    }

    // If everything is valid
    else {

        formFeedback.textContent =
            "Thank you, " + name + "! Your form is valid.";

        formFeedback.style.color = "#4ade80";

        contactForm.reset();

    }

});

// Select theme button
const themeToggle = document.getElementById("themeToggle");

// Function to update theme
function updateTheme(theme) {

    if (theme === "light") {

        document.body.classList.add("light-mode");
        themeToggle.textContent = "🌙 Dark Mode";

    } else {

        document.body.classList.remove("light-mode");
        themeToggle.textContent = "☀️ Light Mode";

    }

}

// Load saved theme
const savedTheme = localStorage.getItem("theme");

// Apply saved theme
updateTheme(savedTheme || "dark");

// Handle button click
themeToggle.addEventListener("click", function () {

    if (document.body.classList.contains("light-mode")) {

        updateTheme("dark");
        localStorage.setItem("theme", "dark");

    } else {

        updateTheme("light");
        localStorage.setItem("theme", "light");

    }

});
// Select menu elements
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Toggle navigation menu
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    // Check menu status
    const isOpen = navMenu.classList.contains("active");

    // Update button icon
    if (isOpen) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

    // Update accessibility status
    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Close menu after clicking a navigation link
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});
// Select all reveal elements
const revealElements = document.querySelectorAll(".reveal");

// Create Intersection Observer
const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            // Stop observing after animation
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

// Observe all selected elements
revealElements.forEach(function (element) {

    observer.observe(element);

});

