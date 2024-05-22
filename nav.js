window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#535C91'; // Change background color when scrolled
    } else {
      navbar.style.backgroundColor = '#393E46';
    }
  });

  var navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      this.style.color = '#AE445A'; // Change font color when hovered over
    });
    link.addEventListener('mouseout', function() {
      this.style.color = '#fff'; 
    });
  });