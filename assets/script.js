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

const flecheGauche = document.getElementById("flecheGauche");
const flecheDroite = document.getElementById("flecheDroite");
let selectedIndex = 0; 	// Index du point sélectionné (commence à 0)
const nombreDeSlides = slides.length; 	// Compte le nombre d'entrées
console.log(`Nombre d'entrées dans le tableau : ${nombreDeSlides}`);
const dots = document.querySelector(".dots");	// Conteneur des points

for (let i = 0; i < nombreDeSlides; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
  
	// Ajouter la classe "dot_selected" au point sélectionné
	if (i === selectedIndex) {
	  dot.classList.add("dot_selected");
	}
	// Ajouter chaque point au conteneur
	dots.appendChild(dot);
  }

// écoute les clics sur les flêches
flecheGauche.addEventListener("click", () => {
	console.log(`Flêche de gauche clickée.`);
});

flecheDroite.addEventListener("click", () => {
	console.log(`Flêche de droite clickée.`);
});	