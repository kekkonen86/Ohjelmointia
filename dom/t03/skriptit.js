function lisaa() {
    let ekaKappale = document.createElement("p");
    let ekaTeksti = document.createTextNode("Moi, Maailma!");
    ekaKappale.appendChild(ekaTeksti);
    document.body.insertBefore(ekaKappale, document.body.childNodes[2]); // aseta body-elementin ensimmäiseksi lapseksi
}

function poista() {
    let lapsi = document.getElementById("paikka");
    lapsi.parentNode.removeChild(lapsi);
}

function muuta() {
    let elementti = document.getElementById("paikka");
    let teksti2 = elementti.innerHTML;
    elementti.innerHTML = "Moro!";
}



// let x = document.getElementById("testi").getAttribute("class");  // noutaa class-attribuutin arvon
// document.getElementById("testi").setAttribute("class", "huomio");  // asettaa class-attribuutin arvoksi "huomio"

// element.style.backgroundColor = "red";



// let ekaKappale = document.createElement("p");
// let ekaTeksti = document.createTextNode("Minä ensin!");
// ekaKappale.appendChild(ekaTeksti);
// document.body.insertBefore(ekaKappale, document.body.childNodes[0]); // aseta body-elementin ensimmäiseksi lapseksi

// let vanhempi = document.getElementById("div1");
// let lapsi = document.getElementById("p1");
// vanhempi.removeChild(lapsi);

