window.dao =  {
    
        syncURL: "http://grupoditek.com/php/jsonUsuarios.php",
    
        initialize: function(callback) {
            var self = this;
            this.db = window.openDatabase("diteklocal", "1.0", "Sync DB", 200000);
  
            this.db.transaction(
                function(tx) {
                    tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='employee'", this.txErrorHandler,
                        function(tx, results) {
                            if (results.rows.length == 1) {
                                //existe base local
                            }
                            else
                            {
                              
                                self.createTable(callback);
                            }
                        });
                }
            )
    
        },
     
      
        ini: function(callback) {
            this.db.transaction(
                function(tx) {
                    var sql = "SELECT * FROM employee WHERE usuario="+$("#txtuser").val()+" AND contrasena="+$("#txtpassword").val()+"";
                    tx.executeSql(sql, this.txErrorHandler,
                        function(tx, results) {
                            var usu = results.rows.length;
                            console.log("filas: "+usu+"");
                            alert("filas: "+usu+"");
                            callback(usu);
                        }
                    );
                }
            );
        },
            
        createTable: function(callback) {
            this.db.transaction(
                function(tx) {
                    var sql =
                        "CREATE TABLE IF NOT EXISTS employee ( " +
                        "id INTEGER PRIMARY KEY , " +
                        "usuario VARCHAR(50), " +
                        "contrasena VARCHAR(50), " +
                        "nombre VARCHAR(50), " +
                        "officePhone VARCHAR(50), " +
                        "id_acueducto INTEGER, " +
                        "lastModified VARCHAR(50))";
                    tx.executeSql(sql);
                },
                this.txErrorHandler,
                function() {
                  
                   
                }
            );
        },
    
        dropTable: function(callback) {
            this.db.transaction(
                function(tx) {
                    tx.executeSql('DROP TABLE IF EXISTS employee');
                },
                this.txErrorHandler,
                function() {
          
                 
                }
            );
        },
    
        findAll: function(callback) {
            this.db.transaction(
                function(tx) {
                    var sql = "SELECT * FROM EMPLOYEE";
           
                    tx.executeSql(sql, this.txErrorHandler,
                        function(tx, results) {
                            var len = results.rows.length,
                                employees = [],
                                i = 0;
                            for (; i < len; i = i + 1) {
                                employees[i] = results.rows.item(i);
                            }
          
                            callback(employees);
                        }
                    );
                }
            );
        },
    
        getLastSync: function(callback) {
            this.db.transaction(
                function(tx) {
                    var sql = "SELECT MAX(lastModified) as lastSync FROM employee";
                    tx.executeSql(sql, this.txErrorHandler,
                        function(tx, results) {
                            var lastSync = results.rows.item(0).lastSync;
         
                            callback(lastSync);
                        }
                    );
                }
            );
        },
    
        sync: function(callback) {
    
            var self = this;

            this.getLastSync(function(lastSync){
                self.getChanges(self.syncURL, lastSync,
                    function (changes) {
                        if (changes.length > 0) {
                            self.applyChanges(changes, callback);
                        } else {
                            log('Nothing to synchronize');
                            callback();
                        }
                    }
                );
            });
    
        },
    
        getChanges: function(syncURL, modifiedSince, callback) {
    
            $.ajax({
                url: syncURL,
                data: {modifiedSince: modifiedSince},
                dataType:"json",
                success:function (data) {
           
                    callback(data);
                },
                error: function(model, response) {
                    alert(response.responseText);
                }
            });
    
        },
    
        applyChanges: function(employees, callback) {
            this.db.transaction(
                function(tx) {
                    var l = employees.length;
                    var sql =
                        "INSERT OR REPLACE INTO employee (id, usuario, contrasena, nombre, officePhone, id_acueducto, lastModified) " +
                        "VALUES (?, ?, ?, ?, ?, ?, ?)";
        
                    var e;
                    for (var i = 0; i < l; i++) {
                        e = employees[i];
                       
                        var params = [e.id, e.usuario, e.contrasena, e.nombre, e.officePhone, e.id_acueducto, e.lastModified];
                        tx.executeSql(sql, params);
                    }
                 
                },
                this.txErrorHandler,
                function(tx) {
                    callback();
                }
            );
        },
    
        txErrorHandler: function(tx) {
            alert(tx.message);
        }
    };
    
    dao.initialize(function() {
        console.log('database initialized');
    });
 
    
    
    $('#inic').on('click', function() {
        dao.ini();
        
    });
    
    function sincronizar() {
        dao.dropTable();
        dao.createTable();
        dao.sync(renderList);
    }
    
  

    function renderList(employees) {
      
        dao.findAll(function(employees) {
            $('#list').empty();
            var l = employees.length;
            for (var i = 0; i < l; i++) {
                var employee = employees[i];
                $('#list').append('<tr>' +
                    '<td>' + employee.id + '</td>' +
                    '<td>' +employee.usuario + '</td>' +
                    '<td>' + employee.contrasena + '</td></tr>');
            }
        });
    }
    
    function log(msg) {
        $('#log').val($('#log').val() + msg + '\n');
    }
    
    