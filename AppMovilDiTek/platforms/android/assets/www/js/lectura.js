

var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);


function lecturaMed(){

        if(document.lecturaform.txtidentificacion.value == "") {
            myApp.alert('Inserte un número de medidor', 'ERROR!!');

        return 0   ;
        }
    
        var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
        var msg;
        var num=document.getElementsByName("txtidentificacion")[0].value;		
        localStorage.setItem("medidor",num)
        if (num.value=="") {
            
        }else{
            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM medidores WHERE numero_medidor="'+num+'"', [], function (tx, results) {
                   var len = results.rows.length, i;
               
                    if (len===1) {
                      window.location.href = "datosLectura.html";
                    }else{
                      myApp.alert('El dato no pertenece a ninguno de nuestros abonados', 'ERROR!!');
                    }  
            }, null);
            });
        
    }
}


function lecturaRed(){
    
            if(document.pajaform.txtpaja.value == "") {
                myApp.alert('Inserte un número de paja', 'ERROR!!');
    
            return 0   ;
            }
        
            var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
            var msg;
            var num=document.getElementsByName("txtpaja")[0].value;		
            localStorage.setItem("numero_paja",num)
            if (num.value=="") {
                
            }else{
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM medidores WHERE numero_paja="'+num+'"', [], function (tx, results) {
                       var len = results.rows.length, i;
                   
                        if (len===1) {
<<<<<<< HEAD
<<<<<<< HEAD
                            
                            var pa=document.getElementsByName("txtpaja")[0].value;	
                            localStorage.setItem("pajaID", pa);
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
                          window.location.href = "seleccionMediciones.html";
                        }else{
                          myApp.alert('El dato no pertenece a ninguno de nuestros abonados', 'ERROR!!');
                        }  
                }, null);
                });
            
        }
    }
    


function insertarRegistroLectura(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO RegistroLectura (lectura,medidor) VALUES (?, ?)";
            var numL=localStorage.getItem("numLectura");
            var med=localStorage.getItem("medidor")
            var params = [numL,med];
            tx.executeSql(sql, params);
            
        }
    
    );
};
    

function insertarNube(){
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
                            borrarRegistroLectura();
                            location.href="guardado.html";
                          
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

function registrarLectura(){
<<<<<<< HEAD
<<<<<<< HEAD
 
   
    if(document.datoslecturaform.lecNum.value == "") {
      myApp.alert('Inserte medición', 'ERROR!!');
      return 0;
    }else{
        insertarRegistroLectura();
        insertarNube();
    }
=======
    insertarRegistroLectura();
    insertarNube();
    
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
    insertarRegistroLectura();
    insertarNube();
    
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
    
}

function comprobarLectura(){
    
      
       if(document.datoslecturaform.lecNum.value == "") {
         myApp.alert('Inserte medición', 'ERROR!!');
         return 0;
       }else{
           localStorage.setItem("numLectura",document.getElementsByName("lecNum")[0].value)
           location.href="guardarNumeroLectura.html";
       }
       
   }
function borrarRegistroLectura(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS RegistroLectura');
        }
    );
    
};
    
function obtenerDatos() {
    var db = openDatabase("diteklocal", "1.0", "db", 200000);
    var me=localStorage.getItem("medidor");

    	db.transaction(function (tx) {
        	tx.executeSql('SELECT nombre, direccion,abonados.id_abonado FROM abonados INNER JOIN medidores ON abonados.id_abonado=medidores.id_abonado  WHERE medidores.numero_medidor="'+me+'"', [], function (tx, results) {
       		var len = results.rows.length, i;
            var nom=results.rows.item(0)['nombre'];
            var dir=results.rows.item(0)['direccion'];
            var id=results.rows.item(0)['id_abonado'];
            
       		if (len===1) {
                document.getElementById("nombre").textContent=nom;
                document.getElementById("numAbonado").textContent=id;
                document.getElementById("direccion").textContent=dir;
        	}else{
                myApp.alert("Error al obtener datos de abonado")
        	}  
        }, null);
        });
    
    
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
function elegirRed(){
    var paja = $("#paja").text();
    localStorage.setItem("pajaID", paja);
    location.href="seleccionMediciones.html";
    
<<<<<<< HEAD
}
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
}
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
