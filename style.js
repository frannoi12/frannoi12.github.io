// Récupétration des input au niveau du formulaire
var actionEnvoyer = document.querySelector(".envoyer button");


// Ici c'est la regex qui permet de vérifier si le champ nom contient uniquement que des lettres et ces réciproque avec celui du prenom aussi
let regexNom = /^[A-Za-z]+$/;

let regexPrenom = /^[A-Za-z]+$/;

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

// Ici sa concerne le numéro de télephone
// je veux que sa commence par :
// Soit par 9 suivit d'un chiffre compris entre 0 à 3 soit de 6 à 9
// soit par 7 suivit d'un chiffre compris entre 0 à 3 soit de 6 à 9
// En suite le symbole \d représente n'importe quel chiffre compris dans l'intervalle de 0 à 9 et qui se repète 6 fois de suite

let regexNumeroTelephone = /^(9[0-36-9]|7[0-36-9])\d{6}$/;

// Ici sa concerne le mail
// on veut que sa commence par des lettres que sa soit minuscule où majuscule où des chiffer de 0 à 9 en suite
// on peut avoir aussi des caractère comme le point, le underscore, le pourcentage, le plus, le moins où le tiret de 6
// en suite on veux avoir le caractère @ suivit des lettres que sa soit minuscule où majuscule où des chiffer de 0 à 9 ensuite
// on peut avoir le caractère point, le tiret de 6 ou le signe moins en plus du caractère point c'est pourquoi on à échapé sa part le \
// après le caractère point on veut avoir au moin deux lettre que se soit minuscule où magiscule
let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

actionEnvoyer.addEventListener('click',function validerFormulaire(event,nomInput,prenomInput,dateNaissanceInput,telephoneInput,emailInput) {
    event.preventDefault();

    var nomInput = document.getElementById("nom").value;
    var prenomInput = document.getElementById("prenom").value;
    var dateNaissanceInput = document.getElementById("date_naissance").value;
    var telephoneInput = document.getElementById("telephone").value;
    var emailInput = document.getElementById("email").value;
    if (
      nomInput &&
      prenomInput &&
      dateNaissanceInput &&
      telephoneInput &&
      emailInput
    ) {
      alert(
        console.log(
          nomInput,
          prenomInput,
          dateNaissanceInput,
          telephoneInput,
          emailInput
        )
      );
    }
  }
);
