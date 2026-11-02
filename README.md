# WTOcreation

Site statique (HTML, CSS, JavaScript) de WTOcreation.org : près de 40 entretiens avec les ministres, ambassadeurs et négociateurs qui ont créé l'OMC (1982 à 1994). Version française et anglaise.

## Où modifier quoi

- `assets/data.js` : tous les textes, la liste des 40 interviews (identifiants Vimeo), la durée et la vignette de chaque vidéo, et les réglages en bas de fichier (`CONFIG`).
- `assets/site.css` : le style.
- `assets/site.js` : l'affichage des pages.
- Les pages `index.html` de chaque dossier ne contiennent que l'enveloppe ; le contenu est construit par `assets/site.js`.

## Les vidéos

Chaque interview est lue depuis Vimeo (compte WTO Creation) avec le lecteur officiel `player.vimeo.com`. Pour ajouter une interview, ajouter une ligne dans `V` et dans `VM` de `assets/data.js`.

## Photos et PDF

Les photos du portfolio (`portfolio_images/`) et les PDF (`pdf/`) sont lus sur l'ancien site tant que `CONFIG.localAssets` vaut `false`. Avant de changer le nom de domaine :

1. Télécharger ces deux dossiers depuis l'ancien hébergement.
2. Les placer à la racine de ce dépôt, avec les mêmes noms de fichiers.
3. Passer `localAssets` à `true` dans `assets/data.js`.

## Formulaire de contact

Un site statique ne peut pas envoyer de mail seul. Renseigner `CONFIG.contactEmail` dans `assets/data.js` : le formulaire ouvre alors la messagerie du visiteur avec le message prêt à envoyer.

## Mise en ligne (GitHub Pages)

Réglages du dépôt, Pages : branche `main`, dossier racine. Pour utiliser wtocreation.org, ajouter un fichier `CNAME` contenant le nom de domaine, puis faire pointer le domaine chez OVH vers GitHub (voir la documentation GitHub Pages sur les domaines personnalisés). Ne pas ajouter `CNAME` avant que le DNS soit prêt : l'adresse github.io redirigerait vers l'ancien site.
