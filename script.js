// Wait until the page is ready
document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.querySelector("form");

  // Listen when someone tries to submit
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the form from sending
    // Collect values from the form
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("new-password").value.trim();
    const terms = document.getElementById("terms-and-conditions").checked;

    // Start a list of friendly "reminders"
    let messages = [];

    if (firstName === "") {
      messages.push("Oops! Please type your first name 🌟");
    }

    if (lastName === "") {
      messages.push("Don’t forget your last name ✨");
    }

    if (email === "") {
      messages.push("We need your email so we can say hi 👋");
    }

    if (password.length < 8) {
      messages.push("Your password should be at least 8 characters 🔑");
    }

    if (!terms) {
      messages.push("Please tick the box to accept the terms 📜");
    }

    // If you find any problems, stop the form and show the messages
    if (messages.length > 0) {
      alert(messages.join("\n")); // Show all reminders at once
    } else {
      alert("🎉 Nice Work! Your form has been submitted successfully!");
      event.target.submit(); // Allow the form to be sent
    }
  });
});
