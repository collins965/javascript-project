// 1. Smooth scrolling for anchor links
let links = document.querySelectorAll('a[href^="#"]');
console.log('Smooth scrolling links:', links);  // Log the anchor links
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
        console.log('Anchor link clicked:', this.getAttribute("href"));  // Log clicked link
        e.preventDefault(); // Prevent default anchor click behavior
        let target = document.querySelector(this.getAttribute("href"));
        console.log('Target element:', target);  // Log the target element
        target.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to target
    });
}

