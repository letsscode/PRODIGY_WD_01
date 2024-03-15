window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = '#555';
    navLinks.forEach(link => {
      link.style.color = '#fff';
    });
  } else {
    navbar.style.backgroundColor = '#333';
    navLinks.forEach(link => {
      link.style.color = '#fff';
    });
  }
});
