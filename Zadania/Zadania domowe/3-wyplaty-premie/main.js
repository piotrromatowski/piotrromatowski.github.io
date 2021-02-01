

let btn =document.getElementById('oblicz')
let pracownik = document.getElementsByClassName('pracownik')
let czas = document.getElementsByClassName('czas');
let stawka = document.getElementsByClassName('stawka');
let wyplata = document.getElementsByClassName('wyplata');

btn.onclick=function(){
for (let i=0; i<czas.length || stawka.length || wyplata.length || pracownik.length; i++){
    console.log((czas[i].value)*(stawka[i].value))
    //wyplata[i].innerHTML = (czas[i].value)*(stawka[i].value)
    wynik = czas[i].value-160
    console.log(wynik)
    if (wynik>0){
        wynik2=(stawka[i].value*2)*wynik
        console.log(wynik2)
        wyplata[i].innerHTML = (czas[i].value)*(stawka[i].value)+ ' PLN' + ' + premia '+wynik2+' PLN'
    } else (wyplata[i].innerHTML = (czas[i].value)*(stawka[i].value) + ' złotych')
    
   
    if(czas[i].value<100){
        czas[i].className='czas underHundred'
    }

console.log(czas[i].value)


    
};
}