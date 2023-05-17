const burgerMenu = document.querySelector('.burger');
const navbarRight = document.querySelector('.navbar-right');

// Ajouter un événement de clic à l'élément avec la classe 'burger'
burgerMenu.addEventListener('click', () => {
  // Basculer l'état actif du menu burger en ajoutant ou supprimant la classe 'active' sur l'élément burgerMenu
  burgerMenu.classList.toggle('active');
  // Basculer l'état actif de la barre de navigation droite en ajoutant ou supprimant la classe 'active' sur l'élément navbarRight
  navbarRight.classList.toggle('active');
});


// c la 2e facon de le faire
// const burgerMenu = document.querySelector('.burger');
// const navbarRight = document.querySelector('.navbar-right');

// burgerMenu.addEventListener('click', burger);

// function burger() {
//   burgerMenu.classList.toggle('active');
//   navbarRight.classList.toggle('active');
// }

//envoi de mail

function isEmailValid(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
} 

const lname = document.getElementById('lname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const formulaire = document.getElementById('formulaire');

formulaire.addEventListener('submit', (e) => {
  e.preventDefault();

  // Vérifier si l'adresse e-mail est valide
  if (!isEmailValid(email.value)) {
    alert("Veuillez saisir une adresse e-mail valide.");
    return; // Arrêter l'exécution de la fonction si l'adresse e-mail est invalide
  }

  let ebody = `
  <h1>First Name: </h1>${lname.value}
  <br>
  <h1>Email: </h1>${email.value}
  <br>
  <h1>Subject: </h1>${subject.value}
  <br>
  <h1>Message: </h1>${message.value}
  `;

  Email.send({
    SecureToken: "21923df7-8acb-452c-974e-26ea156a3230", // ajoutez votre jeton ici
    To: 'amirfv13@gmail.com',
    From: email.value,
    Subject: subject.value,
    Body: ebody
  }).then(
    message => {
      alert("Votre message a été envoyé avec succès !");
      formulaire.reset();
    },
    error => {
      alert("Désolé, une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.");
    }
  );
});


//image kratos

// Sélectionne l'image et la modale
const img = document.querySelector('.kratos');
const modalk = document.querySelector('.modal-kratos');
const modalImg = document.querySelector('.modal-image');

// Ajoute un événement de clic à l'image
img.addEventListener('click', function() {
  // Affiche la modale
  modalk.style.display = "block";
  // Remplace l'image agrandie dans la modale par l'image cliquée
  modalImg.src = this.src;
});

// Sélectionne le bouton "X" pour fermer la modale
const span = document.querySelector('.close-kratos');

// Ajoute un événement de clic au bouton "X" pour fermer la modale
span.addEventListener('click', function() {
  modalk.style.display = "none";
});

