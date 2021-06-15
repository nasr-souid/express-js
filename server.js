const express = require('express')
const app = express()
let ejs = require('ejs')
const port = 5432
const verifyDate=require('./public/middleware/verifyDate')

app.use(express.static(__dirname + "/public" ) )
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(verifyDate)

app.get('/', function(req, res,) {
    res.render('pages/home');
});
app.get('/about', function(req, res,) {
    res.render('pages/about');
});
app.get('/contactUs', function(req, res,) {
    res.render('pages/contactUs');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
