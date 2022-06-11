const http = require("http");
const express  = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = express();

let transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user : 'mayor8863@gmail.com',
        pass:''
    },
    tls:{
        rejectUnauthorized:false
    }
})

let mailOptions = {
    from: '"mayur testing" <mayor8863@gmail.com>',
    to : '"you to" <paliwalmayur2@gmail.com>',
    subject : 'testing purpose',
    text: 'hello',

}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return console.log(error);
    }
    console.log("message sent");
})



const server = http.createServer(app);
server.listen(3000,()=>{
    console.log("Server Started ");
})
