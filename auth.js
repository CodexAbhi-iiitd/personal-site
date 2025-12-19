(function () {
  const PASSWORD = "NowYouSeeMe";

  if (localStorage.getItem("authenticated") === "true") return;

  const attempt = prompt("Enter access password:");

  if (attempt === PASSWORD) {
    localStorage.setItem("authenticated", "true");
    localStorage.setItem("bgmPlaying", "true");
    location.reload();
  } else {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        background:black;
        color:#888;
        font-family:monospace;
        text-align:center;">
        <div>
          <p>Access Denied</p>
          <p style="font-size:12px;margin-top:8px;">Unauthorized user</p>
        </div>
      </div>
    `;
  }
})();
