var cadena="Hola";
alert(cadena);



$(document).ready(function(){
   console.log(this);

   
   var id = $("li:first").attr('id'); 
   $("div.main").load(id+".html");

   $("li").click(function(){
      var id = $(this).attr('id');
/* console.log(id); */

      $("div.main").load(id+" .html");

      $('li[id*=noticia]').css('background-color','white');

      $(this).css('background-color','blue');
   });
/*

   $("li#noticia1").click(function(){
         $("div.main").load("noticia1.html");

   } );

   $("li#noticia2").click(function(){

        $("div.main").load("noticia2.html");

   });

   $("li#noticia3").click(function(){
          $("div.main").load("noticia3.html");
   });

*/

});

