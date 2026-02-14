// Konfiguracja linków w menu - edytujesz tylko TU!
const navLinks = [
    { name: "Home page", url: "index.html" },
    { name: "Registration", url: "registration.html" },
    { name: "Participants", url: "participants.html" },
    { name: "Programme & Abstracts", url: "program.html" },
    { name: "Scientific Committee", url: "scientific.html" },
    { name: "Organizing Committee", url: "organization.html" }
];

function injectHeader() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    const headerHTML = `
    <nav class="navbar">

        
        <button class="menu-toggle" id="mobile-menu-btn" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <a href="index.html" class="nav-logo">
            <img src="logo-impan.png" alt="IMPAN"> XIV FPDE
        </a>

        <div class="nav-links" id="nav-links-container">
            ${navLinks.map(link => `
                <a href="${link.url}" class="${currentPage === link.url ? 'active-link' : ''}">
                    ${link.name}
                </a>
            `).join('')}
        </div>
    </nav>

    <header class="header-banner">
        <div class="header-container">
            <div class="logos">
                <img src="logo-impan.png" alt="IMPAN Logo" style="height: clamp(70px, 11vw, 100px); width: auto;">
                <img src="UW_logo_small_en.svg" alt="UW Logo" style="height: clamp(70px, 11vw, 110px); width: auto;">
                <img src="logotyp-IDUB-EN-poziom-kolor.svg" alt="IDUB Logo" style="height: clamp(70px, 11vw, 110px); width: auto;">
            </div>
            <div class="header-text">
                <h1>XIV Forum of Partial Differential Equations</h1>
                <p>Institute of Mathematics of Polish Academy of Sciences,</p>
                <p>Poland, 13 - 19 September 2026</p>
            </div>
        </div>
    </header>

    <style>
        /* Styl dla hamburgera */
        .menu-toggle {
            display: none; /* Ukryty na PC */
            flex-direction: column;
            justify-content: space-around;
            width: 30px;
            height: 25px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;
        }
        .menu-toggle span {
            width: 100%;
            height: 3px;
            background-color: white;
            transition: all 0.3s linear;
        }

        /* Responsywność - Mobile */
        @media (max-width: 900px) {
            .menu-toggle {
                display: flex; /* Pokazuje się na mobile */
            }

            .nav-links {
                display: none; /* Ukrywamy standardowe linki */
                flex-direction: column;
                position: absolute;
                top: 60px; /* Wysokość navbaru */
                left: 0;
                width: 100%;
                background-color: #1a2a44; /* Dopasuj do koloru swojego navbaru */
                padding: 20px 0;
                box-shadow: 0 5px 10px rgba(0,0,0,0.2);
            }

            .nav-links.show {
                display: flex; /* Pokazuje po kliknięciu */
            }

            .nav-links a {
                padding: 15px 20px;
                width: 100%;
                text-align: center;
                border-bottom: 1px solid rgba(255,255,255,0.1);
            }
            
            .nav-logo {
                font-size: 1rem;
            }
        }
    </style>
    `;

    document.getElementById('header-placeholder').innerHTML = headerHTML;

    // Logika otwierania menu (dodana po wstrzyknięciu HTML)
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navContainer = document.getElementById('nav-links-container');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navContainer.classList.toggle('show');
        });
    }
}

// Uruchom po załadowaniu strony
document.addEventListener('DOMContentLoaded', injectHeader);