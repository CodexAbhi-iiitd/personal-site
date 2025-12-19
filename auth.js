(function () {
  const PASSWORD = "nowyouseeme";

  // Always ask password on load / refresh
  const attempt = prompt("Enter access password:");

  if (attempt === PASSWORD) {
    // Allow page to continue (no storage)
    // Start BGM flag for this session only
    localStorage.setItem("bgmPlaying", "true");
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

