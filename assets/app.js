"use strict"

//Affichage du burger menu

const menuBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.bgmenu__nav');

menuBurger.addEventListener('click', function(){
    menu.classList.toggle('menu--open');
});

//Affichage des la grille

const bouttonGrille = document.querySelector('.menu__grille');
const main = document.querySelector('.grille');

bouttonGrille.addEventListener('click', function(){
    main.classList.toggle('grille--open');
});


//darkmode
const bouttonDarkmode = document.querySelector('.darkboutton');

var currentState = localStorage.getItem("darkmode");
if (currentState == "off") {
  localStorage.setItem("darkmode", "off");
  document.body.classList.remove("dark");
} else {
  localStorage.setItem("darkmode", "on");
  document.body.classList.add("dark");
}

bouttonDarkmode.addEventListener('click', function(){
  var currentState = localStorage.getItem("darkmode");
  if (currentState == "off") {
    localStorage.setItem("darkmode", "on");
    document.body.classList.add("dark");
  } else {
    localStorage.setItem("darkmode", "off");
    document.body.classList.remove("dark");
  }

});


