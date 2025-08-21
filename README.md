# 🌐 Portfolio Vue.js - Elodie Gateau

> 📌 **Projet pédagogique** réalisé dans le cadre de la préparation au **Titre Professionnel Développeur Web et Web Mobile (TP DWWM)**.

Ce projet est un **portfolio dynamique développé en Vue.js**, permettant de présenter :  
- mon parcours professionnel,  
- mes formations,  
- mes projets (sites web, applications, dépôts GitHub),  
- mes compétences techniques (badges interactifs),  
- un formulaire de contact avec validation.  

---

## 🚀 Fonctionnalités principales

- **Navigation dynamique** avec affichage conditionnel des composants Vue (Home, À propos, Projets, Compétences, Contact).  
- **Présentation des projets** :  
  - Import des projets depuis un fichier JSON,  
  - Récupération dynamique des dépôts GitHub via l’API GitHub,  
  - Filtrage par catégories (HTML, CSS, Vue.js, No-Code, etc.),  
  - Détails projet avec image, description, lien vers le site et GitHub.  
- **Compétences** affichées sous forme de badges :  
  - Filtrage par catégories (Développement, Outils, Design, CRM, No-Code),  
  - Barre de progression par compétence,  
  - Source d’apprentissage et exemples d’utilisation.  
- **À propos** : affichage des expériences professionnelles et formations via des fichiers JSON.  
- **Contact** :  
  - Affichage des coordonnées,  
  - Validation d’adresse e-mail via Regex,  
  - Liens vers GitHub et LinkedIn.  

---

## 🛠️ Stack technique

- [Vue.js 3](https://vuejs.org/) (composition API, components, props, ref, reactive, computed)  
- [Vite](https://vitejs.dev/) (outil de build rapide)  
- [FontAwesome](https://fontawesome.com/) pour les icônes  
- [Vue-Multiselect](https://vue-multiselect.js.org/) pour le filtrage des projets  
- JSON pour la gestion des données statiques (projets, compétences, formations, expériences)  
- [GitHub API](https://docs.github.com/en/rest) pour la récupération des dépôts publics  

---

## 📂 Structure du projet

```
src/
│
├── assets/               # Données JSON + images du portfolio
│   ├── projects.json
│   ├── skills.json
│   ├── experiences.json
│   ├── formations.json
│
├── components/           # Composants Vue
│   ├── Navigation.vue
│   ├── Home.vue
│   ├── AboutSection.vue
│   ├── ProjectList.vue
│   ├── ProjectCard.vue
│   ├── SkillBadge.vue
│   ├── ContactForm.vue
│
├── App.vue               # Composant principal
└── main.js               # Point d’entrée
```

---

## 📚 Compétences travaillées (référentiel TP DWWM)

- Développement d’une **application web dynamique** avec Vue.js  
- Consommation d’une **API externe** (GitHub)  
- Gestion et manipulation de **données JSON**  
- Création et utilisation de **composants Vue.js réutilisables**  
- Mise en place de **filtres et interactions utilisateur**  
- Validation de formulaires et **bonnes pratiques en accessibilité**  
- Organisation et **structuration d’un projet front-end moderne**  

---

## ⚙️ Installation et exécution

1. **Cloner** le projet :  
   ```bash
   git clone https://github.com/Elodie-Gateau/tp-portfolio.git
   cd tp-portfolio
   ```

2. **Installer les dépendances** :  
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement** :  
   ```bash
   npm run dev
   ```

4. Ouvrir [http://localhost:5173](http://localhost:5173) dans un navigateur.


---

## 👩‍💻 Auteur

**Elodie Gateau**  
- 📧 elodie.gateau.raffeneau@gmail.com  
- 🌐 [Portfolio en ligne](https://elodie-gateau.github.io)  
- 💼 [LinkedIn](https://www.linkedin.com/in/elodiegateau/)  
- 🐙 [GitHub](https://github.com/Elodie-Gateau)

---

## 📜 Licence

Projet à visée pédagogique — utilisation dans le cadre de la formation **Titre Professionnel DWWM**.
