var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'Test DB', 2 * 1024 * 1024);

function inicio(){
    
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (id unique, usuario,contrasena)');
        tx.executeSql('INSERT INTO usuarios (id, usuario, contrasena) VALUES (1, "foobar","123")');
        tx.executeSql('INSERT INTO usuarios (id, usuario, contrasena) VALUES (2, "logmsg","123")');
 
    });
}


function crearTabla() {
this.db.transaction(
    function(tx) {
        var sql ='CREATE TABLE IF NOT EXISTS usuarios (id unique, usuario,contrasena)';
        tx.executeSql(sql);
    },
    this.txErrorHandler,
      
);
};


function borrarTabla(){
this.db.transaction(
    function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS usuarios');
    },
    this.txErrorHandler,
);
};



function lee_json() {

$.ajax({
    dataType: 'json',
    url: 'http://grupoditek.com/php/jsonUsuarios.php',
    success: function(datos) {
        var db = openDatabase('diteklocal', '1.0', 'Test DB', 2 * 1024 * 1024);
        db.transaction(
            function(tx) {
                var l = datos.length;
                var sql =
                    "INSERT OR REPLACE INTO usuarios (id,usuario,contrasena) VALUES (?, ?, ?)";
    
                var e;
                for (var i = 0; i < l; i++) {
                    e = datos[i];
                   
                    var params = [e.id, e.usuario, e.contrasena];
                    tx.executeSql(sql, params);
                }
             
            },
            this.txErrorHandler,
        
        );
    },
    error: function() { myapp.alert('No se conecto al servidor. Intente de nuevo','ERROR!!!'); }
});     
}   


function sincronizar() {
    borrarTabla();
    crearTabla();
    lee_json();
}

  

function checkConnection(){
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = "1";
    states[Connection.ETHERNET] = "1";
    states[Connection.WIFI]     = "1";
    states[Connection.CELL_2G]  = "1";
    states[Connection.CELL_3G]  = "1";
    states[Connection.CELL_4G]  = "1";
    states[Connection.CELL]     = "1";
    states[Connection.NONE]     = "0";
    alert("Connection type: " + states[networkState]);
    var online=states[networkState];
    if (online=="1") {
        sincronizar();
    }
}
   
    
    