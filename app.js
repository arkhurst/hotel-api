const express = require ('express'),
    mongoose = require ('mongoose'),
    bodyParser = require('body-parser'),
    session = require('express-session');

 const app = express();
 app.use(bodyParser.urlencoded ({
     extended : true
 }));
 app.use(session({
        secret : 'ssshhhhh',saveUninitialized: true, 
        resave: true}));

 mongoose.connect('mongodb://localhost/hotelDB', (err)=>{
   if(!err){
       console.log("Database connected successfully");
   }else{
       console.log(err);
   }
});

const Schema = mongoose.Schema;
const room = new Schema ({
    roomNum : {type: String},
    floor : {type: String}

});
const user = new Schema ({
    name : {type : String},
});

const booking = new Schema ({
    userId : {type : String},
    status : {type : String},
    roomId : {type : String}
});

const Room = mongoose.model('room',room);
const User = mongoose.model('user', user);
const Booking = mongoose.model('booking', booking);

//routes
app.get('/home', (req,res) => {

});
app.get('/room', (req,res)=>{

});
app.post('/room', (req,res) => {

});
app.get('/book_rooms', (req,res) => {

});

 let port = 9000;
 app.listen(port, (error)=>{
     if(!error){
         console.log("Server app on " + port);
     }else{
         console.log(error);
     }

 });