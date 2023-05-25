
const conteinerWraperLeft = document.querySelector(".conteinerWraperLeft");
//const wraperButtonCenaFlex = document.querySelectorAll(".wraperButtonCenaFlex");
const WraperCorzina = document.querySelectorAll(".WraperCorzina");
console.log(WraperCorzina)
const corzinaJs = document.querySelector(".corzinaJs");
window.addEventListener("click", alinka);
let itemInСart;
function alinka (event) {
 //  if(!event.target.closest(".conteinerWraperFlex")){console.log("Alinka")}
   if(event.target.dataset.achion === "plus") {
      const wraperButton = event.target.closest(".wraperButton");
      wraperButton.setAttribute('onmousedown',"return false");
      const dataCounter = wraperButton.querySelector('[data-counter]');
      dataCounter.innerText = ++ dataCounter.innerText;
      if(event.target.closest(".exitDiv")) {
      summaDollars();

      }

   }
   if(event.target.dataset.achion === "minus") {
      const wraperButton = event.target.closest(".wraperButton");
      wraperButton.setAttribute('onmousedown',"return false");
      const dataCounter = wraperButton.querySelector('[data-counter]');
      if(dataCounter.innerText > 0) {
         dataCounter.innerText = -- dataCounter.innerText
         summaDollars ()
      } 
      if(event.target.closest(".exitDiv") && dataCounter.innerText == 0){
         event.target.closest(".exitDiv").remove();
      cartEmpty () ;
      conteinerCorzinaBottom ();
      summaDollars ()
      }

   };



   if(event.target.closest(".WraperCorzina")) {
      const card = event.target.closest(".card");
      const productInfo = {
         id : card.dataset.id,
         imgSrc : card.querySelector('.card img').getAttribute('src'),
         itemsInbox  : card.querySelector(".collichestvo").innerText,
         titel : card.querySelector(".titel h2").innerText,
         massa : card.querySelector(".massa").innerText,
         cena : card.querySelector(".cena").innerText,
         sht : card.querySelector(".buttonАmount").innerText
      };
   
     itemInСart = corzinaJs.querySelector(`[data-id="${productInfo.id}"]`);

      if(itemInСart) {
         const corzinaButtonАmount = corzinaJs.querySelector(".buttonАmount");
         corzinaButtonАmount.innerText = parseInt(corzinaButtonАmount.innerHTML) 
         + parseInt(productInfo.sht);
   }
        else {
         let number =  productInfo.sht;
         parseInt.number;
      if(number != "0")  {
         let obgact = `
         <div class= "exitDiv">
         <span class="exit">x</span>
         <div class="card corzinaProduct" data-id="${productInfo.id}">
         <img src="${productInfo.imgSrc}" alt="">
         <h2>${productInfo.titel}</h2>
         <div class="kollochestvi-cena">
            <p>${productInfo.itemsInbox}</p>
            <p>${productInfo.massa}г</p>
         </div>
         <div class="wraperButtonKorzina">
         <div class="wraperButton ">
            <div class="buttonMinus color" data-achion="minus">-</div>
            <div class="buttonАmount color" data-counter>${productInfo.sht}</div>
            <div class="buttonPlus color" data-achion="plus">+</div>
         </div>
         <p class= "cena">${productInfo.cena}</p>
         </div>
         </div>
         </div>
         `;
         corzinaJs.insertAdjacentHTML("afterbegin", obgact);
      cartEmpty () ;
      conteinerCorzinaBottom ();
   }
      }
      let cardSht = card.querySelector(".buttonАmount");
      cardSht.innerText = '0';

      summaDollars ()
   }
   if(event.target.closest(".exit")){
      event.target.closest(".exitDiv").remove();
      cartEmpty ();
      conteinerCorzinaBottom ();
      summaDollars ()
   }
   if(event.target.closest(".exit") && corzinaJs.children.length == 0) {
      const summaItogo = document.querySelector(".summaItogo");
      summaItogo.innerText = "0$";
   }
}
const conteinerKorzinaZakazTopP = document.querySelector(".conteinerKorzinaZakazTop p");

function cartEmpty () {
      if(corzinaJs.children.length > 0) {
         conteinerKorzinaZakazTopP.style.display = "none";
      } else if(corzinaJs.children.length == 0){
         conteinerKorzinaZakazTopP.style.display = "block";
      }
}

const conteinerCorzina = document.querySelector(".conteinerCorzinaBottom") ;
function conteinerCorzinaBottom () {
   if(corzinaJs.children.length == 0) {
      conteinerCorzina.style.display = "none";
   } else if(corzinaJs.children.length > 0){
      conteinerCorzina.style.display = "flex";

   }
};
function summaDollars () {
   const exitDivAll = document.querySelectorAll('.exitDiv');
   let summaCurrentPrise = 0;

   exitDivAll.forEach(function (item) {
      const amountEl = item.querySelector("[data-counter]");
      const price = item.querySelector(".cena");
      const currentPrise = parseInt(amountEl.innerText) * parseInt(price.innerText);
      summaCurrentPrise += currentPrise;
      const summaItogo = document.querySelector(".summaItogo");
      summaItogo.innerText = summaCurrentPrise + "$";
      //console.log(summaCurrentPrise)
   });
if(summaCurrentPrise < 500) {
   shop.style.display = "none"; 
   console.log(typeof summaCurrentPrise)

} if(summaCurrentPrise > 500) {
   shop.style.display = ""; 
}
}

function isIsogram(str){
   let set = new Set();
   let arr = str.split('');
   for(let i of arr) {
     set.add(i.toUpperCase());
   }
   if(arr.length == set.size || str == '') {
     return true
   }
   console.log(set)
   return false
 }
console.log(isIsogram("Dermatoglyphics"));

function findUniq(arr) {
   const sorted = arr.sort();
   // Если первый элемент отличается от второго, то он уникальный
   if (sorted[0] !== sorted[1]) {
     return sorted[0];
   }
   // Иначе последний элемент уникальный
   return sorted[sorted.length - 1];
 }
 console.log(findUniq([ 2, 1, 1, 1, 1, 1 ]))

 function countSheeps(arrayOfSheep) {
   let number = 0;
   for(let i of arrayOfSheep) {
      if(i === false) {
        number ++
      }
   }
   return number;
 }

 console.log(countSheeps([true,  true,  true,  false,
   true,  true,  true,  true ,
   true,  false, true,  false,
   true,  false, false, true ,
   true,  true,  true,  true ,
   false, false, true,  true ]));