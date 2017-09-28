$('#formulario').submit(function() { 
	

	// recolecta los valores que inserto el usuario
	var datosUsuario = $("#txtuser").val()
	var datosPassword = $("#txtpassword").val()
	
  	archivoValidacion = "http://localhost:80/app/inicio_sesion.php?jsoncallback=?"
	$.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
	.done(function(respuestaServer) {
		
		
		
		if(respuestaServer.validacion == "ok"){
		  
		 	/// si la validacion es correcta, muestra la pantalla "home"
            window.location.href = "menu.html";
		  
		}else{
			//alert(respuestaServer.mensaje)
			function onConfirm(buttonIndex) {
				alert('You selected button ' + buttonIndex);
			}
			
			navigator.notification.confirm(
				'You are the winner!', // message
				 onConfirm,            // callback to invoke with index of button pressed
				'Game Over',           // title
				['Restart','Exit']     // buttonLabels
			);
		  /// ejecutar una conducta cuando la validacion falla
		}
  
	})
	return false;
})


