# TP – Gestion de formulaires et édition de données avec React

Dans ce TP, vous allez approfondir l’utilisation de **React** à travers la mise en place de mécanismes d’**édition de données** (CRUD).  
Vous appliquerez également les **bonnes pratiques de travail collaboratif** en utilisant **Git** et la **gestion des issues GitHub**.

---

## Partie 0 – Configuration du projet

### 0.1 Mise en place de la base de code

- Choisir **un de vos projets React réalisés lors des TD précédents** comme base de code.
- Copier les fichiers du projet React sélectionné **sans inclure** :
  - le dossier `.git`
  - le `README.md` du précédent TD
- Coller les fichiers dans ce nouveau repository.
- Copiez également les sources du projet Node (l'API) dans un sous dossier de ce repository
- Bien mettre à jour le .gitignore pour ne pas commiter les fichiers non nécessaires (eg. node_modules)

> ⚠️ **Attention** : les fichiers du projet doivent se trouver **à la racine** du repository.

- Vérifier que l’application :
  - s’installe correctement
  - démarre sans erreur
  - fonctionne comme attendu

> 💡 Vous pouvez reprendre et combiner des fonctionnalités intéressantes issues de plusieurs de vos anciens projets.

---

### 0.2 Renseigner les membres du groupe

- Créer un fichier `CONTRIBUTORS.md` à la racine du projet.
- Ajouter une section **Contributors** contenant la liste des membres du groupe.

Exemple :

```md
## Contributors
- Nom Prénom
- Nom Prénom
- Nom Prénom
```
> L'ordre des noms n'a pas d'importance
---

### 0.3 Première Pull Request

- Commiter et pusher l’état initial du projet.
- Créer une Pull Request (PR).
- Demander aux autres membres du groupe de :
- relire le code
- valider la PR
- merger la PR

> Une fois la PR mergée, tous les membres du groupe doivent puller le repository.
---

### 0.4 Gestion des issues GitHub
Vous devez utiliser l’outil Issues de GitHub pour organiser le travail du groupe.

#### 0.4.1 Création des issues
- Créer une issue par tâche à réaliser.
- Assigner chaque issue à un membre du groupe.
- Chaque membre est responsable des issues qui lui sont attribuées.

#### 0.4.2 Cycle de vie d’une issue

- Chaque membre du groupe doit suivre ces étapes pour chaque issue qui lui est assignée :
- Créer une branche depuis la page de l’issue sur GitHub
- Cloner la branche en local
- Développer la fonctionnalité et la tester
- Créer une Pull Request en ajoutant les autres membres du groupe comme reviewers
- Une fois la PR validée, merger la branche

> Tous les autres membres du groupe doivent se réaligner sur la branche main (ou master)

---

### 0.5 Conventions de nommage et bonnes pratiques

Définir des conventions communes pour :
- le nommage des fichiers et dossiers
- les variables
- les composants React
- la structure du projet

S’assurer que ces conventions sont respectées lors des revues de Pull Requests

✅ Le respect des conventions fera partie des critères d’évaluation.

---

## Partie 1 – Édition de données

Dans cette partie, vous allez implémenter les opérations d’édition sur les données de votre application.

### 1.1 Fonctionnalités obligatoires
Votre application doit permettre de :
- Ajouter / Éditer / Supprimer un étudiant
- Ajouter / Éditer / Supprimer un cours
- Ajouter / Éditer / Supprimer une note

> Chaque opération doit être accessible via une interface utilisateur claire (formulaires, boutons, confirmations, etc.).

---

### 1.2 Fonctionnalités supplémentaires

Développez les fonctionnalités suivantes :

📊 Module de statistiques :
- moyenne des notes
- nombre d’étudiants
- moyennes par cours
- classement des étudiants

📁 Export des données au format CSV

📄 Génération de bulletins de notes pour un étudiant (format PDF)

---

