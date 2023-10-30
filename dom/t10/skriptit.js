(function () {
  class Henkilo {
      constructor(nimi, svuosi) {
        this.nimi = nimi;
        this.svuosi = svuosi;
      }
      ika(x) {
        return x - this.svuosi; // laskee iän jos annettu vuosi on oikein
      }
    }
    
    let pvm = new Date(); // haetaan tämänhetkinen päivämäärä
    let vuosi = pvm.getFullYear(); // otetaan päivämäärästä täydet vuodet
    
    let jokunen = new Henkilo("Jaska", 2000); // luodaan uusi olio ja annetaan arvot
    console.log(`${jokunen.nimi} on ${jokunen.ika(vuosi)}-vuotias`); 

  // luodaan luokka Henkilo
  class Henkilo2 {
      constructor(nimi) {
        this.nimi = nimi;
      }
      esittely() {
        return `Hei, nimeni on ${this.nimi}`;
      }
    }
    
    // luodaan luokka Opiskelija joka perii ominaisuuksia Henkilolta
    class Opiskelija extends Henkilo2 {
      constructor(nimi, numero) {
        super(nimi);
        this.numero = numero;
      }
      tiedot() {
        return `${this.esittely()} ja opiskelijanumeroni on ${this.numero}`;
      }
    }
    
    let ekaOpiskelija = new Opiskelija("K", 12);
    console.log(ekaOpiskelija.tiedot()); // pitäisi tulostaa Hei, nimeni on K ja opiskelijanumeroni on 12

  // luodaan luokka Henkilo
  class Henkilo4 {
      constructor(nimi) {
        this._nimi = nimi; // usein laitetaan etuliite _ tähän koska kentän nimi ei voi olla sama kuin getterin tai setterin
      }
      get nimi() {
        return this._nimi;
      }
      set nimi(x) {
        this._nimi = x;
      }
    }
    
    let jaska2 = new Henkilo4("Jaska");
    console.log(jaska2._nimi);

    // luodaan luokka Henkilo
  class Henkilo5 {
      constructor(nimi) {
        this.nimi = nimi;
      }
      static moi() {
        return `Moi!`;
      }
    }
    
    let jaska = new Henkilo5("Jaska");
    console.log(Henkilo5.moi()); // tämä toimii
    // console.log(jaska.moi()); // tämä ei

})();