const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html");
    next()
})

app.use(((req, res, next) => {
        const username = req.body.username || "Unknow user"
        res.render('index', {
            user : username
        })
}))

app.listen(4000);