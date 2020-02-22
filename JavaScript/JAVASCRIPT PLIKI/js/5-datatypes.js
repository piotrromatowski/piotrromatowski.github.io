'use strict';


/*

Typ liczbowy

*/
let salary = 5000;
let bonus = 2500;
let wholeSalary;

wholeSalary = salary + bonus;

console.log("number", wholeSalary);
console.log(typeof wholeSalary);




/*

Typ - łańcuch znakow - string

*/
let salaryStr = 5000;
let bonusStr = "2500";
let wholeSalaryStr;

wholeSalaryStr = salaryStr + bonusStr;

console.log("wholeSalaryStr", wholeSalaryStr);




/*

Typ logiczny - boolean

*/
let isSmog;
isSmog = false;


if (isSmog === false) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma SMOGa ;)");
}




/*

Typ specjalne - undefined / null

*/
let undefindeVarialbe;
let nullVariable = null;

console.log(undefindeVarialbe);
console.log(nullVariable);




let studentEmail = "michal@interia.pl";
console.log(studentEmail.indexOf('interia.pl'));