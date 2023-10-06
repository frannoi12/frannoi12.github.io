// Récupérer les éléments du formulaire
const form = document.querySelector('form');
const nomInput = document.getElementById('nom');
const prenomInput = document.getElementById('prenom');
const dateNaissanceInput = document.getElementById('date_naissance');
const telephoneInput = document.getElementById('telephone');
const emailInput = document.getElementById('email');

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêcher le comportement par défaut du formulaire

  // Valider les champs du formulaire
  if (nomInput.value.trim() === '') {
    alert('Veuillez entrer votre nom');
    return;
  }

  if (prenomInput.value.trim() === '') {
    alert('Veuillez entrer votre prénom');
    return;
  }

  if (dateNaissanceInput.value.trim() === '') {
    alert('Veuillez entrer votre date de naissance');
    return;
  }

  if (telephoneInput.value.trim() === '') {
    alert('Veuillez entrer votre numéro de téléphone');
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Veuillez entrer votre adresse e-mail');
    return;
  }

  // Si toutes les validations passent, envoyer le formulaire
  alert('Formulaire envoyé avec succès');
  form.reset(); // Réinitialiser le formulaire
});