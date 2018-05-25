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
        var tema = document.createElement("li");
        tema.innerHTML = "<a href='#' onclick='addImport("+i+")'>"+element+" </a>";
        document.querySelector("#temas .temas ol").appendChild(tema);
    }

};

function addImport(a) { 
    importancia.push(temas[a]);
    //console.log("TAMAÑO DEL ARRAY "+importancia);
    
    var tema = document.createElement("li");
    tema.innerHTML = temas[a];
    document.querySelector("#temas .importancia ol").appendChild(tema);

    
    //console.log("ESTOY SELECCIONANDO " + document.querySelector("#temas .temas ol").getElementsByTagName("li"));

    var ocultar = document.querySelector("#temas .temas ol").getElementsByTagName("li")[a].style.visibility = "hidden";

    console.log("ESTOY SELECCIONANDO " + ocultar);
}


function sumarA() {
    acuerdo++;
    console.log("Acuerdo: " + acuerdo);

}

function sumarD() {
    desacuerdo++;
    console.log("Desacuerdo: " + desacuerdo);
}

addTemas();