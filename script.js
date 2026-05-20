// ============= JSON DATA (All content from external source) =============
// This simulates loading from a separate data.json file
// In production, you could use fetch('data.json') instead

const studioData = {
    "studioName": "Bluebird Tattoo",
    "location": "Winnipeg, Manitoba, Canada",
    "established": 2014,
    "address": "543 Corydon Avenue, Winnipeg, MB R3L 0P3, Canada",
    "phone": "+1 (204) 555-8228",
    "email": "hello@bluebirdtattoo.ca",
    "googleMapsLink": "https://maps.google.com/?q=Bluebird+Tattoo+Winnipeg",
    "artists": ["Sarah Raven", "Mike Torch", "Luna Chen"],
    "cards": [
        {
            "title": "Professional Atmosphere",
            "description": "Hygiene and comfort come first. Our rooms are certified to Canadian standards and radiate a warm, welcoming energy.",
            "imagePlaceholder": "https://placehold.co/500x300/e2d5c9/5a3e2a?text=Tattoo+Workstation"
        },
        {
            "title": "Custom Designs",
            "description": "From Neo-Traditional to Fine Line – every design is created in close collaboration with you. Your vision, our expertise.",
            "imagePlaceholder": "https://placehold.co/500x300/e2d5c9/5a3e2a?text=Custom+Designs"
        },
        {
            "title": "Artist Family",
            "description": "Bluebird is more than a studio – it's a meeting point for tattoo enthusiasts in Winnipeg. Regular guest spots and events.",
            "imagePlaceholder": "https://placehold.co/500x300/e2d5c9/5a3e2a?text=Community+%26+Art"
        }
    ],
    "openingHours": {
        "monday_friday": "12:00 – 20:00",
        "saturday": "11:00 – 18:00",
        "sunday": "Closed (by appointment only)"
    },
    "googleReviews": [
        { "rating": 5, "text": "Absolutely professional and creative! My two tattoos are perfect artworks. Studio is very clean, great atmosphere.", "author": "Jessica M." },
        { "rating": 5, "text": "Best experience in Winnipeg. The team listens and gives fantastic advice. Highly recommended!", "author": "Daniel P." },
        { "rating": 4, "text": "Very friendly artists, fair price. Appointment was on time. Will come back for my next design.", "author": "Sam K." },
        { "rating": 5, "text": "Incredible detail, super friendly artists. Best shop in Osborne Village!", "author": "Taylor R." }
    ],
    "socialMedia": [
        {
            "platform": "Instagram",
            "icon": "fab fa-instagram",
            "username": "@bluebirdtattoowpg",
            "link": "https://instagram.com/bluebirdtattoowpg",
            "description": "Daily flash art, studio updates & live sessions."
        },
        {
            "platform": "Facebook",
            "icon": "fab fa-facebook",
            "username": "Bluebird Tattoo Winnipeg",
            "link": "https://facebook.com/bluebirdtattoowpg",
            "description": "Events, reviews & artist spotlights."
        },
        {
            "platform": "TikTok",
            "icon": "fab fa-tiktok",
            "username": "@bluebird.tattoo",
            "link": "https://tiktok.com/@bluebird.tattoo",
            "description": "Healing timelapses & tattooing reels."
        }
    ]
};

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Load Cards from JSON
    const cardsContainer = document.getElementById('cards-container');
    if (cardsContainer && studioData.cards) {
        studioData.cards.forEach(card => {
            const cardHTML = `
                <div class="card">
                    <div class="card-img">
                        <img src="${card.imagePlaceholder}" alt="${card.title}">
                        <div class="image-caption">here could be your images</div>
                    </div>
                    <div class="card-content">
                        <h3>${card.title}</h3>
                        <p>${card.description}</p>
                    </div>
                </div>
            `;
            cardsContainer.innerHTML += cardHTML;
        });
    }
    
    // Load Google Reviews
    const reviewsContainer = document.getElementById('google-reviews-list');
    if (reviewsContainer && studioData.googleReviews) {
        reviewsContainer.innerHTML = '';
        studioData.googleReviews.forEach(review => {
            const stars = '★'.repeat(Math.floor(review.rating)) + '☆'.repeat(5 - Math.floor(review.rating));
            const reviewHTML = `
                <div class="review-card">
                    <div class="stars">${stars}</div>
                    <div class="review-text">"${review.text}"</div>
                    <div class="reviewer">— ${review.author}</div>
                </div>
            `;
            reviewsContainer.innerHTML += reviewHTML;
        });
    }
    
    // Set Google Review Link
    const googleLink = document.getElementById('google-review-link');
    if (googleLink && studioData.googleMapsLink) {
        googleLink.href = studioData.googleMapsLink;
    }
    
    // Load Social Media
    const socialGrid = document.getElementById('social-grid');
    if (socialGrid && studioData.socialMedia) {
        studioData.socialMedia.forEach(social => {
            const socialHTML = `
                <div class="social-card">
                    <div class="social-icon"><i class="${social.icon}"></i></div>
                    <h3>${social.platform}</h3>
                    <div class="insta-feed">
                        <i class="fas fa-hashtag"></i> ${social.username}<br>
                        <a href="${social.link}" target="_blank">${social.link.replace('https://', '')}</a>
                        <p style="margin-top: 8px;">${social.description}</p>
                    </div>
                </div>
            `;
            socialGrid.innerHTML += socialHTML;
        });
    }
    
    // Load Opening Hours
    const hoursDiv = document.getElementById('hours-json');
    if (hoursDiv && studioData.openingHours) {
        const hoursHtml = `
            <div><strong>📅 Mon–Fri</strong><br>${studioData.openingHours.monday_friday}</div>
            <div><strong>🎨 Saturday</strong><br>${studioData.openingHours.saturday}</div>
            <div><strong>🌿 Sunday</strong><br>${studioData.openingHours.sunday}</div>
        `;
        hoursDiv.innerHTML = hoursHtml;
    }
    
    // Load Contact Info in Footer & Map Address
    const footerContact = document.getElementById('footer-contact');
    if (footerContact && studioData.address && studioData.email && studioData.phone) {
        footerContact.innerHTML = `📍 ${studioData.address} | ✉️ ${studioData.email} | 📞 ${studioData.phone}`;
    }
    
    const mapAddress = document.getElementById('map-address');
    if (mapAddress && studioData.address) {
        mapAddress.innerHTML = `<i class="fas fa-map-marker-alt"></i> <strong>Bluebird Tattoo</strong> – ${studioData.address}`;
    }
    
    // Set Hero Text from JSON (optional customization)
    const heroTitle = document.getElementById('hero-title');
    const heroText = document.getElementById('hero-text');
    if (heroTitle && studioData.studioName) {
        // Keep as is or customize - keeping original engaging text
    }
    
    // Scroll Animation (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeElements.forEach(el => observer.observe(el));
    
    // Small entrance animation for hero title
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.8s';
            heroTitle.style.opacity = '1';
        }, 100);
    }
    
    console.log("Bluebird Tattoo website loaded – fully dynamic with JSON data!");
});

// Alternative: If you want to load from external JSON file, use this fetch approach:
/*
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Use data object instead of studioData
        console.log('Loaded from external JSON:', data);
    })
    .catch(error => console.error('Error loading JSON:', error));
*/
