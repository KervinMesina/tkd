document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm'),
          loginOverlay = document.getElementById('loginOverlay'),
          wrapper = document.getElementById('pageWrapper'),
          nav = document.getElementById('mainNav');

    // --- Simple Login (User: carmella | PW: tkdgear) ---
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        const u = document.getElementById('user').value;
        const p = document.getElementById('pass').value;
        if (u === "carmella" && p === "tkdgear") {
            loginOverlay.style.display = "none";
            wrapper.style.display = "block";
            nav.style.display = "flex";
        } else {
            loginForm.reset();
        }
    };

    // --- Simple Logout ---
    document.getElementById('logoutBtn').onclick = () => location.reload();
});
