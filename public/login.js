const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || password.length < 6) {
    message.textContent = "Please enter a valid email and a password with at least 6 characters.";
    return;
  }

  message.textContent = "Login submitted. Authentication will be expanded in the feature branch.";
});
