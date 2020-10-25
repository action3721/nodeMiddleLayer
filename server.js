const express = require('express');
const app = express();

app.get('/shoplist', (req, res) => {
    var data = { shop: [{ goodName: '飞机', price: 1230 }, { goodName: '电脑', price: 1000 }] }
    res.send(JSON.stringify(data));
})
app.get("/all", function (req, res) {
    var data = {
        all: '9999',
        money: '123'
    };
    res.send(JSON.stringify(data));
});
app.listen(1020);
