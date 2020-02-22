'use strict';

let number1 = 13, number2 = 5;

let wynik;

wynik = number1 % number2;
console.log(wynik);



while (number2 < number1) {
    console.log(number1);
    --number1;
}

(2>5) ? console.log("tak") : console.log("nie");

if (2>5) {
    console.log("tak")
} else {
    console.log("nie");    
} 


if ("2" === 2) {
    console.log("prawda");
} else {
    console.log("Nie prawda");
}


if ( !( ("2" !== 2) && (8 < 4) ) ) {
    document.write("<br> prawda");
}


let number3 = 11, number4 = 12;


!( (number4 >= number3) && (number4 == number3) ) ? console.log('Większe'): console.error("mniejsze");

