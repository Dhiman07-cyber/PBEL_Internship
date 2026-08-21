const mongoose = require("mongoose");
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);
require('dotenv').config()

const connection = mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    connection
}