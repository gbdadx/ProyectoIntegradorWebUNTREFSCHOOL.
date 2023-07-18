// consigue el boton
let mybutton = document.getElementById("myBtn");

// cuando el usuario desciende 300px desde el top de la pagina, aparece el boton de scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// cuando el usuario clickea el boton, sube al top de la pagina
function topFunction() {
  document.body.scrollTop = 0; // para safari
  document.documentElement.scrollTop = 0; // oara  Chrome, Firefox, IE y Opera
}
