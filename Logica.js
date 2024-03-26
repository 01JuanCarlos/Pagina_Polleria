$(document).ready(function(){
       //libreria para animacion
       AOS.init({
        duration:1500
    });
    //---------
    var slider = $(".slider");
    var img1 = $("#img1");
    var img2 = $("#img2");
    var img3 = $("#img3");
    var imL =$("#imL");
    var linea=$(".linea");

    var angle = 0;

    // eventos de clic a las imágenes
    img1.click(function(){
        angle = 13; // Cambiar el ángulo a  92 grados
        slider.css('transform', 'rotate(' + angle + 'deg)');
        console.log("im1")
        imL.attr("src", "./assets/mostrito_L.png").fadeIn(1000);
        linea.css("left","0");
    });

    img2.click(function(){
        angle = 142; 
        
        slider.css('transform', 'rotate(' + angle + 'deg)');
        console.log("im2")
        imL.attr("src", "./assets/chaufa_L.png").fadeIn(1000);
        linea.css("left","33%");
    });

    img3.click(function(){
        angle = 255; 
        slider.css('transform', 'rotate(' + angle + 'deg)');
        console.log("im3")
        imL.attr("src", "./assets/pepino_L (1).png").fadeIn(1000);
        linea.css("left","67%");
    });

    //EVENTO DEL MOVIMIENTO DEL CURSOR
 /*   $('#banner').on('mousemove', function(e) {
    
        var x = e.clientX - $(this).offset().left;
        var y = e.clientY - $(this).offset().top;
  
        var centerX = $(this).width() / 2;
        var centerY = $(this).height() / 2;
  
        var deltaX = x - centerX;
        var deltaY = y - centerY;
  
        var percentX = deltaX / ($(this).width() / 2);
        var percentY = deltaY / ($(this).height() / 2);
  
        $(this).css('transform', 'rotateX(' + (-percentY * 2) + 'deg) rotateY(' + (percentX * 2) + 'deg)');


      });
  
      $('.cart').on('mouseleave', function() {
        console.log('SALIOOOOO');
        $(this).css('transform', 'rotateX(0deg) rotateY(0deg)');
      });
*/

});