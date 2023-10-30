'use strict';

class Kasi extends Pakka {
  constructor() {  //tÃ¤tÃ¤ ei tarvita
    super();  //tÃ¤tÃ¤ kutsutaan automaattisesti
  }

   get Summa() {
    return this.kortit.reduce((Summa,kortti)=>Summa+kortti.Arvo,0);
  }

};