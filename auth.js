// auth.js

const PASSWORD = "kein-system-ist-sicher";

const overlay = document.getElementById("loginOverlay");
const input = document.getElementById("passwordInput");
const error = document.getElementById("errorText");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (input.value === PASSWORD) {
      overlay.style.display = "none";

      // Start background music (user interaction safe)
      if (typeof initBGM === "function") {
        initBGM();
      }

      // Start terminal typing ONLY after login
      if (typeof startTerminal === "function") {
        startTerminal();
      }
    } else {
      error.classList.remove("hidden");
      input.value = "";
    }
  }
});
