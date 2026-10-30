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

// Formulaire de contact : envoi sans quitter la page (FormSubmit, mode AJAX)
(function () {
  var form = document.getElementById('formulaire');
  if (!form) return;
  var status = form.querySelector('.contact-form__status');
  var button = form.querySelector('button[type="submit"]');

  function show(msg, ok) {
    status.className = 'contact-form__status ' + (ok ? 'is-success' : 'is-error');
    status.innerHTML = msg;
  }

  // Retour après un envoi classique (navigateur sans JavaScript actif au moment de l'envoi)
  if (/[?&]envoye=1/.test(location.search)) show('Merci, votre message a bien été envoyé. Je vous réponds rapidement.', true);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fields = form.querySelectorAll('[required]');
    var firstInvalid = null;
    fields.forEach(function (f) {
      var bad = !f.value.trim() || (f.type === 'email' && !f.checkValidity());
      f.setAttribute('aria-invalid', bad ? 'true' : 'false');
      if (bad && !firstInvalid) firstInvalid = f;
    });
    if (firstInvalid) {
      show('Merci de compléter les champs obligatoires (avec une adresse email valide).', false);
      firstInvalid.focus();
      return;
    }
    button.disabled = true;
    show('Envoi en cours…', true);
    var data = new FormData(form);
    var networkError = false;
    fetch(form.getAttribute('data-ajax'), {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    })
      .catch(function (err) { networkError = true; throw err; })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, body: j }; }); })
      .then(function (res) {
        if (res.ok && String(res.body.success) === 'true') {
          form.reset();
          show('Merci, votre message a bien été envoyé. Je vous réponds rapidement.', true);
        } else {
          if (window.console) console.warn('Formulaire de contact – réponse du service :', res.body);
          throw new Error('refus');
        }
      })
      .catch(function () {
        if (networkError) {
          // Envoi en arrière-plan bloqué (réseau, extension…) : envoi classique du formulaire
          show('Envoi en cours…', true);
          HTMLFormElement.prototype.submit.call(form);
          return;
        }
        show('L\'envoi n\'a pas abouti. Vous pouvez m\'écrire directement à <a href="mailto:contact@gayraud.it">contact@gayraud.it</a>.', false);
      })
      .then(function () { button.disabled = false; });
  });
})();
