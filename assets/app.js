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


//décallage des undeline

/*for (let i = 2; i <= 8; i++) {
    document.getElementById(`underline${i}`).style.marginLeft = i*"26px";
  }*/

  const underline = document.querySelectorAll('.title--underline');
  for (let i = 1; i < underline.length; i++) {
    underline[i].style.marginLeft = (i*"26px");
  }