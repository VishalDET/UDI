

  
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

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('.udi-header');
  const logo = document.querySelector('#udi-header-logo');
  const navLinks = document.querySelectorAll('.udi-nav-link');

  if (!header || !logo || navLinks.length === 0) return;

  // Handle hover
  header.addEventListener('mouseenter', function () {
    navLinks.forEach(link => {
      link.style.color = '#333'; // example hover color
    });

    // Only change logo if not scrolled
    if (!header.classList.contains('scrolled')) {
      logo.src = 'assets/images/Logos/udi/udi1.png';
    }
  });

  header.addEventListener('mouseleave', function () {
    navLinks.forEach(link => {
      link.style.color = ''; // reset to original
    });

    // Restore logo based on scroll state
    if (!header.classList.contains('scrolled')) {
      logo.src = 'assets/images/Logos/udi/udi-white3.png';
    }
  });

  // Handle scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      logo.src = 'assets/images/Logos/udi/udi1.png';
    } else {
      header.classList.remove('scrolled');
      logo.src = 'assets/images/Logos/udi/udi-white3.png';
    }
  });
});

      