document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bankWithdrawForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission to handle it with JS

    // Collect form data
    const name = form.fullname.value.trim();
    const bank = form.bank.value;
    const account = form.account.value.trim();
    const amount = parseFloat(form.amount.value);

    // Validate form inputs
    if (!name || !bank || !account || isNaN(amount) || amount < 100) {
      alert("Please fill in all fields correctly and ensure the withdrawal amount is at least KES 100.");
      return;
    }

    // Success alert and redirect after form reset
    alert(`Withdrawal request of KES ${amount.toLocaleString()} to ${bank.toUpperCase()} submitted successfully!`);
    
    // Reset the form
    form.reset();

    // Redirect to account page
    setTimeout(() => {
      window.location.href = 'account.html';
    }, 1500); // Redirect after 1.5 seconds
  });
});
