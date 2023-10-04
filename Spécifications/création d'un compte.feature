# language: fr

Fonctionnalité: Création d'un compte

  L'utilisateur doit créer un compte afin pouvoir se connecter et signaler des incidents sur le site

  Scénario: un compte est créé avec un nom d'utilisateur disponible
    Étant donné un nom d'utilisateur qui n'est pas déjà pris par un autre compte
    Et un nom complet quelconque
    Et un mot de passe quelconque
    Et une adresse email quelconque
    Lorsque l'utilisateur souhaite créer un compte
    Alors le compte sera créé
  
  Scénario: un compte n'est pas créé avec un nom d'utilisateur non disponible
    Étant donné un nom d'utilisateur qui est déjà pris par un autre compte
    Et un nom complet quelconque
    Et un mot de passe quelconque
    Et une adresse email quelconque
    Lorsque l'utilisateur souhaite créer un compte
    Alors le compte n'est pas créé
    Et un message indiquant que le nom d'utilisateur n'est pas disponible devrait s'afficher