document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("mpesaWithdrawForm");

    // Form submission handler
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Collect form values
        const phone = form.phone.value;
        const amount = form.amount.value;
        const transactionCode = form.transaction_code.value;

        // Basic validation
        if (!phone || !amount || !transactionCode) {
            alert("Please fill out all the fields.");
            return;
        }

        // Notify the user that the submission was successful
        alert(`Your Mpesa withdrawal request of KES ${amount.toLocaleString()} has been submitted successfully!`);

        // Optionally, reset the form
        form.reset();

        // Redirect to account page after a slight delay
        setTimeout(() => {
            window.location.href = 'account.html';
        }, 1500); // Redirect after 1.5 seconds
    });
});
