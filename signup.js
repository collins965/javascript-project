document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
  
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form values
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value.trim();
  
      if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields before signing up.");
        return;
      }
  
      // Simulate creating user data (you could add server call here)
      const userInfo = {
        name: name,
        email: email,
        phone: "+254 712 345 678", // Optional placeholder
        accountNumber: "1234567890",
        balance: "Ksh 5,000,000",
        profitRate: "25% per month",
        profit: "Ksh 250,000"
      };
  
      // Save user info to localStorage
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
  
      alert("Sign Up successful! Redirecting to home page...");
  
      // Redirect to home page
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    });
  
    // Profile icon behavior (optional if you also put it in a common script)
    const profileLink = document.getElementById("profile-link");
    if (profileLink) {
      profileLink.addEventListener("click", (e) => {
        e.preventDefault();
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo && userInfo.name) {
          window.location.href = "account.html";
        } else {
          window.location.href = "signup.html";
        }
      });
    }
  });
  