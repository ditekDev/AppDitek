

var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'Test DB', 2 * 1024 * 1024);


function crearTabla() {
this.db.transaction(
    function(tx) {
        var sql ='CREATE TABLE IF NOT EXISTS fuentes (id unique, nombre)';
        tx.executeSql(sql);
    },
    this.txErrorHandler,
      
);
};

function borrarTablaaforo(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS aforo');
        },
        this.txErrorHandler,
    );
};

function insertarAforo(){
    var db = openDatabase('diteklocal', '1.0', 'Test DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO aforo (volumen,fuente) VALUES (?, ?)";
            var vol=document.getElementsByName("volumen")[0].value;	
            var f=localStorage.getItem("fuenteID")
            var params = [vol,f];
            tx.executeSql(sql, params);
            
        },
        this.txErrorHandler,
    
    );
};

function crearTablaaforo() {
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS aforo (volumen, fuente)';
            tx.executeSql(sql);
        },
        this.txErrorHandler,
          
    );
};


function borrarTabla(){
this.db.transaction(
    function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS fuentes');
    },
    this.txErrorHandler,
);
};

function lee_json() {

$.ajax({
    dataType: 'json',
    url: 'http://grupoditek.com/php/getFuentes.php',
    success: function(datos) {
        var db = openDatabase('diteklocal', '1.0', 'Test DB', 2 * 1024 * 1024);
        db.transaction(
            function(tx) {
                var l = datos.length;
                var sql =
                    "INSERT OR REPLACE INTO fuentes (id,nombre) VALUES (?, ?)";
    
                var e;
                for (var i = 0; i < l; i++) {
                    e = datos[i];
                   
                    var params = [e.id, e.nombre];
                    tx.executeSql(sql, params);
                }
             
            },
            this.txErrorHandler,
        
        );
    },
    error: function() { myapp.alert('No se conecto al servidor. Intente de nuevo','ERROR!!!'); }
});     
} ;

function sincro(){
    var con = localStorage.getItem("conexion");
    if (con=="1") {
        borrarTabla();
        crearTabla();
        lee_json();
    }
    //NUMERO DE VECES DE MEDICIONES
    localStorage.setItem("mediciones", 3);
 
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
        crearTablaaforo();
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
                             /// si la validacion es correcta, muestra la pantalla "home"
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
        
    }

 
};