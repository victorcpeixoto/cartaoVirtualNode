var mysql = require('mysql');

exports.getConnection = function BD() {
    var connection = mysql.createConnection({
      host: '45.55.151.148',
      //  host: "localhost",
        user: 'root',
      password: '51518934',
      database: 'cartao_virtual',
      port: 3306
   });

    return connection;
}

// exports.getConnection = function BD() {
//     var connection = mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: 'admin',
//       database: 'cartao_virtual',
//       port: 3306
//    });

//     return connection;
// }
