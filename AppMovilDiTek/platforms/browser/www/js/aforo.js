

var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'Test DB', 2 * 1024 * 1024);





function llenarFuentes() {
    $select = $('#people');
$.ajax({
    dataType: 'json',
    url: 'http://grupoditek.com/php/getFuentes.php',
    success: function(datos) {

        var l = datos.length;
            
        var e;
            for (var i = 0; i < l; i++) {
                    e = datos[i];
                    $select.append('<option id="' +datos[i].id.value+ '">' +datos[i].nombre + '</option>');
                    
           }
        
    },
    error: function() { alert("Error leyendo fichero jsonP"); }
});     
};

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
    error: function() { alert("Error leyendo fichero jsonP"); }
});     
} ;

function sincro(){
    var con = localStorage.getItem("conexion");
    if (con=="1") {
        borrarTabla();
        crearTabla();
        lee_json();
    }

};



