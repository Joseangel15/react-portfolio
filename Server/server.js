require('dotenv').config();
const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer');
const axios = require('axios');
const app = express();

// app.use(express.static(`${_dirname}/../build`));

const {

    SESSION_SECRET,
    SERVER_PORT,

} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(bodyParser.json())

//Endpoints

app.post('/api/message/', (req) => {
    
    const { name, phone, email, message} = req.body;
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: 'joseangelortiz15@gmail.com',
            pass: process.env.pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let HelperOptions = {
        from: name + email,
        to: 'joseangelortiz15@gmail.com',
        subject: 'Portfolio Email' + phone,
        text: message
    }

    transporter.sendMail(HelperOptions, (error, info) => {
        if(error) {
            return console.log(error)
        }
        console.log('Message sent')
        console.log(info)
    })
})

app.listen(SERVER_PORT, () => {console.log(`Server ${SERVER_PORT} connected`); });