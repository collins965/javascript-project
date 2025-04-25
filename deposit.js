// Wait for DOM to load before attaching event handlers
document.addEventListener('DOMContentLoaded', () => {
    const depositForm = document.getElementById('depositForm');
    const submitBtn = document.getElementById('submitDeposit');
  
    if (!depositForm || !submitBtn) return;
  
    // Utility: Show error for specific field
    const showError = (fieldName, message) => {
      const errorElement = depositForm.querySelector(`[data-error-for="${fieldName}"]`);
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
      }
    };
  
    // Utility: Clear all error messages
    const clearErrors = () => {
      const errorElements = depositForm.querySelectorAll('.error-message');
      errorElements.forEach(el => {
        el.textContent = '';
        el.classList.add('hidden');
      });
    };
  
    submitBtn.addEventListener('click', () => {
      const formData = new FormData(depositForm);
      const requiredFields = ['bank', 'account_name', 'account_number', 'amount', 'proof'];
      let hasErrors = false;
  
      clearErrors(); // Clear any old messages
  
      requiredFields.forEach(field => {
        const value = formData.get(field);
        if (!value || (field === 'proof' && value.size === 0)) {
          showError(field, 'This field is required.');
          hasErrors = true;
        }
      });
  
      const amount = parseFloat(formData.get('amount').trim());
      if (isNaN(amount) || amount < 100) {
        showError('amount', 'Deposit must be at least $100.');
        hasErrors = true;
      }
  
      const proofFile = formData.get('proof');
      if (proofFile && !['image/jpeg', 'image/png', 'application/pdf'].includes(proofFile.type)) {
        showError('proof', 'Only JPG, PNG, and PDF files are allowed.');
        hasErrors = true;
      }
  
      if (hasErrors) return;
  
      // Success message (replace with a modal/toast if preferred)
      alert('Deposit submitted successfully! Redirecting to your account...');
  
      // Redirect after 1.5s
      setTimeout(() => {
        window.location.href = 'account.html';
      }, 1500);
    });
});
