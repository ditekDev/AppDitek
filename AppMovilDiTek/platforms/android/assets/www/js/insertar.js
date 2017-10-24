function insertar(){
      archivo = "http://grupoditek.com/php/insertar.php?jsoncallback=?"
         $.getJSON( archivo, { volumen: 777.7, fuente: 1 })
         .done(function(respuestaServer) {
             
             alert(respuestaServer.mensaje );
             
             if(respuestaServer.validacion == "ok"){
               
                  /// si la validacion es correcta, muestra la pantalla "home"
                 alert("funciono");
               
             }else{
               
               /// ejecutar una conducta cuando la validacion falla
             }
       
         })
         
}
 