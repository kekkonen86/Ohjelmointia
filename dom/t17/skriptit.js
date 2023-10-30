'use strict';
(function () {
    let piirtoalusta;

    const tyylit = {
        suu: { vari: 'pink', viiva: 'orange', viivanLeveys: 0 },
        silma: { vari: 'red', viiva: 'black', viivanLeveys: 2 },
        iris: { vari: 'black', viiva: 'black', viivanleveys: 0 },
        nena: { vari: 'orange', viiva: 'orange', viivanLeveys: 5 },
        tausta: { vari: 'green', viiva: 'orange', viivanLeveys: 5 }
    };

    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        let konteksti = piirtoalusta.getContext('2d');
        let naama = new Naama(tyylit);
        naama.piirra(konteksti);
        konteksti.strokeStyle = 'red';
        konteksti.font = '40pt Serif';
        konteksti.strokeText("Häijy naama", 100, 350);

    }
})();
 

 