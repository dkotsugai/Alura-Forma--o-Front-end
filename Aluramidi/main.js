function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}
// document.querySelector(".tecla_pom").onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

// enquanto
while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador];
  const intrumento = tecla.classList[1];
  //templete string
  const idAudio = `#som_${intrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  contador = contador + 1;

  //console.log(contador);
}
