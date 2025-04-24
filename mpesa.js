// Function to handle the form submission
document.getElementById('mpesaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way (page reload)

    // Get form data
    const form = event.target;
    const phone = form.phone.value;
    const amount = form.amount.value;
    const transactionCode = form.transaction_code.value;
    const proof = form.proof.files[0]; // Get the file from the input field

    // Check if all the fields are filled
    if (!phone || !amount || !transactionCode || !proof) {
        alert("Please fill all the fields and upload a screenshot.");
        return;
    }

    //log the data to the console
    console.log('Form Data:', { phone, amount, transactionCode, proof });

    // Display a confirmation message
    alert('Mpesa Deposit submitted successfully! Redirecting to account page...');

    // Simulate a delay for the user feedback, then redirect
    setTimeout(() => {
        window.location.href = 'account.html'; // Redirect to the account page
    }, 2000); // Delay for 2 seconds before redirecting
});
