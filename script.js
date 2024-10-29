// Change sidebar background when scrolling
window.addEventListener('scroll', function() {
    var sidebar = document.getElementById('sidebar');
    if (window.scrollY > 50) {
      sidebar.classList.add('scrolled');
    } else {
      sidebar.classList.remove('scrolled');
    }
  });
  