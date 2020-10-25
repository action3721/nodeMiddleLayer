module.exports = function (req, res) {
    //调取这个页面对应数据，然后结合视图模版
    var model = require("../../model/indexModel.js");
    model(function (result) {

        res.render("./index.art", result);
    })
}