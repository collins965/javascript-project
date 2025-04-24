document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = form.name;
    const emailInput = form.email;
    const messageInput = form.message;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent actual form submission

        // Reset previous styles
        [nameInput, emailInput, messageInput].forEach(input => {
            input.classList.remove("border-red-500", "ring-red-500");
        });

        // Get trimmed values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        let hasError = false;

        // Basic validation
        if (!name) {
            highlightError(nameInput);
            hasError = true;
        }

        if (!validateEmail(email)) {
            highlightError(emailInput);
            hasError = true;
        }

        if (!message) {
            highlightError(messageInput);
            hasError = true;
        }

        if (hasError) {
            alert("Please fill in all fields correctly.");
            return;
        }

        // Simulated submission logic
        alert("Thank you for contacting Vanguard Wealth Markets! We’ll get back to you soon.");
        form.reset();
        window.location.href = "index.html"; // Redirect to homepage
    });

    function highlightError(input) {
        input.classList.add("border-red-500", "ring-1", "ring-red-500");
    }

    function validateEmail(email) {
        // Simple email pattern check
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
});
