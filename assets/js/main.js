// Menu mobile : ouverture / fermeture
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
})();

// Année courante dans le pied de page
(function () {
  var el = document.querySelector('[data-year]');
  if (el) el.textContent = new Date().getFullYear();
})();

// Agenda Google : chargé uniquement après clic (aucun cookie Google avant consentement)
(function () {
  var box = document.getElementById('agenda');
  if (!box) return;
  var btn = box.querySelector('[data-load-booking]');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var frame = document.createElement('iframe');
    frame.className = 'booking-frame';
    frame.src = box.getAttribute('data-src');
    frame.title = 'Agenda de réservation Google : choisir un créneau';
    frame.setAttribute('tabindex', '0');
    box.replaceWith(frame);
    frame.focus();
  });
})();
