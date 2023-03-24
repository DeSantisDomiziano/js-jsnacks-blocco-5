/* 
Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" 
*/

//creao array
const names = ['giorgio', 'pierluigi', 'piergiacomo', 'pierfausto', 'annamaria', 'annafranca', 'silvano', 'ruggero']
//creo array vuoto cosi in un secondo momento pusho dentro
const new_name = []
// funzione che servirà per pushare nell'array vuoto
function new_array(array, x, y_maxlenghtarray) { 
    for (let i = x; i < y_maxlenghtarray; i++) {
        const push_name = array[x];
        new_name.push(push_name)
    }
}


new_array(names, 3, 6)
console.log(new_name);