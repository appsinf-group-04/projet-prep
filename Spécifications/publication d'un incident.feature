# language: fr

Fonctionnalité: Publication d'un incident

La publication d'un incident dépend de si l'utiliateur qui souhaite publier 
est connecté ou non.

Scénario: Un utilisateur connecté souhaite publier un incident
  Étant donné une description de l'incident
  Et l'adresse où l'incident s'est déroulé
  Lorsque l'utilisateur veut publier l'incident
  Alors l'incident est publié avec la description et l'adresse que l'utilisateur a fourni

Scénario: Un utilisateur non connecté souhaite publier un incident
  Alors la page permettant de publier un incident n'est pas disponnible
  Et l'utilisateur est invité à se connecter ou créer un compte