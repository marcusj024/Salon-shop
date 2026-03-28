// ===========================
// File: js/main.js
// vintage barber shop website
// ============================

// --- DOM Elements ---
const yearEl = document.getElementById('year');

const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

const ctaBtn = document.getElementById('ctaBtn');
const callBtn = document.getElementById('callBtn');

const phoneLink = document.getElementById('phoneLink');
const heading = document.getElementById('heroHeading');

// Helpers / Function 

// Updates current year in the footer
const setCurrentYear = () => {
    const now = new Date();
    yearEl.textContent = now.getFullYear();
};

// Toggles Mobile Menu open/close
let isMenuOpen = false;

const toggleMobileMenu = () => {
    if(!mobileMenu) return;

    if(isMenuOpen === false) {
        mobileMenu.classList.add('is-open');
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove('is-open');
        isMenuOpen = false;
    }
};

// Close mobile menu (use when a link is clicked)
const closeMobileMenu = () => {
    if(!mobileMenu) return;
    mobileMenu.classList.remove('is-open');
    isMenuOpen = false;
};

// Reusable function with parameters (practice pattern)
const updateHeadingText = (newText) => {
    if(!heading) return;
    heading.textContent = newText;
}

// --- Event Listeners ---

// 1) set year on page load
setCurrentYear();

// 2) hamberger menu toggle
if(menuBtn) {
    menuBtn.addEventListener("click", () => {
        toggleMobileMenu();
    });
}

// 3) close mobile menu when a link is clicked
if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
        // if the clicked an <a> inside the menu, close the menu
        if (event.target.tagName === "A") {
            closeMobileMenu();
        }
    });

    // 4) CTA Button: "Book Now" (plaveholder behavior)
    if (ctaBtn) {
        ctaBtn.addEventListener("click", () => {
            updateHeadingText("Booking coming next - great choice!");
        });
    }
}

// 5) Call button: use number in footer (placeholder behavior)
if (callBtn) {
    callBtn.addEventListener("click", () => {
        // if you later set phoneLink href to tell:. this will work
        // for now, this is begginer frendly placeholder behavior
        if (phoneLink) {
            updateHeadingText ("Call us at " + phoneLink.textContent);
        } else { 
            updateHeadingText("Call Feature coming soon!");
        }
    });
}
