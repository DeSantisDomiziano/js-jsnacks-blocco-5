/* 
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.
*/

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


let totale_peso = 0
zucchine.forEach(zucchina => {
    const g_per_zucchina = zucchina.peso
    totale_peso += g_per_zucchina
})

console.log(`il peso totale delle zucchine è di ${totale_peso}g`);