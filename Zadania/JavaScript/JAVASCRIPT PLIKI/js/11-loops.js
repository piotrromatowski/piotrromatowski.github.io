'use strict';

/*

Pętla for

*/
for ( let i=10 ; i>0 ; i--) {
//    console.log(i);
}

/*
    postinkrementacja vs preinkrementacja   
*/
//for ( let i=1 ; i<10 ; ) {
//    console.log(++i);
//}
//console.log('-----');
//for ( let i=1 ; i<10 ; ) {
//    console.log(i++);
//}





/*

Pętla forEach

*/
//let namesArray = [ "Krystian",  "Monika",  "Danuta" ];
//
//namesArray.forEach( function( element, index ) {
//     console.log( "Element z Indexem: " + index + " ma wartość " + element );
//});

/* Pętla for in */


let person = {
    name: 'Krystian',
    age: 35
    surname: 'Kowalski'
    salary: 1500
}

for(let key in person) {
    console.log(key, person[key]);
}





/*

Pętla while

*/
let it = 0;
while ( it < 10 ) {
   console.log(it);
    it++;
}



/*

Pętla do while

*/
let iter = 20;
do {
//    console.log(iter);
    iter++;
//    console.log(iter);
} while ( iter < 10 )

    
 
    
/*

Przerywanie pętli - break

*/
//let a = 0;
//while ( a < 10 ) {
//    console.log(++a);
//    
//    if ( a == 5 ) {
//        break;
//    }
//}
    
  

/*

Przeskakiwanie do kolejnej iteracji - continue

*/
//for ( let b = 0; b < 10 ; ++b ) {
//    
//    if ( b == 5 ) {
//        continue;
//    } else {
//        console.log(b);
//    }
//    
//    console.log("--");
//}


    