
(function () {
 
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        let form = document.getElementById("luvut");
        let nimilabel = document.createElement("label");
        nimilabel.setAttribute("for", "nimi");
        nimilabel.innerHTML = "Nimi: ";
        document.getElementById("luvut").appendChild(nimilabel);
        let nimi = document.createElement("input");
        nimi.setAttribute("type", "text");
        nimi.setAttribute("name", "nimi");
        nimi.setAttribute("id", "nimi");
        nimi.setAttribute("onblur", "tilinumero()");
        document.getElementById("luvut").appendChild(nimi);
        let brk = document.createElement("br");
        form.appendChild(brk);
    }
 
})();



function tilinumero() {
    let form = document.getElementById("luvut");
    let nimilabel2 = document.createElement("label");
    nimilabel2.setAttribute("for", "tnro");
    nimilabel2.innerHTML = "Tilinumero (13 merkkiä): ";
    document.getElementById("luvut").appendChild(nimilabel2);
    let tnro = document.createElement("input");
    tnro.setAttribute("type", "number");
    tnro.setAttribute("name", "tnro");
    tnro.setAttribute("id", "tnro");
    tnro.setAttribute("onblur", "slider()");
    document.getElementById("luvut").appendChild(tnro);
    let brk = document.createElement("br");
    form.appendChild(brk);


    
}

function slider() {
    if(tnro.value.length == 13) {
        let form = document.getElementById("luvut");
        let nimilabel3 = document.createElement("label");
        nimilabel3.setAttribute("for", "maara");
        nimilabel3.innerHTML = "Määritä siirrettävä summa: ";
        document.getElementById("luvut").appendChild(nimilabel3);
        let maara = document.createElement("input");
        maara.setAttribute("type", "range");
        maara.setAttribute("name", "maara");
        maara.setAttribute("id", "maara");
        maara.setAttribute("min", "0");
        maara.setAttribute("max", "100");
        maara.setAttribute("value", "0")
        document.getElementById("luvut").appendChild(maara);
        let brk = document.createElement("br");
        form.appendChild(brk);


        let maaraOutput = document.createElement("p");
        let maaraTulostus = document.createTextNode("Siirrettävä summa (euroina): " + maara.value + " " + "€")
        maaraOutput.appendChild(maaraTulostus);
        
        form.appendChild(maaraOutput)

        maara.oninput = function() {
            maaraOutput.innerHTML = "Siirrettävä summa (euroina): " + maara.value + " " + "€"
        }
        
        let laheta = document.createElement("input");
        laheta.setAttribute("type", "submit");
        laheta.setAttribute("name", "nappi");
        laheta.setAttribute("id", "nappi");
        laheta.setAttribute("value", "Lähetä data")
        document.getElementById("luvut").appendChild(laheta);
        form.appendChild(brk);
    }
}




