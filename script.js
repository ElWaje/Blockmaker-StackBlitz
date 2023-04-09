document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');
  const volumeControl = document.getElementById('volume-control');
  const seccion1 = document.getElementById('seccion1');
  const seccion2 = document.getElementById('seccion2');
  const navSeccion1 = document.getElementById('nav-seccion1');
  const navSeccion2 = document.getElementById('nav-seccion2');
  const separador = document.querySelector('.separador');
  const seccionesContainer = document.querySelector('.secciones-container');
    
  playButton.addEventListener('click', () => {
    audio.play();
  });

  pauseButton.addEventListener('click', () => {
    audio.pause();
  });

  volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
  });

  function toggleSectionVisibility(section) {
    section.classList.toggle('seccion-oculta');
    const seccion1Visible = !seccion1.classList.contains('seccion-oculta');
    const seccion2Visible = !seccion2.classList.contains('seccion-oculta');
    if (seccion1Visible && seccion2Visible) {
      separador.classList.remove('separador-oculto');
    } else {
      separador.classList.add('separador-oculto');
    }
    // Agregar/quitar clase "active" según corresponda
    if (section.id === "seccion1") {
      if (seccion1Visible) {
        navSeccion1.classList.add("active");
      } else {
        navSeccion1.classList.remove("active");
      }
    } else if (section.id === "seccion2") {
      if (seccion2Visible) {
        navSeccion2.classList.add("active");
      } else {
        navSeccion2.classList.remove("active");
      }
    }
  }

  seccion1.style.width = '45%';
  seccion2.style.width = '45%';
  separador.style.width = '10px';
  separador.style.height = seccionesContainer.clientHeight + 'px';
  separador.style.margin = '0 20px';
  separador.style.backgroundColor = 'pink';

  // Ocultar seccion1 y seccion2 al cargar la página
  seccion1.classList.add('seccion-oculta');
  seccion2.classList.add('seccion-oculta');

  // Añadir evento de click al botón de la seccion1
  navSeccion1.addEventListener('click', (event) => {
    event.preventDefault();
    toggleSectionVisibility(seccion1);
  });

  // Añadir evento de click al botón de la seccion2   
  navSeccion2.addEventListener('click', (event) => {
    event.preventDefault();
    toggleSectionVisibility(seccion2);
  }); 
   
});
