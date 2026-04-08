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

    // ⚡ Bolt: Replaced expensive scroll event listener and synchronous getBoundingClientRect()
    // with natively optimized IntersectionObserver for gallery item animations.
    // Why: `scroll` fires frequently and `getBoundingClientRect` causes layout thrashing, blocking the main thread.
    // Impact: Avoids main thread blocking and forced reflows during scrolling, reducing jank.
    // Measurement: Monitor main thread activity in DevTools performance tab during scroll.
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const galleryObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Determine staggered index based on horizontal position or just apply a class
                // Actually, since we unobserve immediately, standard intersection without index is often fine,
                // but to preserve the stagger we can use a small delay based on the index in the original list.
                const item = entry.target;
                const index = Array.from(galleryItems).indexOf(item);
                setTimeout(() => {
                    item.classList.add('slide-in');
                }, index * 100); // Note: For better visual in a real grid, delay could be based on row/col, but preserving original logic.

                // Stop observing once animated
                observer.unobserve(item);
            }
        });
    }, { threshold: 0.1 });

    galleryItems.forEach(item => {
        galleryObserver.observe(item);
    });

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