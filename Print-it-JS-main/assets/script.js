const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
console.log(slides);

// les variables générale utilisé
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const slideshow = document.querySelector("#banner img");
const p = document.querySelector("#banner p");
const dots = document.querySelector(".dots");
let index = 0;

// affichage des points 

function affichageDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i == index) {
      dot.classList.add("dot_selected");
      console.log(dot);
    }
  }
}
affichageDots();

// clic pour la fleche de droite !

function clickRight() {
  arrowRight.addEventListener("click", () => {
    const imageDots = document.querySelectorAll(".dots .dot");
    imageDots[index].classList.remove("dot_selected");
    index++;
    if (index > slides.length - 1){
      index = 0;
    }
  imageDots[index].classList.add("dot_selected");
	slideshow.src = slides[index].image;
  p.innerHTML = slides[index].tagLine;
  });
}
clickRight();

// clic pour la fleche de gauche !

function clickLeft() {
  arrowLeft.addEventListener("click", () => {
    const imageDots = document.querySelectorAll(".dots .dot");
    imageDots[index].classList.remove("dot_selected");
    index--;
    if (index < 0){
      index = imageDots.length - 1;
    }
  imageDots[index].classList.add("dot_selected");
	slideshow.src = slides[index].image;
  p.innerHTML = slides[index].tagLine;
  });
}
clickLeft();






























