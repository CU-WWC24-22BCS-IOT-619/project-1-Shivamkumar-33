// Redirect Home Link
document.querySelector("a[href='#home']").addEventListener("click", () => {
    window.location.href = "index.html"; // Replace "index.html" with the actual home page URL if needed
});


// Scroll to the saved section on the home page
document.addEventListener("DOMContentLoaded", () => {
    const lastSection = localStorage.getItem('lastSection');
    if (lastSection) {
        const section = document.querySelector(lastSection);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        localStorage.removeItem('lastSection'); // Clear it to avoid unnecessary scrolling on reload
    }
});

// Elements for Auth Popup
const authBtn = document.getElementById('authBtn');
const authPopup = document.getElementById('authPopup');
const closeAuthPopup = document.getElementById('closeAuthPopup');
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginContent = document.getElementById('loginContent');
const signupContent = document.getElementById('signupContent');

// Elements for Contact Popup
const getInTouchBtn = document.getElementById('getInTouchBtn');
const contactPopup = document.getElementById('contactPopup');
const closeContactPopup = document.getElementById('closeContactPopup');

// Show Auth Popup
authBtn.addEventListener('click', () => {
    authPopup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close Auth Popup
closeAuthPopup.addEventListener('click', () => {
    authPopup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Toggle between Login and Signup Tabs
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginContent.classList.add('active');
    signupContent.classList.remove('active');
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupContent.classList.add('active');
    loginContent.classList.remove('active');
});

// Close Auth Popup when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authPopup) {
        authPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Show Contact Popup
getInTouchBtn.addEventListener('click', () => {
    contactPopup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close Contact Popup
closeContactPopup.addEventListener('click', () => {
    contactPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close Contact Popup when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
        contactPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Redirect Start Now Button
document.getElementById('startNowBtn').addEventListener('click', () => {
    window.location.href = 'card-slider-main/anotherhtml.html'; // Replace 'anotherpage.html' with the actual page URL
});




