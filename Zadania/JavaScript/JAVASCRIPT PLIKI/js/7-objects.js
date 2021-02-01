"use strict";



let person = {
    name: "Marcin",
    height: 180,
}

console.log(person.name);
console.log(person.height);


person["name"] = "Kasia";
person.height = 170;

person.eyes = "niebieskie";

person.printDetails = function () {
    console.log(this.name + " " + this.height + " " + this.eyes);
}

person.printDetails();

let {
    name,
    height
} = person;
console.log(name);



//let kaja = {
//    name: "Kaja",
//    height: 152,
//    sayName() {console.log(this.name)}
//}
//
//let krystian = {
//    name: "Krystian",
//    height: 180,
//    sayName() {console.log(this.name)}
//}
//
//kaja.sayName();
//krystian.sayName();
//
//console.log(kaja.height);
//
//console.log(kaja);
//

class Person {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.height;
        this.eyes;
    } //NOWA WERSJA

    // function Trener (name, surname) {
    //     this.imie = name;
    //     this.nzawisko = surname;
    // } STARA WERSJA

    let krystian = new Person ('Krytian', 'Dziopa')
    console.log (krystian.imie);
    let lukasz = new Person ('Łukasz', 'Cyganiak')
    let trenejro = [];
    trenejro.push(krystian);
    trenejro.push(lukasz);
    console.log 


    printInfo() {
        console.log("Imię: " + this.name + "\n" +
            "Nazwisko: " + this.surname + "\n" +
            "height: " + this.height + "\n" +
            "Oczy: " + this.eyes);
    }

}



let krystian = new Person('Krystian', 'Dziopa');

krystian.height = 180;
krystian.eyes = "niebieskie";

krystian.printInfo();


let kaja = new Person('Kaja', 'Stefaniak');

kaja.printInfo();

let tablicaOsob = []
tablicaOsob.push(krystian)
tablicaOsob.push(kaja)
console.log("TCL: tablicaOsob", tablicaOsob)