var modal = document.getElementById('modal');
var modalContent = document.getElementById('modal_content');
var navId = document.getElementById('nav_id');
var ownBeers = document.getElementById('modalBeers');



function showModal() {
  modal.style.visibility = 'visible';
  modal.style.opacity = 1;
  modalContent.style.visibility = 'visible';
  modalContent.style.opacity = 1;
}

function closeModal() {
  modal.style.visibility = 'hidden';
  modal.style.opacity = 0;
  modalContent.style.visibility = 'hidden';
  modalContent.style.opacity = 0;

}

function closeModalBeer() {
  ownBeers.style.left = '160%';

}

function showMenu() {
  navId.style.left = '0%';
}

function closeMenu() {
  navId.style.left = '-100%';
}

function beerCatalogue() {
  ownBeers.style.left = '50%';
}


function myFunction() {
  window.open("welcome.html", "_self");
}


var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});


var swiper1 = new Swiper('.s1', {
  zoom: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper2 = new Swiper('.s2', {
  spaceBetween: 30,
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// estrellas

var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");
var star4 = document.getElementById("star4");
var star5 = document.getElementById("star5");


var puntaje = 0;
var array = [star1, star2, star3, star4, star5];


function score(cant) {
  if (puntaje === cant) {
    puntaje = 0;
  } else
    puntaje = cant;
  alert("Calificaste con " + cant + " estrellas")
  colorear();
}

function colorear() {
  if (puntaje > 0) {
    for (var i = 0; i < puntaje; i++) {
      array[i].style.color = "gold";
    }
  }
}

function mouseOver(cant) {
  if (puntaje === cant) {
    puntaje = 0;
  } else
    puntaje = cant;

  colorear2();
}

function mouseOut(cant) {
  if (puntaje === cant) {
    puntaje = 0;
  } else
    puntaje = cant;

  colorear2();
}

function colorear2() {
  if (puntaje > 0) {
    for (var i = 0; i < puntaje; i++) {
      array[i].style.color = "gold";
    }
  } else
    for (var i = 4; i >= puntaje; i--) {
      array[i].style.color = "black";
    }
}

