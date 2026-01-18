import { translations } from './translations.js';
import { tours } from './tours.js';

const DEFAULT_LANG = 'es';
let currentLang = localStorage.getItem('wasi_lang') || DEFAULT_LANG;

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initMobileMenu();

    // Page specific logic
    if (document.getElementById('featured-tours-container')) {
        renderFeaturedTours();
    }

    if (document.getElementById('detail-page-content')) {
        initDetailPage();
    }

    // Bind language toggles
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.langToggle;
            setLanguage(lang);
        });
    });
});

function initLanguage() {
    setLanguage(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('wasi_lang', lang);
    document.documentElement.lang = lang;

    // Update translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update active state in switcher
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
        if (btn.dataset.langToggle === lang) {
            btn.classList.add('text-primary', 'font-bold');
            btn.classList.remove('text-gray-400');
        } else {
            btn.classList.remove('text-primary', 'font-bold');
            btn.classList.add('text-gray-400');
        }
    });

    // Re-render dynamic content if needed
    if (document.getElementById('featured-tours-container')) {
        renderFeaturedTours();
    }
    if (document.getElementById('detail-page-content')) {
        renderTourDetail(getTourFromUrl());
    }

    // Update WhatsApp CTA if present (it's in the fixed button tool tip or aria label)
    const waBtn = document.querySelector('a[aria-label="Chat en WhatsApp"]');
    if (waBtn) {
        // We might want to change the message or aria label
        // waBtn.ariaLabel = lang === 'es' ? 'Chat en WhatsApp' : 'Chat on WhatsApp'; 
    }
}

function initMobileMenu() {
    const btn = document.querySelector('button[aria-label="Menu"]');
    // Implementation depends on HTML structure, assuming simple toggle for now if I add a mobile menu container
}

// Index Page Logic
function renderFeaturedTours() {
    const container = document.getElementById('featured-tours-container');
    if (!container) return;

    container.innerHTML = tours.map(tour => `
        <div class="group flex flex-col gap-4 bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
            <div class="w-full aspect-video rounded-xl bg-gray-200 overflow-hidden relative">
                <div class="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                     style="background-image: url('${tour.images[0]}');"></div>
                <div class="absolute top-3 right-3 bg-secondary/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold shadow-sm text-white">
                    ${tour.duration[currentLang]}
                </div>
            </div>
            <div>
                <div class="flex justify-between items-start">
                    <h3 class="text-[#111418] dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                        ${tour.title[currentLang]}
                    </h3>
                    <span class="flex items-center text-amber-500 text-sm font-bold gap-1">
                        <span class="material-symbols-outlined text-base fill-current">star</span> ${tour.rating}
                    </span>
                </div>
                <p class="text-[#617589] dark:text-gray-400 text-sm font-normal mt-2 line-clamp-2">
                    ${tour.description[currentLang]}
                </p>
                <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <span class="text-primary font-bold text-lg">$${tour.price} <span class="text-xs text-gray-400 font-normal" data-i18n="card.perPerson">${translations[currentLang]["card.perPerson"]}</span></span>
                    <a href="detail.html#${tour.id}" class="text-sm font-bold text-[#111418] dark:text-white hover:text-secondary" data-i18n="card.details">
                        ${translations[currentLang]["card.details"]}
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Detail Page Logic
function getTourFromUrl() {
    // Try hash first (cleaner for static sites)
    const hash = window.location.hash.substring(1);
    if (hash) {
        return tours.find(t => t.id === hash) || tours[0];
    }

    // Fallback to query params
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    return tours.find(t => t.id === id) || tours[0]; // Default to first if not found or empty
}

function initDetailPage() {
    const tour = getTourFromUrl();
    if (tour) {
        renderTourDetail(tour);
    }
}

function renderTourDetail(tour) {
    if (!tour) return;

    // Update simple text elements
    setText('tour-title', tour.title[currentLang]);
    setText('tour-price', `S/ ${tour.price * 3.7}`); // Approx exchange rate or just use USD? The snippets used S/ in detail and $ in landing. I will stick to USD or consistent currency. Landing had $35. Detail had S/150. I'll stick to $ in global and S/ or $ consistently. Let's use $ for now based on tours.js. But wait, local market uses Soles. Let's assume price in tours.js is USD and we convert or display USD.
    // Actually, let's just display what's in tours.js. I used simple numbers. Let's assume USD for international appeal, or Soles. 
    // The prompt says "Sell... targeting BOTH Local ... and International". 
    // I will stick to USD in the display for now or add a currency toggle later. I'll use USD symbol in code.
    // Wait, the detail snippet had "S/ 150". 
    // I'll update tours.js to be Soles? No, keep it simple. I'll just render "$" + price.

    // Images
    const gallery = document.getElementById('tour-gallery');
    if (gallery) {
        // logic to update gallery images
        const mainImg = gallery.querySelector('.main-image');
        if (mainImg && tour.images[0]) mainImg.src = tour.images[0];
    }

    // Description
    setText('tour-description', tour.fullDescription[currentLang]);

    // Breadcrumb
    setText('breadcrumb-title', tour.title[currentLang]);

    // Stats
    setText('tour-duration', tour.duration[currentLang]);
}

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}
