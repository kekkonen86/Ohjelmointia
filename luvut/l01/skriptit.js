function maaritelmat() {
    document.getElementById("luvut").reset();
    document.getElementById("luvut1").reset();
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("demo3").innerHTML= "";
    document.getElementById("demo4").innerHTML= "";
  }
  
  function laskut() {
    let luvut, luvut1, summa, erotus, tulo, jako, tule, text;
    luvut = parseInt(document.getElementById("luvut").value);
    luvut1 = parseInt(document.getElementById("luvut1").value);
    summa = luvut + luvut1
    erotus = luvut - luvut1
    tulo = (luvut * luvut1)
    jako = (luvut / luvut1)
    tule = 0
    text = ""
  
    if (luvut > 10 || luvut < 1 || luvut1 > 10 || luvut1 < 1) {
      alert("Numeron tulee olla väliltä 1-10!")
      return false
    }
  
    document.getElementById("demo").innerHTML ="Summa on " + summa;
    document.getElementById("demo1").innerHTML ="Erotus on " + erotus;
    document.getElementById("demo2").innerHTML ="Tulo on " + tulo;
    document.getElementById("demo3").innerHTML ="Jakolasku on " + jako;
  
    let suurempi = luvut > luvut1

    if (suurempi == true) {
      tule = luvut1
      while (tule <= luvut) {
        text += tule + " "
        tule = tule+1
      }
      document.getElementById("demo4").innerHTML = text
    }
  
    if (suurempi == false) {
      tule = luvut
      while (tule <= luvut1) {
        text += tule + " "
        tule= tule+1
      }
      document.getElementById("demo4").innerHTML = text
    }
    
  }