/* ===========================================================
   js/main.js — Travel Website — All interactivity (Levels 1-3)
   Works across multiple pages (home, gallery, faq, contact)
   =========================================================== */

// ============================================================
// 1. SLIDER DATA & STATE
// ============================================================
const slides = [
  {
    img: "images/paris.jpg",
    caption_fr: "Paris, France",
    caption_en: "Paris, France"
  },
  {
    img: "images/tokyo.jpg",
    caption_fr: "Tokyo, Japon",
    caption_en: "Tokyo, Japan"
  },
  {
    img: "images/newyork.jpg",
    caption_fr: "New York, États-Unis",
    caption_en: "New York, United States"
  },
  {
    img: "images/constantine.jpg",
    caption_fr: "Constantine, Algérie",
    caption_en: "Constantine, Algeria"
  }
];

let currentSlide = 0;
let autoplayInterval = null;
let isPlaying = true;
let currentLang = "fr";

// ============================================================
// 2. TRANSLATION DICTIONARY (Level 3 — FR / EN)
// ============================================================
const translations = {
  fr: {
    title: "Voyages & Découvertes",
    nav_home: "Accueil",
    nav_gallery: "Galerie",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_tagline: "Explorez le monde avec nous",
    slider_title: "Destinations populaires",
    slider_prev: "❮",
    slider_next: "❯",
    slider_pause: "⏸",
    slider_play: "▶",
    about_badge: "Notre histoire",
    about_title: "À propos",
    about_intro:
      "Nous sommes passionnés par les voyages et la découverte de nouvelles cultures. Notre mission est de vous inspirer à explorer le monde.",
    about_more:
      "Depuis 2010, nous avons aidé des milliers de voyageurs à planifier leurs aventures à travers les cinq continents. Que vous rêviez de plages tropicales, de montagnes enneigées ou de villes historiques, nous avons la destination idéale pour vous. Rejoignez notre communauté et commencez votre prochaine aventure dès aujourd'hui !",
    about_show_more: "Voir plus",
    about_hide: "Masquer",
    stat_years: "Années d'expérience",
    stat_travelers: "Voyageurs satisfaits",
    stat_destinations: "Destinations",
    cta_title: "Prêt à partir ?",
    cta_text: "Découvrez nos destinations et commencez à planifier votre prochain voyage.",
    cta_explore: "Explorer la galerie",
    cta_contact: "Nous contacter",
    // Gallery page
    gallery_title: "Nos Destinations",
    gallery_subtitle: "Découvrez les plus beaux endroits du monde",
    tag_europe: "Europe",
    tag_asia: "Asie",
    tag_americas: "Amériques",
    tag_africa: "Afrique",
    dest_paris: "Paris, France",
    dest_paris_desc: "La ville lumière, ses musées, la Tour Eiffel et sa gastronomie légendaire.",
    dest_paris_price: "À partir de 450€",
    dest_tokyo: "Tokyo, Japon",
    dest_tokyo_desc: "Un mélange unique de tradition ancestrale et de technologie futuriste.",
    dest_tokyo_price: "À partir de 890€",
    dest_newyork: "New York, États-Unis",
    dest_newyork_desc: "La ville qui ne dort jamais : Times Square, Central Park, Broadway.",
    dest_newyork_price: "À partir de 650€",
    dest_constantine: "Constantine, Algérie",
    dest_constantine_desc: "La ville des ponts suspendus, perchée sur des gorges spectaculaires.",
    dest_constantine_price: "À partir de 320€",
    dest_bali: "Bali, Indonésie",
    dest_bali_desc: "Plages paradisiaques, temples sacrés et rizières en terrasses.",
    dest_bali_price: "À partir de 750€",
    dest_barcelona: "Barcelone, Espagne",
    dest_barcelona_desc: "Architecture de Gaudí, plages méditerranéennes et tapas savoureuses.",
    dest_barcelona_price: "À partir de 380€",
    dest_book: "Réserver",
    // FAQ page
    faq_badge: "Besoin d'aide ?",
    faq_title: "Questions fréquentes",
    faq_hero_subtitle: "Tout ce que vous devez savoir avant de voyager",
    faq_q1: "Comment réserver un voyage ?",
    faq_a1:
      "Vous pouvez réserver directement sur notre site en remplissant le formulaire de contact ou en nous appelant au +33 1 23 45 67 89.",
    faq_q2: "Quels modes de paiement acceptez-vous ?",
    faq_a2:
      "Nous acceptons les cartes bancaires (Visa, MasterCard), PayPal et les virements bancaires.",
    faq_q3: "Puis-je annuler ma réservation ?",
    faq_a3:
      "Oui, les annulations sont gratuites jusqu'à 30 jours avant le départ. Au-delà, des frais peuvent s'appliquer selon les conditions générales.",
    faq_q4: "Proposez-vous une assurance voyage ?",
    faq_a4:
      "Oui, nous proposons plusieurs formules d'assurance voyage couvrant l'annulation, les frais médicaux et la perte de bagages. Contactez-nous pour plus de détails.",
    faq_q5: "Les visas sont-ils inclus dans le prix ?",
    faq_a5:
      "Les frais de visa ne sont généralement pas inclus. Cependant, notre équipe peut vous accompagner dans toutes les démarches administratives nécessaires.",
    faq_cta_text: "Vous avez d'autres questions ?",
    faq_cta_btn: "Contactez-nous",
    // Contact page
    contact_badge: "Parlons voyage",
    contact_title: "Contactez-nous",
    contact_hero_subtitle: "Nous serions ravis de planifier votre prochain voyage",
    contact_email_title: "Email",
    contact_phone_title: "Téléphone",
    contact_address_title: "Adresse",
    contact_address: "12 Rue du Voyage, 75001 Paris",
    contact_form_heading: "Envoyez-nous un message",
    form_name_label: "Nom",
    form_name_placeholder: "Votre nom",
    form_email_label: "Email",
    form_email_placeholder: "Votre email",
    form_message_label: "Message",
    form_message_placeholder: "Votre message (min. 10 caractères)",
    form_submit: "Envoyer",
    form_success: "Message envoyé avec succès !",
    error_name: "Le nom doit contenir au moins 2 caractères.",
    error_email: "Veuillez entrer un email valide.",
    error_message: "Le message doit contenir au moins 10 caractères.",
    modal_title: "Abonnez-vous à notre newsletter",
    modal_text:
      "Recevez nos meilleures offres de voyage directement dans votre boîte mail !",
    modal_placeholder: "Votre email",
    modal_subscribe: "S'abonner",
    footer_copy: "© 2026 Voyages & Découvertes. Tous droits réservés.",
    footer_subscribe: "S'abonner à la newsletter"
  },
  en: {
    title: "Travel & Discoveries",
    nav_home: "Home",
    nav_gallery: "Gallery",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_tagline: "Explore the world with us",
    slider_title: "Popular Destinations",
    slider_prev: "❮",
    slider_next: "❯",
    slider_pause: "⏸",
    slider_play: "▶",
    about_badge: "Our story",
    about_title: "About Us",
    about_intro:
      "We are passionate about travel and discovering new cultures. Our mission is to inspire you to explore the world.",
    about_more:
      "Since 2010, we have helped thousands of travelers plan their adventures across five continents. Whether you dream of tropical beaches, snowy mountains, or historic cities, we have the perfect destination for you. Join our community and start your next adventure today!",
    about_show_more: "Show more",
    about_hide: "Hide",
    stat_years: "Years of experience",
    stat_travelers: "Happy travelers",
    stat_destinations: "Destinations",
    cta_title: "Ready to go?",
    cta_text: "Discover our destinations and start planning your next trip.",
    cta_explore: "Explore gallery",
    cta_contact: "Contact us",
    // Gallery page
    gallery_title: "Our Destinations",
    gallery_subtitle: "Discover the most beautiful places in the world",
    tag_europe: "Europe",
    tag_asia: "Asia",
    tag_americas: "Americas",
    tag_africa: "Africa",
    dest_paris: "Paris, France",
    dest_paris_desc: "The City of Light, its museums, the Eiffel Tower, and legendary cuisine.",
    dest_paris_price: "From €450",
    dest_tokyo: "Tokyo, Japan",
    dest_tokyo_desc: "A unique blend of ancient tradition and futuristic technology.",
    dest_tokyo_price: "From €890",
    dest_newyork: "New York, United States",
    dest_newyork_desc: "The city that never sleeps: Times Square, Central Park, Broadway.",
    dest_newyork_price: "From €650",
    dest_constantine: "Constantine, Algeria",
    dest_constantine_desc: "The city of suspension bridges, perched above spectacular gorges.",
    dest_constantine_price: "From €320",
    dest_bali: "Bali, Indonesia",
    dest_bali_desc: "Idyllic beaches, sacred temples, and terraced rice paddies.",
    dest_bali_price: "From €750",
    dest_barcelona: "Barcelona, Spain",
    dest_barcelona_desc: "Gaudí architecture, Mediterranean beaches, and delicious tapas.",
    dest_barcelona_price: "From €380",
    dest_book: "Book now",
    // FAQ page
    faq_badge: "Need help?",
    faq_title: "Frequently Asked Questions",
    faq_hero_subtitle: "Everything you need to know before traveling",
    faq_q1: "How do I book a trip?",
    faq_a1:
      "You can book directly on our website by filling out the contact form or by calling us at +33 1 23 45 67 89.",
    faq_q2: "What payment methods do you accept?",
    faq_a2:
      "We accept credit cards (Visa, MasterCard), PayPal, and bank transfers.",
    faq_q3: "Can I cancel my booking?",
    faq_a3:
      "Yes, cancellations are free up to 30 days before departure. After that, fees may apply according to the general terms and conditions.",
    faq_q4: "Do you offer travel insurance?",
    faq_a4:
      "Yes, we offer several travel insurance plans covering cancellation, medical expenses, and lost luggage. Contact us for more details.",
    faq_q5: "Are visas included in the price?",
    faq_a5:
      "Visa fees are generally not included. However, our team can assist you with all necessary administrative procedures.",
    faq_cta_text: "Have more questions?",
    faq_cta_btn: "Contact us",
    // Contact page
    contact_badge: "Let's talk travel",
    contact_title: "Contact Us",
    contact_hero_subtitle: "We'd love to help plan your next trip",
    contact_email_title: "Email",
    contact_phone_title: "Phone",
    contact_address_title: "Address",
    contact_address: "12 Rue du Voyage, 75001 Paris",
    contact_form_heading: "Send us a message",
    form_name_label: "Name",
    form_name_placeholder: "Your name",
    form_email_label: "Email",
    form_email_placeholder: "Your email",
    form_message_label: "Message",
    form_message_placeholder: "Your message (min. 10 characters)",
    form_submit: "Send",
    form_success: "Message sent successfully!",
    error_name: "Name must be at least 2 characters.",
    error_email: "Please enter a valid email address.",
    error_message: "Message must be at least 10 characters.",
    modal_title: "Subscribe to our newsletter",
    modal_text:
      "Receive our best travel deals straight to your inbox!",
    modal_placeholder: "Your email",
    modal_subscribe: "Subscribe",
    footer_copy: "© 2026 Travel & Discoveries. All rights reserved.",
    footer_subscribe: "Subscribe to newsletter"
  }
};

// ============================================================
// DOM REFERENCES (null-safe — not all pages have all elements)
// ============================================================
var sliderImg = document.getElementById("slider-img");
var sliderCaption = document.getElementById("slider-caption");
var sliderCounter = document.getElementById("slider-counter");
var prevBtn = document.getElementById("slider-prev");
var nextBtn = document.getElementById("slider-next");
var playPauseBtn = document.getElementById("slider-play-pause");
var sliderDotsContainer = document.getElementById("slider-dots");

var themeToggle = document.getElementById("theme-toggle");
var langToggle = document.getElementById("lang-toggle");

var faqItems = document.querySelectorAll(".faq-item");

var readMoreBtn = document.getElementById("read-more-btn");
var aboutMore = document.getElementById("about-more");

var contactForm = document.getElementById("contact-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var formSuccess = document.getElementById("form-success");

var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("open-modal-btn");
var closeModalBtn = document.getElementById("modal-close");

// ============================================================
// 3. SLIDER DOTS — build from slides array (home page only)
// ============================================================
function buildDots() {
  if (!sliderDotsContainer) return;
  sliderDotsContainer.innerHTML = "";
  slides.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.classList.add("slider-dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", function () {
      showSlide(i);
      resetAutoplay();
    });
    sliderDotsContainer.appendChild(dot);
  });
}

function updateDots() {
  if (!sliderDotsContainer) return;
  var dots = sliderDotsContainer.querySelectorAll(".slider-dot");
  dots.forEach(function (d, i) {
    d.classList.toggle("active", i === currentSlide);
  });
}

// ============================================================
// 4. SLIDER — showSlide, Prev, Next (Level 1)
// ============================================================
function showSlide(index) {
  if (!sliderImg) return;
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentSlide = index;

  sliderImg.src = slides[currentSlide].img;
  if (sliderCaption) {
    sliderCaption.textContent =
      currentLang === "fr"
        ? slides[currentSlide].caption_fr
        : slides[currentSlide].caption_en;
  }
  if (sliderCounter) {
    sliderCounter.textContent =
      (currentSlide + 1) + " / " + slides.length;
  }
  updateDots();
}

if (prevBtn) {
  prevBtn.addEventListener("click", function () {
    showSlide(currentSlide - 1);
    resetAutoplay();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", function () {
    showSlide(currentSlide + 1);
    resetAutoplay();
  });
}

// ============================================================
// 5. SLIDER AUTOPLAY + PAUSE (Level 3)
// ============================================================
function startAutoplay() {
  if (!sliderImg) return;
  if (autoplayInterval) clearInterval(autoplayInterval);
  autoplayInterval = setInterval(function () {
    showSlide(currentSlide + 1);
  }, 4000);
  isPlaying = true;
  if (playPauseBtn) playPauseBtn.textContent = translations[currentLang].slider_pause;
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = null;
  isPlaying = false;
  if (playPauseBtn) playPauseBtn.textContent = translations[currentLang].slider_play;
}

function resetAutoplay() {
  if (isPlaying) {
    startAutoplay();
  }
}

if (playPauseBtn) {
  playPauseBtn.addEventListener("click", function () {
    if (isPlaying) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });
}

// ============================================================
// 6. THEME TOGGLE + localStorage (Level 1 + Level 2)
// ============================================================
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) themeToggle.querySelector(".theme-icon").textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    if (themeToggle) themeToggle.querySelector(".theme-icon").textContent = "🌙";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    var isDark = document.body.classList.toggle("dark");
    if (isDark) {
      themeToggle.querySelector(".theme-icon").textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.querySelector(".theme-icon").textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
}

// ============================================================
// 7. FAQ ACCORDION — single open at a time (Level 1 + Level 3)
// ============================================================
faqItems.forEach(function (item) {
  var question = item.querySelector(".faq-question");
  question.addEventListener("click", function () {
    var isActive = item.classList.contains("active");

    // Close all other open items first (Level 3)
    faqItems.forEach(function (other) {
      other.classList.remove("active");
    });

    // Toggle current
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// ============================================================
// 8. FORM VALIDATION (Level 2)
// ============================================================
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var valid = true;

    // Clear previous
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.classList.add("hidden");

    // Name validation (>= 2 chars)
    if (nameInput.value.trim().length < 2) {
      nameError.textContent = translations[currentLang].error_name;
      valid = false;
    }

    // Email validation (contains @ and .)
    var emailVal = emailInput.value.trim();
    if (!emailVal.includes("@") || !emailVal.includes(".")) {
      emailError.textContent = translations[currentLang].error_email;
      valid = false;
    }

    // Message validation (>= 10 chars)
    if (messageInput.value.trim().length < 10) {
      messageError.textContent = translations[currentLang].error_message;
      valid = false;
    }

    if (valid) {
      formSuccess.classList.remove("hidden");
      contactForm.reset();
    }
  });
}

// ============================================================
// 9. SHOW / HIDE — Read More (Level 2)
// ============================================================
if (readMoreBtn && aboutMore) {
  readMoreBtn.addEventListener("click", function () {
    var isHidden = aboutMore.classList.contains("hidden");
    aboutMore.classList.toggle("hidden");

    if (isHidden) {
      readMoreBtn.textContent = translations[currentLang].about_hide;
    } else {
      readMoreBtn.textContent = translations[currentLang].about_show_more;
    }
  });
}

// ============================================================
// 10. LANGUAGE TOGGLE FR / EN + localStorage (Level 3)
// ============================================================
function setLanguage(lang) {
  currentLang = lang;

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update all data-i18n-placeholder elements
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update document title
  document.title = translations[lang].title;

  // Update slider caption for current slide (home page only)
  if (sliderImg) showSlide(currentSlide);

  // Update play/pause button text
  if (playPauseBtn) {
    if (isPlaying) {
      playPauseBtn.textContent = translations[lang].slider_pause;
    } else {
      playPauseBtn.textContent = translations[lang].slider_play;
    }
  }

  // Update read-more button text based on state (home page only)
  if (readMoreBtn && aboutMore) {
    if (aboutMore.classList.contains("hidden")) {
      readMoreBtn.textContent = translations[lang].about_show_more;
    } else {
      readMoreBtn.textContent = translations[lang].about_hide;
    }
  }

  // Update lang toggle button highlights
  if (langToggle) {
    var activeSpan = langToggle.querySelector(".lang-active");
    var inactiveSpan = langToggle.querySelector(".lang-inactive");
    if (lang === "fr") {
      activeSpan.textContent = "FR";
      inactiveSpan.textContent = "EN";
    } else {
      activeSpan.textContent = "EN";
      inactiveSpan.textContent = "FR";
    }
  }

  // Save preference
  localStorage.setItem("lang", lang);
}

if (langToggle) {
  langToggle.addEventListener("click", function () {
    var newLang = currentLang === "fr" ? "en" : "fr";
    setLanguage(newLang);
  });
}

// ============================================================
// 11. MODAL — Open / Close / ESC / Outside click (Level 3)
// ============================================================
function openModal() {
  if (modal) modal.classList.add("active");
}

function closeModal() {
  if (modal) modal.classList.remove("active");
}

if (openModalBtn) openModalBtn.addEventListener("click", openModal);
if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);

// Close on ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Close when clicking outside modal content
if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// ============================================================
// INITIALIZATION — Load preferences on page load
// ============================================================
(function init() {
  // Build slider dots (home page only)
  buildDots();

  // Load saved theme
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  // Load saved language
  var savedLang = localStorage.getItem("lang");
  if (savedLang && (savedLang === "fr" || savedLang === "en")) {
    setLanguage(savedLang);
  } else {
    setLanguage("fr");
  }

  // Show first slide & start autoplay (home page only)
  if (sliderImg) {
    showSlide(0);
    startAutoplay();
  }
})();
