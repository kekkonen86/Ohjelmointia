'use strict';
(function(){
 document.addEventListener('DOMContentLoaded',alusta);
function alusta() {
 let piirtoalusta=document.getElementById('piirtoalusta');
 let konteksti=piirtoalusta.getContext('2d');
 let kuva=new Image();
 kuva.src="kukka.png";
 kuva.onload=piirrakuva;
 konteksti.fillStyle='rgba(255, 6, 255, 0.5)';
 konteksti.arc(150,100,50,0,2*Math.PI);
 konteksti.fill();
 konteksti.beginPath();
 konteksti.fillStyle='rgba(0, 255, 174, 0.5)';
 konteksti.arc(100,100,50,0,2*Math.PI);
 konteksti.fill();
 konteksti.beginPath();
 konteksti.lineWidth=5;
 konteksti.moveTo(200,200);
 konteksti.lineTo(200,250);
 konteksti.lineTo(300,250);
 konteksti.closePath();
 konteksti.stroke();
 function piirrakuva() {
 konteksti.drawImage(kuva,120,150);
 konteksti.drawImage(kuva, 50,150);
 }
}
})();