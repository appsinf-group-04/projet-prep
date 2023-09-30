# language: fr

Fonctionnalité: Publication d'un incident

  L'utilisateur peut publier un incident seulement si il est connecté

  Scénario: Un incident est publié par un utilisateur connecté
    Étant donné que l'utilisateur est connecté
    Et une description de l'incident
    Et l'adresse où l'incident s'est déroulé
    Lorsque l'utilisateur publie l'incident
    Alors l'incident est publié avec la description et l'adresse fournie

  Scénario: Un incident n'est pas publié par un utilisateur non connecté
    Étant donné que l'utilisateur n'est pas connecté
    Lorsque qu'il tente d'accéder à la page de publication d'un incident
    Alors la page en question n'est pas disponible
    Et il est redirigé vers la page de connexion