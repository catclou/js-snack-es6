// SNACK 4: Dato un elenco degli studenti di una facoltà, con il totale dei loro voti, dobbiamo:
// 1) creare delle targhe con il loro nome in maiuscolo: ci serve quindi un nuovo array di stringhe.
//    Ogni elemento del nuovo array sarà il nome dello studente, ma con tutte le lettere maiuscole;
// 2) creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70;
// 3) creare un nuovo array di tutti gli studenti che hanno un totaledi voti superiore a 70 e id superiore a 120.

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];

let targheMaiuscolo = students.map( // uso map per ciclare su tutto l'array students e salvare i risultati nella variabile 'targheMaiuscolo'
    (element) => {
        return element.name.toUpperCase(); // ad ogni stringa associata alla proprietà 'name' attribuisco il metodo toUpperCase per trasformarla in maiuscolo e riversarla nella variabile 'targheMaiuscolo'
    }
)

console.log(targheMaiuscolo); // Ottengo un array con tutti i nomi degli studenti in maiuscolo