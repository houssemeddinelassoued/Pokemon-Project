# Pokemon Web Project Specification

## 1. Vision
Créer une application web qui affiche tous les Pokémon de toutes les générations et permet une comparaison claire, rapide et agréable. L'utilisateur peut sélectionner jusqu'a 4 Pokémon, comparer leurs stats cote a cote, puis lancer un mini-jeu de combat simplifie via un bouton "Fight". L'interface doit proposer un switch de langue Arabe/Anglais, avec support RTL pour l'Arabe.

## 2. Objectifs
- Lister l'ensemble du Pokédex avec une navigation rapide.
- Permettre la comparaison de 2 a 4 Pokémon en un clic.
- Proposer une simulation de combat courte et amusante.
- Assurer un rendu responsive mobile et desktop.

## 3. Public Cible
- Fans de Pokémon voulant comparer rapidement.
- Curieux ou joueurs occasionnels cherchant une experience ludique.

## 4. Portee
### 4.1 Inclus v1
- Pokédex complet (toutes generations).
- Cartes de details (types, stats de base, capacites, taille, poids).
- Tableau de comparaison jusqu'a 4 Pokémon.
- Mini-jeu de combat simplifie.
- UI responsive et accessible.

### 4.2 Exclu v1
- Comptes utilisateurs.
- Multijoueur temps reel.
- Regles competitives avancees (EV/IV, objets, effets complexes).

## 5. Sources de Donnees
- API publique PokeAPI (https://github.com/pokeapi).
- Mise en cache locale (IndexedDB ou JSON local) pour accelerer la navigation.

### 5.1 Usage PokeAPI (v1)
- Liste des Pokémon: `https://pokeapi.co/api/v2/pokemon?limit=...&offset=...`
- Details d'un Pokémon: `https://pokeapi.co/api/v2/pokemon/{id|name}`
- Types: `https://pokeapi.co/api/v2/type/{name}`
- Especes: `https://pokeapi.co/api/v2/pokemon-species/{id|name}` pour les noms multilingues.
- Sprites officiels: via PokeAPI (official-artwork) ou CDN PokeAPI.

### 5.2 Strategie de Cache
- Premier chargement: fetch pagine + normalisation.
- Cache persistant: IndexedDB avec versioning de schema.
- Revalidation: TTL configurable (ex: 7 jours).

## 6. Fonctionnalites Clés

### 6.1 Pokédex
- Grille de cartes avec sprite, nom, numero.
- Recherche par nom ou numero.
- Filtres: generation, type, region.
- Tri: numero, nom, total des stats.
- Chargement progressif et lazy-load des sprites.
- Bascule langue Arabe/Anglais (noms localises si dispo).

### 6.2 Fiche Detail
- Nom, numero, generation.
- Types, capacites.
- Stats de base avec barres.
- Taille, poids.
- Sprite ou artwork officiel.
- Descriptions multilingues si disponibles via `pokemon-species`.

### 6.3 Comparaison
- Selection de 2 a 4 Pokémon maximum.
- Comparaison cote a cote:
  - HP, Attack, Defense, Sp. Atk, Sp. Def, Speed.
  - Types et capacites.
  - Total des stats.
- Actions:
  - Ajouter ou retirer un Pokémon.
  - Reinitialiser la comparaison.

### 6.4 Mini-Jeu "Fight"
- Bouton visible quand au moins 2 Pokémon sont selectionnes.
- Regles simplifiees:
  - HP derives de la stat HP de base.
  - Degats bases sur Attack vs Defense, plus un modificateur de type.
  - Tour par tour, vitesse determine l'ordre (tirage aleatoire en cas d'egalite).
  - Un type principal est utilise pour le modificateur.
- Resultat affiche dans un battle log clair.
- UI lisible en RTL pour l'Arabe.

## 7. Exigences Fonctionnelles
- Chargement initial du listing en <2 secondes sur connexion standard.
- Limite stricte de 4 selections en comparaison.
- Simulation de combat en <2 secondes.
- Fonctionne sur mobile et desktop.

## 8. Exigences Non Fonctionnelles
- Accessibilite: navigation clavier, labels ARIA.
- Performance: lazy-load des sprites, cache local.
- Maintenabilite: architecture modulaire.
- Internationalisation: bascule EN/AR, direction automatique, textes UI localises.

## 9. Flux Utilisateur
1. Parcourir le Pokédex -> ouvrir une fiche.
2. Ajouter a la comparaison -> comparer les stats.
3. Selectionner 2 a 4 Pokémon -> lancer "Fight" -> lire le battle log.

## 10. UI/UX
- Grille propre et dense pour le Pokédex.
- Tableau de comparaison fixe ou en drawer.
- Battle log dans un panneau ou modal, avec option rejouer.
- Switch de langue visible dans le header.
- Typographie lisible en Arabe et en Anglais.

## 11. Internationalisation (i18n)
- UI bilingue: Anglais et Arabe.
- Texte UI gere par dictionnaires `en` et `ar`.
- Direction de page: `dir="rtl"` pour l'Arabe, `dir="ltr"` pour l'Anglais.
- Traductions des types et labels de stats.
- Fallback Anglais si une traduction manque.

## 12. Tests et Qualite
- Tests unitaires sur le moteur de combat.
- Tests des regles de comparaison (limite 4, reset).
- Verification manuelle des filtres et tri.
- Tests i18n: switch langue, direction RTL, labels UI.

## 13. Evolutions Futures
- Team builder a 6 Pokémon.
- Partage de comparaisons via lien.
- Regles de combat avancees.
- Mode hors-ligne complet.
