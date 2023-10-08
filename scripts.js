
function infoSubmitted(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("You are too weak for the Scarlet Crusade!");
}

document.getElementById("join-form").addEventListener("submit", function(event) {
    infoSubmitted(event);
});
