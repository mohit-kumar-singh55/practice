const express = require('express');
const cors = require('cors');
const dbConnect = require("./db/db");

// connected to DB
dbConnect();

const app = express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(3000, () => console.log("App is Listening at http://localhost:3000"));