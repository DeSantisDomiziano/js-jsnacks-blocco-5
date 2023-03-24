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
    if(x < y_maxlenghtarray && x >= 0 && y_maxlenghtarray <= array.length ) {
        for (let i = x; i < y_maxlenghtarray; i++) {
            const push_name = array[i];
            new_name.push(push_name)
        }
    } else {
        alert(`il valore minimo di questo array(${array}) è 0 e il valore massimo è ${array.length}`)
    }
    
}

new_array(names, 0, 8)
console.log(new_name);