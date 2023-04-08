const audio = document.getElementById('audio');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const volumeControl = document.getElementById('volume-control');

playButton.addEventListener('click', () => {
  audio.play();
});

pauseButton.addEventListener('click', () => {
  audio.pause();
});

volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;
});

function toggleSectionVisibility(sectionId) {
  const section = document.getElementById(sectionId);
  const separador = document.querySelector('.separador');
  const seccion1 = document.getElementById('seccion1');
  const seccion2 = document.getElementById('seccion2');

  section.classList.toggle('oculto');

  if (!seccion1.classList.contains('oculto') && !seccion2.classList.contains('oculto')) {
    separador.classList.remove('oculto');
  } else {
    separador.classList.add('oculto');
  }
}

const seccion1 = document.getElementById('seccion1');
seccion1.classList.add('oculto');

const seccion2 = document.getElementById('seccion2');
seccion2.classList.add('oculto');

const separador = document.querySelector('.separador');
separador.classList.add('oculto');

const navSeccion1 = document.getElementById('nav-seccion1');
navSeccion1.addEventListener('click', (event) => {
  event.preventDefault();
  toggleSectionVisibility('seccion1');
});

const navSeccion2 = document.getElementById('nav-seccion2');
navSeccion2.addEventListener('click', (event) => {
  event.preventDefault();
  toggleSectionVisibility('seccion2');
});

const seccion1Img = seccion1.querySelector('img');
const seccion1Video = seccion1.querySelector('video');

const seccion2Img = seccion2.querySelector('img');
const seccion2Video = seccion2.querySelector('video');

seccion1Img.style.width = "200px";
seccion1Img.style.height = "200px";
seccion1Img.style.margin = "20px";
seccion1Video.style.width = "200px";
seccion1Video.style.height = "200px";
seccion1Video.style.margin = "20px";
seccion1.style.flex = "1";
seccion1.style.display = "flex";
seccion1.style.justifyContent = "center";
seccion1.style.alignItems = "center";
seccion1.style.flexDirection = "column";
seccion1.style.margin = "0 10%";

seccion2Img.style.width = "200px";
seccion2Img.style.height = "200px";
seccion2Img.style.margin = "20px";
seccion2Video.style.width = "200px";
seccion2Video.style.height = "200px";
seccion2Video.style.margin = "20px";
seccion2.style.flex = "1";
seccion2.style.display = "flex";
seccion2.style.justifyContent = "center";
seccion2.style.alignItems = "center";
seccion2.style.flexDirection = "column";
seccion2.style.margin = "0 10%";
