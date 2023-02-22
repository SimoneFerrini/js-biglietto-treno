/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

-chiedere età a utente, salvare il dato trasformato in numero
-chiedere kilometraggio a utente, salvare il dato trasformato in numero
-SE input non validi alert
-altrimenti calcolo iniziale del prezzo, kilometraggio * 0.21
-SE età < di 18, applicare sconto 20%
-SE età > di 65, applicare sconto del 40%
-altrimenti nessuno sconto
-prima di output prezzo, con o senza sconto, trasformare il numero affinchè abbia al max 2 decimali

*/


let userAge = parseInt(prompt("Inserisci la tua età in numeri decimali"));

let userKm = parseInt(prompt("Inserisci il numero dei kilometri che vuoi percorrere in numeri decimali"));

if (isNaN(userAge) || isNaN(userKm)) {

    alert("I dati inseriti non sono validi, ricarica la pagina e inserisci i valori corretti");

} else {

    let prezzo = userKm * 0.21;
    
    
    if (userAge < 18) {
        let sconto = (prezzo / 100) * 20;

        prezzo = Math.round(((prezzo - sconto) + Number.EPSILON) * 100) / 100;

        document.writeln("Il prezzo del biglietto è di : " + prezzo + "€");
        }
        
        else if (userAge >= 65 ) {
            let sconto = (prezzo / 100) * 40;

            prezzo = Math.round(((prezzo - sconto) + Number.EPSILON) * 100) / 100;

            document.writeln("Il prezzo del biglietto è di : " + prezzo + "€");
        } 

        
        else {

            prezzo = Math.round((prezzo + Number.EPSILON) * 100) / 100;
            document.writeln("Il prezzo del biglietto è di : " + prezzo + "€");
        }

    
    }