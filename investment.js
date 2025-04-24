document.addEventListener("DOMContentLoaded", () => {
    const investmentForm = document.getElementById("investmentForm");

    // Check if the user is logged in
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
        alert("You need to be logged in to access the Invest Now page.");
        window.location.href = "login.html";  // Redirect to login page if not logged in
        return;  // Exit the script early if not logged in
    }

    if (!investmentForm) return;

    investmentForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const amount = document.getElementById("amount").value.trim();
        const plan = document.getElementById("plan").value.trim();

        // Clean phone number (remove non-digit characters)
        const cleanedPhone = phone.replace(/[^0-9]/g, "");

        // Basic validation
        if (!name || !email || !phone || !amount || !plan) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Amount check
        if (isNaN(amount) || parseFloat(amount) < 100) {
            alert("Investment amount must be a number and at least $100.");
            return;
        }

        // Optional user feedback during submission
        const submitButton = investmentForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";

        // Simulate form submission delay
        setTimeout(() => {
            alert("Investment successfully submitted! Redirecting to your account page...");
            window.location.href = "account.html"; // Redirect to the account page
        }, 1500);
    });
});
