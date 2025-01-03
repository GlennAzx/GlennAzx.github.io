
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerOffset = 80; // Height of fixed header
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
      // Add active state to nav links on scroll
      const sections = document.querySelectorAll('section');
      window.addEventListener('scroll', () => {
          const sections = document.querySelectorAll('section');
          const navLinks = document.querySelectorAll('nav a');
        
          let currentSection = '';
        
          sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;
            
              // Adjusted scroll position check to trigger earlier
              if (window.scrollY >= (sectionTop - 150)) {
                  currentSection = section.getAttribute('id');
              }
          });
        
          // Special case for contact section when reaching bottom of page
          if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
              currentSection = 'contact';
          }
        
          navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href').substring(1) === currentSection) {
                  link.classList.add('active');
              }
          });
      });
  });

// Back to Top button functionality
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});
