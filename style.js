// Récupétration des input au niveau du formulaire

const nomInput = document.getElementById('nom');
const prenomInput = document.getElementById('prenom');
const dateNaissanceInput = document.getElementById('date_naissance');
const telephoneInput = document.getElementById('telephone');
const emailInput = document.getElementById('email');

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

let regexDateNaissance = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(1[0-9]{3}|20[0-2][0-3])$/;