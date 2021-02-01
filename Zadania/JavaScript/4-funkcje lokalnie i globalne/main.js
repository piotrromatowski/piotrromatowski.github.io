'use strict'

let number = 10;

function addNumber () {
    let number = 15;
    let newNumber = 20;
    console.log(number); //zmienna lokalna tylko wew funkcji
    console.log(newNumber); // zmeinna lokalna tylk wewn. funkcji

}

addNumber();

console.log(number); //wyloguje zmienną gobalną
console.log(newNumber); // błąd bo nie mamy dostępu do tej zmiennej