var myAudio = document.createElement("audio");
myAudio.src = "medievaldance.mp3";
myAudio.play();

function draw() {

  // Boucle à travers toutes les images
  for (var i = 0; i < document.images.length; i++) {

    // N'ajoute pas de canevas pour l'image du cadre
    if (document.images[i].getAttribute('id') != 'frame') {

      // Crée un élément canvas
      canvas = document.createElement('canvas');
      canvas.setAttribute('width', 132);
      canvas.setAttribute('height', 150);

      // Insère avant l'image
      document.images[i].parentNode.insertBefore(canvas,document.images[i]);

      ctx = canvas.getContext('2d');

      // Dessine l'image sur canvas
      ctx.drawImage(document.images[i], 15, 20);

      // Ajoute un cadre
      ctx.drawImage(document.getElementById('frame'), 0, 0);
    }
  }
}
