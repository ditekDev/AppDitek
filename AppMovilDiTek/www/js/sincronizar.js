var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'db', 2 * 1024 * 1024);




function borrarTablaFuentes(){
this.db.transaction(
    function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS fuentes');
    },
    this.txErrorHandler,
);
};

function lee_jsonFuentes() {

$.ajax({
    dataType: 'json',
    url: 'http://grupoditek.com/php/getFuentes.php',
    success: function(datos) {
        var db = openDatabase('diteklocal', '1.0', 'db', 2 * 1024 * 1024);
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
    error: function() { myApp.alert('No se obtuvo conexión con el servidor', 'ERROR!!!'); }
});     
} ;

function sincro(){
    var con = localStorage.getItem("conexion");
    if (con=="1") {

        lee_jsonFuentes();
        lee_jsonAbonados();
        lee_jsonMedidores();
        lee_jsonTanques();
    }
    //NUMERO DE VECES DE MEDICIONES
    localStorage.setItem("mediciones", 3);
 
};





function borrarTablaMedidores(){
this.db.transaction(
    function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS medidores');
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
    

function lee_jsonMedidores() {

$.ajax({
    dataType: 'json',
    url: 'http://grupoditek.com/php/getMedidores.php',
    success: function(datos) {
        var db = openDatabase('diteklocal', '1.0', 'db', 2 * 1024 * 1024);
        db.transaction(
            function(tx) {
                var l = datos.length;
                var sql =
                    "INSERT OR REPLACE INTO medidores (id_abonado,numero_medidor) VALUES (?, ?)";
    
                var e;
                for (var i = 0; i < l; i++) {
                    e = datos[i];
                   
                    var params = [e.id_abonado, e.numero_medidor];
                    tx.executeSql(sql, params);
                }
             
            },
            this.txErrorHandler,
        
        );
    },
    error: function() { myapp.alert('No se conecto al servidor. Intente de nuevo','ERROR!!!'); }
});     
} ;



function borrarTablaAbonados(){
this.db.transaction(
    function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS abonados');
    },
    this.txErrorHandler,
);
};

function lee_jsonAbonados() {

$.ajax({
    dataType: 'json',
    url: 'http://grupoditek.com/php/getAbonados.php',
    success: function(datos) {
        var db = openDatabase('diteklocal', '1.0', 'db', 2 * 1024 * 1024);
        db.transaction(
            function(tx) {
                var l = datos.length;
                var sql =
                    "INSERT OR REPLACE INTO abonados (nombre,direccion,id_abonado) VALUES (?, ?, ?)";
    
                var e;
                for (var i = 0; i < l; i++) {
                    e = datos[i];
                   
                    var params = [e.nombre,e.direccion,e.id_abonado];
                    tx.executeSql(sql, params);
                }
             
            },
            this.txErrorHandler,
        
        );
    },
    error: function() { myapp.alert('No se conecto al servidor. Intente de nuevo','ERROR!!!'); }
});     
} ;


function lee_jsonTanques() {
    
    $.ajax({
        dataType: 'json',
        url: 'http://grupoditek.com/php/getTanques.php',
        success: function(datos) {
            var db = openDatabase('diteklocal', '1.0', 'db', 2 * 1024 * 1024);
            db.transaction(
                function(tx) {
                    var l = datos.length;
                    var sql =
                        "INSERT OR REPLACE INTO tanques (id_tanque_almacenamiento,nombre) VALUES (?, ?, ?)";
        
                    var e;
                    for (var i = 0; i < l; i++) {
                        e = datos[i];
                       
                        var params = [e.id_tanque_almacenamiento,e.nombre];
                        tx.executeSql(sql, params);
                    }
                 
                },
                this.txErrorHandler,
            
            );
        },
        error: function() { myapp.alert('No se conecto al servidor. Intente de nuevo','ERROR!!!'); }
    });     
    } ;
    
