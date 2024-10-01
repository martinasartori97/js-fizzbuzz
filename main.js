console.log("hello world");

// elaborazione e output
//inizio il ciclo da 1 a 100
for (let i = 0; i <= 100; i++) {
    // verifico i multipli di 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");

    }
    // verifico i multipli di 3
    else if (i % 3 === 0) {
        console.log("fizz");

    }
    // verifico i multipli di 5
    else if (i % 5 === 0) {
        console.log("buzz");

    }
    // se non ci sono multipli rimane il numero
    else{
        console.log(i);
        
    }


}





