const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();
const bodyparser = require("body-parser");
const path = require("path");

const connectDB = require('./server/database/connection');

dotenv.config({path: 'config.env'})
//const PORT = process.env.PORT|| 8080

app.use(morgan('tiny'));

connectDB();

app.use(bodyparser.urlencoded({extended: true}))

app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'))



app.get('/add_user',(req, res)=>{
    res.render('add_user');
})


app.get('/update_user',(req, res)=>{
    res.render('update_user');
})


//app.listen(PORT,()=>{console.log("Server is running on http://localhost:$(PORT)")});
app.listen(5500,()=>{console.log(`Server is running on http://localhost:${5500}`)});
