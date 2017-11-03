function inicio(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    var msg;
    var usu=document.getElementsByName("txtuser")[0].value;	
    var pass=document.getElementsByName("txtpassword")[0].value;	

	if (usu==""||pass=="") {
    
	}else{
    	db.transaction(function (tx) {
        	tx.executeSql('SELECT * FROM usuarios WHERE usuario="'+usu+'" AND contrasena="'+pass+'"', [], function (tx, results) {
       		var len = results.rows.length, i;
           
       		if (len===1) {
                  window.location.href = "cargando.html";
        	}else{
                window.location.href = "errorinicio.html";
        	}  
        }, null);
        });
    }

 
}