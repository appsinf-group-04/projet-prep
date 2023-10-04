# language: fr

Fonctionnalité: Connexion d'un utilisateur

  L'utilisateur doit se connecter afin de pouvoir signaler des incidents sur la plateforme

  Contexte:
    Étant donné que l'utilisateur a créé un compte au préalable

  Scénario: Connexion réussi avec des identifiants valides
    Étant donné un pseudonyme correcte
    Et le mot de passe correspondant
    Lorsque l'utilisateur souhaite se connecter
    Alors il sera connecté

  Scénario: Échec de la connexion avec des identifiants incorrectes
    Étant donné des identifiants qui ne correspondent pas
    Lorsque l'utilisateur souhaite se connecter
    Alors un message d'erreur affichera que les identifiants fournis sont incorrectes