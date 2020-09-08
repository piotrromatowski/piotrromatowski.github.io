$(function(){

  $('#btn').click(function() {
    $('#square').animate({
      'width': '100px',
      'height': '100px',
      'marginLeft': '100px',
      }, 3000, function() {
        $('#square').animate({
        'backgroundColor': 'blue',
        }, 5000, function() {
        $('#square').html('<h2>Animacja zakończona</h2>');
        });
      });
  });




    // $('.guzik').click(function(){
    //   $('.square').animate({
    //     'width': '100px',
    //     'height': '100px',
    //     'left' : '100px',
    //   }, 3000, ); 
    //   $('.square').animate({backgroundColor: 'blue'},5000, function() {
    //     $('.napis').css('opacity','1')
    //   });
      
        
      // $('.square').animate({},5000);

      //   $('.square').css({
      //     'background-color': 'blue',
      //   }, 5000);  
      
      
      //     $('.napis').animate({
      //       'opacity' : '1'
      //     });
      
        
      // });
    
        // function doubleBlueColor (){
        //   $('.square').animate({blueColor},5000)
        // };


      // function blueColor (){
      //   $('.square').css('background-color','blue');
      //     $('.napis').css('opacity' , '1');
      //   };
        
      

    
    
    
    
    
    
    });