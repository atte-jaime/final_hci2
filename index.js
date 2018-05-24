var desacuerdo = 0,
    acuerdo = 0;

var importancia = [];

var temas = [
    "Salud",
    "Social",
    "Acuerdo de paz",
    "Educación",
    "Economía",
    "Medio Ambiente",
    "Política Externa",
    "Seguridad",
    "Político",
    "TIC"
];


var addTemas = function () {
    for (i = 0; i < temas.length; i++) {
        const element = temas[i];
        var tema = document.createElement('li');
        tema.className = 'addImpor('+i+')';
        tema.innerHTML = element;
        document.querySelector("#temas .temas ol").appendChild(tema);
    }

};


function sumarA() {
    acuerdo++;
    console.log("Acuerdo: " + acuerdo);

}

function sumarD() {
    desacuerdo++;
    console.log("Desacuerdo: " + desacuerdo);
}

addTemas();