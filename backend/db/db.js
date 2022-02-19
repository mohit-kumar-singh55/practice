const mongoose = require('mongoose');

const connection = {};

const MONGO_URI = 'mongodb://localhost:27017/practice?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

async function dbConnect() {
    if (connection.isConnected) return;

    const db = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState;
}

module.exports = dbConnect;