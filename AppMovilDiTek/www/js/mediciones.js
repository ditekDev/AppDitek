var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);


function borrarTablaCalidadFuente(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS CalidadFuente');
        }
    );
};

function insertarCalidadFuenteCloro(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadFuente (idfuente, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txtCloro")[0].value;	
            var fu=localStorage.getItem("fuenteIDCalidad")
            var t="cloro";
           // alert("ins"+fu+t+val);
            var f = new Date();
            var fec=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
            var params = [fu,t,1,val,fec];
            
            tx.executeSql(sql, params);
            
        }
    
    );
};

function insertarCalidadFuentePH(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadFuente (idfuente, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txtph1")[0].value;	
            var fu=localStorage.getItem("fuenteIDCalidad")
            var t="ph";
           // alert("ins"+fu+t+val);
            var f = new Date();
            var fec=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
            var params = [fu,t,1,val,fec];
            tx.executeSql(sql, params);

            var val2=document.getElementsByName("txph2")[0].value;
            var params2 = [fu,t,2,val2,fec];
            tx.executeSql(sql, params2);

            var val3=document.getElementsByName("txtph3")[0].value;
            var params3 = [fu,t,3,val3,fec];
            tx.executeSql(sql, params3);
            
        }
    
    );
};

function insertarCalidadFuenteTemperatura(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadFuente (idfuente, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txttemp1")[0].value;	
            var fu=localStorage.getItem("fuenteIDCalidad")
            var t="temperatura";
           // alert("ins"+fu+t+val);
            var f = new Date();
            var fec=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
            var params = [fu,t,1,val,fec];
            tx.executeSql(sql, params);

            var val2=document.getElementsByName("txttemp2")[0].value;
            var params2 = [fu,t,2,val2,fec];
            tx.executeSql(sql, params2);

            var val3=document.getElementsByName("txttemp3")[0].value;
            var params3 = [fu,t,3,val3,fec];
            tx.executeSql(sql, params3);
            
        }
    
    );
};

function insertarCalidadFuenteTurbidez(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadFuente (idfuente, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txtturb1")[0].value;	
            var fu=localStorage.getItem("fuenteIDCalidad")
            var t="turbidez";
           // alert("ins"+fu+t+val);
            var f = new Date();
            var fec=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
            var params = [fu,t,1,val,fec];
            tx.executeSql(sql, params);

            var val2=document.getElementsByName("txtturb2")[0].value;
            var params2 = [fu,t,2,val2,fec];
            tx.executeSql(sql, params2);

            var val3=document.getElementsByName("txtturb3")[0].value;
            var params3 = [fu,t,3,val3,fec];
            tx.executeSql(sql, params3);
            
        }
    
    );
};
function crearTablaCalidadFuente() {
    //borrarTablaFuentes();
   this.db.transaction(
       function(tx) {
           var sql ='CREATE TABLE IF NOT EXISTS CalidadFuente (idfuente, tipo, numero, valor, fecha)';
           tx.executeSql(sql);
       }  
   );
};

function insertarCalidadFuenteOlorSabor(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadFuente (idfuente, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
           
            var val = $("#olor option:selected").text();
            var val2 = $("#sabor option:selected").text();	
            var fu=localStorage.getItem("fuenteIDCalidad")
            var t="olor";
            var t2="sabor";
           // alert("ins"+fu+t+val);
            var f = new Date();
            var fec=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

            var params = [fu,t,1,val,fec];
            tx.executeSql(sql, params);

            var params2 = [fu,t2,1,val2,fec];
            tx.executeSql(sql, params2);

            
        }
    
    );
};
function crearTablaCalidadFuente() {
    //borrarTablaFuentes();
   this.db.transaction(
       function(tx) {
           var sql ='CREATE TABLE IF NOT EXISTS CalidadFuente (idfuente, tipo, numero, valor, fecha)';
           tx.executeSql(sql);
       }  
   );
};
function cargarTabla() {
    borrarTablaCalidadFuente();
    crearTablaCalidadFuente();
    
}
function guardarMediciones() {
    if (localStorage.getItem("cloro")=="0") {
        insertarCalidadFuenteCloro();
    }
    if (localStorage.getItem("ph")=="0") {
        insertarCalidadFuentePH();
    }
    if (localStorage.getItem("turbidez")=="0") {
        insertarCalidadFuenteTurbidez();
    }
    if (localStorage.getItem("temperatura")=="0") {
        insertarCalidadFuenteTemperatura();
    }
    if (localStorage.getItem("olorsabor")=="0") {
        insertarCalidadFuenteOlorSabor();
    }
    
}