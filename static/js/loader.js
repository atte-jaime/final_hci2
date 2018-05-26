//ArrayList Donde se guardan las preguntas para recomendacion
var pollQuestionsProcesed = [];

$(document).ready(function () {
    //Gets the RAW JSON
    $.getJSON('https://recomendacionpresidencial.firebaseapp.com/getDatabase', function (data) {

        var pollQuestionData = [];
        //Gets the key entries from the raw json
        pollQuestionData = Object.entries(data);
        //console.log(pollQuestionData);
        for (var i = pollQuestionData.length - 1; i >= 0; i--) {
            //Gets the iteated object from the entries array 
            tempContainer = pollQuestionData[i];
            //Gets the second object from the itrated object ( the second one has the information)
            tempData = tempContainer[1];
            //Inserts the object into the array
            pollQuestionsProcesed.push({
                pregunta: tempData.pregunta,
                vargas: tempData.vargas,
                calle: tempData.calle,
                fajardo: tempData.fajardo,
                petro: tempData.petro,
                duque: tempData.duque,
                tema: tempData.tema
            });
        }
        //console.log(pollQuestionsProcesed);
        addToDom();
    });
});

//Method that add the poll question arrays to the dom (Solo es a modo de ejemplo pues ya teniendo el array de preguntas deben aplicar su propia logica)
addToDom = function () {
    /*console.log("Callme");
    console.log("Array length: ", pollQuestionsProcesed.length);*/
    for (var i = pollQuestionsProcesed.length - 1; i >= 0; i--) {

        //console.log("Position: ", i);
        var pregunta = pollQuestionsProcesed[i].pregunta;
        var vargas = pollQuestionsProcesed[i].vargas;
        var calle = pollQuestionsProcesed[i].calle;
        var fajardo = pollQuestionsProcesed[i].fajardo;
        var petro = pollQuestionsProcesed[i].petro;
        var duque = pollQuestionsProcesed[i].duque;
        var tema = pollQuestionsProcesed[i].tema;

        preguntasTema[i] = pollQuestionsProcesed[i].tema;

        afinidadFajardo.push(fajardo);
        afinidadCalle.push(calle);
        afinidadDuque.push(duque);
        afinidadLleras.push(vargas);
        afinidadPetro.push(petro);

        var seccion_pregunta = document.createElement('div');
        seccion_pregunta.className = 'pregunta';
        seccion_pregunta.innerHTML = `
        <div class= "preguntas-container">
            <ul>
                <li>${'Tema: ' + tema}</li> 
                <li>${'Pregunta: ' + pregunta}</li> 
            </ul>
        </div> 
        <div class= "buttons-container">
            <button class= "disagree">Desacuerdo</button> 
            <button class= "agree">De acuerdo</button>
        </div>
        `;
        
        //El innerHtml remplaza lo que tenga previamente el elemento (body para este caso), por ende solo veran la lista de los ultimos del ciclo. Para hacer buen uso de eso les recomiendo utilizar los appends y no innerHtml, pero ya es el gusto de cada quien.
        document.getElementById("fullpage").appendChild(seccion_pregunta);
    }


    preguntasTema.reverse();

    document.querySelectorAll('.buttons-container').forEach(((btn, index)=>{
        var disagree = btn.querySelector('.disagree');
        disagree.addEventListener('click', () => {
            sumarD(index, preguntasTema[index]); 
        });

        var agree = btn.querySelector('.agree');
        agree.addEventListener('click', () => {
            sumarA(index, preguntasTema[index]);
        });
    }));

    hacerSumatorias();

    var seccion_resultado = document.createElement('section');
    seccion_resultado.className = 'resultado';
    seccion_resultado.innerHTML = `
    <div class= "resultado-container">
        <button class= "resultado">RESULTADO</button>
    </div>
    `;

    document.getElementById("domBody").appendChild(seccion_resultado);

    var resultado = document.querySelector('.resultado');
        resultado.addEventListener('click', () => {
            evaluacionAfinidad();

            var textoR = document.createElement('h1');
            textoR.innerHTML= `${recomendacion[0].nombreC}`;
            seccion_resultado.appendChild(textoR);
        });
}