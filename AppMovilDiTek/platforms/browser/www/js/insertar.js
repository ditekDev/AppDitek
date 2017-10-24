var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
//FUNCIÓN PARA LLENAR LOS TIEMPOS -->
function cargarTablaTiempos(){
	var ul = document.getElementById("list");
	var li = document.createElement("lis");
	var li2 = document.createElement("lis");
	var li3 = document.createElement("lis");
	var t1 = localStorage.getItem("tiempo1");
	var t2 = localStorage.getItem("tiempo2");
	var t3 = localStorage.getItem("tiempo3");
	//tiempo1
	li.appendChild(document.createTextNode(t1));
	li.setAttribute("id", "1"); // added line
	ul.appendChild(li);
	//tiempo2
	li2.appendChild(document.createTextNode(t2));
	li2.setAttribute("id", "2"); // added line
	ul.appendChild(li2);
	//tiempo3
	li3.appendChild(document.createTextNode(t3));
	li3.setAttribute("id", "3"); // added line
	ul.appendChild(li3);
	
	insertarTiempos();

};



function borrarTablaTiempos(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS tiempos');
        },
        this.txErrorHandler,
    );
};

function insertarTiempos(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
			var sql ="INSERT into tiempos (numero_tiempo, tiempo, id_fuente,fecha) values (?,?,?,?);";
			var sql2="INSERT into tiempos (numero_tiempo, tiempo, id_fuente,fecha) values (?,?,?,?);";
			var sql3="INSERT into tiempos (numero_tiempo, tiempo, id_fuente,fecha) values (?,?,?,?);";
			var fu=localStorage.getItem("fuenteID");
			var t1=localStorage.getItem("tiempo1");
			var t2=localStorage.getItem("tiempo2");
            var t3=localStorage.getItem("tiempo3");
            var f = new Date();
            alert(t1+fu);
            var params = ["1",t1,fu,f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()];
			tx.executeSql(sql, params);
			var params2 = ["2",t2,fu,f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()];
			tx.executeSql(sql2, params2);
			var params3 = ["3",t3,fu,f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()];
            tx.executeSql(sql3, params3);
            
        },
        this.txErrorHandler,
    
    );
};




function guardarTiempos() {
	var con = localStorage.getItem("conexion");
    if (con=="1") {
        db.transaction(function (tx) {
        	tx.executeSql('SELECT * FROM tiempos', [], function (tx, results) {
                var len = results.rows.length;
                if(len>0)
                {
                    for (var i = 0; i < len; i++) {
                        var numT=encodeURI(results.rows.item(i)['numero_tiempo']);
                        var T=encodeURI(results.rows.item(i)['tiempo']);
                        var idf=encodeURI(results.rows.item(i)['id_fuente']);
                        var fech=encodeURI(results.rows.item(i)['fecha']);
                        alert(T+fech);
                        archivo = "http://grupoditek.com/php/insertarTiempos.php?jsoncallback=?"
                        $.getJSON( archivo, { numero_tiempo: numT, tiempo: T, id_fuente:idf,fecha:fech })
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

                }
        }, null);
        });
        
    }

 
	
};

 