let korttiPakka = [];
let maat = "";


for (let i = 0; i < 4; i++){
    if (i == 0) {
        maat = "hearts";
    }
    else if (i == 1) {
        maat = "clubs";
    }
    else if (i == 2) {
        maat = "diamonds";
    }
    else if (i == 3) {
        maat = "spades"
    }
     for (let j = 0; j < 13; j++) {
        korttiPakka.push([maat, j + 1]);
    }
}

korttiPakka = korttiPakka.sort(function(a, b){return 0.5 - Math.random()});

let laskuri = 0;
let korttiArvo = korttiPakka[laskuri][1]; 
let korttiMaaKoodi = korttiPakka[laskuri][0];
let korttiSumma = 0;

while (laskuri < 2) {
    if (laskuri == 0) {
        document.getElementById("upper").innerText = korttiArvo;

        if (korttiMaaKoodi == "hearts") {
            document.getElementById("midle-red").innerText = "♥";
        }
        else if (korttiMaaKoodi == "clubs") {
            document.getElementById("midle").innerText = "♣";
        }
        else if (korttiMaaKoodi == "diamonds") {
            document.getElementById("midle-red").innerText = "♦";
        }
        else if (korttiMaaKoodi == "spades") {
            document.getElementById("midle").innerText = "♠";
        }
        document.getElementById("lower").innerText = korttiArvo;
        korttiSumma += korttiArvo;
        laskuri++;
        korttiMaaKoodi = korttiPakka[laskuri][0];
        korttiArvo = korttiPakka[laskuri][1];
    }
    else if (laskuri == 1) {
        document.getElementById("upper2").innerText = korttiArvo;

        if (korttiMaaKoodi == "hearts") {
            document.getElementById("midle-red2").innerText = "♥";
        }
        else if (korttiMaaKoodi == "clubs") {
            document.getElementById("midle2").innerText = "♣";
        }
        else if (korttiMaaKoodi == "diamonds") {
            document.getElementById("midle-red2").innerText = "♦";
        }
        else if (korttiMaaKoodi == "spades") {
            document.getElementById("midle2").innerText = "♠";
        }
        document.getElementById("lower2").innerText = korttiArvo;
        korttiSumma += korttiArvo;
        laskuri++;
    }
}

if (korttiSumma == 21) {
    document.getElementById("tulos").innerText = "Sait korttien arvoksi 21, VOITIT PELIN!";
}
else if (korttiSumma > 21) {
    document.getElementById("tulos").innerText = "HÄVISIT PELIN!";
}

function nostaKortti() {
    korttiMaaKoodi = korttiPakka[laskuri][0];
    korttiArvo = korttiPakka[laskuri][1];
    korttiSumma += korttiArvo;
        if (laskuri == 2) {
            document.getElementById("upper3").innerText = korttiArvo;

            if (korttiMaaKoodi == "hearts") {
                document.getElementById("midle-red3").innerText = "♥";
            }
            else if (korttiMaaKoodi == "clubs") {
                document.getElementById("midle3").innerText = "♣";
            }
            else if (korttiMaaKoodi == "diamonds") {
                document.getElementById("midle-red3").innerText = "♦";
            }
            else if (korttiMaaKoodi == "spades") {
                document.getElementById("midle3").innerText = "♠";
            }
            document.getElementById("lower3").innerText = korttiArvo;

            if (korttiSumma == 21) {
                document.getElementById("tulos").innerText = "VOITIT PELIN!";
            }
            else if (korttiSumma > 21) {
                document.getElementById("tulos").innerText = "Jakaja voitti, HÄVISIT PELIN!";
            }
            else {
                laskuri++;
            }
        }
        else if (laskuri == 3) {
            document.getElementById("upper4").innerText = korttiArvo;

            if (korttiMaaKoodi == "hearts") {
                document.getElementById("midle-red4").innerText = "♥";
            }
            else if (korttiMaaKoodi == "clubs") {
                document.getElementById("midle4").innerText = "♣";
            }
            else if (korttiMaaKoodi == "diamonds") {
            document.getElementById("midle-red4").innerText = "♦";
            }
            else if (korttiMaaKoodi == "spades") {
            document.getElementById("midle4").innerText = "♠";
            }
            document.getElementById("lower4").innerText = korttiArvo;

            if (korttiSumma == 21) {
                document.getElementById("tulos").innerText = "VOITIT PELIN!";
            }
            else if (korttiSumma > 21) {
                document.getElementById("tulos").innerText = "Jakaja voitti, HÄVISIT PELIN!";
            }
            else {
                laskuri++;
            }
        }
        else if (laskuri == 4) {
            document.getElementById("upper5").innerText = korttiArvo;

            if (korttiMaaKoodi == "hearts") {
                document.getElementById("midle-red5").innerText = "♥";
            }
            else if (korttiMaaKoodi == "clubs") {
                document.getElementById("midle5").innerText = "♣";
            }
            else if (korttiMaaKoodi == "diamonds") {
                document.getElementById("midle-red5").innerText = "♦";
            }
            else if (korttiMaaKoodi == "spades") {
                document.getElementById("midle5").innerText = "♠";
            }
            document.getElementById("lower5").innerText = korttiArvo;

            if (korttiSumma == 21 || korttiSumma < 21) {
                document.getElementById("tulos").innerText = "VOITIT PELIN!";
            }
            else if (korttiSumma > 21) {
                document.getElementById("tulos").innerText = "Jakaja voitti, HÄVISIT PELIN!";
            }
            else {
                laskuri++;
            }
        }
}

function jää() {
    korttiArvo = korttiPakka[laskuri][1];
    korttiMaaKoodi = korttiPakka[laskuri][0];
    let korttiSumma2 = korttiArvo;
    let loppu = 0;

    document.getElementById("upper6").innerText = korttiArvo;

    if (korttiMaaKoodi == "hearts") {
        document.getElementById("midle-red6").innerText = "♥";
    }
    else if (korttiMaaKoodi == "clubs") {
        document.getElementById("midle6").innerText = "♣";
    }
    else if (korttiMaaKoodi == "diamonds") {
        document.getElementById("midle-red6").innerText = "♦";
    }
    else if (korttiMaaKoodi == "spades") {
        document.getElementById("midle6").innerText = "♠";
    }

    document.getElementById("lower6").innerText = korttiArvo;
    
    if (korttiSumma2 > 21) {
        document.getElementById("tulos").innerText = "Voitit pelin!";
        loppu += 1;
    }
    else if ((korttiSumma2 > korttiSumma && korttiSumma2 < 21) || korttiSumma2 == 21) {
        document.getElementById("tulos").innerText = "Jakaja voitti pelin!";
        loppu += 1;
    }
    else if (korttiSumma2 < 21 && loppu == 0) {
        laskuri++;
        korttiArvo = korttiPakka[laskuri][1];
        korttiMaaKoodi = korttiPakka[laskuri][0];
        korttiSumma2 += korttiArvo;

        document.getElementById("upper7").innerText = korttiArvo;

        if (korttiMaaKoodi == "hearts") {
            document.getElementById("midle-red7").innerText = "♥";
        }
        else if (korttiMaaKoodi == "clubs") {
            document.getElementById("midle7").innerText = "♣";
        }
        else if (korttiMaaKoodi == "diamonds") {
            document.getElementById("midle-red7").innerText = "♦";
        }
        else if (korttiMaaKoodi == "spades") {
            document.getElementById("midle7").innerText = "♠";
        }

        document.getElementById("lower7").innerText = korttiArvo;

        if (korttiSumma2 > 21) {
            document.getElementById("tulos").innerText = "Voitit pelin!";
            loppu += 1;
        }
        else if ((korttiSumma2 >= korttiSumma && korttiSumma2 < 21) || korttiSumma2 == 21) {
            document.getElementById("tulos").innerText = "Jakaja voitti pelin!";
            loppu += 1;
        }

        else if (korttiSumma2 >= korttiSumma) {
            document.getElementById("tulos").innerText = "Jakaja voitti pelin!";
            loppu += 1;
        }

        else if (korttiSumma2 < 21 && loppu == 0) {
            laskuri++;
            korttiArvo = korttiPakka[laskuri][1];
            korttiMaaKoodi = korttiPakka[laskuri][0];
            korttiSumma2 += korttiArvo;
        


            document.getElementById("upper8").innerText = korttiArvo;

            if (korttiMaaKoodi == "hearts") {
                document.getElementById("midle-red8").innerText = "♥";
            }
            else if (korttiMaaKoodi == "clubs") {
                document.getElementById("midle8").innerText = "♣";
            }
            else if (korttiMaaKoodi == "diamonds") {
                document.getElementById("midle-red8").innerText = "♦";
            }
            else if (korttiMaaKoodi == "spades") {
                document.getElementById("midle8").innerText = "♠";
            }

            document.getElementById("lower8").innerText = korttiArvo;

            if (korttiSumma2 > 21) {
                document.getElementById("tulos").innerText = "Voitit pelin!";
                loppu += 1;
            }
            else if ((korttiSumma2 > korttiSumma && korttiSumma2 < 21) || korttiSumma2 == 21) {
                document.getElementById("tulos").innerText = "Jakaja voitti pelin!";
                loppu += 1;
            }
            else if (korttiSumma < 21 && loppu == 0) {
                laskuri++;
                korttiArvo = korttiPakka[laskuri][1];
                korttiMaaKoodi = korttiPakka[laskuri][0];
                korttiSumma2 += korttiArvo;

                document.getElementById("upper9").innerText = korttiArvo;

                if (korttiMaaKoodi == "hearts") {
                    document.getElementById("midle-red9").innerText = "♥";
                }
                else if (korttiMaaKoodi == "clubs") {
                    document.getElementById("midle9").innerText = "♣";
                }
                else if (korttiMaaKoodi == "diamonds") {
                    document.getElementById("midle-red9").innerText = "♦";
                }
                else if (korttiMaaKoodi == "spades") {
                    document.getElementById("midle9").innerText = "♠";
                }

                document.getElementById("lower9").innerText = korttiArvo;

                if (korttiSumma2 > 21) {
                    document.getElementById("tulos").innerText = "Voitit pelin!";
                    loppu += 1;
                }
                else if ((korttiSumma2 >= korttiSumma && korttiSumma2 < 21) || korttiSumma2 == 21) {
                    document.getElementById("tulos").innerText = "Jakaja voitti pelin!";
                    loppu += 1;
                }
                else if (korttiSumma2 < 21 && loppu == 0) {
                    laskuri++;
                    korttiArvo = korttiPakka[laskuri][1];
                    korttiMaaKoodi = korttiPakka[laskuri][0];
                    korttiSumma2 += korttiArvo;

                    document.getElementById("upper10").innerText = korttiArvo;

                    if (korttiMaaKoodi == "hearts") {
                        document.getElementById("midle-red10").innerText = "♥";
                    }
                    else if (korttiMaaKoodi == "clubs") {
                        document.getElementById("midle10").innerText = "♣";
                    }
                    else if (korttiMaaKoodi == "diamonds") {
                        document.getElementById("midle-red10").innerText = "♦";
                    }
                    else if (korttiMaaKoodi == "spades") {
                        document.getElementById("midle10").innerText = "♠";
                    }

                    document.getElementById("lower10").innerText = korttiArvo;

                    if (korttiSumma2 > 21) {
                        document.getElementById("tulos").innerText = "Voitit pelin";
                    }
                    else if (korttiSumma2 < 21) {
                        document.getElementById("tulos").innerText = "Jakaja voitti pelin!";
                    
                    }
                }
            }
        }
    }


}

document.getElementById("pp").innerHTML = "Pelaajan kahden ensimmäisen kortin arvo: " + korttiSumma;
document.getElementById("jp").innerHTML = korttiSumma2;


function uusiPeli() {

}

