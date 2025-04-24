document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bankWithdrawForm");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.fullname.value.trim();
      const bank = form.bank.value;
      const account = form.account.value.trim();
      const amount = parseFloat(form.amount.value);
  
      if (!name || !bank || !account || isNaN(amount) || amount < 100) {
        alert("Please fill in all fields correctly.");
        return;
      }
  
      alert(`Withdrawal request of KES ${amount.toLocaleString()} to ${bank.toUpperCase()} submitted successfully!`);
      form.reset();
    });
  });
  