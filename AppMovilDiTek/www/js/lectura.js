

var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'db', 2 * 1024 * 1024);


function lecturaMed(){

        if(document.lecturaform.txtidentificacion.value == "") {
            myApp.alert('Inserte un número de medidor', 'ERROR!!');

        return 0   ;
        }
    
        var db = openDatabase("diteklocal", "1.0", "db", 200000);
        var msg;
        var num=document.getElementsByName("txtidentificacion")[0].value;		
    
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
    
    
    
    function crearTablaMedidores() {
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS medidores (id_abonado, numero_medidor)';
            tx.executeSql(sql);
        },
        this.txErrorHandler,
          
    );
    };



function borrarTablaMedidores(){
this.db.transaction(
    function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS medidores');
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

function sincroMedidores(){
    var con = localStorage.getItem("conexion");
    if (con=="1") {
        //borrarTablaMedidores();
        crearTablaMedidores();
        lee_jsonMedidores();
    }
   
};







function crearTablaAbonados() {
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS abonados (nombre,direccion,id_abonado)';
            tx.executeSql(sql);
        },
        this.txErrorHandler,
          
    );
    };



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

function sincroAbonados(){
    var con = localStorage.getItem("conexion");
    if (con=="1") {
        //borrarTablaMedidores();
        crearTablaAbonados();
        lee_jsonAbonados();
    }
   
};


