$('#formulario').submit(function() { 
	

	// recolecta los valores que inserto el usuario
	var datosUsuario = $("#txtuser").val()
	var datosPassword = $("#txtpassword").val()
	
  	archivoValidacion = "http://grupoditek.com/php/inicio_sesion.php?jsoncallback=?"
	$.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
	.done(function(respuestaServer) {
		
		
		
		if(respuestaServer.validacion == "ok"){
		  
		 	/// si la validacion es correcta, muestra la pantalla "menu"
            window.location.href = "menu.html";
		  
		}else{
		  
		  /// ejecutar cuando la validacion falla
		  alert(respuestaServer.mensaje)
		}
  
	})
	return false;
})


