'use strict';
(function () {
    
    let nosta;
    let jaa;
    let uusi;
    let pakka = Pakka.luoPakka();
    let summa;
    let jakaja = 0;
    let lkm = 3;
    pakka.sekoita();

    let kasi = new Kasi();
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta(varit) {



        nosta = document.getElementById("nosta");
        nosta.addEventListener("click", nostaKortti);
        jaa = document.getElementById("jaa");
        jaa.addEventListener("click", jataVuoro);
        uusi = document.getElementById("uusi");
        uusi.addEventListener("click", uusiPeli);




        
kasi.LisaaKortti(pakka.otaKortti());

kasi.LisaaKortti(pakka.otaKortti());


        summa = kasi.Summa;
       



        let uusiKortti = kasi.otaKortti();

        if (uusiKortti.Maa.vari === 'punainen') {
            document.getElementById("pkortti1").style.color = "red"
            document.getElementById("pkortti1").innerHTML = uusiKortti;
            document.getElementById("pkortti1").style.display='inline-block'
            document.getElementById("pkortti1").style.textAlign='center'
            document.getElementById("pkortti1").style.justifyContent='center'
            
        }
        else {
            document.getElementById("pkortti1").innerHTML = uusiKortti;
            document.getElementById("pkortti1").style.display='inline-block'
            document.getElementById("pkortti1").style.textAlign='center'
            document.getElementById("pkortti1").style.justifyContent='center'
        }

        let uusiKortti1 = kasi.otaKortti();

        if (uusiKortti1.Maa.vari === 'punainen') {
            document.getElementById("pkortti2").style.color = "red"
            document.getElementById("pkortti2").innerHTML = uusiKortti1;
            document.getElementById("pkortti2").style.display='inline-block'
            document.getElementById("pkortti1").style.textAlign='center'
            document.getElementById("pkortti1").style.justifyContent='center'
        }
        else {
            document.getElementById("pkortti2").innerHTML = uusiKortti1;
            document.getElementById("pkortti2").style.display='inline-block'
            document.getElementById("pkortti1").style.textAlign='center'
            document.getElementById("pkortti1").style.justifyContent='center'
        }



        if (summa == 21) {
            document.getElementById("teksti").innerHTML = "Voitit pelin";
            nosta.removeEventListener("click", nostaKortti);
            jaa.removeEventListener("click", jataVuoro);
            document.getElementById("jaa").disabled = true;
            document.getElementById("nosta").disabled = true;
            document.getElementById("nosta").style.color = "red"
            document.getElementById("jaa").style.color = "red"
            document.getElementById("jaa").value = "X"
            document.getElementById("nosta").value = "X"
        }
        else if (summa > 21) {
            document.getElementById("teksti").innerHTML = "Hävisit pelin";
            nosta.removeEventListener("click", nostaKortti);
            jaa.removeEventListener("click", jataVuoro);
            document.getElementById("jaa").disabled = true;
            document.getElementById("nosta").disabled = true;
            document.getElementById("nosta").style.color = "red"
            document.getElementById("jaa").style.color = "red"
            document.getElementById("jaa").value = "X"
            document.getElementById("nosta").value = "X"
        }
        document.getElementById("pelaaja").innerHTML = "Pelaaja: " + summa;
    }

    

    function nostaKortti() {

        let uusiKortti3,
            uusiKortti4,
            uusiKortti5;
        

        switch (lkm) {
            case 3:
                pelaajanVuoro(uusiKortti3, "pkortti3");
                document.getElementById("pkortti3").style.display='inline-block'
                break;
            case 4:
                pelaajanVuoro(uusiKortti4, "pkortti4");
                document.getElementById("pkortti4").style.display='inline-block'
                break;
            case 5:
                pelaajanVuoro(uusiKortti5, "pkortti5");
                document.getElementById("pkortti5").style.display='inline-block'
                break;
        
            default:
                break;
        }


    function pelaajanVuoro(Kortti, ID){
        
        kasi.LisaaKortti(pakka.otaKortti());
        Kortti = kasi.otaKortti();
        if (Kortti.Maa.vari === 'punainen') {
            
            document.getElementById(ID).innerHTML = Kortti;
            document.getElementById(ID).style.color = "red"

        }
        else {
            document.getElementById(ID).innerHTML = Kortti;
        }
        

        summa = (summa + Kortti.Arvo);
        document.getElementById("pelaaja").innerHTML = "Pelaaja: " + summa;

        if (summa == 21 || lkm == 5 && summa < 21) {
            document.getElementById("teksti").innerHTML = "Voitit pelin";
            nosta.removeEventListener("click", nostaKortti);
            jaa.removeEventListener("click", jataVuoro);
            document.getElementById("jaa").disabled = true;
            document.getElementById("nosta").disabled = true;
            document.getElementById("nosta").style.color = "red"
            document.getElementById("jaa").style.color = "red"
            document.getElementById("jaa").value = "X"
            document.getElementById("nosta").value = "X"


        }
        else if (summa > 21) {
            document.getElementById("teksti").innerHTML = "Hävisit pelin";
            nosta.removeEventListener("click", nostaKortti);
            jaa.removeEventListener("click", jataVuoro);
            document.getElementById("jaa").disabled = true;
            document.getElementById("nosta").disabled = true;
            document.getElementById("nosta").style.color = "red"
            document.getElementById("jaa").style.color = "red"
            document.getElementById("jaa").value = "X"
            document.getElementById("nosta").value = "X"




        }
    }
    lkm++;
}
    

    function jataVuoro() {

        nosta.removeEventListener("click", nostaKortti);
        document.getElementById("nosta").disabled = true;
        document.getElementById("nosta").style.color = "red"
        document.getElementById("nosta").value = "X"




        let jakajaKortti,
            jakajaKortti2,
            jakajaKortti3,
            jakajaKortti4,
            jakajaKortti5;


        for (let i = 0; i <= 5; i++) {

            switch (i) {
                case 1:
                    jakajanVuoro(jakajaKortti, "jkortti1", i);
                    document.getElementById("jkortti1").style.display='inline-block'
                    break;

                case 2:
                    jakajanVuoro(jakajaKortti2, "jkortti2", i);
                    document.getElementById("jkortti2").style.display='inline-block'
                    break;

                case 3:
                    jakajanVuoro(jakajaKortti3, "jkortti3", i);
                    document.getElementById("jkortti3").style.display='inline-block'
                    break;

                case 4:
                    jakajanVuoro(jakajaKortti4, "jkortti4", i);
                    document.getElementById("jkortti4").style.display='inline-block'
                    break;

                case 5:
                    jakajanVuoro(jakajaKortti5, "jkortti5", i);
                    document.getElementById("jkortti5").style.display='inline-block'
                    break;

                default:
                    break;
            }
        }
    }


    function jakajanVuoro(jakajaKortti, ID, idk) {

        if (jakaja > summa && jakaja < 21 || jakaja == 21 || idk == 5 && jakaja < 21 || jakaja == summa) {
            jaa.removeEventListener("click", jataVuoro);
            document.getElementById("jaa").disabled = true;
            document.getElementById("jaa").style.color = "red"
            document.getElementById("jaa").value = "X"
            document.getElementById("teksti").innerHTML = "Hävisit pelin";
            return;
        }
        else if (jakaja > 21) {
            document.getElementById("jaa").disabled = true;
            jaa.removeEventListener("click", jataVuoro);
            document.getElementById("jaa").style.color = "red"
            document.getElementById("jaa").value = "X"
            document.getElementById("teksti").innerHTML = "Voitit pelin";
            return;
        }

        kasi.LisaaKortti(pakka.otaKortti());
        jakajaKortti = kasi.otaKortti();
        jakaja = jakaja + jakajaKortti.Arvo;

        
        if (jakajaKortti.Maa.vari === 'punainen') {
            document.getElementById(ID).style.color = "red";
            document.getElementById(ID).innerHTML = jakajaKortti;
        }
        else {
            document.getElementById(ID).innerHTML = jakajaKortti;
        }
        document.getElementById("jakaja").innerHTML = "Jakaja: " + jakaja;
    }
    

    function uusiPeli() {
        location.reload();
    }

})();