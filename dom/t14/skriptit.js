'use strict';
(function () {
    let piirtoalusta;
    let konteksti;
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');
        //x y leveys korkeus vari
        piirra(55, 55, 50, 10, 'purple');
        piirra(55, 300, 200, 30, 'purple');
        piirra(130, 200, 50, 50, 'purple');
        piirra(50, 100, 60, 60, 'purple');
        piirra(200, 100, 60, 60, 'purple');
        konteksti.font = '40pt Serif';
        konteksti.fillStyle = 'red';
        konteksti.fillText('Naama', 150, 40);
        piirra(290, 160, 100, 100, 'red');
        konteksti.font = '80pt Serif';
        konteksti.strokeStyle = 'black';
        konteksti.strokeText('X', 300, 250);
    }
    function piirra(x, y, leveys, korkeus, vari) {
        konteksti.fillStyle = vari;
        konteksti.fillRect(x, y, leveys, korkeus);
        konteksti.strokeStyle = 'black';
        konteksti.lineWidth = 3;
        konteksti.strokeRect(x, y, leveys, korkeus);
    }
})();
 