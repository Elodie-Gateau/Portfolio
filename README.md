# 🌐 Portfolio Vue.js - Elodie Gateau

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

Portfolio personnel développé en **Vue 3**, présentant :
- mon parcours professionnel,
- mes formations,
- mes projets (sites web, applications, dépôts GitHub),
- mes compétences techniques,
- mes informations de contact.

---

## 🚀 Fonctionnalités principales

- **Header et navigation sticky** avec effet glassmorphism, menu plein écran sur mobile et barre horizontale sur desktop (fermeture automatique au changement de breakpoint).
- **Section héro** en grille responsive (12 colonnes dès `md`), avec photo et résumé en position *sticky* pendant le défilement.
- **Compétences** classées par catégorie, chargées depuis un fichier JSON.
- **Projets** : grille sur mobile, carrousel défilant sur desktop/large écran, pagination "voir plus" sur mobile.
- **Parcours professionnel** : timeline générée depuis un JSON, avec pagination "voir plus".
- **Formations** : liste des formations suivies.
- **Contact** : coordonnées, liens GitHub/LinkedIn, téléchargement du CV.
- **Scroll fluide** vers les ancres de la nav, avec prise en compte de la hauteur du header sticky.
- **Design system SCSS maison** : effet "verre" (glassmorphism) réutilisable, boutons, typographie et grille de breakpoints centralisés dans des mixins.

---

## 🛠️ Stack technique

- [Vue 3](https://vuejs.org/) — Composition API, `<script setup>`, composables réutilisables
- [Vite](https://vitejs.dev/) — build et serveur de développement
- [Sass/SCSS](https://sass-lang.com/) — design system
- [Lucide](https://lucide.dev/) (`@lucide/vue`) — icônes
- JSON pour la gestion des données statiques (projets, compétences, formations, expériences)
- [gh-pages](https://www.npmjs.com/package/gh-pages) — déploiement sur GitHub Pages

---

## 📂 Structure du projet

```
src/
├── assets/
│   ├── data/              # projects.json, skills.json, formations.json, experiences.json
│   ├── font/               # Plus Jakarta Sans (auto-hébergée)
│   ├── style/               # design system SCSS (variables, typographie, boutons, glass panel, breakpoints)
│   └── main.scss
│
├── components/
│   ├── layout/              # AppHeader, AppFooter
│   ├── sections/             # HeroSection, SkillsSection, ProjectsSection, BackgroundSection, TrainingSection, ContactSection
│   └── ui/                   # Nav, CV, SeeMore
│
├── composables/             # useSmoothScroll, useMediaQuery, usePagination
├── App.vue                  # Composant racine
└── main.js                  # Point d'entrée
```

---

## 💻 Commandes

```bash
npm install       # installe les dépendances
npm run dev        # lance le serveur de développement
npm run build       # build de production dans dist/
npm run preview      # prévisualise le build de production
npm run deploy       # build + publie dist/ sur GitHub Pages
```

---

## 👩‍💻 Auteur

**Elodie Gateau**
- 📧 elodie.gateau.raffeneau@gmail.com
- 🌐 [Portfolio en ligne](https://elodie-gateau.github.io/Portfolio/)
- 💼 [LinkedIn](https://www.linkedin.com/in/elodiegateau/)
- 🐙 [GitHub](https://github.com/Elodie-Gateau)