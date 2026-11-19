# We Are Tech — Digital Services

Site vitrine statique de We Are Tech Digital Services, agence digitale basée à Sfax, Tunisie.

## Technologies

- HTML5, CSS3 et JavaScript natif
- EmailJS Browser v5 pour le formulaire de contact
- Bootstrap Icons, polices locales Nunito et Damion
- Unsplash pour certaines images distantes

Aucun framework, gestionnaire de dépendances ou outil de build n'est nécessaire pour servir le site. Node.js est utilisé uniquement pour générer la configuration EmailJS publique.

## Pages

- Accueil : `index.html`
- À propos : `about.html`
- Services : `services.html`
- Réalisations : `portfolio.html`
- Équipe : `team.html`
- Blog : `blog.html`
- Contact : `contact.html`

## Lancer le site en local

Ouvrir le dossier dans VS Code et servir `index.html` avec l'extension Live Server (ou un serveur statique équivalent). Accéder ensuite à l'adresse HTTP/HTTPS affichée par le serveur.

Ne pas ouvrir directement un fichier `file://` pour tester le formulaire : EmailJS refuse les soumissions depuis une page locale. Le reste du site est statique et ne demande aucune installation.

## Configuration du formulaire EmailJS

1. Copier `.env.example` vers `.env`.
2. Renseigner `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID` et `EMAILJS_PUBLIC_KEY`.
3. Vérifier dans le tableau de bord EmailJS que le template envoie à `wearetechtunisia@gmail.com`, avec `{{reply_to}}` comme Reply-To.
4. Générer la configuration publique :

   ```sh
   node scripts/generate-email-config.mjs
   ```

5. Publier `assets/js/email-config.js` avec les autres fichiers statiques.

Les détails du template et de la configuration sont dans [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

## Vérifications

Il n'y a pas de suite de tests automatisée ni de commande de build. Vérifier la syntaxe JavaScript avec :

```sh
node --check assets/js/site.js
node --check assets/js/email-config.js
node --check scripts/generate-email-config.mjs
```

Tester les formulaires sur l'accueil et la page Contact depuis un serveur HTTP/HTTPS, notamment les validations, les états d'envoi et les réponses EmailJS.

## Sécurité et maintenance

- `.env` et les autres variantes `.env.*` sont ignorés par Git; seul `.env.example` est suivi.
- Le Service ID, le Template ID et la clé publique EmailJS ne sont pas des secrets et sont exposés dans `assets/js/email-config.js`, nécessaire au fonctionnement navigateur. Ne jamais y placer une clé privée EmailJS, un mot de passe SMTP ou d'autres secrets.
- Restreindre les origines autorisées et les limites d'envoi dans le tableau de bord EmailJS.
- Le site utilise des ressources externes (EmailJS, Google Maps et images Unsplash); leur disponibilité dépend de ces services.
- Les fichiers de licence des polices locales et de Bootstrap Icons sont conservés dans le projet.

Le déploiement ne nécessite pas de compilation : publier les fichiers HTML et le dossier `assets/` sur un hébergement statique, puis vérifier les origines autorisées d'EmailJS pour le domaine publié.
