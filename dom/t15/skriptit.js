'use strict';
(function () {
    const tyylit = {
        suu: { vari: 'red', viiva: 'orange', viivanLeveys: 5 },
        silma: { vari: 'white', viiva: 'black', viivanLeveys: 2 },
        nena: { vari: 'blue', viiva: 'orange', viivanLeveys: 5 },
    };
    let piirtoalusta;
    let konteksti;
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');
        //x y leveys korkeus vari
        piirra(100, 90, 205, 205, 'cyan');
        piirraSuorakaide('suu', 150, 250, 100, 25, false);
        piirraSuorakaide('nena', 185, 200, 25, 25, true);
        piirraSuorakaide('silma', 220, 110, 50, 50, true);
        piirraSuorakaide('silma', 130, 110, 50, 50, true);


        
    }
    function piirra(x, y, leveys, korkeus, vari) {
        konteksti.fillStyle = vari;
        konteksti.fillRect(x, y, leveys, korkeus);
        konteksti.strokeStyle = 'orange';
        konteksti.lineWidth = 5;
        konteksti.strokeRect(x, y, leveys, korkeus);
    }


    function piirraSuorakaide(osa, x, y, lev, kork, onReuna = true) {
        konteksti.save();
        konteksti.fillStyle = tyylit[osa].vari;
        konteksti.fillRect(x, y, lev, kork);
        if (onReuna) {
            konteksti.lineWidth = tyylit[osa].viivanLeveys;
            konteksti.strokeStyle = tyylit[osa].viiva;
            konteksti.strokeRect(x, y, lev, kork);
        }
        konteksti.restore();
    }

 
})();
 