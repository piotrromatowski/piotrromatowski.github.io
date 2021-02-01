'use strict';

let userOneHeight = 190;
let userTwoHeight = 190;


/*

Warunek if

*/
if ( userTwoHeight < userOneHeight ) {
    console.log("Olga jest niższa :)");
}



/*

Warunek if else

*/
if ( userTwoHeight > userOneHeight ) {
    
    console.log("Olga jest wyższa :)");
    
} else {
    
    console.log("Olga jest niższa");
    
}
let data = new Date()
let dzien = data.getDay()
if(dzien=== 1) {
    console.log('Znowu do roboty');
} else if (dzien === 6) {
    console.log('sobota dzień na naukę programowania')
} 

/*

Warunek if else if

*/
if ( userTwoHeight > userOneHeight ) {

    console.log("Olga jest wyższa :)");

} else if ( userTwoHeight == userOneHeight ) {

    console.log("Olga tak wysoka jak Mateusz");

} else {

    console.log("Olga jest niższa");

}




/*

Warunek switch

*/
let color = 'zielony';

switch (color) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny color')        
}
    


switch (dzien) {
    case 1 :
        console.log('poniedziałek')
        break;
    case 6 :
        console.log('sobota')
        break;
    default :
        console.log('inny dzień')
}