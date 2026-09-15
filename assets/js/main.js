document.addEventListener('DOMContentLoaded', function () {
  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var backdrop = document.getElementById('mobileMenuBackdrop');

  function closeMenu() {
    mobileMenu.classList.remove('open');
    backdrop.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    var isOpen = mobileMenu.classList.toggle('open');
    backdrop.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  }

  if (hamburgerBtn && mobileMenu && backdrop) {
    hamburgerBtn.addEventListener('click', toggleMenu);
    backdrop.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Brands carousel arrows
  var brandStrip = document.getElementById('brandStrip');
  var brandPrev = document.getElementById('brandPrev');
  var brandNext = document.getElementById('brandNext');

  if (brandStrip && brandPrev && brandNext) {
    var scrollBrands = function (direction) {
      var badge = brandStrip.querySelector('.brand-badge');
      var amount = badge ? badge.getBoundingClientRect().width + 14 : 150;
      brandStrip.scrollBy({ left: direction * amount * 3, behavior: 'smooth' });
    };
    brandPrev.addEventListener('click', function () { scrollBrands(-1); });
    brandNext.addEventListener('click', function () { scrollBrands(1); });
  }
});
