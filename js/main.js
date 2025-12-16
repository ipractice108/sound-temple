// Sound Temple Bali - Main JavaScript

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.card, .room-card');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLeft.classList.toggle('active');
            navRight.classList.toggle('active');
            document.body.style.overflow = mobileMenuToggle.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLeft.classList.remove('active');
                navRight.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});

// Form validation and submission
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = 'var(--medium-gray)';
            }
        });

        if (isValid) {
            // In production, this would send to a backend
            alert('Thank you for your message! We will respond within 24 hours.');
            form.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
});

// Lazy loading for images (when images are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active state to current page nav link
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = 'var(--primary-blue)';
            link.style.fontWeight = '600';
        }
    });
});

// Price calculator (for future implementation)
const calculateStayPrice = (roomType, nights) => {
    const prices = {
        'garden-studio': 95,
        'forest-villa': 145,
        'creative-loft': 175,
        'temple-suite': 225
    };

    const basePrice = prices[roomType] || 95;
    const total = basePrice * nights;

    // Apply discount for longer stays
    if (nights >= 7 && nights < 14) {
        return total * 0.9; // 10% discount
    } else if (nights >= 14) {
        return total * 0.85; // 15% discount
    }

    return total;
};

// Newsletter subscription handler
const newsletterForms = document.querySelectorAll('form');
newsletterForms.forEach(form => {
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && !form.querySelector('textarea')) {
        // This is likely a newsletter form
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailInput.value;

            if (email && email.includes('@')) {
                alert('Thank you for subscribing! Check your email for a welcome message.');
                form.reset();
            }
        });
    }
});

// Scroll progress indicator (optional enhancement)
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.background = 'var(--primary-blue)';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.2s ease';

    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercentage = (scrollTop / documentHeight) * 100;

        progressBar.style.width = scrollPercentage + '%';
    });
};

// Initialize scroll progress (uncomment to enable)
// createScrollProgress();

// Back to top button
const createBackToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.position = 'fixed';
    button.style.bottom = '2rem';
    button.style.right = '2rem';
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.borderRadius = '50%';
    button.style.background = 'var(--primary-blue)';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.fontSize = '1.5rem';
    button.style.cursor = 'pointer';
    button.style.opacity = '0';
    button.style.transition = 'opacity 0.3s, transform 0.3s';
    button.style.zIndex = '999';
    button.style.boxShadow = '0 4px 15px rgba(44, 95, 141, 0.3)';

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
};

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTop);

// Console welcome message
console.log('%cWelcome to Sound Temple Bali', 'font-size: 20px; color: #2C5F8D; font-weight: bold;');
console.log('%cWhere mindfulness meets modern design', 'font-size: 14px; color: #4A5568;');
console.log('%cLearn more at soundtemple-bali.com', 'font-size: 12px; color: #4A90C6;');
