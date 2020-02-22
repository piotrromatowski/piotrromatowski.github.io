'use strict';

let names = ['Monika', 'Krystian', 'Łukasz'];

console.log(names[1]);
let [name1, name2, name3] = names;
console.log(name3); // wyloguje Łukasz


names[3] = 'Tania'; // podmnienia dane, tak nie robić :P
names[2] = 'Ela';

names.push('Geralt'); //zawsze doda jako ostatni element
names.unshift('jestem pierwszy') // doda jako pierwszy element
names.shift() // usuwa element z tablicy
names.pop() // uswua z końca

console.log(names);


console.log(names.length); // names.length - długość tablicy 'names' ; names.leghth -1 wyświetla ostatni element tablicy

names.push("Kaja");


//for - to jest pętla

for (let i = 0; i < 4 ; i++) {
   console.log( names[i] );
}


for (let i = names.length-1; i >= 0 ; i--) {
   console.log(names[i]);
}



names.forEach((element, index) => {
   console.log('forEach' element, index);
});

console.log( names.join(" - ") ); // join łączy elementy tabicy w jednym stringu

names.sort(); // sortuje alfabetyczne

names.reverse(); // odwraca

//name.concat - łączy dwie tablice

console.log(names);




let menNames = ['Robert', 'Mariusz', 'Andrzej'];

let namesCollection = menNames.concat(names);

console.log(namesCollection);

console.log("Podaje jaki index ma wskazana wartości", namesCollection.indexOf("Mariusz"));

console.log("Sprawdza czy podana zminna jest tablicą ", Array.isArray(namesCollection)); //dodatek sprawdza czy tablica jest tablicą, albo czy obiekt jest tablicą

console.log(namesCollection.slice(2, 5)); //dodatek - wycina wskazane obiekty z tablicy i zwraca nową tablicę

namesCollection.splice(2, 3, "Julek", "Krzyś"); //dodatek wciska nowe obiekty pomiędzy wskazane obiekty

console.log(namesCollection); //dodatek

console.log(namesCollection.toString()); //dodatek - zamienia tabl. w string elementy z tablicy po przecinku, działa tylko na tablicach

/**
 * sortowanie liczb
 */
let num = [1, 200, 40, 5]
console.log('sortowanie liczb przy użyciu wbudowanej funkcji sort()', num.sort())


console.log('sortowanie liczb przy użyciu wbudowanej funkcji sort() oraz dodadkowej funkcji ', num.sort(function (a, b) {
    return a - b
}))

/* Filter i map */

let numbers = [1, 2, 3, 4]; //map zwraca nową tablicę
let squares = numbers.map(function (elem) {
    return elem * elem;
});
console.log('po użyciu funkcji map()', squares);

let even = numbers.filter(function (elem) {
    return elem % 2 === 0;
});

console.log("po użyciu funkcji filtr()", even);
/**
 * funkcja some() sprawdza czy dany element wytępuje w tablicy
 * zwraca true lub false 
 */
function czyWiekszyNiz3(element) {
    return element > 3
}

function czyWiekszyNiz10(element) {
    return element > 10
}

console.log('sprawdzamy czy w tablicy numbers jest elemnt większy od 3 ', numbers.some(czyWiekszyNiz3))

console.log('sprawdzamy czy w tablicy numbers jest elemnt większy od 10 ', numbers.some(czyWiekszyNiz10))


/**
 * funkcja every() sprawdza czy każdy element tablicy spełnia warunek
 */
let wiekszeOd40 = (element) => element > 40

console.log('sprawdzamy czy w tablicy numbers wszytkie są  elemnt większy od 40 ',
    numbers.every(wiekszeOd40))
console.log('sprawdzamy czy w tablicy numbers wszytkie są  elemnt mniejsze od 5 ',
    numbers.every(element => element < 5))

let kwota = 2.5553234
let euro = kwota.toLocaleString('de', {
    style: "currency",
    currency: "EUR",
    currencySign: "accounting"
})
console.log("TCL: euro", euro)

let dolar = kwota.toLocaleString('usd', {
    style: "currency",
    currency: "USD",
    currencySign: "accounting"
})
console.log("TCL: dolar", dolar)

let yen = kwota.toLocaleString('ja-JP', {
    style: 'currency',
    currency: 'JPY'
})
console.log("TCL: yen", yen)

let zloty = kwota.toLocaleString('pl', {
    style: 'currency',
    currency: 'PLN'
})
console.log("TCL: zloty", zloty)

let dwaMiejscaPoPrzecinku = kwota.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})
console.log("TCL: dwaMiejscaPoPrzecinku", dwaMiejscaPoPrzecinku)
let nowaLiczba = 2.0
let dwaMiejscaPoPrzecinkuInaczej = nowaLiczba.toLocaleString('de', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})
console.log("TCL: dwaMiejscaPoPrzecinku", dwaMiejscaPoPrzecinkuInaczej)