"use strict";

/*
wersja 1 

$( document ).ready( function() {
  // kod do wykonania
  } );

*/

/*  wersja 2 */

// $( document ).ready( function() {
//   // kod do wykonania tj console.log alert itd (jak body w htmlu)
//   } );

//   $(function(){
//     //wersja krótsza
//   })

// let spa = $('span')
//   let par1 = $('#paragraf1')

$(function(){

  let guzik = $('#fadeOut')
  guzik.css({
    'backgroundColor' : 'blue',
    'color' : 'white',
    'font-family' : 'arial',
    'width' : '300px',
    'height' : '100px',
  })

  let h1 = $('#first')
  let neW =$('<ul></ul>')
  for(let i=0; i<100; i++) {
    let liElement = $('<li></li>') // tworzy element
    liElement.text(i+1)
    neW.append(liElement)
  }
  h1.append(neW)
  h1.append('po')
  h1.prepend('przed')
  h1.after('<h1>po h1</h1>')
  h1.before('przed h1')

})




$(function () {

  let paragraf1 = $("p.paragraf")
  let para1 = $('#para1')
  let paragra = $('p')
  
  console.log(paragraf1)
  console.log(para1)
  console.log(paragra)
  // console.log("$('#first')", $('#first'))
  // console.log(" $('p.paragraf')", $('p.paragraf'))
  // $('p.paragraf')
  // .hide('slow')
  // .show(3000)
  // .css({background: 'red',color: "black"})

  // console.log(" $('#idDiv p.paragraf2')", $('#idDiv p.paragraf2'))
  // console.log("span", $(".nowydiv span"))
  // let allP = $("p");
  // console.log(allP);
let nowyDiv = $('.nowydiv')
  $('.nowydiv').append(" append DDDDDDDDDDDDDDDDDDDDDDDDDD")
  nowyDiv.prepend("prepend() ffffffffffffffffffff")
  nowyDiv.after("<p>after() dddddderfsdfgdsagsa</p>")
  
  nowyDiv.css({
    "backgroundColor" : "red",
    "color": "red"
  })
  nowyDiv.addClass("kdjfjdskfjsjkf")
// $("button").click(function () {
//   $('p').each(function () {
//     $(this).text("wow")
//   })
// })
// nowyDiv.on({
// 'click' : function () {
// console.log("click")
// },
// "dblclick" : function () {
//   alert("dblclikc")
// }


// })


// $(".target").change(function () {
// console.log($(this).val())

// })

$('#hide').click(function (){
  $(".nowydiv").slideUp(2000)
})

$("#fadeOut").click(function () {
  $("#idDiv").fadeOut(2000)
})

console.log($("#spanMain"))


  $("span").animate({"color": "red"}, 2000);

});
