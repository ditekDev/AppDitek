function sincronizar(){
    var con = localStorage.getItem("conexion");
    this.db= openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    if (con=="1") {
        db.transaction(function (tx) {
        	tx.executeSql('SELECT volumen,fuente FROM aforo', [], function (tx, results) {
                var len = results.rows.length;
                if(len>0)
                {
                    var v=results.rows.item(0)['volumen'];
                    var fu=results.rows.item(0)['fuente'];
                    archivo = "http://grupoditek.com/php/insertar.php?jsoncallback=?"
                    $.getJSON( archivo, { volumen: v, fuente: fu })
                    .done(function(respuestaServer) {
                        
                        alert(respuestaServer.mensaje );
                        
                        if(respuestaServer.validacion == "ok"){
                             /// si la validacion es correcta, muestra la pantalla "home"
                            borrarTabla();
                          
                        }else{
                          /// ejecutar una conducta cuando la validacion falla
                          myapp.alert("Error insertando datos");
                        }
                  
                    })
                }
        }, null);
        });
        
    }else{
        myapp.alert("No hay conexión a internet");
    }
}