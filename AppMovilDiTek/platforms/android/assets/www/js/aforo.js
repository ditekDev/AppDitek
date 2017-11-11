var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);


function borrarTablaaforo(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS aforo');
        }
    );
};

function insertarAforo(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO aforo (volumen,fuente) VALUES (?, ?)";
            var vol=document.getElementsByName("volumen")[0].value;	
            var f=localStorage.getItem("fuenteID")
            var params = [vol,f];
            tx.executeSql(sql, params);
            
        }
    
    );
};



function crearTablaaforo() {
    //borrarTablaFuentes();
   this.db.transaction(
       function(tx) {
           var sql ='CREATE TABLE IF NOT EXISTS aforo (volumen, fuente)';
           tx.executeSql(sql);
       }  
   );
};

function obtFuente(){
    var select = $("#people option:selected").text();
    var idf = $("#people option:selected").val();
    localStorage.setItem("fuente", select);
    localStorage.setItem("fuenteID", idf);
   
    if(document.aforoform.volumen.value == "") {
      myApp.alert('Inserte un volumen', 'ERROR!!');
      return 0;
    }else if(document.aforoform.volumen.value.length < 5) {
        myApp.alert('Dato incorrecto, por favor ingrese un valor válido', 'ERROR!!');
        return 0;
    }else{
        
        insertarAforo();
        insertarNube();

    }
    
}

function insertarNube(){
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
                            borrarTablaaforo();
                            location.href="cronometro.html";
                          
                        }else{
                          /// ejecutar una conducta cuando la validacion falla
                          myapp.alert("Error insertando datos");
                        }
                  
                    })
                }
        }, null);
        });
        
    }else{
        location.href="cronometro.html";
    }

 
};

//Función para llenar el select con las fuentes que se encuentran en la base de datos -->

function llenarlista() {
 
    
    crearTablaaforo();
    $select = $('#people');
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
  db.transaction(function (tx) {
    
    tx.executeSql('SELECT * FROM fuentes', [], function (tx, results) {
         
          var len = results.rows.length, i;
          
        for (var i = 0; i < len; i++) {
         
           $select.append('<option value="' +results.rows.item(i).id+ '">' +results.rows.item(i).nombre + '</option>');
          
        }
     
  }, null);
  });
};

function elegirFuente(){
    var select = $("#people option:selected").text();
    var idf = $("#people option:selected").val();
    localStorage.setItem("fuenteCalidad", select);
    localStorage.setItem("fuenteIDCalidad", idf);
    location.href="seleccionMediciones.html";
    
}