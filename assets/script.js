window.addEventListener('scroll', function() {
    const header = document.querySelector('.udi-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Counter animation
    const counterElements = document.querySelectorAll('.achievement-number');
    
    const startCounting = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const count = +element.innerText;
        const increment = Math.ceil(target / 40); // Adjust for smoother animation
        const duration = 1500; // Total animation duration in ms
        const interval = duration / (target / increment);
        
        if (count < target) {
            // Calculate next value but don't exceed target
            const next = Math.min(count + increment, target);
            element.innerText = next;
            setTimeout(() => startCounting(element), interval);
        } else {
            element.innerText = target;
        }
    };
    
    // Use Intersection Observer to start counting when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counterElements.forEach(counter => {
        observer.observe(counter);
    });
});