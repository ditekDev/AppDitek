/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
       
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        console.log('Received Event: ' + id);
        checkConnection();
    }
};


var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);


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
        var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
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
    error: function() { myApp.alert('No se obtuvo conexión con el servidor', 'ERROR!!!'); }
});     
}   


function sincronizar() {
    borrarTabla();
    crearTabla();
    lee_json();
    crearTablaAbonados();
    crearTablaFuentes();
    crearTablaTiempos();
    crearTablaMedidores();
    crearTablaTanques();
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

    var online=states[networkState];
    if (online=="1") {
        sincronizar();

    }

    localStorage.setItem("conexion", online);
}
   

function crearTablaAbonados() {
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS abonados (nombre,direccion,id_abonado)';
            tx.executeSql(sql);
        },
        this.txErrorHandler,
          
    );
};

function crearTablaMedidores() {
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS medidores (id_abonado, numero_medidor)';
            tx.executeSql(sql);
        },
        this.txErrorHandler,
          
    );
};
function crearTablaTanques() {
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS tanques (id_tanque_almacenamiento, nombre)';
            tx.executeSql(sql);
        },
        this.txErrorHandler,
          
    );
};



function crearTablaFuentes() {
    this.db.transaction(
        function(tx) {
            var sql ='CREATE TABLE IF NOT EXISTS fuentes (id unique, nombre)';
            tx.executeSql(sql);
        },
        this.txErrorHandler,
          
    );
    };

    function crearTablaTiempos() {
        this.db.transaction(
            function(tx) {
                var sql ='CREATE TABLE IF NOT EXISTS tiempos (numero_tiempo, tiempo, id_fuente,fecha)';
                tx.executeSql(sql);
            },
            this.txErrorHandler,
              
        );
    };
    
    

app.initialize();