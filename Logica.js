$(document).ready(function(){
    var slider = $("#slider");
    var img1 = $("#img1");
    var img2 = $("#img2");
    var img3 = $("#img3");

    var angle = 0;

    // Asignar eventos de clic a las imágenes
    img1.click(function(){
        angle = 92; // Cambiar el ángulo a 128 grados
        slider.css('transform', 'rotate(' + angle + 'deg)');
        console.log("im1")
    });

    img2.click(function(){
        angle = 206; // Cambiar el ángulo a 128 grados
        slider.css('transform', 'rotate(' + angle + 'deg)');
        console.log("im2")

    });

    img3.click(function(){
        angle = 326; // Cambiar el ángulo a 128 grados
        slider.css('transform', 'rotate(' + angle + 'deg)');
        console.log("im3")

    });
});