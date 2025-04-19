document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    if (params.has("status")) {
        let message = "";
        if (params.get("status") === "success") {
            message = "❌ Wystąpił błąd. Spróbuj ponownie.";
        } else {
            message = "✅ Wiadomość została wysłana i zapisana w bazie!";
        }
        alert(message);
    }
});

// Płynne przewijanie do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    });
});