# Site vitrine – Gayraud, Transformation digitale & conseil

## Contexte
Site vitrine de la SASU de conseil de Cyrille Gayraud (société en cours d'immatriculation, oct. 2026).
Objectifs : présenter les offres (cadrage de projet IT, chefferie de projet IT, usages de l'IA),
le parcours, rediriger vers LinkedIn et Malt, permettre la prise de rendez-vous Google Agenda.

- LinkedIn : https://www.linkedin.com/in/cyrillegayraud/
- Malt : https://www.malt.fr/profile/cyrillegayraud
- Réservation Google Agenda : https://calendar.app.google/3kwuX8YK9dvDhthw6
- Email professionnel : contact@gayraud.it (pied de page, contact, mentions légales, confidentialité, JSON-LD)
- Nom de domaine : https://gayraud.it (registrar OVHcloud, site hébergé sur GitHub Pages)

## Choix techniques (ne pas changer sans accord)
- HTML/CSS pur, sans framework ni étape de build. JS minimal (`assets/js/main.js` : menu mobile, année).
- Hébergement GitHub Pages, déploiement automatique via `.github/workflows/deploy.yml` à chaque push sur `main`.
- **URLs sans extension** : les liens internes pointent vers `offres`, `parcours`, `contact`… (jamais `.html`)
  et vers `./` pour l'accueil (jamais `index.html`). GitHub Pages sert `offres.html` pour `/offres`.
  Les `canonical`, `og:url` et `sitemap.xml` utilisent aussi ces URLs sans extension.
- Liens internes et ressources en chemins **relatifs** (`assets/...`), sauf dans `404.html` qui utilise des
  chemins absolus (`/assets/...`, `/offres`) car elle peut être servie à n'importe quelle profondeur
  (pas de `canonical` ni d'`og:url` sur la 404).
- Le header et le footer sont **dupliqués dans chaque page** : toute modification doit être reportée
  sur toutes les pages `*.html`.
- Domaine personnalisé `gayraud.it` : déclaré dans Settings > Pages (pas de fichier `CNAME` : il est ignoré
  avec un déploiement GitHub Actions). DNS chez OVHcloud : 4 enregistrements A + 4 AAAA GitHub Pages sur
  l'apex, `www` en CNAME vers `healusiondev.github.io`. Ne jamais toucher aux enregistrements MX/SPF/DKIM (email).
- URL de base utilisée partout (`canonical`, `og:url`, `og:image`, JSON-LD, `sitemap.xml`, `robots.txt`) :
  `https://gayraud.it`.

## Identité visuelle (reprise des supports d'offres)
- Fond noir `#000`, cartes `#0f1014`, bordures `#23242c`, texte blanc / gris `#b9bac4`.
- Violet principal `#7349fd`, mauve `#b862ea`, magenta (accent IA) `#d21cf0`.
- Dégradé signature : `#724dff → #ba62ea` (barre sous les cartes d'offre et en pied de page).
- Police : Mulish (400/600/700/800), auto-hébergée dans `assets/fonts/`.
- Logos dans `assets/img/` : en-tête `logo-header.webp` (G + AYRAUD, 665×84, affiché à 28 px de haut),
  pied de page `logo-wordmark.webp` (540 px, affiché à 180 px). Sources PNG conservées : `logo-mark.png` (G),
  `logo-wordmark.png`, `logo-full.png` ; image de partage `og-image.jpg`. Images affichées : WebP à 3× la taille d'affichage.
- Toutes les valeurs sont des variables CSS en tête de `assets/css/style.css`.

## Documents téléchargeables
- `assets/docs/Gayraud-Offre-Cadrage-projet-IT.pdf` et `assets/docs/Gayraud-Offre-Chefferie-projet-IT.pdf`,
  liés depuis `offres.html`. Pour une nouvelle version : remplacer le fichier en gardant le même nom
  et mettre à jour la taille / le nombre de pages indiqués sur la carte de téléchargement.

## Exigences sur chaque page
- SEO : `<title>` et `<meta name="description">` uniques, Open Graph + Twitter Card, `canonical`,
  `lang="fr"`, un seul `<h1>`, JSON-LD `ProfessionalService` sur l'accueil. Mettre à jour `sitemap.xml`
  à chaque nouvelle page.
- Accessibilité : contrastes suffisants, `alt` sur les images, navigation clavier, lien d'évitement.
- Responsive, mobile first. Pas de défilement horizontal. Pied de page collé en bas (body en flex colonne, `main` flex: 1), marge haute fixe de 104 px (6.5rem) identique sur toutes les pages et tous les écrans : ne pas la surcharger page par page.

## Checklist légale (à rappeler avant toute mise en ligne officielle)
- [ ] Mentions légales : ✅ dénomination GAYRAUD, ✅ contact ; reste capital, siège, RCS/SIREN, TVA intracom
      (les champs « à compléter » sont surlignés dans `mentions-legales.html`).
- [x] Politique de confidentialité RGPD (`confidentialite.html`) : données de réservation, base légale,
      conservation 3 ans après le dernier contact du prospect, prestataires (Google, OVHcloud, GitHub), cookies, droits.
      Dénomination GAYRAUD (SASU) renseignée.
- [x] Police Mulish auto-hébergée : `assets/fonts/mulish-latin.woff` (variable 400–800, sous-ensemble latin,
      licence OFL dans `assets/fonts/OFL-Mulish.txt`), déclarée en `@font-face` dans `style.css`. Plus de Google Fonts.
- [x] Aucun traceur avant consentement : l'agenda Google (`rendez-vous.html`) n'est chargé qu'au clic sur
      « Afficher l'agenda » (`#agenda[data-src]` + `assets/js/main.js`). Cookies Google listés dans
      `confidentialite.html#cookies` (NID, __Secure-ENID, SEARCH_SAMESITE). Ne jamais réintroduire d'iframe chargée d'office.
      Le choix est mémorisé en localStorage (`gayraud-agenda-accord`), retirable via le bouton « Ne plus afficher l'agenda
      automatiquement » sous l'iframe.
- [ ] **RAPPEL à faire au client dès réception du Kbis : souscrire à Google Workspace en payant avec le compte bancaire
      professionnel**, puis enchaîner toutes les actions Workspace : migration de l'email contact@gayraud.it,
      recréation de l'agenda de réservation, mise à jour du site (ci-dessous) et de la fiche Google Business Profile.
- [ ] Après le Kbis : passage de l'agenda sur Google Workspace (contrat de sous-traitance RGPD) → mettre à jour
      l'URL d'intégration dans `rendez-vous.html` et la section « Destinataires et prestataires » de la confidentialité.
      Si l'email contact@gayraud.it passe aussi sur Workspace : modification des MX chez OVH (seule exception à la règle
      « ne pas toucher aux MX »), et remplacer OVHcloud par Google comme prestataire de messagerie dans la confidentialité.
- [ ] Ne jamais publier les coordonnées personnelles du CV (téléphone, email perso).
- [x] Mention RQTH dans les plaquettes : publique, validé par le client. Titre « Président » validé (SASU).
- [ ] Vérifier l'accord des clients cités dans `parcours.html` (Share it, Make.org Foundation, CNP Assurances).
- [ ] Mettre à jour les mentions légales dès réception du Kbis.

## Feuille de route
1. ✅ Session 1 – Socle : structure, charte, header/footer, pages de base, workflow Pages.
2. ✅ Session 2 – Contenus : ✅ offres détaillées + plaquettes PDF, ✅ parcours (CV) ; accueil relu et ajusté.
3. ✅ Session 3 – ✅ agenda Google intégré, chargé au clic (consentement) + lien de secours ;
   ✅ formulaire de contact (`contact.html#formulaire`) via Web3Forms (`api.web3forms.com/submit`, FormData + Accept JSON,
   anti-spam par case piège `botcheck`, clé d'accès publique dans `access_key`, liée à contact@gayraud.it).
   FormSubmit abandonné (serveur indisponible, erreur 521). Si la clé est vidée, le formulaire est masqué automatiquement.
4. 🟡 Session 4 – Légal & SEO : ✅ police auto-hébergée, ✅ consentement agenda, ✅ confidentialité,
   ✅ audit Lighthouse mobile du 28/10/2026 (100/100/100/100 sur les 5 pages ; corrigés ensuite : ordre des titres
   sur Contact, logos en WebP). Non corrigeable : durée de cache de 10 min imposée par GitHub Pages. Reste : mentions légales (Kbis).
5. ✅ Nom de domaine + email pro : gayraud.it en HTTPS (Enforce HTTPS actif), www redirigé, contact@gayraud.it intégré.
