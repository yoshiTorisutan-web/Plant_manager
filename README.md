# Gestionnaire de Plantes d'Intérieur 🌿

## Description

Le Gestionnaire de Plantes d'Intérieur est une application web développée en Angular qui permet aux utilisateurs de gérer et suivre les besoins en eau de leurs plantes d'intérieur. 

Cette application offre une interface conviviale pour ajouter des plantes, suivre leurs besoins en arrosage, consulter l'historique des arrosages et recevoir des notifications pour les arrosages.

## Fonctionnalités

- Ajout de Plantes : Ajouter des plantes avec des informations telles que le nom, l'espèce, la date d'achat, une image, et les besoins en eau (quantité et fréquence).
- Gestion des Besoins en Eau : Définir et suivre les besoins en eau de chaque plante.
- Notifications et Rappels : Recevoir des notifications pour arroser les plantes en fonction des besoins définis.
- Historique d'Arrosage : Consulter l'historique d'arrosage pour suivre l'entretien des plantes.
- Conseils et Ressources : Accéder à des conseils et des ressources pour l'entretien des plantes.
- Menu de Navigation : Naviguer entre différentes sections de l'application via un menu latéral avec des notifications visibles.

## Installation

- Prérequis

Node.js (version 14.x ou ultérieure)
Angular CLI (version 12.x ou ultérieure)

- Etapes d'installation

  1. Clonez le dépôt :

  git clone https://github.com/votre-utilisateur/plant-manager.git
  cd plant-manager

  2. Installez les dépendances :

  npm install

  3. Démarrez l'application en mode développement :

  ng serve

## Structure du projet

Structure du Projet
- src/app/components : Contient les composants Angular pour les différentes sections de l'application.
    - ajouter-plante : Composant pour ajouter une nouvelle plante.
    - liste-plantes : Composant pour afficher la liste des plantes.
    - historique-arrosage : Composant pour afficher l'historique d'arrosage.
    - conseils-ressources : Composant pour afficher des conseils et ressources.
    - notifications : Composant pour afficher et gérer les notifications.

- src/app/services : Contient les services Angular pour la gestion des données.
    - plante.service.ts : Service pour la gestion des plantes.
    - notification.service.ts : Service pour la gestion des notifications.

- src/styles.css : Fichier CSS global pour les styles de l'application.
- src/assets : Contient les ressources statiques comme les images et les logos.

## Contribuer

Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

  1. Forkez le dépôt.
  2. Créez une branche pour votre fonctionnalité ou correction de bug (git checkout -b feature/your-feature).
  3. Committez vos changements (git commit -am 'Add new feature').
  4. Poussez la branche (git push origin feature/your-feature).
  5. Ouvrez une Pull Request.

## Auteur

yoshiTorisutan

## Licence

Ce projet est sous licence MIT.
