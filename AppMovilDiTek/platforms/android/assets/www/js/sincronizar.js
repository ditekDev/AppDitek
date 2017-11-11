var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);

function crearTablaFuentes() {
    
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS fuentes (id unique, nombre)';
            tx.executeSql(sql);
        }
          
    );
  
};

function borrarTablaFuentes(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS fuentes');
        }
    );
    
};

function lee_jsonFuentes() {
    

$.ajax({
    dataType: 'json',
    url: 'http://grupoditek.com/php/getFuentes.php',
    success: function(datos) {
        var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
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
             
            }
        
        );
    },
    error: function() { myApp.alert('No se obtuvo conexión con el servidor', 'ERROR!!!'); }
});    
} ;

function ejecutarEnOrden(callbackPaso1, callbackPaso2, callbackPaso3){
    //ejecuta primero
    callbackPaso1();

    //ejecuta segundo
    var miVar = setTimeout(function(){ callbackPaso2() }, 500);
    //más código de la función principal
    var miVar2 = setTimeout(function(){ callbackPaso3() }, 1000);
    

   
};

function borrarTablas() {
    borrarTablaFuentes();
    borrarTablaAbonados();
    borrarTablaMedidores();
    borrarTablaTanques();
    console.log("borrar tablas");
}

function crearTablas() {
    crearTablaFuentes();
    crearTablaAbonados();
    crearTablaMedidores();
    crearTablaTanques();
    
    crearRegistroLectura()
    console.log("crear");
}

function llenarTablas() {
    lee_jsonFuentes();
    lee_jsonAbonados();
    lee_jsonMedidores();
    lee_jsonTanques();
    console.log("llenar"); 
}
function sincro(){
    var con = localStorage.getItem("conexion");
    if (con=="1") {
        
        ejecutarEnOrden(borrarTablas,crearTablas,llenarTablas);

    }
    crearTablaTiempos();
 
};



function borrarTablaMedidores(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS medidores');
        }
    );
};
    
function borrarTablaTanques(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS tanques');
        }
    );
};

function borrarTablaAbonados(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS abonados');
        }
    );
};


   

function crearTablaAbonados() {
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS abonados (nombre,direccion,id_abonado)';
            tx.executeSql(sql);
        }
          
    );
};

function crearTablaMedidores() {
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS medidores (id_abonado, numero_medidor, numero_paja)';
            tx.executeSql(sql);
        }
          
    );
};
function crearTablaTanques() {
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS tanques (id_tanque_almacenamiento, nombre)';
            tx.executeSql(sql);
        }
          
    );
};



function crearTablaTiempos() {
        this.db.transaction(
            function(tx) {
                var sql ='CREATE TABLE IF NOT EXISTS tiempos (numero_tiempo, tiempo, id_fuente,fecha)';
                tx.executeSql(sql);
            }   
        );
};
    
 

function lee_jsonMedidores() {

$.ajax({
    dataType: 'json',
    url: 'http://grupoditek.com/php/getMedidores.php',
    success: function(datos) {
        var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
        db.transaction(
            function(tx) {
                var l = datos.length;
                var sql =
                    "INSERT OR REPLACE INTO medidores (id_abonado,numero_medidor, numero_paja) VALUES (?, ?, ?)";
    
                var e;
                for (var i = 0; i < l; i++) {
                    e = datos[i];
                   
                    var params = [e.id_abonado, e.numero_medidor, e.numero_paja];
                    tx.executeSql(sql, params);
                }
             
            }
        
        );
    },
    error: function() { myapp.alert('No se conecto al servidor. Intente de nuevo','ERROR!!!'); }
});     
} ;



function lee_jsonAbonados() {

$.ajax({
    dataType: 'json',
    url: 'http://grupoditek.com/php/getAbonados.php',
    success: function(datos) {
        var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
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
             
            }
        
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
            var db =openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
            db.transaction(
                function(tx) {
                    var l = datos.length;
                    var sql =
                        "INSERT OR REPLACE INTO tanques (id_tanque_almacenamiento,nombre) VALUES (?, ?)";
        
                    var e;
                    for (var i = 0; i < l; i++) {
                        e = datos[i];
                       
                        var params = [e.id_tanque_almacenamiento,e.nombre];
                        tx.executeSql(sql, params);
                    }
                 
                }
            
            );
        },
        error: function() { myapp.alert('No se conecto al servidor. Intente de nuevo','ERROR!!!'); }
    });     
} ;
    


function crearRegistroLectura() {
    
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS RegistroLectura (id,lectura,medidor,promedio)';
            tx.executeSql(sql);
        }
          
    );
  
};


