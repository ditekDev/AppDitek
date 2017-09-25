$(document).ready(function(){
    $("#btnLogin").click(function(){
        var usu = $("#txtuser").val();
        var pass = $("#txtpassword").val();
        $.post("http://localhost:80/app/login.php",{ usu : usu, pass : pass},function(respuesta){
            if (respuesta == true) {
                window.location.href = "menu.html";
            }
            else{
                window.location.href = "menu.html";
            }
        });
    });
});

