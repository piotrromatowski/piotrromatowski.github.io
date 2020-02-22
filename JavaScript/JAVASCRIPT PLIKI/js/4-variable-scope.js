'use strict';

let number = 10;


function addNumber() {
    number = 15;
    let newNumber = 20;
    console.log(number); //zmienna lokalna tylko wewnątrz funckji
    console.log(newNumber); //zmienna lokalna tylko wewnątrz funckji
}

addNumber();

console.log(number); //wyloguje zmienną globalną
console.log(newNumber); //błąd bo nie mamy dostępu do tej zmiennej