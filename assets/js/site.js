const image = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const phone = "+216 95 585 858";
const whatsapp = "https://wa.me/21695585858";
const mapsUrl = "https://maps.app.goo.gl/LwGmWfTgHMdCBjR16";
const email = "wearetechtunisia@gmail.com";
const address = "Route Bouzayen Km 4,5, Sfax, Tunisie";
const teamSectionEnabled = false; // Re-enable when the full team roster is ready.

const services = [
  ["01", "Sponsoring & publicité digitale", "Des campagnes ciblées pour faire connaître votre marque et toucher les bonnes personnes.", "bi-megaphone"],
  ["02", "Design graphique & identité visuelle", "Une identité cohérente, mémorable et pensée pour vivre sur tous vos supports.", "bi-palette"],
  ["03", "Vidéos publicitaires", "Des formats vidéo qui racontent votre histoire et donnent envie de passer à l’action.", "bi-camera-reels"],
  ["04", "Photographie & vidéographie", "Des images soignées pour valoriser vos produits, vos équipes et vos moments forts.", "bi-camera-video"],
  ["05", "Voix off & contenu audio", "Une voix juste et une ambiance sonore qui renforcent votre message.", "bi-mic"],
  ["06", "Solutions QR Code & NFC", "Des expériences connectées qui rapprochent simplement vos supports et vos clients.", "bi-qr-code"],
  ["07", "Développement web & mobile", "Des sites et outils numériques rapides, accessibles et adaptés à vos objectifs.", "bi-code-slash"],
  ["08", "Gestion des réseaux sociaux", "Une présence régulière, éditoriale et engageante sur vos plateformes.", "bi-diagram-3"],
  ["09", "Référencement SEO", "Une meilleure visibilité dans les moteurs de recherche, bâtie sur des bases solides.", "bi-search"]
];

const projects = [
  { title: "Marketing Digital", type: "Montage vidéo professionnel et design graphique.", photo: "assets/images/project-brand-identity.jpg", alt: "Création graphique et supports de marque" },
  { title: "Identité de marque", type: "Création de logos et d’identités visuelles uniques et professionnelles.", photo: "assets/images/project-digital-campaign.jpg", alt: "Contenu créatif pour une campagne digitale" },
  { title: "Développement Web et mobile", type: "Création de sites web et d’applications mobiles modernes et performants.", photo: "assets/images/project-web-experience.jpg", alt: "Interface web affichée sur un ordinateur portable" }
];

const articles = [
  { title: "Une identité visuelle qui vous ressemble", category: "Design & marque", time: "5 min de lecture", photo: "assets/images/blog-brand-identity.jpg", alt: "Espace de travail dédié à la stratégie digitale et à la création d’identité visuelle" },
  { title: "Les bons réflexes pour vos réseaux sociaux", category: "Communication digitale", time: "4 min de lecture", photo: "assets/images/blog-social-media.jpg", alt: "Espace de travail dédié à la stratégie digitale et aux réseaux sociaux" },
  { title: "Un site web utile, avant tout", category: "Web & expérience", time: "6 min de lecture", photo: "photo-1498050108023-c5249f4df085", alt: "Développement d'un site web sur ordinateur" }
];

const navItems = [
  ["Accueil", "index.html", "home", "bi-house-door"],
  ["À propos", "about.html", "about", "bi-info-circle"],
  ["Services", "services.html", "services", "bi-grid"],
  ["Réalisations", "portfolio.html", "portfolio", "bi-images"],
  ["Équipe", "team.html", "team", "bi-people"],
  ["Blog", "blog.html", "blog", "bi-journal-text"]
];

function button(label, href, secondary = false, modifier = "") {
  return `<a class="button glass-control${secondary ? " button--light" : ""}${modifier ? ` ${modifier}` : ""}" href="${href}">${label}<span aria-hidden="true">↗</span></a>`;
}

function sectionTitle(eyebrow, title, copy = "") {
  return `<div class="section-heading" data-reveal><span class="eyebrow">${eyebrow}</span><h2 class="ff-damion">${title}</h2>${copy ? `<p>${copy}</p>` : ""}</div>`;
}

function serviceCards(limit = services.length) {
  return services.slice(0, limit).map(([number, title, copy, icon]) => `
    <article class="service-card" data-reveal>
      <div class="service-card__top"><span class="service-card__number">${number}</span><i class="service-card__icon bi ${icon}" aria-hidden="true"></i></div>
      <h3>${title}</h3><p>${copy}</p><a class="text-link" href="contact.html#contact-form" aria-label="Demander un devis pour ${title}">Parlons de votre projet <span aria-hidden="true">↗</span></a>
    </article>`).join("");
}

function projectCards() {
  return projects.map((project, index) => `
    <article class="project-card project-card--${index + 1}" data-reveal>
      <a href="contact.html#contact-form" class="project-card__image"><img src="${project.photo}" alt="${project.alt}" loading="lazy"><span class="project-card__arrow" aria-hidden="true">↗</span></a>
      <div class="project-card__meta"><div><span class="eyebrow">${project.type}</span><h3>${project.title}</h3></div><span class="project-card__index">0${index + 1}</span></div>
    </article>`).join("");
}

function blogCards() {
  return articles.map((article, index) => `
    <article class="article-card" data-reveal>
      <a class="article-card__image" href="blog.html#article-${index + 1}" aria-label="Lire : ${article.title}"><img src="${article.photo.startsWith("assets/") ? article.photo : image(article.photo, 850)}" alt="${article.alt}" loading="lazy"><span class="article-card__arrow" aria-hidden="true">↗</span></a>
      <div class="article-card__body"><div class="article-card__meta"><span>${article.category}</span><span>${article.time}</span></div><h3><a href="blog.html#article-${index + 1}">${article.title}</a></h3><a class="text-link" href="blog.html#article-${index + 1}">Lire l’article <span aria-hidden="true">↗</span></a></div>
    </article>`).join("");
}

function teamCards() {
  const team = [
    ["Melek Bahloul", "Développeur Web & Mobile", "Transformer vos idées en solutions digitales performantes et innovantes.", "assets/images/melek-bahloul.jpg", "Portrait de Melek Bahloul dans un bureau We Are Tech"],
    ["Salma Karra", "Responsable Marketing & Stratégie", "Faire le lien entre vos objectifs, votre audience et les bonnes stratégies.", "assets/images/salma-karra.jpg", "Portrait de Salma Karra dans un bureau We Are Tech"]
  ];
  return team.map(([name, role, copy, photo, alt]) => `<article class="team-card" data-reveal><img src="${photo}" alt="${alt}" loading="lazy"><h3 class="team-card__title ff-damion">${name}<span>${role}</span></h3><div class="team-card__info"><h3 class="ff-damion">${name}</h3><p class="team-card__role">${role}</p><p>${copy}</p><a class="text-link text-link--light" href="contact.html">Parlons-en <span aria-hidden="true">↗</span></a></div></article>`).join("");
}

function renderHeader(active) {
  return `<nav class="site-header glass-nav" aria-label="Navigation principale"><div class="contained">
    <a class="brand" href="index.html" aria-label="We Are Tech — Accueil"><span class="brand__crop"><img src="assets/images/we-are-tech-logo-color.png" alt=""></span></a>
    <button class="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false"><i class="bi bi-list" aria-hidden="true"></i></button>
    <div class="main-nav"><div class="main-nav__links">${navItems.filter(([, , page]) => teamSectionEnabled || page !== "team").map(([label, href, page, icon]) => `<a href="${href}"${active === page ? ' aria-current="page"' : ""}><i class="bi ${icon}" aria-hidden="true"></i><span>${label}</span></a>`).join("")}</div></div>
  </div></nav>`;
}

function renderFooter() {
  return `<footer class="site-footer"><div class="footer-main">
    <div class="footer-brand"><a class="brand brand--footer" href="index.html" aria-label="We Are Tech — Accueil"><span class="brand__crop"><img src="assets/images/we-are-tech-logo-color.png" alt=""></span></a><p>Des idées claires. Des solutions utiles. Un accompagnement proche de vous.</p></div>
    <div class="footer-column"><h2>Explorer</h2><a href="about.html">À propos</a><a href="services.html">Nos services</a><a href="portfolio.html">Réalisations</a>${teamSectionEnabled ? '<a href="team.html">Notre équipe</a>' : ""}<a href="blog.html">Blog & actualités</a></div>
    <div class="footer-column"><h2>Parlons ensemble</h2><a href="tel:+21695585858">${phone}</a><a href="tel:+21695615959">+216 95 615 959</a><a href="mailto:${email}">${email}</a><a href="${mapsUrl}" target="_blank" rel="noreferrer">${address}</a><a href="https://instagram.com/WeAreTech.tn" target="_blank" rel="noreferrer">Instagram @WeAreTech.tn ↗</a></div>
    <div class="footer-note"><span class="eyebrow">Votre prochain pas</span><h2>Une idée en tête&nbsp;?</h2>${button("Échangeons", "contact.html", true)}</div>
  </div><div class="footer-bottom"><span>© ${new Date().getFullYear()} We Are Tech Digital Services</span><span>Sfax, Tunisie <span class="footer-dot">•</span> Fait avec intention.</span><a href="#top">Retour en haut ↑</a></div></footer>`;
}

function pageHero(eyebrow, title, copy, photo = "photo-1521737711867-e3b97375f902") {
  return `<section class="page-hero" style="--hero-image:url('${image(photo, 1800)}')"><div class="hero-contained"><div class="hero-title fc-white"><h1 class="ff-damion">${title}</h1><p class="fs-h4 fw-normal">${copy}</p></div></div></section>`;
}

function contactForm(compact = false) {
  return `<form class="contact-form${compact ? " contact-form--compact" : ""}" id="contact-form">
    <div class="form-row"><label>Votre nom<input name="name" autocomplete="name" required placeholder="Comment vous appelez-vous ?"></label><label>Votre adresse e-mail<input name="email" type="email" autocomplete="email" required placeholder="vous@entreprise.com"></label></div>
    <label>Le service qui vous intéresse<select name="service" required><option value="">Choisir un service</option>${services.map(([, title]) => `<option>${title}</option>`).join("")}<option>Autre / Je ne sais pas encore</option></select></label>
    <label>Parlez-nous de votre projet<textarea name="message" rows="4" required placeholder="Quelques mots sur votre idée, vos besoins ou votre échéance…"></textarea></label>
    <div class="form-submit"><button class="button glass-control" type="submit"><span class="form-submit__label">Envoyer ma demande</span><span class="form-submit__icon" aria-hidden="true">↗</span></button><p class="form-note">Votre demande sera transmise directement à notre équipe.</p></div><p class="form-status" role="status" aria-live="polite"></p>
  </form>`;
}

function homePage() {
  return `<main id="top">
    <section class="home-hero hero-banner"><div class="hero-contained"><div class="hero-title fc-white">
      <h1 class="ff-damion">Le digital, plus simple.<br>Vos ambitions, plus grandes.</h1>
      <p class="fs-h4 fw-normal">Nous faisons grandir vos idées avec créativité, stratégie et technologie.</p>
      <div class="hero-actions">${button("Découvrir nos services", "services.html", true, "button--glass-white")}${button("Demander un devis", "contact.html")}</div>
    </div></div><div class="hero-socials"><a class="icon-link mt-a" href="https://instagram.com/WeAreTech.tn" target="_blank" rel="noreferrer" aria-label="Suivre We Are Tech sur Instagram"><i class="bi bi-instagram" aria-hidden="true"></i></a><a class="icon-link mt-10" href="https://www.facebook.com/profile.php?id=61554840704527" target="_blank" rel="noreferrer" aria-label="Suivre We Are Tech sur Facebook"><i class="bi bi-facebook" aria-hidden="true"></i></a><a class="icon-link mt-10" href="${whatsapp}" target="_blank" rel="noreferrer" aria-label="Contacter We Are Tech sur WhatsApp"><i class="bi bi-whatsapp" aria-hidden="true"></i></a><a class="icon-link mt-10" href="mailto:${email}" aria-label="Envoyer un e-mail à We Are Tech"><i class="bi bi-envelope" aria-hidden="true"></i></a></div></section>
    ${renderHeader("home")}
    <section class="intro section-wrap" id="about">${sectionTitle("", "À propos")}<div class="intro__copy" data-reveal><h2>Le numérique devrait ouvrir des portes, pas compliquer les choses.</h2><p>We Are Tech accompagne les marques, les entrepreneurs et les organisations dans leurs projets digitaux. De la première idée à sa mise en œuvre, nous réunissons les bonnes expertises pour avancer simplement.</p><p>Un partenaire de proximité, à Sfax et partout où vos idées nous emmènent.</p>${button("En savoir plus", "about.html")}</div><div class="intro__image sticky-img-dual" data-reveal><img src="${image("photo-1524758631624-e2822e304c36", 1000)}" alt="Espace de travail lumineux dédié à la création" loading="lazy"><img src="assets/svg/blob.svg" alt="" class="blob"><img src="${image("photo-1497366754035-f200968a6e72", 1000)}" alt="Équipe We Are Tech en collaboration autour d’un projet" loading="lazy"></div><div class="sticky-img-dual-spacer" aria-hidden="true"></div></section>
    <section class="services-section section-pad glass-surface" id="services">${sectionTitle("", "Services", "Des expertises complémentaires, pensées pour répondre à vos besoins réels.")}<div class="service-grid">${serviceCards(6)}</div><div class="section-action">${button("Voir les 9 expertises", "services.html", true)}</div></section>
    <section class="why-section section-pad">${sectionTitle("", "Pourquoi choisir We Are Tech")}<div class="why-photo" role="img" aria-label="Équipe en pleine séance de travail" style="background-image:url('assets/images/why-we-choose.jpg')"></div><div class="why-content" data-reveal><h2>Vos objectifs.<br>Notre terrain de jeu.</h2><p>Nous croyons aux solutions qui font vraiment la différence : bien pensées, adaptées à votre réalité et accompagnées par des personnes à l’écoute.</p><div class="why-points"><div><span>01</span><p><strong>Clair dès le départ</strong><br>Une méthode simple, des échanges transparents.</p></div><div><span>02</span><p><strong>Créé pour vous</strong><br>Des réponses sur mesure, jamais du prêt-à-porter.</p></div><div><span>03</span><p><strong>Proches à chaque étape</strong><br>Un partenaire présent, du conseil au lancement.</p></div></div>${button("Découvrir notre approche", "about.html")}</div></section>
    <section class="work-section section-pad" id="realisations">${sectionTitle("", "Nos réalisations", "Quelques univers pour illustrer l’étendue de nos expertises. Vous avez un projet en tête ?")}<div class="project-grid">${projectCards()}</div><div class="section-action">${button("Parlons de votre projet", "contact.html")}</div></section>
    ${teamSectionEnabled ? `<section class="team-section section-pad" id="equipe">${sectionTitle("", "Notre équipe", "Stratégie, création, technologie : nos compétences s’unissent autour de votre projet.")}<div class="team-grid">${teamCards()}</div><div class="section-action">${button("Découvrir notre équipe", "team.html")}</div></section>` : ""}
    <section class="quote-section">${sectionTitle("", "Témoignages clients")}<span class="quote-mark" aria-hidden="true">“</span><p>La confiance se construit à chaque échange, se nourrit de transparence et grandit avec chaque projet mené ensemble.</p></section>
    <section class="blog-section section-pad" id="blog">${sectionTitle("", "Blog", "Conseils pratiques et inspirations pour avancer sereinement dans le digital.")}<div class="article-grid">${blogCards()}</div><div class="section-action">${button("Lire le blog", "blog.html")}</div></section>
    <section class="contact-band section-pad glass-surface" id="contact"><div class="contact-band__copy" data-reveal><span class="eyebrow eyebrow--light">07 — On en parle ?</span><h2>Et si on faisait<br><em>avancer votre idée ?</em></h2><p>Parlez-nous de vos objectifs. Nous vous aiderons à trouver la bonne prochaine étape.</p><a class="contact-line" href="tel:+21695585858">${phone} <span aria-hidden="true">↗</span></a><a class="contact-line" href="mailto:${email}">${email} <span aria-hidden="true">↗</span></a></div><div class="contact-band__form glass-surface glass-surface--light" data-reveal>${contactForm(true)}</div></section>
  </main>`;
}

function aboutPage() {
  return `<main id="top">${pageHero("À propos", "Le digital, avec du sens<br><em>et de la proximité.</em>", "Nous aidons les entreprises à faire du numérique un vrai levier de croissance.", "photo-1521737711867-e3b97375f902")}
    ${renderHeader("about")}<div id="content"><section class="about-story section-pad">${sectionTitle("", "À propos")}<div class="about-story__image" data-reveal><img src="${image("photo-1524758631624-e2822e304c36", 1200)}" alt="Un lieu de travail ouvert et lumineux" loading="lazy"><img src="assets/svg/blob.svg" alt="" class="blob"><img src="${image("photo-1497366754035-f200968a6e72", 1000)}" alt="Un espace collaboratif pour imaginer des projets" loading="lazy"></div><div class="about-story__copy" data-reveal><span class="eyebrow">Notre histoire</span><h2>Simplifier le digital pour tous.</h2><p>Le digital évolue vite. Pour beaucoup d’entreprises, savoir par où commencer — et comment continuer — n’est pas toujours évident.</p><p>We Are Tech Digital Services est née de cette conviction : chacun devrait pouvoir accéder à des outils numériques utiles, compréhensibles et adaptés à son quotidien. Depuis Sfax, nous rassemblons stratégie, création et développement pour accompagner vos ambitions avec un vrai sens du service.</p>${button("Découvrir nos services", "services.html")}</div></section>
    <section class="values-section section-pad">${sectionTitle("", "Nos valeurs")}<div class="values-grid"><article data-reveal><span>01</span><h3>La clarté</h3><p>Des conseils compréhensibles et des choix expliqués, pour avancer en confiance.</p></article><article data-reveal><span>02</span><h3>La créativité</h3><p>Des idées fraîches et cohérentes, toujours au service de vos objectifs.</p></article><article data-reveal><span>03</span><h3>La proximité</h3><p>Une relation humaine et un accompagnement attentif à chaque étape.</p></article></div></section>
    <section class="about-callout glass-surface"><span class="eyebrow eyebrow--light">L’essentiel en une phrase</span><p>Le bon digital n’est pas forcément plus compliqué.<br><em>Il doit surtout être fait pour vous.</em></p>${button("Faisons connaissance", "contact.html", true)}</section>
    ${teamSectionEnabled ? `<section class="team-section section-pad">${sectionTitle("Des expertises complémentaires", "Notre équipe")}<div class="team-grid">${teamCards()}</div></section>` : ""}</div></main>`;
}

function servicesPage() {
  return `<main id="top">${pageHero("Nos services", "Neuf expertises.<br><em>Un digital plus simple.</em>", "Nous faisons équipe avec vous pour transformer vos besoins en solutions utiles et durables.", "photo-1497366754035-f200968a6e72")}
    ${renderHeader("services")}<div id="content"><section class="services-page section-pad">${sectionTitle("De l’idée au lancement", "Nos services", "Choisissez une expertise ou combinons plusieurs savoir-faire pour construire la solution qui vous ressemble.")}<div class="service-grid service-grid--full">${serviceCards()}</div></section>
    <section class="process-section section-pad"><div class="process-intro" data-reveal><span class="eyebrow">Notre façon de travailler</span><h2>Simple. Humaine.<br><em>Efficace.</em></h2><p>Chaque collaboration commence par une bonne conversation. Puis nous avançons avec méthode, sans perdre de vue votre réalité.</p>${button("Parlons de vos besoins", "contact.html")}</div><div class="process-list"><article data-reveal><span>01</span><div><h3>On vous écoute</h3><p>Vos besoins, votre public, vos objectifs : on commence par comprendre le contexte.</p></div></article><article data-reveal><span>02</span><div><h3>On imagine la bonne réponse</h3><p>Nous construisons avec vous une approche réaliste, claire et adaptée à vos priorités.</p></div></article><article data-reveal><span>03</span><div><h3>On donne vie au projet</h3><p>Création, développement et suivi : nous restons à vos côtés à chaque étape.</p></div></article></div></section>
    <section class="contact-band contact-band--short glass-surface"><div class="contact-band__copy"><span class="eyebrow eyebrow--light">Prêt à commencer ?</span><h2>Votre prochain projet<br><em>commence ici.</em></h2>${button("Demander un devis", "contact.html", true)}</div><div class="contact-band__art" aria-hidden="true"><span>✳</span></div></section></div></main>`;
}

function portfolioPage() {
  return `<main id="top">${pageHero("Nos réalisations", "Des idées bien pensées,<br><em>du premier croquis au résultat.</em>", "Identités, contenus et expériences digitales : notre approche commence toujours par vos besoins.", "photo-1558655146-d09347e92766")}
    ${renderHeader("portfolio")}<div id="content"><section class="work-section work-page section-pad">${sectionTitle("Univers créatifs", "Nos réalisations", "Branding, campagnes et expérience web : imaginons ensemble la prochaine histoire à raconter.")}<div class="project-grid">${projectCards()}</div><div class="portfolio-note" data-reveal><span class="eyebrow">Votre projet mérite sa place ici</span><p>Ces univers illustrent nos expertises créatives. Pour découvrir des réalisations précises adaptées à votre secteur, parlons de votre besoin.</p>${button("Présenter mon projet", "contact.html")}</div></section></div></main>`;
}

function teamPage() {
  return `<main id="top">${pageHero("Notre équipe", "Plusieurs regards.<br><em>Une même énergie.</em>", "Nous réunissons les expertises créatives, stratégiques et techniques autour de vos objectifs.", "photo-1521737711867-e3b97375f902")}
    ${renderHeader("team")}<div id="content"><section class="team-section team-page section-pad">${sectionTitle("Nos talents en action", "Notre équipe", "Une équipe pluridisciplinaire qui s’adapte à vos enjeux, avec écoute et bonne humeur.")}<div class="team-grid">${teamCards()}</div></section>
    <section class="team-cta glass-surface"><div><span class="eyebrow eyebrow--light">Vous avez un projet à faire grandir ?</span><h2>Nous serions ravis<br><em>d’en parler avec vous.</em></h2></div>${button("Contactez l’équipe", "contact.html", true)}</section></div></main>`;
}

function blogPage() {
  const summaries = [
    "Votre identité visuelle ne se résume pas à un logo. Découvrez comment couleurs, typographies et ton de voix s’accordent pour créer une marque cohérente.",
    "Un calendrier éditorial réaliste et des contenus utiles valent mieux qu’une présence partout. Quelques repères pour communiquer avec régularité.",
    "Avant de choisir une technologie, clarifiez le besoin de vos utilisateurs. Les questions essentielles pour concevoir un site vraiment utile."
  ];
  return `<main id="top">${pageHero("Blog & actualités", "Des idées fraîches<br><em>pour votre quotidien digital.</em>", "Des conseils accessibles et des pistes concrètes pour faire les bons choix numériques.", "photo-1498050108023-c5249f4df085")}
    ${renderHeader("blog")}<div id="content"><section class="blog-page section-pad">${sectionTitle("Le carnet We Are Tech", "Blog & actualités", "Nos notes et conseils pour vous aider à avancer, un sujet à la fois.")}<div class="article-grid article-grid--page">${articles.map((article, index) => `<article class="article-card article-card--full" id="article-${index + 1}" data-reveal><a class="article-card__image" href="#article-${index + 1}"><img src="${article.photo.startsWith("assets/") ? article.photo : image(article.photo, 1000)}" alt="${article.alt}" loading="lazy"><span class="article-card__arrow" aria-hidden="true">↗</span></a><div class="article-card__body"><div class="article-card__meta"><span>${article.category}</span><span>${article.time}</span></div><h3>${article.title}</h3><p>${summaries[index]}</p><a class="text-link" href="contact.html">Échangeons sur ce sujet <span aria-hidden="true">↗</span></a></div></article>`).join("")}</div></section></div></main>`;
}

function contactPage() {
  return `<main id="top">${pageHero("Contact", "Commençons par<br><em>une conversation.</em>", "Une idée, une question ou simplement envie d’en savoir plus ? Nous sommes à votre écoute.", "photo-1524758631624-e2822e304c36")}
    ${renderHeader("contact")}<div id="content"><section class="contact-page section-pad">${sectionTitle("", "Contactez-nous")}<div class="contact-details" data-reveal><span class="eyebrow">Nous sommes là pour vous</span><h2>Parlons de ce qui vous ferait avancer.</h2><p>Décrivez-nous votre besoin, même si votre projet n’en est qu’à ses débuts. Nous reviendrons vers vous pour en discuter.</p><div class="contact-detail"><span class="contact-detail__icon bi bi-telephone"></span><div><span class="eyebrow">Téléphone</span><a href="tel:+21695585858">${phone}</a><a href="tel:+21695615959">+216 95 615 959</a></div></div><div class="contact-detail"><span class="contact-detail__icon bi bi-envelope"></span><div><span class="eyebrow">E-mail</span><a href="mailto:${email}">${email}</a></div></div><div class="contact-detail"><span class="contact-detail__icon bi bi-geo-alt"></span><div><span class="eyebrow">Adresse</span><a href="${mapsUrl}" target="_blank" rel="noreferrer">${address}</a></div></div><a class="whatsapp-link glass-control" href="${whatsapp}" target="_blank" rel="noreferrer">Écrire sur WhatsApp <span aria-hidden="true">↗</span></a><a class="instagram-link" href="https://instagram.com/WeAreTech.tn" target="_blank" rel="noreferrer">Instagram · @WeAreTech.tn ↗</a></div><div class="contact-form-card" data-reveal><span class="eyebrow">Envoyez-nous un message</span><h2>Votre projet commence par ici.</h2>${contactForm()}</div></section>
    <section class="contact-map glass-surface"><div class="contact-map__copy"><span class="eyebrow eyebrow--light">Au plaisir de vous rencontrer</span><h2>À Sfax,<br><em>et partout en Tunisie.</em></h2><p>${address}</p><a href="${mapsUrl}" target="_blank" rel="noreferrer" class="text-link text-link--light">Voir l’itinéraire <span aria-hidden="true">↗</span></a></div><div class="contact-map__visual"><iframe src="https://maps.google.com/maps?q=We%20Are%20Tech&ll=34.7702762,10.7433225&z=17&output=embed" title="Carte Google Maps de We Are Tech à Sfax" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div></section></div></main>`;
}

const page = document.body.dataset.page || "home";
if (!teamSectionEnabled && page === "team") window.location.replace("index.html");
const content = {
  home: homePage,
  about: aboutPage,
  services: servicesPage,
  portfolio: portfolioPage,
  team: teamSectionEnabled ? teamPage : homePage,
  blog: blogPage,
  contact: contactPage
};

document.getElementById("app").innerHTML = `<span class="fade" aria-hidden="true"></span>${(content[page] || homePage)()}${renderFooter()}<a class="whatsapp-float glass-control" href="${whatsapp}" target="_blank" rel="noreferrer" aria-label="Contacter We Are Tech sur WhatsApp"><i class="bi bi-whatsapp" aria-hidden="true"></i><span>WhatsApp</span></a><a class="back-to-top glass-control" href="#top" aria-label="Retour en haut"><i class="bi bi-chevron-up" aria-hidden="true"></i></a>`;

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  menuButton.setAttribute("aria-label", expanded ? "Ouvrir le menu" : "Fermer le menu");
  menuButton.innerHTML = `<i class="bi ${expanded ? "bi-list" : "bi-x-lg"}" aria-hidden="true"></i>`;
  navigation.classList.toggle("is-open", !expanded);
  document.body.classList.toggle("menu-open", !expanded);
});

navigation.addEventListener("click", event => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Ouvrir le menu");
    menuButton.innerHTML = '<i class="bi bi-list" aria-hidden="true"></i>';
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll("[data-reveal]").forEach(element => revealObserver.observe(element));

function setContactFormStatus(form, message, state = "") {
  const status = form.querySelector(".form-status");
  status.textContent = message;
  status.classList.remove("is-success", "is-error", "is-loading");
  if (state) status.classList.add(`is-${state}`);
}

document.querySelectorAll(".contact-form").forEach(form => {
  const serviceSelect = form.querySelector('[name="service"]');
  const submitButton = form.querySelector('button[type="submit"]');
  const submitLabel = submitButton.querySelector(".form-submit__label");
  const submitIcon = submitButton.querySelector(".form-submit__icon");
  const requestedService = new URLSearchParams(location.search).get("service");
  const initialSubmitLabel = submitLabel.textContent;
  let isSending = false;

  if (serviceSelect && requestedService) {
    const option = Array.from(serviceSelect.options).find(item => item.textContent === requestedService);
    if (option) serviceSelect.value = option.value;
  }

  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (isSending) return;
    setContactFormStatus(form, "");
    if (!form.reportValidity()) return;
    if (location.protocol === "file:") {
      setContactFormStatus(form, "Pour envoyer votre demande, ouvrez le site via une adresse HTTP ou HTTPS, pas comme un fichier local.", "error");
      return;
    }

    const config = window.WEARETECH_EMAILJS_CONFIG;
    if (!config || !config.serviceId || !config.templateId || !config.publicKey) {
      setContactFormStatus(form, "Le service d’envoi n’est pas encore configuré. Merci de nous contacter par e-mail.", "error");
      return;
    }
    if (!window.emailjs || typeof window.emailjs.send !== "function") {
      setContactFormStatus(form, "Le service d’envoi est momentanément indisponible. Veuillez réessayer plus tard.", "error");
      return;
    }

    const values = new FormData(form);
    const templateParams = {
      from_name: String(values.get("name")).trim(),
      reply_to: String(values.get("email")).trim(),
      service: String(values.get("service")).trim(),
      message: String(values.get("message")).trim()
    };

    isSending = true;
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    submitLabel.textContent = "Envoi en cours…";
    submitIcon.textContent = "↻";
    submitIcon.classList.add("is-loading");
    setContactFormStatus(form, "Envoi de votre demande en cours…", "loading");

    try {
      await window.emailjs.send(config.serviceId, config.templateId, templateParams, { publicKey: config.publicKey });
      form.reset();
      setContactFormStatus(form, "Merci, votre demande a bien été envoyée. Nous vous répondrons rapidement.", "success");
    } catch (error) {
      console.error("EmailJS contact form submission failed.", error);
      setContactFormStatus(form, "L’envoi a échoué. Vérifiez votre connexion, puis réessayez.", "error");
    } finally {
      isSending = false;
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      submitLabel.textContent = initialSubmitLabel;
      submitIcon.textContent = "↗";
      submitIcon.classList.remove("is-loading");
    }
  });
});

const backToTop = document.querySelector(".back-to-top");
const updateBackToTop = () => backToTop.classList.toggle("is-visible", window.scrollY > 560);
window.addEventListener("scroll", updateBackToTop, { passive: true });
updateBackToTop();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  });
});
