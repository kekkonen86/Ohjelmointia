'use strict';
(function () {
    let ajastin;
    let lkm = 0;
    let pinta = 0;
    let pinta2 = 0;
    let pinta3 = 0;
    let piirtoalusta;
    let konteksti;
    let nappi;
    let ekaKilpailija;
    let tokaKilpailija;
    let kolmasKilpailija;
    let neljas;
    let kilpailija1;
    let kilpailija2;
    let kilpailija3;

    document.addEventListener('DOMContentLoaded', alusta);

    function alusta() {
        piirtoalusta = document.getElementById("piirtoalusta");
        konteksti = piirtoalusta.getContext('2d');
        nappi = document.getElementById("nappi");
        nappi.addEventListener("click", alusta2);
    }

    function alusta2() {
        kilpailija1 = Number(document.forms["luvut"]["eka"].value);
        kilpailija2 = Number(document.forms["luvut"]["toka"].value);
        kilpailija3 = Number(document.forms["luvut"]["kolmas"].value);

        ekaKilpailija = 100 - kilpailija1;
        tokaKilpailija =  100 - kilpailija2;
        kolmasKilpailija = 100 - kilpailija3;

        console.log(ekaKilpailija);
        console.log(tokaKilpailija);
        console.log(kolmasKilpailija);

        if ((kilpailija1 + kilpailija2 + kilpailija3) != 100) {
            let virhe = document.getElementById("virhe");
            virhe.innerHTML = "Lukujen summa on yli tai alle 100!";
            virhe.style.color = "red";
            return;
        }

        if ((ekaKilpailija >= tokaKilpailija) && (ekaKilpailija >= kolmasKilpailija)) {
            neljas = ekaKilpailija;
        } else if ((tokaKilpailija >= ekaKilpailija) && (tokaKilpailija >= kolmasKilpailija)) {
            neljas = tokaKilpailija;
        } else if ((kolmasKilpailija >= ekaKilpailija) && (kolmasKilpailija >= ekaKilpailija)) {
            neljas = kolmasKilpailija;
        }

        ajastin = setInterval(function () {
            lkm++;
            console.log(lkm);
            console.log(neljas);
            if (pinta <= ekaKilpailija) {
                pinta++;
            }

            if (pinta2 <= tokaKilpailija) {
                pinta2++;
            }

            if (pinta3 <= kolmasKilpailija) {
                pinta3++;
            }
            piirra();
        }, 100);

    }

    function piirra() {
        if (lkm > neljas) {
            clearInterval(ajastin);
            return;
        }

        konteksti.clearRect(0, 0, piirtoalusta.width, piirtoalusta.height);
        konteksti.font = "6pt Arial";
        konteksti.fillText("100%", 80, 10);
        konteksti.beginPath();
        konteksti.moveTo(100, 10);
        konteksti.lineTo(100, 110);
        konteksti.lineTo(400, 110);
        konteksti.stroke();



        terveysPalkki(150, 10, 50, 100, pinta);
        terveysPalkki2(250, 10, 50, 100, pinta2);
        terveysPalkki3(350, 10, 50, 100, pinta3);

    }
     function terveysPalkki(x, y, leveys, korkeus, pinta) {
     konteksti.save();
     konteksti.translate(x, y);
     konteksti.beginPath();
     konteksti.rect(0, 0, leveys, korkeus);
     konteksti.clip();
     konteksti.stroke();
     konteksti.fillStyle = 'green';
     konteksti.fillRect(0, pinta, leveys, korkeus);
     konteksti.restore();
     }
 
 function terveysPalkki2(x, y, Leveys, korkeus, pinta) {
     konteksti.save();
     konteksti.translate(x, y);
     konteksti.beginPath();
     konteksti.rect(0, 0, Leveys, korkeus);
     konteksti.clip();
     konteksti.stroke();
     konteksti.fillStyle = 'blue';
     konteksti.fillRect(0, pinta, Leveys, korkeus);
     konteksti.restore();
    }
 function terveysPalkki3(x, y, Leveys, korkeus, pinta) {
     konteksti.save();
     konteksti.translate(x, y);
     konteksti.beginPath();
     konteksti.rect(0, 0, Leveys, korkeus);
     konteksti.clip();
     konteksti.stroke();
     konteksti.fillStyle = 'red';
     konteksti.fillRect(0, pinta, Leveys, korkeus);
     konteksti.restore();
    }


})();


