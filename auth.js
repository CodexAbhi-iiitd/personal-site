const PASSWORD = "kein-system-ist-sicher";

const overlay = document.getElementById("loginOverlay");
const input = document.getElementById("passwordInput");
const error = document.getElementById("errorText");

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    if (input.value === PASSWORD) {
      overlay.style.display = "none";
      initBGM();
    } else {
      error.classList.remove("hidden");
      input.value = "";
    }
  }
});
