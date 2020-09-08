"use strict";

var parFirst = document.getElementById('parFirst').parentNode;;
console.log("document.getElementById", parFirst);

var linki = document.getElementsByClassName('superlink');
console.log("document.getElementsByClassName", linki);

var linkiPoTagu = document.getElementsByTagName('a');
console.log("document.getElementsByTagName",
    linkiPoTagu);

var divPoID = document.querySelector('.superlink');
console.log("document.querySelector",
    divPoID);

// var pierwszyLinkPoSelektorze = document.querySelector('.superlink');
// console.log(pierwszyLinkPoSelektorze);

var linkiPoSelektorze = document.querySelectorAll('.superlink');
console.log("document.querySelectorAll",
    linkiPoSelektorze);

// linkiPoSelektorze.forEach( function(link, i) {
//     console.log(link.outerHTML);
// });



//var div = document.getElementById('parSecond'); //pobierz elemenr div po ID
//console.log(div);
//
//var linki = document.getElementsByTagName('a'); //pobierz wszytskie linki po nazwie tagu
//console.log(linki);
//
//var linkiPoKlasie = document.getElementsByClassName('link'); //pobierz wszytskie linki po nazwie klasy
//console.log(linkiPoKlasie);
//
//var drugiLink = linkiPoKlasie[1]; //przypisz do zmiennej tylko drugi link
//console.log(drugiLink);
//
//for (var i = 0; i<linkiPoKlasie.length; i++) { // policz ile jest linków w dokumencie
//	console.log(linkiPoKlasie[i] + ' to jest link ' + (i+1));
//}