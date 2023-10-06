// DATE
let today = new Date();
let day = today.getDay().toString().length == 1 ? "0" + today.getDay() : today.getDay();
let month = today.getMonth().toString().length == 1 ? "0" + today.getMonth() : today.getMonth();
let year = today.getFullYear();
let formatted = "Date du jour: " + day + "/" + month + "/" + year;
document.getElementById("date").innerText = formatted;

// LOGIN MODAL
const showLoginModal = document.getElementById('showLoginModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const loginModal = document.getElementById('loginModal');

if (showLoginModal) {
  showLoginModal.addEventListener('click', () => {
    loginModal.showModal();
  });

  closeLoginModal.addEventListener('click', () => {
    loginModal.close();
  });
}

// REGISTER MODAL
const showRegisterModal = document.getElementById('showRegisterModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const registerModal = document.getElementById('registerModal');

if(showRegisterModal) {
  showRegisterModal.addEventListener('click', () => {
    registerModal.showModal();
  });

  closeRegisterModal.addEventListener('click', () => {
    registerModal.close();
  });
}

// INCIDENT MODAL
const showIncidentModal = document.getElementById('showIncidentModal')
const closeIncidentModal = document.getElementById('closeIncidentModal')
const incidentModal = document.getElementById('incidentModal')

if (showIncidentModal && showLoginModal){ // Si les deux sont visibles => non authentifié => on affiche le modal de connexion
  showIncidentModal.addEventListener('click', () => {
    loginModal.showModal();
  });

  closeIncidentModal.addEventListener('click', () => {
    loginModal.close();
  });
} else {
  showIncidentModal.addEventListener('click', () => {
    incidentModal.showModal();
  });

  closeIncidentModal.addEventListener('click', () => {
    incidentModal.close();
  });
}
