document.addEventListener("DOMContentLoaded", () => {
    // Highlight market reports on hover
    const reportCards = document.querySelectorAll("section .grid > div");

    reportCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("ring-2", "ring-yellow-400", "scale-105");
            card.classList.add("transition-transform", "duration-300", "ease-in-out");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("ring-2", "ring-yellow-400", "scale-105");
        });
    });

    // Animate expert quotes
    const quotes = document.querySelectorAll("blockquote");
    quotes.forEach(q => {
        q.style.opacity = 0;
        q.style.transition = "opacity 1s ease-in-out";

        setTimeout(() => {
            q.style.opacity = 1;
        }, 500);
    });

    // Basic interaction logging
    console.log("Market Insights page loaded at", new Date().toLocaleString());
});
