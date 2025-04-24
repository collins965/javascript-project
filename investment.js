document.addEventListener("DOMContentLoaded", () => {
    const investmentForm = document.getElementById("investmentForm");

    if (!investmentForm) return;

    investmentForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const amount = document.getElementById("amount").value.trim();
        const plan = document.getElementById("plan").value.trim();

        // Basic validation
        if (!name || !email || !phone || !amount || !plan) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        if (isNaN(amount) || parseFloat(amount) < 100) {
            alert("Investment amount must be a number and at least $100.");
            return;
        }

        // Show confirmation
        alert("Investment successfully submitted! Redirecting to home page...");

        // Simulate submission delay
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500); // 1.5 seconds delay
    });
});
