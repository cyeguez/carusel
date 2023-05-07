const person = [
  {
    id: 1,
    name: "Maria lopez",
    job: "web developer",
    image:
      "https://minmujeryeg.gob.cl/wp-content/uploads/2022/03/orellana.png",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, magni voluptates fuga repellat perspiciatis quae eius, alias sit voluptas itaque sint fugit earum tempora id dolorum soluta aliquam provident ullam?",
  },
  {
    id: 2,
    name: "Jose Alvarez",
    job: "Javascript development",
    image: "https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg", 
    text: "Un desarrollador de JavaScript puede tener más de un enfoque profesional, pero siempre estará orientado al desarrollo web , ya sea de aplicaciones o sitios, dado que este lenguaje de programación fue creado con este fin"
    

  },
  {
    id: 3,
    name: "Izabel Rodriguez",
    job: "Backend development",
    image: "https://www.clarin.com/img/2015/03/20/HkwKuZR7x_1256x620.jpg",
    text: "Un desarrollador de JavaScript puede tener más de un enfoque profesional, pero siempre estará orientado al desarrollo web , ya sea de aplicaciones o sitios, dado que este lenguaje de programación fue creado con este fin"    

  },
  {
    id: 4,
    name: "Angel Fernandez",
    job: "Backend development",
    image: "https://maxilodexeus.com/wp-content/uploads/2020/03/foto-stories-1-1536x1024.jpg",
    text: "Un desarrollador de JavaScript puede tener más de un enfoque profesional, pero siempre estará orientado al desarrollo web , ya sea de aplicaciones o sitios, dado que este lenguaje de programación fue creado con este fin"    

  },
];

const imagePerfil= document.querySelector('#carrusel-picture');
const job = document.querySelector(".carrusel-job");
const name = document.querySelector(".carrusel-name");
const info = document.querySelector(".carrusel-info");
btnNext = document.getElementById("next");
btnBack = document.getElementById("back");
btnSurprise = document.querySelector(".carrus-btn-surprise")

let indice = 0;

window.addEventListener("DOMContentLoaded" , function() {
  mostrarPersona();
});


const mostrarPersona = () =>{
  const user =person[indice]
  imagePerfil.src = user.image;
  job.textContent = user.job;
  name.textContent = user.name;
  info.textContent = user.text

}

btnNext.addEventListener("click", () =>{
  indice++;
  if(indice > person.length - 1) {
    indice = 0;
  }
    mostrarPersona();  

})

btnBack.addEventListener("click", () =>{
  indice--;

  if(indice < 0 ){
    indice = person.length -1 ;
  }
  mostrarPersona();

})


btnSurprise.addEventListener("click", () =>{
  
  let numRandom = Math.floor(Math.random() * person.length);
  indice = numRandom;
  mostrarPersona();
});
