# Chavé – site vitrine

Site statique (HTML/CSS/JS, sans dépendance) publié avec GitHub Pages.

## Modifier les réglages
Tout est en haut du `<script>` de `index.html`, bloc **RÉGLAGES** :

- `COUNTRIES` : numéros par pays. Un pays apparaît dans le sélecteur dès que `wa` et `tel` sont remplis
  (format `wa` : indicatif + numéro sans espace, ex. `2290196629995`).
- `GALLERY` : photos avant / après (`img/avant-1.jpg`, `img/apres-1.jpg`…).
- `REVIEWS` : avis clients.

Aperçu des sections vides (galerie, avis) : ajouter `?demo=1` à l'adresse.
Version anglaise : `?lang=en` (traductions dans `en.js`).
Pays forcé : `?pays=cm`.

## Fichiers
- `index.html` – la page
- `en.js` – traductions anglaises
- `sw.js`, `manifest.webmanifest`, `icons/` – appli installable et hors connexion
  (changer `VERSION` dans `sw.js` après une grosse mise à jour)
- `mentions-legales.html`, `confidentialite.html`, `404.html`
- `robots.txt` – actuellement en mode discret (non indexé)
