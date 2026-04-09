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

    // ⚡ Bolt: Add sliding animation for gallery items using IntersectionObserver
    // Replaces scroll event listener & getBoundingClientRect() to prevent layout thrashing
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !entry.target.classList.contains('slide-in')) {
                    // Find original index to maintain staggered animation pattern
                    const index = Array.from(galleryItems).indexOf(entry.target);
                    // Add delay based on index for staggered animation
                    setTimeout(() => {
                        entry.target.classList.add('slide-in');
                    }, index * 100);
                    // Stop observing once animation is triggered
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        galleryItems.forEach(item => {
            observer.observe(item);
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