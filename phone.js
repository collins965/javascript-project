document.getElementById('callForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
  
    if (name && phone) {
      // Simulate call request
      console.log(`Call request received from ${name} at ${phone}`);
  
      // Show success message
      document.getElementById('callStatus').classList.remove('hidden');
      
      // Reset form
      this.reset();
    } else {
      alert('Please fill in all fields correctly.');
    }
  });
  