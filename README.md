LINFO1212 - Groupe A04 - Allan De Roover | Anthony Trnik | Valéry Mertens

Dossier src : Contient les fichiers html 

Le fichier html inclut une en-tête avec un logo, le nom du site, et une barre de navigation. On a mis un bouton au milieu de la page pour montrer à quoi ressemblerai la navbar quand l'utilisateur est connecté ou non. Un bouton "Signaler un incident" ouvre un formulaire modal pour signaler des incidents uniquement si nous sommes dans le mode "connecté" sinon il affiche le formulaire de connexion. Il y a également un champ de recherche et un tableau pour afficher des données pour le moment fictives sur les incidents. La date du jour est affichée en bas de la page. Le script JavaScript gère l'ouverture et la fermeture de modals pour la connexion, l'inscription et le signalement d'incidents.

Et les fichiers css : 

Le fichier input.css défini deux classes CSS personnalisées, .main-gradient et .main-gradient-hover, en utilisant les fonctionnalités de Tailwind CSS pour ajouter des styles de dégradé de couleur de fond et pour réagir au survol de l'élément.


Hors du dossier src nous avons le fichier tailwind.config.js qui est la configuration du framework tailwind CSS.

Le dossier public/images/ contient le logo actuel du site et contiendra les différentes images utilisées.

Le dossier dist contient le fichier output.css qui contient des styles génériques qui peuvent être utilisés pour la mise en forme de pages web. Il utilise la bibliothèque Tailwind CSS (version 3.3.3).