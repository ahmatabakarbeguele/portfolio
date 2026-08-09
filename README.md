# Portfolio — Ahmat Abakar Beguele

Portfolio personnel d'**Ahmat Abakar Beguele**, **développeur web à N'Djamena** (Tchad), également
étudiant en administration réseau et sécurité système à l'ENASTIC.

En ligne : https://ahmatabakarbeguele.github.io/portfolio/

Site statique : HTML + CSS + JavaScript, sans dépendance ni étape de build.

## Structure

```
index.html        → Portfolio (page d'accueil)
portfolio.css     → Styles du portfolio
portfolio.js      → Interactions (menu, animations, filtres, contact)
cv.pdf            → CV téléchargeable depuis le site
assets/           → favicon, visuels de projets et photo (SVG, < 1 Ko chacun)
club/             → Site du club CEENASTIC (conservé, accessible sur /club/)
  ├── index.html
  ├── style.css
  └── app.js
```

## Sections

L'ordre des sections suit celui du menu : Accueil, Projets, À propos, Compétences, Contact.

| Section | Contenu |
|---|---|
| Accueil | Nom, métier, accroche, bouton WhatsApp, carte terminal, chiffres clés |
| Projets | 8 cartes avec visuel, Problème / Solution / Résultat et technologies |
| À propos | Trois paragraphes, photo et double compétence web + réseau |
| Compétences | Systèmes & réseaux, programmation, données & outils, infographie + qualités |
| Parcours | Frise formation & expérience, certifications, langues |
| Disponibilité | Missions sur site à N'Djamena, à distance, délai de réponse et références |
| Témoignages | Deux cartes en attente de vrais avis (clients, enseignants, collègues) |
| Contact | Email, téléphone, WhatsApp, LinkedIn, Facebook, GitHub, CV et formulaire (`mailto:`) |

Tout le contenu provient du CV. Les chiffres du bandeau d'accueil correspondent à :
2 ans d'expérience professionnelle, 6 formations/certificats, 4 langages de programmation, 3 langues.

## Mettre le site à jour

Les points à faire évoluer sont marqués `[À COMPLÉTER]` dans `index.html` :

1. **Nouveaux projets** — dupliquer un bloc `<article class="project-card">` ; l'attribut
   `data-cat` gère le filtrage (`pro`, `systeme`, `dev`, `data`, `design`). Chaque carte contient un
   visuel, la structure **Problème → Solution → Résultat**, les technologies et, si le projet est
   en ligne, un bouton « Voir le site ». Remplacer les résultats qualitatifs par des chiffres réels
   dès qu'ils sont disponibles.
2. **Nouvelles formations** — ajouter un bloc `.cert-card` ; le badge se règle avec la classe
   `done`, `progress` ou `planned`.
3. **Niveaux de compétence** — attribut `data-level` de chaque `.skill-fill` (0 à 100) et le
   pourcentage affiché juste au-dessus.
4. **Titres animés du bandeau** — tableau `ROLES` en haut de `portfolio.js`.
5. **Email du formulaire** — constante `CONTACT_EMAIL` en haut de `portfolio.js`.
6. **Liens sociaux** — WhatsApp, LinkedIn, Facebook et GitHub apparaissent à trois endroits :
   bandeau d'accueil, section contact et pied de page.
7. **CV** — remplacer `cv.pdf` par la version à jour, en gardant le même nom de fichier.
8. **Photo de profil** — remplacer `assets/photo-placeholder.svg` par une vraie photo carrée
   (moins de 200 Ko) et ajuster l'attribut `src` de `.avatar-photo` dans la section « À propos ».
   Conserver `loading="lazy"` ainsi que `width` et `height`.
9. **Polices** — Space Grotesk (titres), Plus Jakarta Sans (texte) et JetBrains Mono (terminal),
   chargées depuis Google Fonts. Pour en changer : modifier le `<link>` dans `index.html` et les
   variables `--font-display` / `--font-body` en haut de `portfolio.css`.
10. **Témoignages** — remplacer le contenu d'une carte `.testimonial-card.empty` par un vrai avis
    (le modèle HTML est en commentaire juste au-dessus des cartes) et retirer la classe `empty`.
    Toujours demander l'accord de la personne avant de publier son nom.

### Référencement (SEO)

`index.html` déclare le `title`, la `description`, les balises Open Graph et Twitter, l'URL canonique
et un bloc de données structurées `schema.org/Person`. Si l'adresse du site change, mettre à jour
`<link rel="canonical">`, `og:url` et le champ `url` du bloc JSON-LD.

### Palette

Une couleur principale (bleu `#2563eb`), une couleur d'accent (cyan `#22d3ee`), le blanc `#ffffff`
et l'encre `#1a1a1a`, complétés par des neutres. Le vert n'est utilisé que pour le signal de
disponibilité et le bouton WhatsApp.

### Images

Les visuels de projets et la photo sont des SVG de moins de 1 Ko, chargés en différé
(`loading="lazy"`, `decoding="async"`) avec `width` et `height` déclarés pour éviter tout
décalage de mise en page. Pour utiliser de vraies captures, remplacer les fichiers d'`assets/`
en gardant le même nom et un poids sous 200 Ko.

### Accessibilité

Lien d'évitement au clavier, anneaux de focus visibles (`:focus-visible`), libellés de formulaire
associés à leurs champs, `aria-label` sur la navigation et le menu, et animations désactivées quand
le système demande `prefers-reduced-motion`.

## Aperçu en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mise en ligne (GitHub Pages)

Settings → Pages → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
Le portfolio devient la page d'accueil et le site du club reste accessible sur `/club/`.
