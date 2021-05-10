/************************
 ******* SNACK 1 ******** 
 ***********************/

 //Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
 var zucchine = [
     {
         varietà: 'Nera di Milano',
         peso: 0.7,
         lunghezza: 145,
     },
     {
        varietà: 'Alberello',
        peso: 0.8,
        lunghezza: 145,
    },
    {
        varietà: 'Tonda di Nizza',
        peso: 1.1,
        lunghezza: 145,
    },
    {
        varietà: 'Trombetta d\'Albenga',
        peso: 0.2,
        lunghezza: 145,
    },
    {
        varietà: 'Nera di Milano',
        peso: 0.4,
        lunghezza: 145,
    },
    {
        varietà: 'Alberello',
        peso: 0.7,
        lunghezza: 145,
    },
    {
        varietà: 'Lunghe Fiorentine',
        peso: 1,
        lunghezza: 145,
    },
    {
        varietà: 'Nera di Milano',
        peso: 1.7,
        lunghezza: 145,
    },
    {
        varietà: 'Tonda di Nizza',
        peso: 0.15,
        lunghezza: 145
    },
    {
        varietà: 'Nera di Milano',
        peso: 0.66,
        lunghezza: 145,
    }
 ]
//Calcola quanto pesano tutte le zucchine.
var pesoTotale = null;
for (i = 0; i < zucchine.length; i++) { 
   console.log(zucchine[i].peso);
    pesoTotale += zucchine[i].peso;
}

console.log(pesoTotale.toFixed(2));