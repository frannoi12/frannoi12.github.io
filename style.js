

// Récupétration des input au niveau du formulaire
var actionEnvoyer = document.querySelector(".envoyer button");


// Ici c'est la regex qui permet de vérifier si le champ nom contient uniquement que des lettres et ces réciproque avec celui du prenom aussi
let regexNom = /^[A-Za-z]+$/;


// fonction pour valider le nom entrée

function validerNom(nomInput){
  if(regexNom.test(nom.value)){
    return true;
  }else{
    return false;
  }
};

let regexPrenom = /^[A-Za-z]+$/;

function validerPrenom(prenomInput){
  if(regexPrenom.test(prenom.value)){
    return true;
  }else{
    return false;
  }
};

// Ici sa concerne la date bon j'explique ma regex
// Premièrement sa concerne les jour de naissance c'est à dire : je veux que sa commence par 0
// et ce qui doit suivre doit être dans l'intervale de 1 à 9
// soit sa commance par 1 et le \d veux dire que le 1 est suivit d'un chiffre dans l'intervalle de 0 à 9
// soit sa commance par 2 et le \d veux dire que le 2 est suivit d'un chiffre dans l'intervalle de 0 à 9
// Soit sa commence par 3 et se qui suis le 3 est soit 0 soit 1
// en suite on échappe le /
// Deuxièmement sa concerne le mois :
// On vérifie que sa commence par 0 suivit d'un chiffre dans l'intervale de 0 à 9
// soit sa commence par 1 suivit d'un chiffre dans l'intervalle de 0 à 2
// en suite on échappe le /
// Troisièmement sa concerne l'année :
// Sa commence part 1 suivit de un chiffre dans l'intervale 0 à 9 trois fois de suite
// Soit sa commence par 20 suivit d'un premier chiffre compris dans l'intervale 0 à 2 et d'un quatrième chiffre dans l'intervale 0 à 3

let regexDateNaissance =
  /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(1[0-9]{3}|20[0-2][0-3])$/;

// fonction pour valider la date de naissance 

function validerDateNaissance(dateNaissanceInput){
  if(regexDateNaissance.test(date_naissance.value)){
    return true;
  }else{
    return false;
  }
};

// Ici sa concerne le numéro de télephone
// je veux que sa commence par :
// Soit par 9 suivit d'un chiffre compris entre 0 à 3 soit de 6 à 9
// soit par 7 suivit d'un chiffre compris entre 0 à 3 soit de 6 à 9
// En suite le symbole \d représente n'importe quel chiffre compris dans l'intervalle de 0 à 9 et qui se repète 6 fois de suite

let regexNumeroTelephone = /^(9[0-36-9]|7[0-36-9])\d{6}$/;

// Fonction pour validé le numero de télephone

function validerNumeroTelephone(telephoneInput){
  if(regexNumeroTelephone.test(telephone.value)){
    return true;
  }else{
    return false;
  }
};

// Ici sa concerne le mail
// on veut que sa commence par des lettres que sa soit minuscule où majuscule où des chiffer de 0 à 9 en suite
// on peut avoir aussi des caractère comme le point, le underscore, le pourcentage, le plus, le moins où le tiret de 6
// en suite on veux avoir le caractère @ suivit des lettres que sa soit minuscule où majuscule où des chiffer de 0 à 9 ensuite
// on peut avoir le caractère point, le tiret de 6 ou le signe moins en plus du caractère point c'est pourquoi on à échapé sa part le \
// après le caractère point on veut avoir au moin deux lettre que se soit minuscule où magiscule
let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Fonction pour valider le mail

function validerEmail(emailInput){
  if(regexEmail.test(email.value)){
    return true;
  }else{
    return false;
  }
};

actionEnvoyer.addEventListener(
  'click',
  function validerFormulaire(
    event
  ) {
    event.preventDefault();

    var nomInput = document.getElementById("nom").value;
    var prenomInput = document.getElementById("prenom").value;
    var dateNaissanceInput = document.getElementById("date_naissance").value;
    var telephoneInput = document.getElementById("telephone").value;
    var emailInput = document.getElementById("email").value;

    // Appel des fonction définis globalement
    var leNOM = validerNom(nomInput);
    var lePRENOM = validerPrenom(prenomInput);
    var laDATE_NAISSANCE = validerDateNaissance(dateNaissanceInput);
    var leTELEPHONE = validerNumeroTelephone(telephoneInput);
    var leEMAIL = validerEmail(emailInput);


    if (
      leNOM == true &&
      lePRENOM == true &&
      laDATE_NAISSANCE == true &&
      leTELEPHONE == true &&
      leEMAIL == true
    ) {
      alert(
        "Merci d'avoir laissé vos information . Nous vous recontaterons merci !!"
      );
      window.location.href = "index.html";
    }else {
      // Gestion des messages d'erreur
      var messageErreur = "";
      if (!leNOM) {
        messageErreur += "Le nom doit être uniquement en lettres.\n";
      }
      if (!lePRENOM) {
        messageErreur += "Le prénom doit être uniquement en lettres.\n";
      }
      if (!laDATE_NAISSANCE) {
        messageErreur += "La Date doit être sous le format jj/mm/aaaa.\n";
      }
      if (!leTELEPHONE) {
        messageErreur += "Le numéro de téléphone doit être au format attendu.\n";
      }
      if (!leEMAIL) {
        messageErreur += "Veuillez entrer une adresse email valide.\n";
      }
  
      // Affichage des messages d'erreur
      if (messageErreur !== "") {
        alert(messageErreur);
      } else {
        alert("Tous les champs sont vides. Veuillez les remplir.");
        window.location.href = "contactUs.html";
      }
    }
  }
);
