const express = require('express')
const app = express()
let ejs = require('ejs')
const port = 3000
// let hour = new Date().getHours()
// let day=new Date().getDay()

// const verifyDate=fonctionfunction(req, res, next){
//     if ((8 <hour < 18)&&(day!==0)&&(day!==6)){
//         next()
//     }
//     else{
//         alert("This web application is only available during working hours (Monday to Friday,  from 9 to 17)")
//     }
// }
// app.use(verifyDate)
app.use( express.static( "public" ) )
app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/', function(req, res,) {
    res.render('pages/home');
});
app.get('/about', function(req, res,) {
    res.render('pages/about');
});
app.get('/contactus', function(req, res,) {
    res.render('pages/contactus');
});
// app.get('/', (req, res) => {
//   res.send('Hello Worljmkllkkjgvcckkkkkkkjjjd!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// var express = require('express')
// var app = express()

// app.set('view engine', 'ejs');
// app.set('views','./views');

// app.get('/', function(req, res) {
//     res.render('pages/home');
// });
// app.get('/about', function(req, res) {
//     res.render('pages/about');
// });
// app.get('/contact us', function(req, res) {
//     res.render('pages/contact us');
// });

// app.listen(3000)