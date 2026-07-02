/* 
   SHARED JAVASCRIPT - script.js
   Handles interactions, video controls, and animations across the site.
   
   HOW TO EDIT:
   - Modify the video control logic if you change video IDs or classes.
   - Update the contact form handling section for backend integration.
   - Add new animations or scroll effects here.
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- MOBILE NAV (HAMBURGER MENU) ---
    // Shows/hides the nav links on small screens when the hamburger is tapped
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close the menu automatically once a link is tapped (better mobile UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- VIDEO CONTROLS ---
    // Handles play/pause for sections with video elements
    const videoElements = document.querySelectorAll('video');
    
    videoElements.forEach(video => {
        // Toggle play/pause on click
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    // Custom Play/Pause Buttons (if present in HTML)
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const videoId = btn.getAttribute('data-video');
            const video = document.getElementById(videoId);
            if (video) {
                if (video.paused) {
                    video.play();
                    btn.textContent = 'Pause';
                } else {
                    video.pause();
                    btn.textContent = 'Play';
                }
            }
        });
    });

    // --- SOCIAL MEDIA COUNTER ANIMATION ---
    // Simple logic to ensure counters are visible on load
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        // Future improvement: Add count-up animation here
        // Currently just ensuring visibility as per requirements
        counter.style.opacity = '1';
    });

    // --- CONTACT FORM HANDLING ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // EDITABLE: Configure form submission behavior here
            // For now, it just shows a success message
            alert('Thank you for your message! Kirikou Akili\'s team will get back to you soon.');
            contactForm.reset();
        });
    }

    // --- SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});

/* 
   FUTURE EDITS:
   - To add an API for real-time follower counts, insert the fetch logic here.
   - To integrate a real email service (like Formspree or EmailJS), update the form listener.
*/
