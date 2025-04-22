document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (email === "" || password === "") {
        alert("Please fill in both fields.");
        return;
      }
  
      const userInfo = {
        name: "Collins Kyalo",
        email: email,
        phone: "+254 712 345 678",
        accountNumber: "1234567890",
        balance: "Ksh 5,000,000",
        profitRate: "25% per month",
        profit: "Ksh 250,000"
      };
  
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
  
      alert("Login successful! Redirecting to home page...");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    });
  });
  