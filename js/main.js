// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

// creo una variabile da fare incrementare e stampare che vada da 1 a 100
var numeri = 0;
// creo un ciclo che si ripete fino a quando non ottengo tutti i numeri
for (var i=1; i <= 100; i++) {
    numeri = i;
    if ((numeri % 3 == 0) && (numeri % 5 == 0)) {
        numeri = "FrizzBuzz";
    } else if (numeri % 5 == 0) {
        numeri = "Buzz";
    } else if (numeri % 3 == 0)  {
        numeri = "Frizz";
    }
    document.getElementById("lista_numeri").innerHTML += "<li>" + numeri + "</li>";
    console.log(numeri);
}