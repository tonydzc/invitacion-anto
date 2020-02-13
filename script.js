var cartaAbierta = false;

$(document.getElementById("carta")).click(function(){
    
    var carta = document.getElementById("carta");
    var cartadiv = $("#carta-div");
    if(cartaAbierta){
        carta.setAttribute("src","images/carta-cerrada.png");
        cartadiv.removeClass("carta-wrapper-open");
        cartadiv.addClass("carta-wrapper");
        cartaAbierta=false;
    }else{
        carta.setAttribute("src","images/carta-abierta.png");
        cartadiv.removeClass("carta-wrapper");
        cartadiv.addClass("carta-wrapper-open");
        cartaAbierta=true;
    }
    
});