import { questions } from "./array.js";

let indexDellaDomanda = 0;
let punteggio = 0;
const domanda = document.getElementById("domanda-che-cambia");
const divBottoni = document.getElementsByClassName("bottoni")[0];
const numeroDomanda = document.getElementById("numero_domanda");

cambiaDomande();

function cambiaDomande() {
    // inserisco nel <h1 id="domanda-che-cambia"> il testo della domanda corrente.
    domanda.innerHTML = questions[indexDellaDomanda].question;

    // creo un array di stringhe con le risposte (sbagliate + quella giusta).
    const opzioni = questions[indexDellaDomanda].incorrect_answers;
    opzioni.push(questions[indexDellaDomanda].correct_answer);

    // pulisco il div nel quale inserirò i bottoni.
    // (perchè a partire dalla seconda domanda sarà
    // popolato con i bottoni della domanda precedente).
    divBottoni.innerHTML = "";

    // ciclo l'array con le possibili risposte
    for (let opzione of opzioni) {
        // per ogni risposta creo un bottone
        const button = document.createElement("button");
        // inserisco il testo del bottone
        button.innerHTML = opzione;
        // agiungo un event listener al click
        button.addEventListener("click", () => handleClick(button));
        // inserisco il bottone creato nel div
        divBottoni.appendChild(button);
    }
}

/**
 * controlla se siamo arrivati alla fine delle domande,
 * e se la risposta è giusta incrementa il punteggio,
 * passa alla domanda successiva,
 * altrimenti passa alla pagina del punteggio finale
 * @param {HTMLButtonElement} button
 */
function handleClick(button) {
    if (indexDellaDomanda < questions.length) {
        if (button.innerText === questions[indexDellaDomanda].correct_answer) {
            punteggio++;
        }
        indexDellaDomanda++;
        if (indexDellaDomanda < questions.length) {
            cambiaDomande();
            numeroDomanda.innerHTML = indexDellaDomanda + 1;
        } else {
            // mostrare punteggio finale
        }
    }
}
