/*
 * @Date         : 2020-08-20 09:49:11
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-08-20 13:46:47
 * @FilePath     : \routes\users.js
 */
var express = require('express');
var router = express.Router();
require("../mysql");

/* GET users listing. */
router.post('/user', function (req, res, next) {
  getData('select * from user', (err, data) => {
    if (err) return err;
    res.send(data);
  })
});

module.exports = router;
