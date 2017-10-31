

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
    
    
    



