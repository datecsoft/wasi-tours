import { translations } from './translations.js';
import { tours } from './tours.js';

const DEFAULT_LANG = 'es';
let currentLang = localStorage.getItem('wasi_lang') || DEFAULT_LANG;
let currentCategory = 'popular'; // 'popular' or 'private'

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initMobileMenu();

    // Page specific logic
    if (document.getElementById('featured-tours-container')) {
        renderFeaturedTours();
        // Bind category filtering
        window.switchCategory = switchCategory; // Make global for onclick
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

function switchCategory(category) {
    currentCategory = category;
    renderFeaturedTours();

    // Update button styles
    const tabPopular = document.getElementById('tab-popular');
    const tabPrivate = document.getElementById('tab-private');

    if (category === 'popular') {
        tabPopular.classList.add('bg-primary', 'text-white', 'shadow-lg', 'shadow-blue-500/20');
        tabPopular.classList.remove('bg-surface-light', 'dark:bg-surface-dark', 'text-gray-500', 'border');

        tabPrivate.classList.remove('bg-secondary', 'text-white', 'shadow-lg', 'shadow-red-500/20');
        tabPrivate.classList.add('bg-surface-light', 'dark:bg-surface-dark', 'text-gray-500', 'border');
    } else {
        tabPrivate.classList.add('bg-secondary', 'text-white', 'shadow-lg', 'shadow-red-500/20');
        tabPrivate.classList.remove('bg-surface-light', 'dark:bg-surface-dark', 'text-gray-500', 'border');

        tabPopular.classList.remove('bg-primary', 'text-white', 'shadow-lg', 'shadow-blue-500/20');
        tabPopular.classList.add('bg-surface-light', 'dark:bg-surface-dark', 'text-gray-500', 'border');
    }
}

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

    // Filter tours based on category
    // Default 'popular' if no category is set on the object (backward compatibility)
    const filteredTours = tours.filter(tour => {
        const tourCat = tour.category || 'popular';
        return tourCat === currentCategory;
    });

    container.innerHTML = filteredTours.map(tour => {
        let priceDisplay;
        if (tour.category === 'private') {
            if (currentLang === 'es') {
                priceDisplay = `S/ ${tour.price.es} <span class="text-xs text-gray-400 font-normal">/ 5 personas</span>`;
            } else {
                priceDisplay = `$${tour.price.en} <span class="text-xs text-gray-400 font-normal">/ 5 people</span>`;
            }
        } else {
            priceDisplay = `${currentLang === 'es' ? 'S/ ' + tour.price.es : '$' + tour.price.en} <span class="text-xs text-gray-400 font-normal" data-i18n="card.perPerson">${translations[currentLang]["card.perPerson"]}</span>`;
        }

        return `
        <div class="group flex flex-col gap-4 bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 animate-fadeIn">
            <div class="w-full aspect-video rounded-xl bg-gray-200 overflow-hidden relative">
                <div class="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                     style="background-image: url('${tour.images[0]}');"></div>
                ${tour.duration ? `
                <div class="absolute top-3 right-3 bg-secondary/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold shadow-sm text-white">
                    ${tour.duration[currentLang]}
                </div>` : ''}
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
                    <span class="text-primary font-bold text-lg">${priceDisplay}</span>
                    <a href="detail.html#${tour.id}" class="text-sm font-bold text-[#111418] dark:text-white hover:text-secondary" data-i18n="card.details">
                        ${translations[currentLang]["card.details"]}
                    </a>
                </div>
            </div>
        </div>
    `}).join('');
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
    setText('breadcrumb-title', tour.title[currentLang]);
    setText('tour-location', tour.location || 'Cajamarca, Perú');
    setText('tour-rating', tour.rating);
    setText('tour-rating-large', tour.rating);
    setText('tour-reviews-count', `(${tour.reviews} ${currentLang === 'es' ? 'reseñas' : 'reviews'})`);
    setText('tour-reviews-count-large', `${currentLang === 'es' ? 'Basado en' : 'Based on'} ${tour.reviews} ${currentLang === 'es' ? 'opiniones' : 'reviews'}`);

    // Price
    // Price
    let price;
    let oldPrice;

    if (tour.category === 'private') {
        if (currentLang === 'es') {
            price = `S/ ${tour.price.es} / 5 personas`;
            oldPrice = `S/ ${Math.round(tour.price.es * 1.2)} / 5 personas`;
        } else {
            price = `$${tour.price.en} / 5 people`;
            oldPrice = `$${Math.round(tour.price.en * 1.2)} / 5 people`;
        }
    } else {
        price = `${currentLang === 'es' ? 'S/ ' + tour.price.es : '$' + tour.price.en}`;
        oldPrice = `${currentLang === 'es' ? 'S/ ' + Math.round(tour.price.es * 1.2) : '$' + Math.round(tour.price.en * 1.2)}`;
    }

    setText('tour-price', price);
    setText('tour-price-old', oldPrice);

    // Stats
    setText('tour-duration', tour.duration[currentLang]);
    setText('tour-group', tour.groupSize ? tour.groupSize[currentLang] : (currentLang === 'es' ? 'Max 15 personas' : 'Max 15 people'));
    setText('tour-type', tour.type ? tour.type[currentLang] : 'Turismo');

    // Description
    setText('tour-description', tour.fullDescription[currentLang]);

    // Images
    const images = tour.images || [];
    for (let i = 0; i < 4; i++) {
        const imgEl = document.getElementById(`gallery-img-${i}`);
        if (imgEl) {
            if (images[i]) {
                imgEl.src = images[i];
                imgEl.parentElement.classList.remove('hidden');
            } else if (images[0]) {
                // Fallback to first image if not enough images, or hide? 
                // Better to fill with repeated images or hide. Let's hide if not present, except 0.
                if (i > 0) imgEl.parentElement.classList.add('hidden');
                else imgEl.src = images[0];
            }
        }
    }

    // Itinerary
    const itineraryContainer = document.getElementById('tour-itinerary');
    if (itineraryContainer && tour.itinerary) {
        itineraryContainer.innerHTML = tour.itinerary.map(item => `
            <div class="relative pl-6">
                <div class="absolute -left-[25px] top-0 bg-white dark:bg-[#111418] border-2 border-primary rounded-full size-4"></div>
                <span class="text-sm font-bold text-primary mb-1 block">${item.time}</span>
                <h4 class="text-lg font-bold text-[#111418] dark:text-white">${item.title[currentLang]}</h4>
                <p class="text-[#617589] text-sm mt-1">${item.desc[currentLang]}</p>
            </div>
        `).join('');
    }

    // Includes
    const includesContainer = document.getElementById('tour-includes');
    if (includesContainer && tour.includes) {
        includesContainer.innerHTML = tour.includes[currentLang].map(item => `
            <li class="flex items-start gap-3 text-sm text-[#617589]">
                <span class="block size-1.5 bg-green-500 rounded-full mt-2"></span>
                ${item}
            </li>
        `).join('');
    }

    // Not Included
    const notIncludedContainer = document.getElementById('tour-not-included');
    if (notIncludedContainer && tour.notIncluded) {
        notIncludedContainer.innerHTML = tour.notIncluded[currentLang].map(item => `
            <li class="flex items-start gap-3 text-sm text-[#617589]">
                <span class="block size-1.5 bg-red-400 rounded-full mt-2"></span>
                ${item}
            </li>
        `).join('');
    }

    // FAQ
    const faqContainer = document.getElementById('tour-faq');
    if (faqContainer && tour.faq) {
        faqContainer.innerHTML = tour.faq.map(item => `
            <details class="group bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800 open:ring-1 open:ring-primary/20">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none text-[#111418] dark:text-white">
                    <span>${item.q[currentLang]}</span>
                    <span class="transition group-open:rotate-180 material-symbols-outlined">expand_more</span>
                </summary>
                <p class="text-[#617589] mt-3 group-open:animate-fadeIn text-sm leading-relaxed">
                    ${item.a[currentLang]}
                </p>
            </details>
        `).join('');
    }
}

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}
