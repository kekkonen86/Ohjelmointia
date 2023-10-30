function robottoKomennot(e) {
    e.preventDefault();
    let paskaperse = document.getElementById("paskaperse").value;
    let komennot = document.forms["lomake"]["komennot"].value;



    if (komennot == "robotto.wave();") {
        document.getElementById("paskaperse").innerHTML = '<img class="robotto" src="./images/robotto_normal.png" width="10%">' + '<img class="robotto" src="./images/robotto_wawe.png" width="10%">'
        w3.slideshow(".robotto");

    }if (komennot == "robotto.jump();") {
        document.getElementById("paskaperse").innerHTML = '<img class="robotto" src="./images/robotto_normal.png" width="10%">' + '<img class="robotto" src="./images/robotto_jump.png" width="10%">'
        w3.slideshow(".robotto");

    }if (komennot == "robotto.walk();") {
        document.getElementById("paskaperse").innerHTML = '<img class="robotto" src="./images/robotto_walk_1.png" width="10%">' + '<img class="robotto" src="./images/robotto_walk_2.png" width="10%">'
        w3.slideshow(".robotto");
    }if ((komennot !== "robotto.wave();") && (komennot !== "robotto.jump();") && (komennot !== "robotto.walk();")) {
        alert("Syntax Error!")
        return false;
}



}
