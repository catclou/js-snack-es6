// SNACK 2: Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti. Nome sarà l'unica proprietà da compilare, le altre saranno
// tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà 'punti fatti' e
// 'falli subiti'. Infine, usando la destrutturazione, creiamo un nuovo array i cui elementi
// contengono solo nomi e falli subiti e stampiamo tutto in console.

// 1) Creare un array di oggetti di squadre di calcio con proprietà nome, punti fatti, falli subiti
// (le ultime due saranno settate a 0)

let squadreSerieA =
[
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Bologna',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Cagliari',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Empoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Fiorentina',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Genoa',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Salernitana',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Sampdoria',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Sassuolo',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Spezia',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Torino',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Udinese',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Venezia',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Verona',
        puntiFatti: 0,
        falliSubiti: 0
    }
];


// 2a) Generare numeri random al posto degli 0 nelle proprietà 'punti fatti' e 'falli subiti'
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// 3a) Creare un nuovo array in cui pusheremo solo nomi e falli subiti
nuovoArraySquadre = [];

// 2b) Sostituire gli 0 con i numeri generati randomicamente
for (i=0; i<squadreSerieA.length; i++) {
    let randomPunti = getRandomInt(60);
    let randomFalli = getRandomInt(100);

    squadreSerieA[i].puntiFatti = randomPunti;
    squadreSerieA[i].falliSubiti = randomFalli;

    // 3b) Destrutturare e inserire nel nuovo array degli oggetti contenenti come proprietà solo nomi e falli subiti
    let {nome, puntiFatti, falliSubiti} = squadreSerieA[i]; // destrutturo

    nuovoArraySquadre.push({nome, falliSubiti}); // pusho le variabili che mi servono nel nuovo array, accorpandole quali proprietà di un oggetto
}

// 4) Stampare in console
console.log(nuovoArraySquadre);