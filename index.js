var sumatoriaFajardo = 0;
var sumatoriaDuque = 0;
var sumatoriaCalle = 0;
var sumatoriaLleras = 0;
var sumatoriaPetro = 0;

var casos = 0;
var recomendacion = [];

var contenedorFajardo = 0;
var contenedorLleras = 0;
var contenedorPetro = 0;
var contenedorCalle = 0;
var contenedorDuque = 0;

var afinidadFajardo = [];
var afinidadLleras = [];
var afinidadPetro = [];
var afinidadCalle = [];
var afinidadDuque = [];

var importancia = [];
var preguntasTema = [];

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

var temasImportantes = [
    "salud",
    "social",
    "acuerdopaz",
    "educacion",
    "economia",
    "medioambiente",
    "politica",
    "seguridad",
    "politico",
    "tecnologia"
];

$(document).ready(function () {
    $('#fullpage').fullpage();
});

var addTemas = function () {
    for (i = 0; i < temas.length; i++) {
        const element = temas[i];
        //console.log(temas[i]);
        if(typeof window !== 'undefined') {
        var tema = document.createElement("li");
        tema.innerHTML = "<a href='#' onclick='addImport("+i+")'>"+element+" </a>";
        document.querySelector("#temas .temas ol").appendChild(tema);
        }
    }
};

function addImport(a) {
    importancia.push(temasImportantes[a]);
    //console.log("TAMAÑO DEL ARRAY "+importancia);
    var tema = document.createElement("li");
    tema.innerHTML = temas[a];
    document.querySelector("#temas .importancia ol").appendChild(tema);
    
    var ocultar = document.querySelector("#temas .temas ol").getElementsByTagName("li")[a].style.visibility = "hidden";

    console.log("ESTOY SELECCIONANDO " + ocultar);
}


function sumarA(numPregunta, tematica) {
    evaluarImportanciaAcuerdo(numPregunta, tematica);
    console.log((contenedorFajardo*100)/sumatoriaFajardo)
}

function sumarD(numPregunta, tematica) {
    evaluarImportanciaDesacuerdo(numPregunta, tematica);
}

function hacerSumatorias(){
    //FAJARDO
    for (index = 0; index < afinidadFajardo.length; index++) {
        if (afinidadFajardo[index] >= 2)
            sumatoriaFajardo += afinidadFajardo[index];
        else if (afinidadFajardo[index] == 1)
            sumatoriaFajardo += 2;
        else if (afinidadFajardo[index] == 0)
            sumatoriaFajardo += 1;
    }

        //DUQUE
        for (index = 0; index < afinidadDuque.length; index++) {
            if (afinidadDuque[index] >= 2)
                sumatoriaDuque += afinidadDuque[index];
            else if (afinidadFajardo[index] == 1)
                sumatoriaFajardo += 2;
            else if (afinidadFajardo[index] == 0)
                sumatoriaFajardo += 1;
        }

        //CALLE
        for (index = 0; index < afinidadCalle.length; index++) {
            if (afinidadCalle[index] >= 2)
                sumatoriaCalle += afinidadDuque[index];
            else if (afinidadFajardo[index] == 1)
                sumatoriaFajardo += 2;
            else if (afinidadFajardo[index] == 0)
                sumatoriaFajardo += 1;
        }

        //LLERAS
        for (index = 0; index < afinidadLleras.length; index++) {
            if (afinidadLleras[index] >= 2)
                sumatoriaLleras += afinidadLleras[index];
            else if (afinidadFajardo[index] == 1)
                sumatoriaFajardo += 2;
            else if (afinidadFajardo[index] == 0)
                sumatoriaFajardo += 1;
        }

        //PETRO
        for (index = 0; index < afinidadPetro.length; index++) {
            if (afinidadPetro[index] >= 2)
                sumatoriaPetro += afinidadPetro[index];
            else if (afinidadFajardo[index] == 1)
                sumatoriaFajardo += 2;
            else if (afinidadFajardo[index] == 0)
                sumatoriaFajardo += 1;
        }
}

function evaluacionAfinidad(){
    var crespo = ((contenedorFajardo*100)/sumatoriaFajardo);
    var street = ((contenedorCalle*100)/sumatoriaCalle);
    var porky = ((contenedorDuque*100)/sumatoriaDuque);
    var mocho = ((contenedorLleras*100)/sumatoriaLleras);
    var petrosky = ((contenedorPetro*100)/sumatoriaPetro); 

    recomendacion.push({
        nombreC: "Sergio Fajardo",
        porcentaje: crespo
    },
    {
        nombreC: "Humberto de la Calle",
        porcentaje: street
    },
    {
        nombreC: "Ivan Duque",
        porcentaje: porky
    },
    {
        nombreC: "German Vargas Lleras",
        porcentaje: mocho
    },
    {
        nombreC: "Gustavo Petro",
        porcentaje: petrosky
    });

    recomendacion.sort(function(a, b){return b.porcentaje-a.porcentaje});
    
    //console.log(recomendacion[0]);
}

function evaluarImportanciaAcuerdo(num, tematica){
    if(importancia.length == 10){
    for (index = 0; index < importancia.length; index++) {
        if (index < 4) {
            //console.log(importancia[index]);
            if (importancia[index].trim() === tematica.trim()){
                contenedorFajardo += afinidadFajardo[num];
                contenedorCalle += afinidadCalle[num];
                contenedorDuque += afinidadDuque[num];
                contenedorLleras += afinidadLleras[num];
                contenedorPetro += afinidadPetro[num];
                console.log("FAJARDO: " + contenedorFajardo);
                console.log("CALLE: " + contenedorCalle);
                console.log("DUQUE: " + contenedorDuque);
                console.log("LLERAS: " + contenedorLleras);
                console.log("PETRO: " + contenedorPetro);
                }
        } else if (index >= 4 && index < 8) {
            if(importancia[index].trim() === tematica.trim()){
                contenedorFajardo += afinidadFajardo[num]/2;
                contenedorCalle += afinidadCalle[num]/2;
                contenedorDuque += afinidadDuque[num]/2;
                contenedorLleras += afinidadLleras[num]/2;
                contenedorPetro += afinidadPetro[num]/2;
                console.log("FAJARDO: " + contenedorFajardo);
                console.log("CALLE: " + contenedorCalle);
                console.log("DUQUE: " + contenedorDuque);
                console.log("LLERAS: " + contenedorLleras);
                console.log("PETRO: " + contenedorPetro);
                }
        } else if (index >= 8) {
            if(importancia[index].trim() === tematica.trim()){
                contenedorFajardo += afinidadFajardo[num]/6;
                contenedorCalle += afinidadCalle[num]/6;
                contenedorDuque += afinidadDuque[num]/6;
                contenedorLleras += afinidadLleras[num]/6;
                contenedorPetro += afinidadPetro[num]/6;
                console.log("FAJARDO: " + contenedorFajardo);
                console.log("CALLE: " + contenedorCalle);
                console.log("DUQUE: " + contenedorDuque);
                console.log("LLERAS: " + contenedorLleras);
                console.log("PETRO: " + contenedorPetro);
                }
            }   
        }
    } 
    //console.log(importancia.length);
}

function evaluarImportanciaDesacuerdo(num, tematica){
    if(importancia.length == 10){
    for (index = 0; index < importancia.length; index++) {
        if (index < 4) {
            if (importancia[index].trim() === tematica.trim()){
                    //FAJARDO
                    if (afinidadFajardo[num] == 0) {
                        contenedorFajardo += 4;
                    }if (afinidadFajardo[num] == 1) {
                        contenedorFajardo += 3;
                    }
                    //CALLE
                    if (afinidadCalle[num] == 0) {
                        contenedorCalle += 4;
                    }if (afinidadCalle[num] == 1) {
                        contenedorCalle += 3;
                    }
                    //DUQUE
                    if (afinidadDuque[num] == 0) {
                        contenedorDuque += 4;
                    }if (afinidadDuque[num] == 1) {
                        contenedorDuque += 3;
                    }
                    //LLERAS
                    if (afinidadLleras[num] == 0) {
                        contenedorLleras += 4;
                    }if (afinidadLleras[num] == 1) {
                        contenedorLleras += 3;
                    }
                    //PETRO
                    if (afinidadPetro[num] == 0) {
                        contenedorPetro += 4;
                    }if (afinidadPetro[num] == 1) {
                        contenedorPetro += 3;
                    }
                    console.log("FAJARDO: " + contenedorFajardo);
                    console.log("CALLE: " + contenedorCalle);
                    console.log("DUQUE: " + contenedorDuque);
                    console.log("LLERAS: " + contenedorLleras);
                    console.log("PETRO: " + contenedorPetro);
                }
        } else if (index >= 4 && index < 8) {
            if(importancia[index].trim() === tematica.trim()){
                    //FAJARDO
                    if (afinidadFajardo[num] == 0) {
                        contenedorFajardo += 2;
                    }if (afinidadFajardo[num] == 1) {
                        contenedorFajardo += 1.5;
                    }
                    //CALLE
                    if (afinidadCalle[num] == 0) {
                        contenedorCalle += 2;
                    }if (afinidadCalle[num] == 1) {
                        contenedorCalle += 1.5;
                    }
                    //DUQUE
                    if (afinidadDuque[num] == 0) {
                        contenedorDuque += 2;
                    }if (afinidadDuque[num] == 1) {
                        contenedorDuque += 1.5;
                    }
                    //LLERAS
                    if (afinidadLleras[num] == 0) {
                        contenedorLleras += 2;
                    }if (afinidadLleras[num] == 1) {
                        contenedorLleras += 1.5;
                    }
                    //PETRO
                    if (afinidadPetro[num] == 0) {
                        contenedorPetro += 2;
                    }if (afinidadPetro[num] == 1) {
                        contenedorPetro += 1.5;
                    }
                    console.log("FAJARDO: " + contenedorFajardo);
                    console.log("CALLE: " + contenedorCalle);
                    console.log("DUQUE: " + contenedorDuque);
                    console.log("LLERAS: " + contenedorLleras);
                    console.log("PETRO: " + contenedorPetro);
                }
            } else if (index >= 8) {
                if(importancia[index].trim() === tematica.trim()){
                //FAJARDO
                if (afinidadFajardo[num] == 0) {
                    contenedorFajardo += 0.75;
                }if (afinidadFajardo[num] == 1) {
                    contenedorFajardo += 0.33;
                }
                //CALLE
                if (afinidadCalle[num] == 0) {
                    contenedorCalle += 0.75;
                }if (afinidadCalle[num] == 1) {
                    contenedorCalle += 0.33;
                }
                //DUQUE
                if (afinidadDuque[num] == 0) {
                    contenedorDuque += 0.75;
                }if (afinidadDuque[num] == 1) {
                    contenedorDuque += 0.33;
                }
                //LLERAS
                if (afinidadLleras[num] == 0) {
                    contenedorLleras += 0.75;
                }if (afinidadLleras[num] == 1) {
                    contenedorLleras += 0.33;
                }
                //PETRO
                if (afinidadPetro[num] == 0) {
                    contenedorPetro += 0.75;
                }if (afinidadPetro[num] == 1) {
                    contenedorPetro += 0.33;
                }
                console.log("FAJARDO: " + contenedorFajardo);
                console.log("CALLE: " + contenedorCalle);
                console.log("DUQUE: " + contenedorDuque);
                console.log("LLERAS: " + contenedorLleras);
                console.log("PETRO: " + contenedorPetro);
                }
            }
        }
    } 
    //console.log(importancia.length);
}

addTemas();

