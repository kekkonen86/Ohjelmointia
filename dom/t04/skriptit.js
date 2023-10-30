(function () {
    let kappale;
    let tulos;
    let luokat;
    let eka;
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        kappale = document.getElementById('kappale');
        tulos = document.getElementById('tulos');
        luokat = document.getElementById('luokat');
        eka = document.getElementById('eka');
        document.getElementById('lisaakel')
            .addEventListener('click', () => lisaa('keltainen'));
        document.getElementById('poistakel')
            .addEventListener('click', () => poista('keltainen'));
        document.getElementById('lisaasin')
            .addEventListener('click', () => lisaa('sininen'));
        document.getElementById('poistasin')
            .addEventListener('click', () => poista('sininen'));
        document.getElementById('onoff')
            .addEventListener('click', onoff);
        document.getElementById('korvaa')
            .addEventListener('click', korvaa);
        document.getElementById('sisaltaa')
            .addEventListener('click', sisaltaa);
    }
    function lisaa(vari) {
        kappale.classList.add(vari);
        paivitaLuokat();
    }
    function poista(vari) {
        kappale.classList.remove(vari);
        paivitaLuokat();
    }
    function onoff() {
        tulos.textContent = kappale.classList.toggle('keltainen');
        paivitaLuokat();
    }
    function korvaa() {
        kappale.classList.replace('keltainen', 'sininen');
        paivitaLuokat();
    }
    function sisaltaa() {
        tulos.textContent = kappale.classList.contains('keltainen');
        paivitaLuokat();
    }
    function paivitaLuokat() {
        luokat.textContent = kappale.classList;
        eka.textContent = kappale.classList.item(0);
    }
})();