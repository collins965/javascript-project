document.addEventListener("DOMContentLoaded", () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    // Redirect to login if no user info found
    if (!userInfo) {
        window.location.href = "login.html";
        return;
    }

    // Populate account fields with user info
    document.getElementById("user-name").value = userInfo.name;
    document.getElementById("user-account-number").value = userInfo.accountNumber;
    document.getElementById("user-email").value = userInfo.email;
    document.getElementById("user-phone").value = userInfo.phone;
    document.getElementById("user-balance").value = userInfo.balance;
    document.getElementById("user-profit-rate").value = userInfo.profitRate;
    document.getElementById("user-profit").value = userInfo.profit;
});

// Logout function
function logout() {
    localStorage.removeItem("userInfo");
    window.location.href = "login.html";
}
