// Gryting Trelast / Gryting Sag — main.js

// Mobilmeny
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Kontaktskjema: åpner e-postklienten med utfylt melding.
  // Se README.md for hvordan du kan koble dette til f.eks. Formspree i stedet,
  // slik at meldingen sendes direkte fra siden uten å åpne e-postprogrammet.
  var form = document.querySelector('#kontakt-skjema');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var navn = form.navn.value.trim();
      var epost = form.epost.value.trim();
      var telefon = form.telefon.value.trim();
      var melding = form.melding.value.trim();

      var status = document.querySelector('#form-status');

      if (!navn || !epost || !melding) {
        if (status) {
          status.textContent = 'Fyll ut navn, e-post og melding før du sender.';
          status.classList.add('visible');
        }
        return;
      }

      var emne = 'Henvendelse fra nettsiden – ' + navn;
      var brodtekst =
        'Navn: ' + navn + '\n' +
        'E-post: ' + epost + '\n' +
        (telefon ? 'Telefon: ' + telefon + '\n' : '') +
        '\nMelding:\n' + melding;

      var mailto =
        'mailto:grytre@online.no' +
        '?subject=' + encodeURIComponent(emne) +
        '&body=' + encodeURIComponent(brodtekst);

      window.location.href = mailto;

      if (status) {
        status.textContent = 'Åpner e-postprogrammet ditt med meldingen ferdig utfylt. Send den derfra for å fullføre.';
        status.classList.add('visible');
      }
    });
  }
});
