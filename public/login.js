const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const submitButton = form.querySelector("button");

function showMessage(text, type = "info") {
  message.textContent = text;
  message.dataset.type = type;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setLoading(isLoading) {
  submitButton.disabled = isLoading;
  submitButton.textContent = isLoading ? "Signing in..." : "Sign in";
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email) {
    showMessage("Email is required.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  if (!password || password.length < 6) {
    showMessage("Password must be at least 6 characters.", "error");
    return;
  }

  setLoading(true);
  showMessage("Submitting login request...", "info");

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      showMessage(result.error || "Login failed.", "error");
      return;
    }

    showMessage(result.message || "Login successful.", "success");
  } catch (error) {
    showMessage("Unable to reach the authentication service.", "error");
  } finally {
    setLoading(false);
  }
});
