document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm'),
          loginOverlay = document.getElementById('loginOverlay'),
          wrapper = document.getElementById('pageWrapper'),
          nav = document.getElementById('mainNav');

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

    document.getElementById('logoutBtn').onclick = () => location.reload();

    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.p-card');
    filterButtons.forEach(btn => {
        btn.onclick = () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.filter;
            productCards.forEach(card => {
                card.style.display = (cat === 'all' || card.classList.contains(cat)) ? "block" : "none";
            });
        };
    });
});