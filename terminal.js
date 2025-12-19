// terminal.js

const lines = [
  "Name: Abhishek",
  "Institute: IIIT Delhi",
  "JEE Mains: Qualified",
  "JEE Advanced: Qualified",
  "Chess Rating: 2244",
  "Status: Building quietly"
];

let i = 0;
let j = 0;

const el = document.getElementById("terminal-text");

// SINGLE typing sound instance
const typeSound = new Audio("type.mp3");
typeSound.volume = 0.12;
typeSound.preload = "auto";

function typeLine() {
  if (i < lines.length) {
    if (j < lines[i].length) {
      el.innerHTML += lines[i][j++];
      typeSound.currentTime = 0;
      typeSound.play().catch(() => {});
    } else {
      el.innerHTML += "<br>";
      i++;
      j = 0;
    }
    setTimeout(typeLine, 45);
  } else {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }, 1200);
  }
}

// Expose terminal start function
window.startTerminal = function () {
  el.innerHTML = "";
  i = 0;
  j = 0;
  typeLine();
};
