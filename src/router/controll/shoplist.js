module.exports = function (req, res) {
    //调取这个页面对应数据，然后结合视图模版
    var model = require("../../model/shoplist.js");
    model(function (result) {

        res.render("./shoplist.art", result);
    })
}