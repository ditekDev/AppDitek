$(document).ready(function(){
    $("#btnLogin").click(function(){
        var usu = $("#txtuser").val();
        var pass = $("#txtpassword").val();
        if(usu===""||pass===""){
        	//validaciones

        }else{
        	//llama funcion del php
        	$.post("http://localhost:80/app/login.php",{ usu : usu, pass : pass},function(respuesta){
            if (respuesta == true) {
                window.location.href = "menu.html";
            }
            if(respuesta==false){
               alert("El usuario y la contraseña no coinciden");
            }
            });
        }
        
    });
});



