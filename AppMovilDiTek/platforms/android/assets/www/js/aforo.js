

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
    error: function() { myapp.alert("No se conecto al servidor. Intente de nuevo","ERROR!!!"); }
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
    function aforo()
    {
       window.location = "aforo.html";
    }
};



