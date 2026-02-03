// Konfiguracja linków w menu
const navLinks = [
    { name: "Home page", url: "index.html" },
    { name: "Registration", url: "registration.html" },
    { name: "Participants", url: "participants.html" },
    { name: "Programme & Abstracts", url: "program.html" },
    { name: "Scientific Committee", url: "scientific.html" },
    { name: "Organizing Committee", url: "organization.html" }
];

function injectHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    // Generowanie linków
    const linksHTML = navLinks.map(link => {
        const isActive = currentPage === link.url ? 'active-link' : '';
        return `<a href="${link.url}" class="${isActive}">${link.name}</a>`;
    }).join('');

    const headerHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">
                <img src="logo-impan.png" alt="IMPAN"> XIV FPDE
            </a>
            
            <button class="menu-toggle" id="menuOpen">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="nav-links" id="navLinks">
                <button class="close-menu" id="menuClose">&times;</button>
                ${linksHTML}
            </div>
        </div>
    </nav>

    <div class="menu-overlay" id="menuOverlay"></div>

    <header class="header-banner">
        <div class="header-container">
            <div class="logos">
                <img src="logo-impan.png" alt="IMPAN Logo" style="height: clamp(70px, 11vw, 100px); width: auto;">
                <img src="banachcenter.jpg" alt="Banach Center" style="height: clamp(70px, 11vw, 110px); width: auto;">
            </div>
            <div class="header-text">
                <h1>XIV Forum of Partial Differential Equations</h1>
                <p>Institute of Mathematics of Polish Academy of Sciences,</p>
                <p>Poland, 13 - 19 September 2026</p>
            </div>
        </div>
    </header>
    `;

    placeholder.innerHTML = headerHTML;
    
    // Inicjalizacja menu po wstrzyknięciu
    initMenu();
}

function initMenu() {
    const openBtn = document.getElementById('menuOpen');
    const closeBtn = document.getElementById('menuClose');
    const nav = document.getElementById('navLinks');
    const overlay = document.getElementById('menuOverlay');

    if (!openBtn || !nav) return;

    function toggleMenu() {
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
    }

    openBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', injectHeader);
