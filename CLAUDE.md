# Site vitrine – GAYRAUD

## Contexte
Site vitrine d'une SASU de conseil en transformation digitale (société en cours d'immatriculation).
Objectifs : présenter les offres, le parcours, rediriger vers LinkedIn et Malt, permettre la prise de RDV.

## Choix techniques (ne pas changer sans accord)
- HTML/CSS pur, sans framework ni étape de build. JS minimal (menu mobile).
- Hébergement GitHub Pages, déploiement via GitHub Actions (.github/workflows/deploy.yml).
- Prise de RDV : page de réservation Google Calendar (appointment schedule), intégrée en iframe + bouton.
- Nom de domaine : pas encore choisi. Prévoir l'ajout d'un fichier CNAME plus tard.

## Identité visuelle
- Couleurs : [à compléter, codes hex]
- Typographies : [à compléter]
- Toutes les couleurs et polices sont définies en variables CSS dans assets/css/style.css.

## Exigences sur chaque page
- SEO : <title> et <meta name="description"> uniques, balises Open Graph et Twitter Card,
  lien canonical, attribut lang="fr", un seul <h1>, données structurées Schema.org
  (ProfessionalService / Person) sur l'accueil.
- Accessibilité : contrastes suffisants, alt sur les images, navigation au clavier.
- Responsive, mobile first.
- Footer commun : LinkedIn, Malt, mentions légales, confidentialité.

## Checklist légale (à rappeler avant toute mise en ligne)
- [ ] Mentions légales : dénomination, SASU, capital, siège, RCS/SIREN, TVA intracom,
      directeur de publication, contact, hébergeur (GitHub Inc., adresse, contact).
- [ ] Politique de confidentialité RGPD (Google Calendar, formulaire, durée de conservation, droits).
- [ ] Pas de traceur non exempté sans bandeau de consentement.
- [ ] Mettre à jour les mentions légales dès réception du Kbis.
