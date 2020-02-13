var cartaAbierta = false;

$(document.getElementById("carta")).click(function(){
    
    var carta = document.getElementById("carta");

    if(cartaAbierta){
        carta.setAttribute("src","images/carta-cerrada.png");
        cartaAbierta=false;
    }else{
        carta.setAttribute("src","images/carta-abierta.png");
        cartaAbierta=true;
    }
    
});


/* IDEA FOR ICON FROM HERE -> http://dribbble.com/shots/1003867-Dribbble-Invitation?list=popular&offset=2 */

/* Trigger Animation */
$('a').on('click', function() {
    $('.container').addClass('is-active');
    $(this).remove();
});
