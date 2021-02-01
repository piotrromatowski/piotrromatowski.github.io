// "use strict";

// console.log("window", window);
// console.log("window.innerHeight", window.innerHeight);
// console.log("window.outerHeight", window.outerHeight);


// console.log("document", document);
// console.log("document.documentElement", document.documentElement);
// console.log("document.head", document.head);
// console.log("document.body", document.body);


// let allP = document.getElementsByTagName('p')
// //alert(123)
// allP[0].innerHTML = "sjdfhjdshfjsdfhjdsfjfhdsfsfkjsfjksdlh"
// console.log("TCL: allP", allP)

// let allLink = document.querySelectorAll(".link");
// console.log("TCL: allLink", allLink)

// let firstLink = document.querySelector(".link");
// firstLink.innerHTML = "kdfjkdsfjdksfdshfdjfhdsdjkfjdfhf"
// console.log("TCL: firstLink", firstLink)


// //przy get element by class name (i innych poza ID)- zawsze dostaniemy tablicę


// let elementId = document.getElementById('parFirst').childNodes
// console.log("TCL: elementId", elementId)



// let inputMain = document.getElementsByClassName('input-form')

// let valuseInput = inputMain[0].childNodes
// valuseInput.forEach(item => {
//     console.log(item)
// })

//innerHTML pobiera zawartość, po '=' podmienia zawartość lub dodaje lub tagi htmlowe
//innerText jw. tylko,ze san tekst , to to samo co textContent

// let paragraf = document.getElementById('mainParagraf')

// paragraf.innerHTML = "juz nie paragraf tylko co innego"
// console.log("TCL: paragraf", paragraf)

// let mainA = document.getElementById('nowyLink')
// mainA.href = 'www.akademia108.pl'
// mainA.className = 'nowaKlasa'

function funkcja1 () {
    let mainParagraf = document.getElementById('mainParagraf')
    mainParagraf.innerText = 'zmiemiłem sie'
    
}