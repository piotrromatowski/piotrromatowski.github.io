'use strict';

function multiply(param1, param2, param3) {

    let result;

    result = param1 * param2 * param3;

    return result;
}
/**
 *
 * funkcja dodająca 3 elementy 
 * @param {number} param1 - numbe
 * @param {number} param2
 * @param {number} param3
 * @returns
 */
function dodawanie(param1, param2, param3) {
    let wynik;
    wynik = param1 + param2 + param3
    return wynik
}

function aaa() {
    let
}

function dodawanie2() {
    let wynik
    wynik = 2 * 2
    return wynik
}
dodawanie2()
let multyplyResult = multiply(3, 9, 10);
let drugieDzialanie = multiply(2, 9, 10);
let wynikDodawani = dodawanie(5, 40, 50);
console.log("TCL: wynikDodawani", wynikDodawani)
console.log("Wynik:multyplyResult ", multyplyResult);
console.log("Wynik:drugieDzialanie ", multyplyResult);


let functionExpression = function () {
    let wynik
    wynik = 'jestem wynikiem' + 2 * 2
    return wynik
};


functionExpression();


let arrowFunction = (param1, param2, param3, kolejnyparam) => {

    let wynik = param3 + param1 * param2 / kolejnyparam
    return wynik;
}
let wynikArrowFunction = arrowFunction(2, 2, 4, 0)
console.log("TCL: wynikArrowFunction", wynikArrowFunction)