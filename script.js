// Add smooth scrolling behavior for sidebar navigation
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Remove active class from all links
      document.querySelectorAll('.nav-link').forEach((nav) => nav.classList.remove('active'));
  
      // Add active class to the clicked link
      this.classList.add('active');
  
      // Get the target section's ID from the href attribute
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      // Scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
  