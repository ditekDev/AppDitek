var self = this;
var db;
this.db= openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);

//FUENTE
function borrarTablaCalidadFuente(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS CalidadFuente');
        }
    );
};

//TANQUE
function borrarTablaCalidadTanque(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS CalidadTanque');
        }
    );
};

//RED
function borrarTablaCalidadRed(){
    this.db.transaction(
        function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS CalidadRed');
        }
    );
};

//FUENTE
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

//TANQUE
function insertarCalidadTanqueCloro(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadTanque (idtanque, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txtCloro")[0].value;	
            var fu=localStorage.getItem("tanqueID")
            var t="cloro";
           // alert("ins"+fu+t+val);
            var f = new Date();
            var fec=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
            var params = [fu,t,1,val,fec];
            
            tx.executeSql(sql, params);
            
        }
    
    );
};

//RED
function insertarCalidadRedCloro(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadRed (numero_paja, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txtCloro")[0].value;	
<<<<<<< HEAD
<<<<<<< HEAD
            var paja=localStorage.getItem("pajaID")
=======
            var fu=localStorage.getItem("pajaID")
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
            var fu=localStorage.getItem("pajaID")
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            var t="cloro";
           // alert("ins"+fu+t+val);
            var f = new Date();
            var fec=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
<<<<<<< HEAD
<<<<<<< HEAD
            var params = [paja,t,1,val,fec];
=======
            var params = [fu,t,1,val,fec];
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
            var params = [fu,t,1,val,fec];
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            
            tx.executeSql(sql, params);
            
        }
    
    );
};


//FUENTE
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

//TANQUE
function insertarCalidadTanquePH(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadTanque (idtanque, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txtph1")[0].value;	
            var fu=localStorage.getItem("tanqueID")
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

//RED
<<<<<<< HEAD
<<<<<<< HEAD
function insertarCalidadRedPH(){
=======
function insertarCalidadFuentePH(){
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
function insertarCalidadFuentePH(){
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadRed (numero_paja, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txtph1")[0].value;	
<<<<<<< HEAD
<<<<<<< HEAD
            var paja=localStorage.getItem("pajaID")
=======
            var fu=localStorage.getItem("pajaID")
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
            var fu=localStorage.getItem("pajaID")
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            var t="ph";
           // alert("ins"+fu+t+val);
            var f = new Date();
            var fec=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
<<<<<<< HEAD
<<<<<<< HEAD
            var params = [paja,t,1,val,fec];
            tx.executeSql(sql, params);

            var val2=document.getElementsByName("txph2")[0].value;
            var params2 = [paja,t,2,val2,fec];
            tx.executeSql(sql, params2);

            var val3=document.getElementsByName("txtph3")[0].value;
            var params3 = [paja,t,3,val3,fec];
=======
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            var params = [fu,t,1,val,fec];
            tx.executeSql(sql, params);

            var val2=document.getElementsByName("txph2")[0].value;
            var params2 = [fu,t,2,val2,fec];
            tx.executeSql(sql, params2);

            var val3=document.getElementsByName("txtph3")[0].value;
            var params3 = [fu,t,3,val3,fec];
<<<<<<< HEAD
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            tx.executeSql(sql, params3);
            
        }
    
    );
};

//FUENTE
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

//TANQUE
function insertarCalidadTanqueTemperatura(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadTanque (idtanque, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txttemp1")[0].value;	
            var fu=localStorage.getItem("tanqueID")
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

//RED
<<<<<<< HEAD
<<<<<<< HEAD
function insertarCalidadRedTemperatura(){
=======
function insertarCalidadTanqueTemperatura(){
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
function insertarCalidadTanqueTemperatura(){
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadRed (numero_paja, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txttemp1")[0].value;	
<<<<<<< HEAD
<<<<<<< HEAD
            var paja=localStorage.getItem("pajaID")
=======
            var fu=localStorage.getItem("pajaID")
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
            var fu=localStorage.getItem("pajaID")
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            var t="temperatura";
           // alert("ins"+fu+t+val);
            var f = new Date();
            var fec=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
<<<<<<< HEAD
<<<<<<< HEAD
            var params = [paja,t,1,val,fec];
            tx.executeSql(sql, params);

            var val2=document.getElementsByName("txttemp2")[0].value;
            var params2 = [paja,t,2,val2,fec];
            tx.executeSql(sql, params2);

            var val3=document.getElementsByName("txttemp3")[0].value;
            var params3 = [paja,t,3,val3,fec];
=======
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            var params = [fu,t,1,val,fec];
            tx.executeSql(sql, params);

            var val2=document.getElementsByName("txttemp2")[0].value;
            var params2 = [fu,t,2,val2,fec];
            tx.executeSql(sql, params2);

            var val3=document.getElementsByName("txttemp3")[0].value;
            var params3 = [fu,t,3,val3,fec];
<<<<<<< HEAD
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            tx.executeSql(sql, params3);
            
        }
    
    );
};


//FUENTE
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

//TANQUE
function insertarCalidadTanqueTurbidez(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadTanque (idtanque, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txtturb1")[0].value;	
            var fu=localStorage.getItem("tanqueID")
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

//RED
<<<<<<< HEAD
<<<<<<< HEAD
function insertarCalidadRedTurbidez(){
=======
function insertarCalidadFuenteTurbidez(){
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
function insertarCalidadFuenteTurbidez(){
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadRed (numero_paja, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
            var val=document.getElementsByName("txtturb1")[0].value;	
<<<<<<< HEAD
<<<<<<< HEAD
            var paja=localStorage.getItem("pajaID")
=======
            var fu=localStorage.getItem("pajaID")
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
            var fu=localStorage.getItem("pajaID")
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            var t="turbidez";
           // alert("ins"+fu+t+val);
            var f = new Date();
            var fec=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
<<<<<<< HEAD
<<<<<<< HEAD
            var params = [paja,t,1,val,fec];
            tx.executeSql(sql, params);

            var val2=document.getElementsByName("txtturb2")[0].value;
            var params2 = [paja,t,2,val2,fec];
            tx.executeSql(sql, params2);

            var val3=document.getElementsByName("txtturb3")[0].value;
            var params3 = [paja,t,3,val3,fec];
=======
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            var params = [fu,t,1,val,fec];
            tx.executeSql(sql, params);

            var val2=document.getElementsByName("txtturb2")[0].value;
            var params2 = [fu,t,2,val2,fec];
            tx.executeSql(sql, params2);

            var val3=document.getElementsByName("txtturb3")[0].value;
            var params3 = [fu,t,3,val3,fec];
<<<<<<< HEAD
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            tx.executeSql(sql, params3);
            
        }
    
    );
};

//FUENTE
function crearTablaCalidadFuente() {
    //borrarTablaFuentes();
   this.db.transaction(
       function(tx) {
           var sql ='CREATE TABLE IF NOT EXISTS CalidadFuente (idfuente, tipo, numero, valor, fecha)';
           tx.executeSql(sql);
       }  
   );
};

//TANQUE
function crearTablaCalidadTanque() {
   this.db.transaction(
       function(tx) {
           var sql ='CREATE TABLE IF NOT EXISTS CalidadTanque (idtanque, tipo, numero, valor, fecha)';
           tx.executeSql(sql);
       }  
   );
};

//RED
function crearTablaCalidadRed() {
   this.db.transaction(
       function(tx) {
           var sql ='CREATE TABLE IF NOT EXISTS CalidadRed (numero_paja, tipo, numero, valor, fecha)';
           tx.executeSql(sql);
       }  
   );
};

//FUENTE
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

//TANQUE
function insertarCalidadTanqueOlorSabor(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadTanque (idtanque, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
           
            var val = $("#olor option:selected").text();
            var val2 = $("#sabor option:selected").text();	
            var fu=localStorage.getItem("tanqueID")
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

//RED
function insertarCalidadRedOlorSabor(){
    var db = openDatabase('diteklocal', '1.0', 'DB', 2 * 1024 * 1024);
    db.transaction(
        function(tx) {
           
            var sql ="INSERT OR REPLACE INTO CalidadRed (numero_paja, tipo, numero, valor, fecha) VALUES (?, ?, ?, ?, ?)";
           
            var val = $("#olor option:selected").text();
            var val2 = $("#sabor option:selected").text();	
<<<<<<< HEAD
<<<<<<< HEAD
            var paja=localStorage.getItem("pajaID")
=======
            var fu=localStorage.getItem("pajaID")
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
            var fu=localStorage.getItem("pajaID")
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            var t="olor";
            var t2="sabor";
           // alert("ins"+fu+t+val);
            var f = new Date();
            var fec=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

<<<<<<< HEAD
<<<<<<< HEAD
            var params = [paja,t,1,val,fec];
            tx.executeSql(sql, params);

            var params2 = [paja,t2,1,val2,fec];
=======
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            var params = [fu,t,1,val,fec];
            tx.executeSql(sql, params);

            var params2 = [fu,t2,1,val2,fec];
<<<<<<< HEAD
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
            tx.executeSql(sql, params2);

            
        }
    
    );
};



function cargarTabla() {
    borrarTablaCalidadFuente();
    borrarTablaCalidadTanque();
    borrarTablaCalidadRed();
    crearTablaCalidadFuente();
    crearTablaCalidadTanque();
    crearTablaCalidadRed();
}

//GUARDAR MEDICIONES FUENTE - TANQUE - RED
function guardarMediciones() {
<<<<<<< HEAD
<<<<<<< HEAD
    if (localStorage.getItem("fuenteCalidad")!=="") {

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
    
        insertarNubeCalidadFuente();
        
    }
    
    if (localStorage.getItem("tanque")!=="") {
        
=======
    if (localStorage.getItem("fuenteCalidad")=="") {
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
    if (localStorage.getItem("fuenteCalidad")=="") {
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
        if (localStorage.getItem("cloro")=="0") {
            insertarCalidadTanqueCloro();
        }
        if (localStorage.getItem("ph")=="0") {
            insertarCalidadTanquePH();
        }
        if (localStorage.getItem("turbidez")=="0") {
            insertarCalidadTanqueTurbidez();
        }
        if (localStorage.getItem("temperatura")=="0") {
            insertarCalidadTanqueTemperatura();
        }
        if (localStorage.getItem("olorsabor")=="0") {
            insertarCalidadTanqueOlorSabor();
        }
    
        insertarNubeCalidadTanque();
<<<<<<< HEAD
<<<<<<< HEAD
    }

    if (localStorage.getItem("pajaID")!=="") {
        
        if (localStorage.getItem("cloro")=="0") {
            insertarCalidadRedCloro();
        }
        if (localStorage.getItem("ph")=="0") {
            insertarCalidadRedPH();
        }
        if (localStorage.getItem("turbidez")=="0") {
            insertarCalidadRedTurbidez();
        }
        if (localStorage.getItem("temperatura")=="0") {
            insertarCalidadRedTemperatura();
        }
        if (localStorage.getItem("olorsabor")=="0") {
            insertarCalidadRedOlorSabor();
        }
    
        insertarNubeCalidadRed();
    }
   
=======
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
    }else{
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
    
        insertarNubeCalidadFuente();

    }
   
    
<<<<<<< HEAD
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
}



//FUENTE
function insertarNubeCalidadFuente() {
	var con = localStorage.getItem("conexion");
    if (con=="1") {
        db.transaction(function (tx) {
        	tx.executeSql('SELECT * FROM CalidadFuente', [], function (tx, results) {
                var len = results.rows.length;
                
                if(len>0)
                {
                    for (var i = 0; i < len; i++) {
                       
                        var fuen=results.rows.item(i)['idfuente'];
                        var t=results.rows.item(i)['tipo'];
                        var n=results.rows.item(i)['numero'];
                        var v=results.rows.item(i)['valor'];
                        var fech=results.rows.item(i)['fecha'];
                    
                        archivo = "http://grupoditek.com/php/insertarCalidadFuente.php?jsoncallback=?"
                        $.getJSON( archivo, { fuente: fuen, tipo: t ,numero: n , valor: v , fecha:fech })
                        .done(function(respuestaServer) {
                            
                            if(respuestaServer.validacion == "ok"){
                                 /// si la validacion es correcta
                                 borrarTablaCalidadFuente();
                                location.href="menu.html";
                                localStorage.setItem("fuenteCalidad","");
                              
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

//TANQUE
function insertarNubeCalidadTanque() {
	var con = localStorage.getItem("conexion");
    if (con=="1") {
        db.transaction(function (tx) {
        	tx.executeSql('SELECT * FROM CalidadTanque', [], function (tx, results) {
                var len = results.rows.length;
                
                if(len>0)
                {
                    for (var i = 0; i < len; i++) {
                       
                        var tanq=results.rows.item(i)['idtanque'];
                        var t=results.rows.item(i)['tipo'];
                        var n=results.rows.item(i)['numero'];
                        var v=results.rows.item(i)['valor'];
                        var fech=results.rows.item(i)['fecha'];
                    
                        archivo = "http://grupoditek.com/php/insertarCalidadTanque.php?jsoncallback=?"
                        $.getJSON( archivo, { tanque: tanq, tipo: t ,numero: n , valor: v , fecha:fech })
                        .done(function(respuestaServer) {
                            
                            if(respuestaServer.validacion == "ok"){
                                 /// si la validacion es correcta
                                 borrarTablaCalidadTanque();
                                location.href="menu.html";
                              
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

//RED
function insertarNubeCalidadRed() {
	var con = localStorage.getItem("conexion");
    if (con=="1") {
        db.transaction(function (tx) {
        	tx.executeSql('SELECT * FROM CalidadRed', [], function (tx, results) {
                var len = results.rows.length;
                
                if(len>0)
                {
                    for (var i = 0; i < len; i++) {
                       
<<<<<<< HEAD
<<<<<<< HEAD
                        var r=results.rows.item(i)['numero_paja'];
=======
                        var r=results.rows.item(i)['idred'];
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
                        var r=results.rows.item(i)['idred'];
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
                        var t=results.rows.item(i)['tipo'];
                        var n=results.rows.item(i)['numero'];
                        var v=results.rows.item(i)['valor'];
                        var fech=results.rows.item(i)['fecha'];
                    
                        archivo = "http://grupoditek.com/php/insertarCalidadRed.php?jsoncallback=?"
<<<<<<< HEAD
<<<<<<< HEAD
                        $.getJSON( archivo, { paja: r, tipo: t ,numero: n , valor: v , fecha:fech })
=======
                        $.getJSON( archivo, { red: r, tipo: t ,numero: n , valor: v , fecha:fech })
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
                        $.getJSON( archivo, { red: r, tipo: t ,numero: n , valor: v , fecha:fech })
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
                        .done(function(respuestaServer) {
                            
                            if(respuestaServer.validacion == "ok"){
                                 /// si la validacion es correcta
<<<<<<< HEAD
<<<<<<< HEAD
                                 //borrarTablaCalidadRed();
=======
                                 borrarTablaCalidadRed();
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
=======
                                 borrarTablaCalidadRed();
>>>>>>> 7ebdc6b3fc558cfb04e82a98c1f9fdd63543f2e7
                                location.href="menu.html";
                              
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

