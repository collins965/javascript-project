document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusMsg = document.getElementById("statusMsg");
  
    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Simulate sending email
    console.log("Sending email:", { name, email, subject, message });
  
    // Reset form
    document.getElementById('emailForm').reset();
    statusMsg.classList.remove("hidden");
  
    // Hide success message after 3 seconds
    setTimeout(() => {
      statusMsg.classList.add("hidden");
    }, 3000);
  });
  