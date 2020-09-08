let uczen = document.getElementsByClassName('uczen')
let matematyka = document.getElementsByClassName('matematyka')
let polski = document.getElementsByClassName('polski')
let biologia = document.getElementsByClassName('biologia')
let geografia = document.getElementsByClassName('geografia')
let fizyka = document.getElementsByClassName('fizyka')
let chemia = document.getElementsByClassName('chemia')
let informatyka = document.getElementsByClassName('informatyka')
let dodatkowe = document.getElementsByClassName('zajecia-dodatkowe')
let srednia = document.getElementsByClassName('srednia')

let uczen1 = document.getElementById('uczen1')
let uczen2 = document.getElementById('uczen2')
let uczen3 = document.getElementById('uczen3')
let uczen4 = document.getElementById('uczen4')
let uczen5 = document.getElementById('uczen5')
let uczen6 = document.getElementById('uczen6')
let uczen7 = document.getElementById('uczen7')
let uczen8 = document.getElementById('uczen8')
let uczen9 = document.getElementById('uczen9')
let uczen10 = document.getElementById('uczen10')
let uczen11 = document.getElementById('uczen11')
let uczen12 = document.getElementById('uczen12')
let uczen13 = document.getElementById('uczen13')
let uczen14 = document.getElementById('uczen14')
let uczen15 = document.getElementById('uczen15')
let uczen16 = document.getElementById('uczen16')
let uczen17 = document.getElementById('uczen17')
let uczen18 = document.getElementById('uczen18')
let uczen19 = document.getElementById('uczen19')
let uczen20 = document.getElementById('uczen20')




let oceny = [matematyka, polski, biologia, geografia, fizyka, chemia, informatyka, dodatkowe, srednia]
console.log(oceny)



let uczniowie = [uczen1[oceny], uczen2[oceny], uczen3[oceny], uczen4[oceny], uczen5[oceny], uczen6[oceny], uczen7[oceny], uczen8[oceny], uczen9[oceny], uczen10[oceny], uczen11[oceny], uczen12[oceny], uczen13[oceny], uczen14[oceny], uczen15[oceny], uczen16[oceny], uczen17[oceny], uczen18[oceny], uczen19[oceny], uczen20[oceny]]

console.log(uczniowie)


for(let i=0; i<uczniowie.length ; i++){
    // for(let j=0; j<oceny.length; j++){
    //     let suma = (oceny.value+=/oceny.length)/uczniowie.length)
    //     console.log(suma)
       
    // }

    console.log(uczniowie.value)



    // var sum = 0;
    // var v = document.querySelector('input').value.split(';');
    // for(i=0;i<v.length;i++) sum += (v[i]);
    // srednia.innerHTML=(sum/v.length);
    // // document.getElementsByClassName('srednia').innerHTML=(sum/v.length)
    // console.log(sum/v.length)
    // // return false;
}