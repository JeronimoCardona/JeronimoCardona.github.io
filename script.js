document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'https://i.imgur.com/EGrzUxf.jpg',
    'https://i.imgur.com/0kiOzpe.jpg',
    'https://i.imgur.com/AxrS3tr.jpg',
    'https://i.imgur.com/Wkr5ena.jpg'
  ];

  const poems = [
    `Eres la calma en mi tormenta,  
    el faro en la oscuridad,  
    tu amor es mi refugio eterno,  
    mi verdad, mi realidad.`,

    `Tu sonrisa es mi alegría,  
    tu voz es mi canción,  
    contigo aprendí que el amor  
    se escribe desde el corazón.`,

    `Tus ojos son el cielo,  
    tus manos mi hogar,  
    y en cada abrazo tuyo  
    me vuelvo a enamorar.`,

    `Amarte es mi promesa,  
    cuidarte mi misión,  
    caminar juntos la vida  
    es mi más bella bendición.`
  ];

  let currentIndex = 0;
  const photo = document.getElementById('photo');
  const button = document.getElementById('nextButton');
  const music = document.getElementById('bgMusic');
  const container = document.getElementById('mainContainer');
  const text = document.getElementById('imageText');
  const finalMessage = document.getElementById('finalMessage');

  button.addEventListener('click', () => {
    if (music.paused) music.play();

    if (!container.classList.contains('expanded')) {
      container.classList.add('expanded');
    }

    if (currentIndex < images.length) {
      photo.style.opacity = 0;

      setTimeout(() => {
        photo.src = images[currentIndex];
        text.textContent = poems[currentIndex];
        photo.onload = () => {
          photo.style.opacity = 1;
        };
        currentIndex++;
        if (currentIndex === images.length) {
          button.textContent = '💖 Ver dedicatoria final 💖';
        }
      }, 500);
    } else {
      photo.style.display = 'none';
      text.style.display = 'none';
      button.style.display = 'none';
      finalMessage.innerHTML = `Gracias por estos 11 meses. Sé que a pesar de todas nuestras caídas, somos fuertes para levantarnos juntos.  
      <br><br>Tú eres la más fuerte y puedes con todo lo que te propongas.  
      <br><br>Te amo más de lo que las palabras pueden decir. 💖`;
      finalMessage.style.display = 'block';
    }
  });
});
