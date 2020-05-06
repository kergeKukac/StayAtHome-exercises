var szam = 0;

$("#novelGomb").click(() => {
    szam++;
    $("#szamlalo").text(szam);
})

$("#csokkenGomb").click(() => {
    szam--;
    $("#szamlalo").text(szam);
})