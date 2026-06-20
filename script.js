/* ===================================================
   MD SALMAN PORTFOLIO - JAVASCRIPT
   Interactivity, Animations & Form Handling
   ==================================================== */

// Wait for the page to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Portfolio loaded successfully!');
    
    // Initialize all functions
    initializeMobileMenu();
    initializeFormHandling();
    initializeSmoothScrolling();
    initializeScrollAnimations();
});

/* ===================================================
   MOBILE MENU FUNCTIONALITY
   ==================================================== */

function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // If hamburger menu exists (mobile view)
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Toggle menu visibility
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            
            // Animate hamburger icon
            hamburger.style.transform = navLinks.style.display === 'flex' ? 'rotate(90deg)' : 'rotate(0)';
        });
        
        // Close menu when a link is clicked
        const navItems = document.querySelectorAll('.nav-link');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.style.display = 'none';
                hamburger.style.transform = 'rotate(0)';
            });
        });
    }
}

/* ===================================================
   CONTACT FORM HANDLING
   ==================================================== */

function initializeFormHandling() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            // Get form values
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            // Validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                showNotification('Please fill all fields!', 'error');
                return;
            }
            
            // Validate email format
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email!', 'error');
                return;
            }
            
            // Show success message
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            
            // Clear form
            form.reset();
            
            // In a real application, you would send this to a server here
            // For now, it just shows a confirmation
            console.log('Form Data:', { name, email, message });
        });
    }
}

// Check if email is valid
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification messages
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#00d4ff' : '#ff6b6b'};
        color: #0f1419;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

/* ===================================================
   SMOOTH SCROLLING FOR NAVIGATION
   ==================================================== */

function initializeSmoothScrolling() {
    // Get all navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only smooth scroll if it's a valid section
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                
                // Get target element
                const target = document.querySelector(href);
                
                // Scroll to target with smooth behavior
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ===================================================
   SCROLL ANIMATIONS - Elements animate as you scroll
   ==================================================== */

function initializeScrollAnimations() {
    // Check if IntersectionObserver is supported (modern browsers)
    if (!('IntersectionObserver' in window)) {
        return;
    }
    
    // Elements to animate
    const elementsToAnimate = document.querySelectorAll(
        '.project-card, .skill-category, .education-item, .contact-item'
    );
    
    // Intersection Observer options
    const options = {
        threshold: 0.1,      // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
    };
    
    // Create observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element becomes visible
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                
                // Stop observing this element (animation only happens once)
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Start observing all elements
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

/* ===================================================
   NAVBAR HIGHLIGHTING - Highlight current section
   ==================================================== */

window.addEventListener('scroll', function() {
    // Get all sections
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    // Check which section is in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Update nav links styling
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

/* ===================================================
   SCROLL TO TOP BUTTON (Optional)
   ==================================================== */

function createScrollToTopButton() {
    // Create button
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #00d4ff, #7c3aed);
        color: #0f1419;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 24px;
        font-weight: bold;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 212, 255, 0.2);
    `;
    
    document.body.appendChild(button);
    
    // Show button when scrolled down
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
createScrollToTopButton();

/* ===================================================
   PERFORMANCE TIPS
   ==================================================== */

// Lazy loading for images (in future when you add more images)
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }
}

/* ===================================================
   THEME TOGGLE (Optional - for light/dark mode)
   ==================================================== */

function initializeThemeToggle() {
    // Check if user has saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // In future, you can add a button to toggle themes
    // and save preference using localStorage
}

// Initialize theme
initializeThemeToggle();

/* ===================================================
   KEYBOARD SHORTCUTS (Nice to have)
   ==================================================== */

document.addEventListener('keydown', function(event) {
    // Press '/' to focus on contact
    if (event.key === '/') {
        event.preventDefault();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'h' to go to home
    if (event.key === 'h') {
        document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
    }
});

/* ===================================================
   CONSOLE LOG - Friendly message
   ==================================================== */

console.log(`
%c🚀 MD Salman's Portfolio%c
Welcome to my portfolio! 
Looking for a Full Stack Developer?
Get in touch: mdsalman181931@gmail.com

Explore my projects and skills!
`, 'font-size: 20px; color: #00d4ff; font-weight: bold;', 'font-size: 14px; color: #7c3aed;');




/// from
// Contact Form - Formspree
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const btn = contactForm.querySelector('.submit-btn');
        btn.textContent = 'Sending...';
        btn.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                btn.textContent = '✅ Sent!';
                btn.style.background = '#22c55e';
                contactForm.reset();
                setTimeout(() => {
                    btn.textContent = 'Send Message';
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            } else {
                btn.textContent = '❌ Failed. Try again.';
                btn.style.background = '#ef4444';
                btn.disabled = false;
                setTimeout(() => {
                    btn.textContent = 'Send Message';
                    btn.style.background = '';
                }, 3000);
            }
        } catch (err) {
            btn.textContent = '❌ Network Error';
            btn.disabled = false;
        }
    });
}