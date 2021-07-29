const hmenu = document.querySelector('.hmenu');
const psidenav = document.querySelector('.psidenav');
const boxes = document.querySelector('.psidenav li');
const pcont = document.querySelector('.pcont');



hmenu.addEventListener('click', () => {
    psidenav.classList.toggle('pushnav');

    hmenu.classList.toggle('pnav-open');

    pcont.classList.toggle('push-pcont');




});


var ptype1 = document.getElementById("ptype1");
var ptype2 = document.getElementById("ptype2");
var ptype3 = document.getElementById("ptype3");


;



var ptype_cards = document.getElementById("ptype-cards");

var ptype1cards  = document.getElementById("ptype1-cards");
var ptype2cards  = document.getElementById("ptype2-cards");
var ptype3cards  = document.getElementById("ptype3-cards")

function act_ptype1() {
    
    ptype1.className = "ptype-active";
    ptype2.className -= "ptype-active";
    ptype3.className -= "ptype-active";  

    ptype1cards.style.opacity ="1";
    ptype2cards.style.opacity ="0";
    ptype3cards.style.opacity ="0";

    ptype1cards.style.visibility ="visible";
    ptype2cards.style.visibility ="hidden";
    ptype3cards.style.visibility ="hidden";

   
   
}

function act_ptype2() {
    
    ptype2.className = "ptype-active";
    ptype1.className -= "ptype-active";
    ptype3.className -= "ptype-active";
    
    ptype2cards.style.opacity ="1";
    ptype1cards.style.opacity ="0";
    ptype3cards.style.opacity ="0";

    ptype2cards.style.visibility ="visible";
    ptype1ards.style.visibility ="hidden";
    ptype3cards.style.visibility ="hidden";

    


}

function act_ptype3() {
    
    ptype3.className = "ptype-active";
    ptype1.className -= "ptype-active";
    ptype2.className -= "ptype-active";

    ptype3cards.style.opacity ="1";
    ptype1cards.style.opacity ="0";
    ptype2cards.style.opacity ="0";

    ptype3cards.style.visibility ="visible";
    ptype1cards.style.visibility ="hidden";
    ptype2cards.style.visibility ="hidden";
}


    


var pnavitem1 = document.getElementById("pnav-item1");
var psubnav1 = document.querySelector('.psubnav1');

var pnavitem2 = document.getElementById("pnav-item2");
var psubnav2 = document.querySelector('.psubnav2');

pnavitem1.addEventListener('click', () => {
    psubnav1.classList.toggle('psubnav-show');
    pnavitem1.classList.toggle('pni-open');

    psubnav2.classList.remove('psubnav-show');
    pnavitem2.classList.remove('pni-open');

    
});

pnavitem2.addEventListener('click', () => {
    
    psubnav2.classList.toggle('psubnav-show');
    pnavitem2.classList.toggle('pni-open');

    psubnav1.classList.remove('psubnav-show');
    pnavitem1.classList.remove('pni-open');


});

  
hmenu.addEventListener('click', () => {

    psubnav1.classList.remove('psubnav-show');
    pnavitem1.classList.remove('pni-open');
    
    psubnav2.classList.remove('psubnav-show');
    pnavitem2.classList.remove('pni-open');



});


