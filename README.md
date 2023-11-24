# LINFO1212 - Projet préparatoire - 05/10/2023
## Groupe A04 - Allan De Roover | Anthony Trnik | Valéry Mertens

### Structure
- Dossier "src": Contient les fichiers du projet
- Dossier "specs": Contient les 3 fichiers de spécifications requis
- Dossier "tests": Contient le fichier de tests
- Dossier "views": Contient les différents fichiers ejs
- Dossier "public": Contient les fichiers statiques (css, js, images, ...)

### Installation
*Toutes les commandes sont à réaliser à la racine du projet*

Installation des paquets npm
```
$ npm install
```
Génération du certificat https, le secret: "secret" (original oui)
  ```
  $ npm run cert
  ```
Build du fichier tailwindcss
```
$ npm run tailwind 
```
Il faut également créer un dossier "data" à la source du projet pour la base de données
```
- src/
- views/
- tests/
- public/

- data/
```

### Lancement
Dans un premier terminal:
```
$ npm run db
```
Dans un second:
```
$ npm run start
```

### Tests
Dans un premier terminal:
```
$ npm run db
```
Dans un second:
```
$ npm run test
```

