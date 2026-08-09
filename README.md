# Portfolio — Ahmat Abakar

Portfolio personnel d'un étudiant de l'**ENASTIC** (N'Djaména, Tchad) spécialisé en
**administration et sécurité des réseaux et systèmes**.

Site statique : HTML + CSS + JavaScript, sans dépendance ni build.

## Structure

```
index.html        → Portfolio (page d'accueil)
portfolio.css     → Styles du portfolio
portfolio.js      → Interactions (menu, animations, filtres, contact)
club/             → Ancien site du club CEENASTIC (conservé)
  ├── index.html
  ├── style.css
  └── app.js
```

## Sections du portfolio

| Section | Contenu |
|---|---|
| Accueil | Présentation, rôles animés, carte terminal, statistiques |
| À propos | Parcours, approche, informations pratiques |
| Compétences | Réseaux, systèmes, sécurité, scripting + outils |
| Expertise | Prestations proposées |
| Projets | 8 projets/labs filtrables par catégorie |
| Parcours | Frise formation & expériences + certifications |
| Contact | Coordonnées + formulaire (ouverture via `mailto:`) |

## Personnalisation

Les blocs à adapter sont marqués `[À PERSONNALISER]` dans `index.html` et `portfolio.js` :

1. **Nom complet** — hero, navbar, pied de page et titre de l'onglet (`<title>`).
2. **Coordonnées** — email, LinkedIn, GitHub, téléphone si souhaité.
3. **Projets** — chaque `<article class="project-card">` ; l'attribut `data-cat`
   contrôle le filtrage (`reseau`, `securite`, `systeme`, `dev`).
4. **Parcours** — les blocs `.tl-item` (dates, écoles, expériences).
5. **Certifications** — les blocs `.cert-card` ; le statut se règle avec la classe
   `done`, `progress` ou `planned`.
6. **Compétences** — l'attribut `data-level` de chaque `.skill-fill` (0 à 100) et le
   pourcentage affiché juste au-dessus.
7. **Rôles animés** — le tableau `ROLES` en haut de `portfolio.js`.
8. **Email du formulaire** — la constante `CONTACT_EMAIL` en haut de `portfolio.js`.

## CV

Le bouton « ↓ CV » de la barre de navigation pointe vers `cv.pdf` à la racine du dépôt.
Dépose ton CV sous ce nom pour l'activer, ou modifie le lien dans `index.html`.

## Aperçu en local

```bash
python3 -m http.server 8000
# puis ouvre http://localhost:8000
```

## Mise en ligne (GitHub Pages)

Settings → Pages → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
Le portfolio sera la page d'accueil et le site du club restera accessible sur `/club/`.
