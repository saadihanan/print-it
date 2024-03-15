const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
 //declaratrion  des variables 

 
const bannerSlides = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsSlides = document.querySelector(".dots");

//compteur
let count = 0;

//Mettre un event listener sur chacune des flèches
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

//Création des bullet points
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div')
	dot.classList.add("dot")
	dotsSlides.appendChild(dot);
} 

//Déclaration de la variable permettant de mettre en avant le point du slide selectionné

let dotSelected = document.querySelectorAll(".dot");
dotSelected[count].classList.add("dot_selected");

//Création de la fonction pour ajouter toutes les images et descriptifs

function showSlide() {
	bannerSlides.src = `./assets/images/slideshow/${slides[count].image}`;
	bannerTagLine.innerHTML = slides[count].tagLine;
}

// Création de la navigation avec les flèches 
////Fonction flèche gauche


function previousSlide() {
	// Suppression du point actuel sélectionné
	dotSelected[count].classList.remove("dot_selected");
	count--;
// Ajout du point sélectionné à la nouvelle slide
	dotSelected[count].classList.add("dot_selected");
	// Appelle à la fonction qui affiche le slider 
	showSlide()
}
 //Fonction flèche de droite

 function nextSlide() {
	// Suppression du point sélectionné actuel
	dotSelected[count].classList.remove("dot_selected");
	// Si compteur >= à la longueur du tableau, alors on revient au premier slide
	if (count >= slides.length - 1) {
		count = 0;
	} 
	// Sinon on incrément de 1 compteur
	else {
		count++;		
	}	
	// Ajout du point sélectionné à la nouvelle slide 
	dotSelected[count].classList.add("dot_selected");
	// Appelle de la fonction qui affiche le slider
	showSlide()
}