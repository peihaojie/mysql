/*
 * @Date         : 2020-08-20 11:48:24
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-08-20 13:45:43
 * @FilePath     : \mysql.js
 */
// 连接mysql
mysql = require('mysql');
connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'maps'
});

connection.connect();

global.getData = function (sql, callback) {
  connection.query(sql, callback)
}

