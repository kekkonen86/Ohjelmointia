function nappi() {
let selainvalinta = document.getElementsByName('selain');
let valittu;
let s1 = document.getElementById("s1").value;
let s2 = document.getElementById("s2").value;
let s3 = document.getElementById("s3").value;
for(var i = 0; i < selainvalinta.length; i++){
    if(selainvalinta[i].checked){
        valittu = selainvalinta[i].value;
    }
}
document.getElementById("paikka").innerHTML = s1 + "<br>" + s2 + "<br>" + s3 + "<br>"
document.getElementById("paikka2").innerHTML = "Valittu selain: " + valittu;
}
