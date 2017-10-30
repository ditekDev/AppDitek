var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);



function crearTablaTanques() {
     //borrarTablaFuentes();
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS tanques (id, nombre)';
            tx.executeSql(sql);
        },
        this.txErrorHandler,
          
    );
};


function borrarTablaTanques(){
this.db.transaction(
    function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS tanques');
    },
    this.txErrorHandler,
);
};

function lee_jsonTanques() {

$.ajax({
    dataType: 'json',
    url: 'http://grupoditek.com/php/getTanques.php',
    success: function(datos) {
        var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
        db.transaction(
            function(tx) {
                var l = datos.length;
                var sql =
                    "INSERT OR REPLACE INTO tanques (id,nombre) VALUES (?, ?)";
    
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
    error: function() { myApp.alert('No se obtuvo conexión con el servidor', 'ERROR!!!'); }
});     
} ;

function sincroTanques(){
    var con = localStorage.getItem("conexion");
    if (con=="1") {
        borrarTablaTanques();
        crearTablaTanques();
        lee_jsonTanques();
    }
    //NUMERO DE VECES DE MEDICIONES

 
};


function obtTanque(){
    var select = $("#tanque option:selected").text();
    var idf = $("#tanque option:selected").val();
    localStorage.setItem("tanque", select);
    localStorage.setItem("tanqueID", idf);

        crearTablaTanques();
        lee_jsonTanques();
    
}


//Función para llenar el select con las fuentes que se encuentran en la base de datos -->

function llenarlista() {
    $select = $('#tanque');
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
  db.transaction(function (tx) {
    
    tx.executeSql('SELECT * FROM tanques', [], function (tx, results) {
         
          var len = results.rows.length, i;
          
        for (var i = 0; i < len; i++) {
         
           $select.append('<option value="' +results.rows.item(i).id+ '">' +results.rows.item(i).nombre + '</option>');
          
        }
     
  }, null);
  });
};

function elegirTanque(){
    var select = $("#tanque option:selected").text();
    var idf = $("#tanque option:selected").val();
    localStorage.setItem("tanque", select);
    localStorage.setItem("tanqueID", idf);
    location.href="seleccionMediciones.html";
    
}