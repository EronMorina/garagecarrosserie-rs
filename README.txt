CARROSSERIE RS SUISSE — SITE WEB STATIQUE
=========================================

OUVRIR LE SITE
  Décompressez le dossier, puis double-cliquez sur index.html.
  Aucune installation ni connexion Internet requise (polices incluses).

STRUCTURE
  index.html        Page d'accueil (toutes les sections sauf la galerie)
  realisations.html Page « Nos réalisations » (galerie photos)
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

  Autres éléments à intégrer :
  - Carte Google Maps : intégrée (section Contact). À mentionner dans la
    politique de confidentialité (Google peut déposer des cookies).
  - Pages légales (pied de page). Instagram : lié (fait).

FORMULAIRE DE DEVIS (envoi par e-mail)
  Chaque demande est envoyée à info@garagecarrosserie-rs.ch, photos jointes,
  via la boîte Infomaniak (fichier api/devis.js, exécuté par Vercel).
  Réglages dans Vercel → Settings → Environment Variables (type Secret) :
    SMTP_USER   info@garagecarrosserie-rs.ch
    SMTP_PASS   mot de passe de la boîte (ou mot de passe d'application)
    MAIL_TO     (facultatif) autre adresse de réception
  Après un changement de mot de passe de la boîte e-mail, mettez à jour
  SMTP_PASS dans Vercel puis relancez un déploiement (Deployments → Redeploy).
  Le formulaire ne fonctionne que sur le site en ligne, pas en ouvrant
  index.html directement depuis l'ordinateur.

MISE EN LIGNE
  Le site est hébergé sur Vercel, relié au dépôt GitHub : chaque envoi sur
  GitHub (git push) met le site à jour automatiquement en quelques secondes.
  Le formulaire de devis a besoin de Vercel (api/devis.js) ; sur un autre
  hébergement, il faudrait l'adapter.

APRÈS UNE MODIFICATION
  L'en-tête, le menu et le pied de page existent dans index.html ET dans
  realisations.html : une modification de l'un doit être reportée dans l'autre.
  Si vous modifiez css/styles.css, js/main.js ou js/i18n.js, augmentez le
  numéro ?v=… correspondant en bas de index.html et de realisations.html
  (et en haut pour le CSS),
  par ex. ?v=5. Les navigateurs chargeront alors la nouvelle version au lieu
  d'une ancienne copie en cache.
