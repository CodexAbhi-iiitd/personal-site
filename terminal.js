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

function typeLine() {
  if (i < lines.length) {
    if (j < lines[i].length) {
      el.innerHTML += lines[i][j++];
    } else {
      el.innerHTML += "<br>";
      i++;
      j = 0;
    }
    setTimeout(typeLine, 45);
  } else {
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }, 1200);
  }
}

typeLine();

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
