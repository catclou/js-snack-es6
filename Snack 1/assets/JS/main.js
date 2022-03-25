// SNACK 1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

// 1) Creare un array di oggetti in cui ogni oggetto descrive una bici avente quali proprietà nome e peso
const biciPiuFamose =
[
    {
        nome: 'Wilier 0 SLR',
        pesoKg: 6.5
    },
    {
        nome: 'Cannondale SuperSix',
        pesoKg: 8
    },
    {
        nome: 'Trek Emonda 2020',
        pesoKg: 6.81
    },
    {
        nome: 'Trek Emonda SLR',
        pesoKg: 4.65
    },
    {
        nome: 'Wilier 0 SLR',
        pesoKg: 6.5
    },
    {
        nome: 'SAVA Phantom',
        pesoKg: 8.1
    }
];

// 2) Determinare qual è la bici con peso minore
let piuLeggera = biciPiuFamose[0]; // parto definendo il primo elemento dell'array come bici più leggera

// ora la inserirò in un ciclo per confrontarla con le altre bici una alla volta,
// come fosse un torneo ad eliminazione diretta :)
for (let i=0; i<biciPiuFamose.length; i++) {
    let x = biciPiuFamose[i];
    // pongo una condizione per la quale se la bici "sfidante" di turno risulta più leggera 
    // della "campionessa", allora diventa essa stessa la nuova "campionessa" :)
    if (piuLeggera['pesoKg'] > x['pesoKg']) {
        piuLeggera = x;
    }
}

console.log(piuLeggera);

// 3) Beh, abbiamo trovato la bici più leggera. Dovremmo proprio farlo sapere all'utente
// stampando quest'informazione (e, già che ci siamo, usiamo template literal e destructuring)
let {nome, pesoKg} = piuLeggera; // destrutturo

document.getElementById('container').innerHTML = // stampo con il template literal
`
<h2>Modello: ${nome}</h2>
<h2>Peso in kg: ${pesoKg}</h2>
`

