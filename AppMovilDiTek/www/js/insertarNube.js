var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
function borrartablas() {
    borrarTablaaforo();
    borrarTablaTiempos();
    borrarRegistroLectura();
    borrarTablaCalidadFuente();
    borrarTablaCalidadTanque();
    borrarTablaCalidadRed();
}
function insertarEnNube() {
    var con = localStorage.getItem("conexion");
    if (con=="1") {
        //sincronizar Aforo
        insertarAforoNube();
        insetarTiemposNube();
        //sincronizar lectura
        insertarLecturaNube();
        //sincronizar calidad
        insertarNubeCalidadFuente();
        insertarNubeCalidadTanque();
        insertarNubeCalidadRed();


        
        setTimeout(function(){ location.href="sincroExitosa.html" }, 900);

    }else{
        myapp.alert("No hay conexión a internet")
    }
}

//FUENTE
function insertarNubeCalidadFuente() {
	var con = localStorage.getItem("conexion");
    if (con=="1") {
        db.transaction(function (tx) {
        	tx.executeSql('SELECT * FROM CalidadFuente', [], function (tx, results) {
                var len = results.rows.length;
                
                if(len>0)
                {
                    for (var i = 0; i < len; i++) {
                       
                        var fuen=results.rows.item(i)['idfuente'];
                        var t=results.rows.item(i)['tipo'];
                        var n=results.rows.item(i)['numero'];
                        var v=results.rows.item(i)['valor'];
                        var fech=results.rows.item(i)['fecha'];
                    
                        archivo = "http://grupoditek.com/php/insertarCalidadFuente.php?jsoncallback=?"
                        $.getJSON( archivo, { fuente: fuen, tipo: t ,numero: n , valor: v , fecha:fech })
                        .done(function(respuestaServer) {
                            
                            if(respuestaServer.validacion == "ok"){
                                 /// si la validacion es correcta
                               
                               
                                localStorage.setItem("fuenteCalidad","");
                              
                            }else{
                              /// ejecutar una conducta cuando la validacion falla
                              myapp.alert("Error insertando datos");
                            }
                      
                        })
                        
                    }

                }
        }, null);
        });
        
    }
	
};

//TANQUE
function insertarNubeCalidadTanque() {
	var con = localStorage.getItem("conexion");
    if (con=="1") {
        db.transaction(function (tx) {
        	tx.executeSql('SELECT * FROM CalidadTanque', [], function (tx, results) {
                var len = results.rows.length;
                
                if(len>0)
                {
                    for (var i = 0; i < len; i++) {
                       
                        var tanq=results.rows.item(i)['idtanque'];
                        var t=results.rows.item(i)['tipo'];
                        var n=results.rows.item(i)['numero'];
                        var v=results.rows.item(i)['valor'];
                        var fech=results.rows.item(i)['fecha'];
                    
                        archivo = "http://grupoditek.com/php/insertarCalidadTanque.php?jsoncallback=?"
                        $.getJSON( archivo, { tanque: tanq, tipo: t ,numero: n , valor: v , fecha:fech })
                        .done(function(respuestaServer) {
                            
                            if(respuestaServer.validacion == "ok"){
                                 /// si la validacion es correcta
                       
                            }else{
                              /// ejecutar una conducta cuando la validacion falla
                              myapp.alert("Error insertando datos");
                            }
                      
                        })
                        
                    }

                }
        }, null);
        });
        
    }
	
};

//RED
function insertarNubeCalidadRed() {
	var con = localStorage.getItem("conexion");
    if (con=="1") {
        db.transaction(function (tx) {
        	tx.executeSql('SELECT * FROM CalidadRed', [], function (tx, results) {
                var len = results.rows.length;
                
                if(len>0)
                {
                    for (var i = 0; i < len; i++) {
                       
                        var r=results.rows.item(i)['numero_paja'];
                        var t=results.rows.item(i)['tipo'];
                        var n=results.rows.item(i)['numero'];
                        var v=results.rows.item(i)['valor'];
                        var fech=results.rows.item(i)['fecha'];
                    
                        archivo = "http://grupoditek.com/php/insertarCalidadRed.php?jsoncallback=?"
                        $.getJSON( archivo, { paja: r, tipo: t ,numero: n , valor: v , fecha:fech })
                        .done(function(respuestaServer) {
                            
                            if(respuestaServer.validacion == "ok"){
                                 /// si la validacion es correcta
                  
                            }else{
                              /// ejecutar una conducta cuando la validacion falla
                              myapp.alert("Error insertando datos");
                            }
                      
                        })
                        
                    }

                }
        }, null);
        });
        
    }
	
};

function insertarLecturaNube(){
    var con = localStorage.getItem("conexion");
    if (con=="1") {
        db.transaction(function (tx) {
        	tx.executeSql('SELECT lectura,medidor FROM RegistroLectura', [], function (tx, results) {
                var len = results.rows.length;
                if(len>0)
                {
                    var v=results.rows.item(0)['lectura'];
                    var m=results.rows.item(0)['medidor'];
                    archivo = "http://grupoditek.com/php/insertarRegistroLectura.php?jsoncallback=?"
                    $.getJSON( archivo, { lectura: v, medidor: m })
                    .done(function(respuestaServer) {
                        
                        if(respuestaServer.validacion == "ok"){
                             /// si la validacion es correcta
                   
                        }else{
                          /// ejecutar una conducta cuando la validacion falla
                          myapp.alert("Error insertando datos");
                        }
                  
                    })
                }
        }, null);
        });
        
    }
};

function insetarTiemposNube() {
	var con = localStorage.getItem("conexion");
    if (con=="1") {
        db.transaction(function (tx) {
        	tx.executeSql('SELECT * FROM tiempos', [], function (tx, results) {
                var len = results.rows.length;
                
                if(len>0)
                {
                    for (var i = 0; i < len; i++) {
                        var numT=results.rows.item(i)['numero_tiempo'];
                        var T=results.rows.item(i)['tiempo'];
                        var idr= localStorage.getItem("idregistro");
                        var fech=results.rows.item(i)['fecha'];
                    
                        archivo = "http://grupoditek.com/php/tiempos.php?jsoncallback=?"
                        $.getJSON( archivo, { numero_tiempo: numT, tiempo: T, id_registro: idr,fecha: fech })
                        .done(function(respuestaServer) {
                            
                            if(respuestaServer.validacion == "ok"){
                                 /// si la validacion es correcta
               
                                localStorage.setItem("idregistro","");
                                
                              
                            }else{
                              /// ejecutar una conducta cuando la validacion falla
                                myapp.alert("Error insertando datos");
                            }
                      
                        })
                        
                    }

                }
        }, null);
        });
        
    }	
};
function insertarAforoNube(){
    var con = localStorage.getItem("conexion");
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
                        
                        if(respuestaServer.validacion == "ok"){
                             /// si la validacion es correcta
                             localStorage.setItem("idregistro",respuestaServer.registro)
                           
                          
                          
                        }else{
                          /// ejecutar una conducta cuando la validacion falla
                          myapp.alert("Error insertando datos");
                        }
                  
                    })
                }
        }, null);
        });
        
    }

 
};


function borrarTablaaforo(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS aforo');
        }
    );
};

function borrarTablaTiempos(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS tiempos');
        }
        
    );
};

function borrarRegistroLectura(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS RegistroLectura');
        }
    );
    
};

//FUENTE
function borrarTablaCalidadFuente(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS CalidadFuente');
        }
    );
};

//TANQUE
function borrarTablaCalidadTanque(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS CalidadTanque');
        }
    );
};

//RED
function borrarTablaCalidadRed(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS CalidadRed');
        }
    );
};