"use strict";

var pierwszyDiv = document.getElementById('parFirst');
// console.log("document.getElementById", pierwszyDiv);
// console.log("parentNode", pierwszyDiv.parentNode);
// console.log(".parentElement", pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.childNodes[1]);
console.log(pierwszyDiv.children);
//
//console.log(pierwszyDiv.firstChild);
//console.log(pierwszyDiv.lastChild);

var pierwszyChild = pierwszyDiv.childNodes[0];
// console.log(pierwszyChild);
// console.log(pierwszyChild.nextSibling);


//var childNodesDiva = pierwszyDiv.childNodes;
//
//childNodesDiva.forEach(function (element){
//    if(element.nodeType == 3 ) {
//        console.log(element);
//    }
//});
//
//
//var childrenDiva = pierwszyDiv.children;
//console.log(childrenDiva.length);
//
//for (var i=0 ; i<childrenDiva.length ; i++) {
//    console.log(childrenDiva[i]);
//}



//var paragraphParent = document.getElementsByTagName('p')[0].parentNode; //pobierz rodzica pierwszego paragrafu
//
//console.log(paragraphParent);
//
//var secondChild = document.getElementById('parFirst').children[1]; //pobierz drugie dziecko DIVa
//
//console.log(secondChild);
//
//var sibling = document.getElementById('parFirst').children[0].nextElementSibling; //Pobierz pierwszy element będący rodzeństwem paragrafu
//
//console.log(sibling);
//
//var nodes = document.getElementById('parFirst').nextSibling.nodeType;
//console.log(nodes);
//



//
//// Roznica pomiędzy ## setAttributeNode vs setAttribute ##
////
//// setAttributeNode
////
//// stworz link <a> z id="mojLink"
//var anchor = document.getElementById("mojLink");  
//// stworz obiekt atrybutu o nazwie "href" 
//var att = document.createAttribute("href");      
//// ustaw wartosc atrybutu href
//att.value = "https://akademia108.pl";            
//// dodaj atrybut href do linku <a>
//anchor.setAttributeNode(att);  
//// dodaj linka do ciała dokumentu
//document.body.appendChild(anchor);
////
//// setAttribute
////
//// pobierz dodanego linka i ustaw mu atrybut "href"
//document.getElementsByTagName("mojLink")[0].setAttribute("href", "https://akademia108.pl");
//
//
//
//
//// Roznica pomiędzy ## removeAttributeNode vs removeAttribute ##
////
//// removeAttributeNode
////
//// pobierz dodanego linka <a> z id="mojLink" do zmiennej
//var elmnt = document.getElementById("mojLink");   
//// pobierz atrybut "href" z tego linka
//var attr = elmnt.getAttributeNode("href");         
//// usuń atrybut "href" z noda linku
//elmnt.removeAttributeNode(attr);                   
////
//// removeAttribute
////
//// pobierz dodanego linka po "id" i usuń z niego atrybut "href"
//document.getElementById("mojLink").removeAttribute("href");