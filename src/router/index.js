const express = require('express');
let router = express.Router();
let index = require('./controll/index.js');
router.get("/", index);

let shoplist = require('./controll/shoplist.js');
router.get("/shoplist", shoplist);

module.exports = router;