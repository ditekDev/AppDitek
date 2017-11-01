var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);



function obtTanque(){
    var select = $("#tanque option:selected").text();
    var idf = $("#tanque option:selected").val();
    localStorage.setItem("tanque", select);
    localStorage.setItem("tanqueID", idf);

        crearTablaTanques();
        lee_jsonTanques();
    
}


//Función para llenar el select con las fuentes que se encuentran en la base de datos -->

function llenarlista() {
    $select = $('#tanque');
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
  db.transaction(function (tx) {
    
    tx.executeSql('SELECT * FROM tanques', [], function (tx, results) {
         
          var len = results.rows.length, i;
          
        for (var i = 0; i < len; i++) {
         
           $select.append('<option value="' +results.rows.item(i).id+ '">' +results.rows.item(i).nombre + '</option>');
          
        }
     
  }, null);
  });
};

function elegirTanque(){
    var select = $("#tanque option:selected").text();
    var idf = $("#tanque option:selected").val();
    localStorage.setItem("tanque", select);
    localStorage.setItem("tanqueID", idf);
    location.href="seleccionMediciones.html";
    
}