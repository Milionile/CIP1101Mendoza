window.onscroll = function() {
    let btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Scroll to top when button clicked
  function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }