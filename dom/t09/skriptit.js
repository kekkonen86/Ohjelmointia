(function () {
    const henkilo =
    {
        etuNimi: "K",
        sukuNimi: "P",
        ika: 35,
        get kokoNimi() {
            return this.etuNimi + " " + this.sukuNimi;
        },
        set nuorenna(luku) {
            this.ika -= luku;
        }
    }
    console.log(henkilo.kokoNimi);  // K P
    henkilo.nuorenna = 2;
    console.log(henkilo.ika); // 33

    const henkilo1 =
    {
        etuNimi: "K",
        sukuNimi: "P",
        ika: 35,
        kokoNimi: function() { return `${this.etuNimi} ${this.sukuNimi}` }
    }
    console.log(henkilo1.kokoNimi());  // K P

    const henkilo2 = new Object();
    henkilo2.etuNimi = "K";
    henkilo2.sukuNimi = "P";
    henkilo2.ika = 35;
    henkilo2.kokoNimi = function() { return `${this.etuNimi} ${this.sukuNimi}` };

    for (let x in henkilo2) {
        console.log(henkilo2[x]);
    } // x on tässä apumuuttuja

    henkilo2.pituus = 160; // lisätään kenttä pituus ja annetaan sille arvo 160
    delete henkilo2.ika;   // tai delete henkilo["ika"];

    let viesti = "Heipä hei!";
    console.log(viesti.toUpperCase()); // HEIPÄ HEI!

    henkilo2.kokoNimi = function() { return `${this.etuNimi} ${this.sukuNimi}` }

    const henkilo3 =
    {
        etuNimi: "K",
        sukuNimi: "P",
        ika: 35,
        get kokoNimi() {
            return this.etuNimi + " " + this.sukuNimi;
        }
    }
    console.log(henkilo3.kokoNimi);  // K P

    function Henkilo4(etu, suku, ika) {
        this.etuNimi = etu;
        this.sukuNimi = suku;
        this.ika = ika;
    }

    const kafka = new Henkilo4("K", "P", 33);
    const jokunen = new Henkilo4("Jaska", "Jokunen", 12);

    function Henkilo5(etu, suku, ika) {
        this.etuNimi = etu;
        this.sukuNimi = suku;
        this.ika = ika;
        this.kokoNimi = function() {return this.etuNimi + " " + this.sukuNimi;};
    }

})();