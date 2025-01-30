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
//console.log(`Nombre d'entrées dans le tableau : ${nombreDeSlides}`);
const dots = document.querySelector(".dots");	// Conteneur des points

for (let i = 0; i < nombreDeSlides; i++) 
{
	const dot = document.createElement("div");
	dot.classList.add("dot");
  
	// Ajouter la classe "dot_selected" au point sélectionné
	if (i === selectedIndex) 
	{
	  dot.classList.add("dot_selected");
	}
	// Ajouter chaque point au conteneur
	dots.appendChild(dot);
	
}

function updateSelectedIndex(selectedIndex) 
{

	// Pour changer l'image
	imageNomFichier=(slides[selectedIndex].image);
	const bannerImg = document.querySelector(".banner-img");
	bannerImg.src = `./assets/images/slideshow/${imageNomFichier}`;
//	console.log(`L'image a été changée en : ${bannerImg.src}`);

	// Pour changer le texte
	const paragraphe = document.querySelector("#banner p");
	newText=(slides[selectedIndex].tagLine);
//	console.log(`affiche le texte changé : ${newText}`);
	paragraphe.innerHTML = newText;

	// Générer les points
	dots.innerHTML = "";
// 	console.log("Le conteneur 'dots' a été effacé.");

	for (let i = 0; i < nombreDeSlides; i++) 
	{
		const dot = document.createElement("div");
		dot.classList.add("dot");
	
		// Ajouter la classe "dot_selected" au point sélectionné
		if (i === selectedIndex) 
		{
			dot.classList.add("dot_selected");
		}
		// Ajouter chaque point au conteneur
		dots.appendChild(dot);
	}
}

// écoute les clics sur les flêches
flecheGauche.addEventListener("click", () => 
{
//	console.log(`Flêche de gauche clickée.`);
	selectedIndex = selectedIndex -1;
	if (selectedIndex === -1) 
	{
		selectedIndex = nombreDeSlides-1; // va au dernier slide
//		console.log(`nouvelle valeur de selectedIndex ${selectedIndex}`);
	}
	updateSelectedIndex(selectedIndex); 
});

flecheDroite.addEventListener("click", () => 
{
//	console.log(`Flêche de droite clickée.`);
	selectedIndex = selectedIndex +1;
	if (selectedIndex === nombreDeSlides) 
	{
		selectedIndex = 0; // Revient au premier slide
//		console.log(`nouvelle valeur de selectedIndex ${selectedIndex}`);
	}	
	updateSelectedIndex(selectedIndex); 
});	