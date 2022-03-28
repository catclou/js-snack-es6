// SNACK 3: Dato un array di nomi e dati due numeri min e max (min più piccolo di max),
// creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
min = 1; // imposto il minimo 
max = 4; // imposto il massimo

// let nomiCompresiTraMinEMax = []; // creo un array vuoto in cui pusherò solo ciò che rispetta le mie condizioni



// VECCHIO METODO (CICLO FOR):
// for (let i=0; i<myArray.length; i++) {
//     if (i > min && i < max) {
//         nomiCompresiTraMinEMax.push(myArray[i]);
//     }
// }
// console.log(nomiCompresiTraMinEMax); // ottengo Roberto e Giovanni



// RISOLUZIONE TRAMITE FOREACH:
// myArray.forEach(
//     (element, index) => { 
//         if (index > min && index < max) {// se la posizione dell'elemento rispetto all'array è compresa tra la variabile min e la variabile max, allora...
//             nomiCompresiTraMinEMax.push(element); // pusho l'elemento nell'array appositamente creato
//         }
//     }
// )
// console.log(nomiCompresiTraMinEMax); // ottengo Roberto e Giovanni



// RISOLUZIONE TRAMITE FILTER:
// (in questo caso non ho bisogno di creare un array vuoto perché filter lo crea in automatico)

// const nomiCompresiTraMinEMax = myArray.filter(
//     (element, index) => {
//         if (index > min && index < max) { 
//             return true;
//         } // l'else è facoltativo
//         return false;
//     }
// );
// console.log(nomiCompresiTraMinEMax); // ottengo Roberto e Giovanni


// VERSIONE ABBREVIATA TRAMITE FILTER:
const nomiCompresiTraMinEMax = myArray.filter(
        (element, index) => index > min && index < max
    );
console.log(nomiCompresiTraMinEMax); // ottengo Roberto e Giovanni
