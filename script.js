document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
            navLinks.classList.remove('active');
        }
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add sliding animation for gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // ⚡ Bolt: Replaced scroll event listener and getBoundingClientRect with IntersectionObserver.
    // This offloads visibility checking to the browser, preventing synchronous layout thrashing
    // and main thread blocking on scroll events, improving scroll performance and framerate.
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting && !entry.target.classList.contains('slide-in')) {
                    // Add delay based on index for staggered animation of items intersecting at the same time
                    setTimeout(() => {
                        entry.target.classList.add('slide-in');
                    }, index * 100);
                    // Stop observing once animated to save resources
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        galleryItems.forEach(item => {
            animationObserver.observe(item);
        });
    } else {
        // Fallback for browsers that do not support IntersectionObserver
        galleryItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('slide-in');
            }, index * 100);
        });
    }

    // Add hover effect for gallery items
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const overlay = item.querySelector('.overlay');
            overlay.style.transform = 'translateY(0)';
        });

        item.addEventListener('mouseleave', () => {
            const overlay = item.querySelector('.overlay');
            overlay.style.transform = 'translateY(100%)';
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert(`Thank you for your message, ${name}! We'll get back to you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
}); 