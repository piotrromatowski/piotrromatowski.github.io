$(function(){

    // $('body').add('div');
    // $('div').attr('id', 'dane-programisty');

    // $('body').html('<div id="dane-programisty"></div>');
    

    

    $('button').click(function(){
        // fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log(res)
        // })

        $.getJSON(
            'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            function(dane){
                console.log(dane)
                $('button').after($('<div/>', {
                    id: 'dane-programisty'
                }));
                $('#dane-programisty').append("Dane programisty:" + "<br>Imię:" + " " + dane.imie, "<br>Nazwisko:" + " " + dane.nazwisko, "<br>Zawód:" + " "+ dane.zawod, "<br>Nazwa firmy:" + " " + dane.firma)
                
                
              
            }
        )
        
    })








})