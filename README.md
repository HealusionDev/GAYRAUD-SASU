# Gayraud — Transformation digitale & conseil

Site vitrine statique (HTML/CSS), hébergé sur GitHub Pages.

## Structure
```
index.html, offres.html, parcours.html, rendez-vous.html, contact.html
mentions-legales.html, confidentialite.html, 404.html
assets/css/style.css   charte graphique (variables CSS)
assets/js/main.js      menu mobile
assets/img/            logos, favicons, image de partage
.github/workflows/deploy.yml   déploiement automatique
```

## Prévisualiser en local
Les liens internes sont sans extension (`/offres`), comme sur GitHub Pages : utiliser un serveur
qui gère les « clean URLs », par exemple :
```bash
npx serve .
# puis ouvrir l'adresse indiquée (ex. http://localhost:3000)
```

## Mise en ligne
Chaque push sur `main` redéploie le site (onglet **Actions** pour suivre).
Activation initiale : **Settings > Pages > Source : GitHub Actions**.

Voir `CLAUDE.md` pour les conventions et la checklist légale.
