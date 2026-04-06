document.addEventListener("DomContentLoaded",function(){
const secaoAgenda= document. querySelector("agenda");
if (secaoAgenda) {
const ulAgenda= secaoAgenda.querySelector("ul");
   if (ulAgenda) {
   ulAgenda.classList.add("agenda");
   }
   }

const secaoContato = document.querySelector("#contato");
if(secaoContato) {
secaoContato.classList.add(contato-box);
}

 seleciona links do menu
const linksMenu = document.querySelector("nav a");
const secoes= document.querySelectorAll("section[id]");

 Deixa a transição suave nos cards via js
const cards= document.querySelectorAll (".card");
for(let i = 0; i < cards. lenghth; i++){
cards[i].computedstyle.transition = "0.3s ease";

cards[i].adddEvenList("mouseenter", function(){
this.style.transform = "translateY(-6px)";
});

cards[i].adddEvenListener("mouseenter", function(){
this.style.transform = "translateY(0)";
});
 }
});

