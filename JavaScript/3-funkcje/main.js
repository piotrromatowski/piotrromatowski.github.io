

function multiply (param1, param2, param3) {
    let result;
    result = param1*param2*param3;
    return result
}

function dodawanie (param1,param2,param3) {
    let result;
    result = param1+param2+param3;
    return result
    }
    


let multiplyResult = multiply(3,9,10);
let drugieDzialanie = multiply(2,8,11);
let dodResult = dodawanie(7,9,6);
// multiply(3,9,10) - wywołanie funkcji

console.log('Wynik:multiplyResult' , multiplyResult);
console.log('Wynik:drugieDzialanie' , drugieDzialanie);
console.log ('dodResult', dodResult);



let functionExpression = function (){
    return "wynik :)"
};

// console.log (functionExpression) - błędne wywołanie funkcji
(functionExpression());

let arrowFunction = () => {
    return 'Jestem w funkcji';
}
arrowFunction();





