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
```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mise en ligne
Chaque push sur `main` redéploie le site (onglet **Actions** pour suivre).
Activation initiale : **Settings > Pages > Source : GitHub Actions**.

Voir `CLAUDE.md` pour les conventions et la checklist légale.
