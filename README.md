# Portfolio — Ahmat Abakar Beguele

Portfolio personnel d'**Ahmat Abakar Beguele**, étudiant en **Administration Réseau et Sécurité Système**
à l'ENASTIC (N'Djamena, Tchad).

Site statique : HTML + CSS + JavaScript, sans dépendance ni étape de build.

## Structure

```
index.html        → Portfolio (page d'accueil)
portfolio.css     → Styles du portfolio
portfolio.js      → Interactions (menu, animations, filtres, contact)
cv.pdf            → CV téléchargeable depuis le site
club/             → Site du club CEENASTIC (conservé, accessible sur /club/)
  ├── index.html
  ├── style.css
  └── app.js
```

## Sections

| Section | Contenu |
|---|---|
| Accueil | Présentation, titres animés, carte terminal, chiffres clés |
| À propos | Profil, expérience chez Altamira Informatique, informations pratiques |
| Compétences | Systèmes & réseaux, programmation, données & outils, infographie + qualités |
| Réalisations | Missions professionnelles et travaux issus des formations, filtrables |
| Parcours | Frise formation & expérience, certifications, langues |
| Contact | Email, téléphone, GitHub, CV et formulaire (ouverture via `mailto:`) |

Tout le contenu provient du CV. Les chiffres du bandeau d'accueil correspondent à :
2 ans d'expérience professionnelle, 6 formations/certificats, 4 langages de programmation, 3 langues.

## Mettre le site à jour

Les points à faire évoluer sont marqués `[À COMPLÉTER]` dans `index.html` :

1. **Nouvelles réalisations** — dupliquer un bloc `<article class="project-card">` ; l'attribut
   `data-cat` gère le filtrage (`pro`, `systeme`, `dev`, `data`, `design`).
2. **Nouvelles formations** — ajouter un bloc `.cert-card` ; le badge se règle avec la classe
   `done` (vert), `progress` (bleu) ou `planned` (orange).
3. **Niveaux de compétence** — attribut `data-level` de chaque `.skill-fill` (0 à 100) et le
   pourcentage affiché juste au-dessus.
4. **Titres animés du bandeau** — tableau `ROLES` en haut de `portfolio.js`.
5. **Email du formulaire** — constante `CONTACT_EMAIL` en haut de `portfolio.js`.
6. **LinkedIn** — aucun lien n'est en ligne pour l'instant ; l'ajouter dans le bandeau d'accueil,
   la section contact et le pied de page.
7. **CV** — remplacer `cv.pdf` par la version à jour, en gardant le même nom de fichier.

## Aperçu en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mise en ligne (GitHub Pages)

Settings → Pages → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
Le portfolio devient la page d'accueil et le site du club reste accessible sur `/club/`.
