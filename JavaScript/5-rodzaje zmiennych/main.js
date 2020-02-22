'use strict'

// typ liczbowy

let salary = 5000;
let bonus = 2500;
let wholeSalary;

wholeSalary = salary + bonus;

console.log('number'wholeSalary);
console.log(typeof wholeSalary);

//typeof sprawdza rodzaj / typ danych


// łańcuch znaków - string

let salaryStr = 5000;
let bonusStr = 2500;
let wholeSalaryStr;

wholeSalaryStr = salaryStr + bonusStr;

console.log('wholeSalaryStr'wholeSalaryStr);

//parseInt zamiana stringa w liczby
//toString zamiana liczby w stringa

// typ logiczne - Boolean

let isSmog
isSmog = false

if (isSmog) {
    console.log('Jest SMOG')
} else {
    console.log('Nie ma SMOGa ;)');
}


// typy specjalne - undefined / null

let undefinedVariable;
let nullVariable = null;

console.log(undefinedVariable);
console.log(nullVariable);

let studentsName = 'Michał';
console.log(studentsName.indexOf('c'));