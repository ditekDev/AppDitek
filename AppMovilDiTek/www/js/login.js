function inicio(){
    var db = openDatabase("diteklocal", "1.0", "Sync DB", 200000);
    var msg;
    var usu=document.getElementsByName("txtuser")[0].value;	
    var pass=document.getElementsByName("txtpassword")[0].value;	

	if (usu==""||pass=="") {
    
	}else{
    	db.transaction(function (tx) {
        	tx.executeSql('SELECT * FROM employee WHERE usuario="'+usu+'" AND contrasena="'+pass+'"', [], function (tx, results) {
       		var len = results.rows.length, i;
           
       		if (len===1) {
                  window.location.href = "menu.html";
        	}else{
                window.location.href = "errorinicio.html";
        	}  
        }, null);
        });
    }

 
}