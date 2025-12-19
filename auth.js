(function () {
  const PASSWORD = "kein-system-ist-sicher";
  
  const overlay = document.getElementById("login-overlay");
  const input = document.getElementById("password-input");
  const msg = document.getElementById("login-message");

  // Ensure input is focused when page loads
  input.focus();

  // Listen for 'Enter' key press
  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      const attempt = input.value;

      if (attempt === PASSWORD) {
        // SUCCESS
        msg.style.color = "#4ade80"; // green
        msg.innerText = ">> Access Granted. Decrypting...";
        
        // 1. Fade out overlay
        setTimeout(() => {
          overlay.style.transition = "opacity 0.8s ease";
          overlay.style.opacity = "0";
          setTimeout(() => {
            overlay.remove(); // Remove from DOM completely
          }, 800);
          
          // 2. Start BGM
          if (typeof initBGM === "function") initBGM();

          // 3. Start Terminal Animation
          if (typeof startTerminal === "function") startTerminal();
          
        }, 800);

      } else {
        // FAILURE
        msg.style.color = "#ef4444"; // red
        msg.innerText = ">> Access Denied. Invalid Credentials.";
        input.value = ""; // Clear input
        
        // Shake animation effect
        input.classList.add("translate-x-2");
        setTimeout(() => input.classList.remove("translate-x-2"), 100);
      }
    }
  });

  // Keep focus on input if user clicks anywhere on overlay
  overlay.addEventListener("click", () => {
    input.focus();
  });

})();