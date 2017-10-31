

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
        localStorage.setItem("medidor",num)
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
    
    
function obtenerDatos() {
    var db = openDatabase("diteklocal", "1.0", "db", 200000);
    var me=localStorage.getItem("medidor");

    	db.transaction(function (tx) {
        	tx.executeSql('SELECT nombre, direccion,abonados.id_abonado FROM abonados INNER JOIN medidores ON abonados.id_abonado=medidores.id_abonado  WHERE medidores.numero_medidor="'+me+'"', [], function (tx, results) {
       		var len = results.rows.length, i;
            var nom=results.rows.item(0)['nombre'];
            var dir=results.rows.item(0)['direccion'];
            var id=results.rows.item(0)['id_abonado'];
            
       		if (len===1) {
                document.getElementById("nombre").textContent=nom;
                document.getElementById("numAbonado").textContent=id;
                document.getElementById("direccion").textContent=dir;
        	}else{
                myApp.alert("Error al obtener datos de abonado")
        	}  
        }, null);
        });
    
    
}
