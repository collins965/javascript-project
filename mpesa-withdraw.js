// Wait for the DOM to be fully loaded before adding event listeners
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

        // Example of handling the submission
        console.log("Form submitted:", { phone, amount, transactionCode });

        // Notify the user that the submission was successful
        alert("Your Mpesa withdrawal request has been submitted successfully!");
        
        // Optionally, reset the form
        form.reset();
    });
});
