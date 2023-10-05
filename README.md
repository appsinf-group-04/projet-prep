# LINFO1212 - Projet préparatoire - 05/10/2023
## Groupe A04 - Allan De Roover | Anthony Trnik | Valéry Mertens

### Structure
- Dossier "src": Contient les fichiers du projet
- Dossier "specs": Contient les 3 fichiers de spécifications requis

### Dossier source
À la racine se trouve les fichiers html, css & js du projet. Le dossier "public/images" contient une image temporaire pour le header du site.

Le fichier html principal a été cloné pour pouvoir refléter les deux états futurs de la page: utilisateur connecté et non connecté. Un bouton temporaire a été placé sur ces pages afin de pouvoir rapidement switcher entre les deux pages (et donc états).
Entre les deux états, le header change légèrement et le bouton de signalement redirige vers le formulaire de signalement ou vers la page de connexion selon l'état.

Nous avons opté pour une seule page html principale et les pages secondaires s'affichant sous forme de modals (popup). Pour l'instant tout le code est concentré dans les fichiers html car html ne nous permet pas de le scinder, mais il sera réparti dans des plus petit fichiers par la suite.

Le fichier css est automatiquement généré pour nous grâce à tailwindcss.


### Usage de tailwind
À la place d'utiliser du css classique, nous avons opté pour utiliser tailwindcss. C'est un framework css qui permet de générer un fichier css à partir de classes html. Il permet plusieurs choses: 
- ne pas avoir à nommer les choses, on peut utiliser des classes comme "bg-red-500" pour avoir un background rouge, il permet donc ne pas accidentellement utiliser un nom de classe déjà utilisé et affecter le style d'un autre élément par accident.
- avoir un grand contrôle sur le style de chaque élément, on peut facilement changer la couleur, la taille, la police, etc. d'un élément en changeant simplement la classe html. Contrairement à bootstrap, tailwind opte pour une approche utilitaire plutôt que de composants. 
- avoir un design system cohérent et facile à utiliser, toutes les valeurs par défaut ont été stratégiquement séléctionnées par l'équipe de tailwind. 
- avoir fichier css final petit, tailwind génère un fichier css final plus petit que bootstrap car il n'y a pas de classes inutilisées, il les purge automatiquement. 
- de nombreux outils fonctionnent avec tailwind pour rendre l'expérience plus plaisante à utiliser, comme par exemple un plugin pour trier automatiquement les classes et les masquer lorsque l'on n'en a pas besoin.
