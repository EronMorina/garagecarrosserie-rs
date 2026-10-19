CARROSSERIE RS SUISSE — SITE WEB STATIQUE
=========================================

OUVRIR LE SITE
  Décompressez le dossier, puis double-cliquez sur index.html.
  Aucune installation ni connexion Internet requise (polices incluses).

STRUCTURE
  index.html        Page d'accueil (toutes les sections)
  css/styles.css    Styles, design system, responsive, animations
  js/main.js        Interactions + données (services, galerie, FAQ, contact)
  js/i18n.js        Traductions allemand (DE) et anglais (EN)
  img/              Photos, logo, favicon
  fonts/            Polices Archivo, Hanken Grotesk, IBM Plex Mono (licence OFL)

LANGUES (FR / DE / EN)
  Le sélecteur FR · DE · EN se trouve dans l'en-tête. Le site s'ouvre
  toujours en français ; s'il change de langue, le visiteur la retrouve à sa
  prochaine visite.
  Lien direct vers une langue : index.html?lang=de  ou  index.html?lang=en
  Le formulaire envoie aussi un champ « langue » (fr, de ou en) pour savoir
  dans quelle langue répondre.

  Le français reste le texte de référence (dans index.html et js/main.js).
  js/i18n.js associe chaque texte français à sa version allemande et anglaise.
  Si vous modifiez un texte français, modifiez aussi la même clé dans
  js/i18n.js, sinon ce texte restera en français dans les autres langues.
  Pour lister les textes sans traduction : ouvrez index.html?lang=de&i18n-debug
  et regardez la console du navigateur (F12).

  Allemand rédigé selon l'usage suisse (« ss » au lieu de « ß », Offerte,
  Selbstbehalt). Faites relire les traductions par un locuteur natif avant
  la mise en ligne.

À COMPLÉTER AVANT MISE EN LIGNE (js/main.js, bloc CONFIG en haut)
  phone        +41 22 785 18 50 (repris de l'enseigne — à confirmer)
  whatsapp     +41 78 737 02 14 (fait)
  email        info@garagecarrosserie-rs.ch (fait)
  address      Rue du Pré-Bouvier 10, 1242 Satigny, Genève (fait)
  formEndpoint URL du service d'envoi du formulaire (Formspree, PHP, etc.)

  Autres éléments à intégrer :
  - Note et avis Google (section « La confiance de nos clients »)
  - Carte Google Maps : intégrée (section Contact). À mentionner dans la
    politique de confidentialité (Google peut déposer des cookies).
  - Pages légales (pied de page). Instagram : lié (fait).

MISE EN LIGNE
  Copiez le dossier tel quel sur n'importe quel hébergement (Infomaniak,
  Hostpoint, Netlify, etc.). Tous les chemins sont relatifs.

APRÈS UNE MODIFICATION
  Si vous modifiez css/styles.css, js/main.js ou js/i18n.js, augmentez le
  numéro ?v=4 correspondant en bas de index.html (et en haut pour le CSS),
  par ex. ?v=5. Les navigateurs chargeront alors la nouvelle version au lieu
  d'une ancienne copie en cache.
