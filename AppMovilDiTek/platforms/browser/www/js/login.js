function valida(){
	$(document).ready(function(){
    $("#btnLogin").click(function(){
        var usu = $("#txtuser").val();
        var pass = $("#txtpassword").val();
        if(!usu===""||pass===""){
        	$.post("http://localhost:80/app/login.php",{ usu : usu, pass : pass},function(respuesta){
            if (respuesta == true) {
                window.location.href = "menu.html";
            }
            else{
               alert("error");
            }
            });

        }
        
    });
});
}


