'use strict';

  class Kortti {
  constructor(Maa, Arvo) {
    this.Maa = Maa;
    this.Arvo = Arvo;
   
      }
      
    

  toString() {
    return `${this.Maa.symboli} ${this.Arvo}`;
  }
};