/************************
 ******* SNACK 1 ******** 
 ***********************/

 //Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
 var zucchine = [
     {
         varietà: 'Nera di Milano',
         peso: 0.7,
         lunghezza: 14,
     },
     {
        varietà: 'Alberello',
        peso: 0.8,
        lunghezza: 10,
    },
    {
        varietà: 'Tonda di Nizza',
        peso: 1.1,
        lunghezza: 18,
    },
    {
        varietà: 'Trombetta d\'Albenga',
        peso: 0.2,
        lunghezza: 15,
    },
    {
        varietà: 'Nera di Milano',
        peso: 0.4,
        lunghezza: 24,
    },
    {
        varietà: 'Alberello',
        peso: 0.7,
        lunghezza: 12,
    },
    {
        varietà: 'Lunghe Fiorentine',
        peso: 1,
        lunghezza: 9,
    },
    {
        varietà: 'Nera di Milano',
        peso: 1.7,
        lunghezza: 16,
    },
    {
        varietà: 'Tonda di Nizza',
        peso: 0.15,
        lunghezza: 15,
    },
    {
        varietà: 'Nera di Milano',
        peso: 0.66,
        lunghezza: 19.5,
    }
 ]
//Calcola quanto pesano tutte le zucchine.
function pesoZucchine(array) {
    var pesoTotale = null;
    for (i = 0; i < array.length; i++) { 
        //console.log(array[i].peso);
        pesoTotale += array[i].peso;
    }
    return console.log(pesoTotale.toFixed(2));

}

pesoZucchine(zucchine);

/************************
 ******* SNACK 2 ******** 
 ***********************/

 //Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchineLunghe = [];
var zucchineCorte = [];

for (j = 0; j < zucchine.length; j++) {
    if (zucchine[j].lunghezza > 15) {
        zucchineLunghe.push(zucchine[j]);

    } else {
        zucchineCorte.push(zucchine[j])
    }
}

 //Infine stampa separatamente quanto pesano i due gruppi di zucchine.
console.log(zucchineLunghe);
 pesoZucchine(zucchineLunghe)
console.log(zucchineCorte);
 pesoZucchine(zucchineCorte);

var ciao = 'ciao';

/************************
 ******* SNACK 3 ******** 
 ***********************/

 //Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
 function parola(parola) {
    
 }
 function stringaInversa(stringa) {
    var splitStringa = stringa.split("");
 
    var arrayInverso = splitStringa.reverse();
 
    var joinArray = arrayInverso.join(""); 
    
    return joinArray;
}

var parola = prompt('Inserisci la parola da invertire')
console.log(stringaInversa(parola));
