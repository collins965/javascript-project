// Wait for DOM to load before attaching event handlers
document.addEventListener('DOMContentLoaded', () => {
    const depositForm = document.getElementById('depositForm');

    if (!depositForm) return;

    depositForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop default form submission

        // Basic client-side logic
        const formData = new FormData(depositForm);
        const requiredFields = ['bank', 'account_name', 'account_number', 'amount', 'proof'];
        const missingFields = requiredFields.filter(field => !formData.get(field));

        if (missingFields.length > 0) {
            alert("Please fill in all required fields.");
            return;
        }

        const amount = parseFloat(formData.get('amount'));
        if (amount < 100) {
            alert("Deposit amount must be at least $100.");
            return;
        }

        alert('Deposit submitted successfully! Redirecting to home page...');

        // Simulate server response delay and redirect
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });
});
