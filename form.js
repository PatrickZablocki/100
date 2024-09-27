const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const massage = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("formFeedback").textContent = "Bitte fülle alle Felder aus.";
    } else {
        document.getElementById("formFeedback").textContent = "Danke für deine Nachricht!";
    }
});