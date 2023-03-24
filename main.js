/* 
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.
*/

// creo il mio array di oggetti
const zucchine = [
    {
        verietà: 'nera',
        peso: 20,
        lunghezza: 5
    },
    {
        verietà: 'romanesco',
        peso: 10,
        lunghezza: 6
    },
    {
        verietà: 'romanesco',
        peso: 15,
        lunghezza: 6
    },
    {
        verietà: 'fiorentino',
        peso: 16,
        lunghezza: 7
    },
    {
        verietà: 'napoletana',
        peso: 9,
        lunghezza: 4
    },
    {
        verietà: 'tonde',
        peso: 19,
        lunghezza: 8
    },
    {
        verietà: 'tonde',
        peso: 22,
        lunghezza: 9
    },
    {
        verietà: 'romanesco',
        peso: 12,
        lunghezza: 4
    },
    {
        verietà: 'trombetta',
        peso: 14,
        lunghezza: 4
    },
    {
        verietà: 'trombetta',
        peso: 20,
        lunghezza: 9
    }
]



//ciclo dentro al mio array per avere accesso a tutti i suoi indici (oggetti)
// ora prendo il la chiave e il valore che mi interessano 
// creo una variabile globale e gli assegno un valore 
// ora posso sommare il valore preso dall'oggetto alla mia variabile globale ed infine avere il risulato finale
let totale_peso = 0
zucchine.forEach(zucchina => {
    const g_per_zucchina = zucchina.peso
    totale_peso += g_per_zucchina
})

console.log(`il peso totale delle zucchine è di ${totale_peso}g`);