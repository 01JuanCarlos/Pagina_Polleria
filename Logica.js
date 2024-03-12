$(document).ready(function(){
    var slider = $("#slider");
    var img1 = $("#img1");
    var img2 = $("#img2");
    var img3 = $("#img3");
    var imL =$("#imL");
    var linea=$(".linea");

    var angle = 0;

    // eventos de clic a las imágenes
    img1.click(function(){
        angle = 92; // Cambiar el ángulo a  92 grados
        slider.css('transform', 'rotate(' + angle + 'deg)');
        console.log("im1")
        imL.attr("src", "./assets/mostrito_L.png").fadeIn(1000);
        linea.css("left","0");
    });

    img2.click(function(){
        angle = 206; 
        slider.css('transform', 'rotate(' + angle + 'deg)');
        console.log("im2")
        imL.attr("src", "./assets/chaufa_L.png").fadeIn(1000);
        linea.css("left","159px");
    });

    img3.click(function(){
        angle = 326; 
        slider.css('transform', 'rotate(' + angle + 'deg)');
        console.log("im3")
        imL.attr("src", "./assets/pepino_L (1).png").fadeIn(1000);
        linea.css("left","328px");
    });
});