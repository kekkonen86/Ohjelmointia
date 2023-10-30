function pakka(){
  let kortti = [];
  let korttiMaa = ["hertta", "risti", "ruutu", "pata"];
  for (let x = 0; x < korttiMaa.length; x++)
  {
    for (let y = 1; y <= 13; y++)
    {
    let kortti2 = {Maat: korttiMaa[x], Arvot: [y]};
    kortti.push([kortti2.Maat+ " " + kortti2.Arvot]);
  }
}
document.getElementById("paikka").innerHTML = kortti;
let random = kortti.sort(function(a, b){return 0.5 - Math.random()});
document.getElementById("paikka2").innerHTML = random;
console.log(showRandom(random));
}

function showRandom(random){
  let value = random[0][0].split(" ")[1];
  let suit = random[0][0].split(" ")[0];
  let hertta = "&hearts;";
  let risti = "&clubs;";
  let ruutu = "&diams;";
  let pata = "&spades;";
    let suits = '';
  let suitValue = "";

  if (suit  == 'hertta') {
    suits = hertta;
    suitValue = "red";
  }
  if (suit  == 'risti') {
    suits = risti;
    suitValue = "black";
  }
  if (suit  == 'ruutu') {
    suits = ruutu;
    suitValue = "red";
  }
  if (suit  == 'pata') {
    suits = pata;
    suitValue = "black";
  }

let paikka3 = document.getElementById("paikka3");
nollaus(paikka3);
paikka3.innerHTML = suits;
paikka3.classList.add(suitValue);

let upper = document.getElementsByClassName("number")[0];
let lower = document.getElementsByClassName("number")[1];
upper.innerHTML = value;
lower.innerHTML = value;

}

function nollaus(element) {
  element.classList.remove("red");
  element.classList.remove("black");
}
