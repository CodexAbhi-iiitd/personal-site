const lines = [
  "Name: Abhishek",
  "Institute: IIIT Delhi",
  "Program: Undergraduate",
  "JEE Mains: Qualified",
  "JEE Advanced: Qualified",
  "Chess Rating: 2244",
  "Mindset: Long-term thinking",
  "Status: Building quietly"
];

let i = 0, j = 0;
const el = document.getElementById("terminal-text");
const accessMsg = document.getElementById("access-granted-msg");

// We wrap this in a function so we can call it ONLY after password success
function startTerminal() {
  function typeLine() {
    if (i < lines.length) {
      if (j < lines[i].length) {
        el.innerHTML += lines[i][j++];
      } else {
        el.innerHTML += "<br>";
        i++;
        j = 0;
      }
      setTimeout(typeLine, 35); // Slightly faster typing
    } else {
      // Show "Access Granted" message
      accessMsg.classList.remove("opacity-0");
      accessMsg.classList.add("animate-pulse");

      // Scroll to Hero section
      setTimeout(() => {
        const hero = document.getElementById("hero-section");
        if(hero) {
            hero.scrollIntoView({ behavior: "smooth" });
        }
      }, 1500);
    }
  }
  
  // Start the typing loop
  typeLine();
}

// Reveal Animation on Scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});