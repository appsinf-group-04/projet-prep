// DATE
let today = new Date();
let day = today.getDay().toString().length == 1 ? "0" + today.getDay() : today.getDay();
let month = today.getMonth().toString().length == 1 ? "0" + today.getMonth() : today.getMonth();
let year = today.getFullYear();
let formatted = "Date du jour: " + day + "/" + month + "/" + year;
document.getElementById("date").innerText = formatted;

// LOGIN MODAL
const showLoginModal = document.getElementsByClassName('showLoginModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const loginModal = document.getElementById('loginModal');

for (let modal of showLoginModal) {
  modal.addEventListener('click', () => {
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

if (showRegisterModal) {
  showRegisterModal.addEventListener('click', () => {
    registerModal.showModal();
  });

  closeRegisterModal.addEventListener('click', () => {
    registerModal.close();
  });
}

// INCIDENT MODAL
const showIncidentModal = document.getElementsByClassName('showIncidentModal')[0]
const closeIncidentModal = document.getElementById('closeIncidentModal')
const incidentModal = document.getElementById('incidentModal')

if (showIncidentModal) {
  showIncidentModal.addEventListener('click', () => {
    incidentModal.showModal();
  });

  closeIncidentModal.addEventListener('click', () => {
    incidentModal.close();
  });
}

// Search
let delayTimer;

function handleSearch() {
  clearTimeout(delayTimer);

  let x = document.getElementById("search-bar");

  delayTimer = setTimeout(() => {
    if (x.value.length > 0) {
      const currentURL = new URL(window.location.href);
      currentURL.searchParams.set("q", x.value);
      window.location.href = currentURL.toString();
    } else {
      window.location.href = "/";
    }
  }, 800);
}
