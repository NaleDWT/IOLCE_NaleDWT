"use strict"

//Affichage des informations sur l'équipe

const sectionInfoK = document.querySelector('.section__equipier--kesily');
const sectionInfoT = document.querySelector('.section__equipier--thibaud');
const sectionInfoM = document.querySelector('.section__equipier--mika');
const sectionInfoJ = document.querySelector('.section__equipier--jonathan');
const infoK = document.querySelector('.infokesily');
const infoT = document.querySelector('.infothibaud');
const infoM = document.querySelector('.infomika');
const infoJ = document.querySelector('.infojonathan');

sectionInfoK.addEventListener('click', function(){
    infoK.classList.toggle('info--open');
});
sectionInfoT.addEventListener('click', function(){
    infoT.classList.toggle('info--open');
});
sectionInfoM.addEventListener('click', function(){
    infoM.classList.toggle('info--open');
});
sectionInfoJ.addEventListener('click', function(){
    infoJ.classList.toggle('info--open');
});
