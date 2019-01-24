require('dotenv').config();
const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/../build`));

const {

    SERVER_PORT,

} = process.env;


app.use(bodyParser.json())


<<<<<<< HEAD
app.listen(SERVER_PORT, () => {console.log(`Server ${SERVER_PORT} connected`); });
=======
app.listen(SERVER_PORT, () => {console.log(`Server ${3880} connected`); });
>>>>>>> d6253198cfc1347bd781493ecd872bd29e877c8c
