# GAYRAUD SASU — site vitrine

Site statique en HTML/CSS/JS pur, sans framework ni étape de build. Hébergé sur GitHub Pages, déployé automatiquement à chaque push sur `main` par `.github/workflows/deploy.yml`.

## Structure

- Pages à la racine : `index.html`, `offres.html`, `parcours.html`, `rendez-vous.html`, `contact.html`, `mentions-legales.html`, `confidentialite.html`, `404.html`.
- `assets/css/style.css` : toute l'identité visuelle passe par les variables CSS de `:root` (couleurs, polices, espacements). Modifier les variables plutôt que coder des valeurs en dur.
- `assets/js/main.js` : uniquement le menu mobile. Garder le JS au strict minimum.
- `assets/img/` : logo, photo, `favicon.png`, `og-image.jpg` (image Open Graph, 1200×630).

## Conventions

- Contenu en français, `lang="fr"`.
- Chaque page reprend le même en-tête (navigation) et pied de page : en cas de modification, mettre à jour toutes les pages.
- Liens et chemins relatifs (`offres.html`, `assets/...`) pour fonctionner aussi sous `https://<compte>.github.io/GAYRAUD-SASU/`.
- Chaque page a un `<title>` et une `<meta name="description">` propres.
- `rendez-vous.html` intègre la page de réservation Google Agenda dans une iframe : renseigner son `src`.
- Une nouvelle page doit être ajoutée à la navigation et à `sitemap.xml`.

## À faire

- Remplacer `https://www.example.fr` par le vrai domaine dans `robots.txt` et `sitemap.xml`.
- Compléter les textes marqués « À compléter » (notamment les mentions légales obligatoires).
- Ajouter logo, favicon et image Open Graph dans `assets/img/`.
- Activer GitHub Pages : Settings → Pages → Source : « GitHub Actions ».
