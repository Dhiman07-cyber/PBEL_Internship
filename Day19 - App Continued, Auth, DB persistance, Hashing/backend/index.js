const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const { connection } = require('./config/db');
const { registration, userLogin } = require('./controller/user.controller');
const { authCheck } = require('./middleware/auth');
const { userProfile } = require('./controller/cart.controller');

app.use(cors());
app.use(express.json());
app.use('/api/registration', registration);
app.use('/api/login', userLogin);
app.use('/api/user', authCheck, userProfile);

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connection to DB is established");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is running on ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('<h2 style="color: violet; text-align: center;">Server is running, Welcome!</h2>');
});

app.get('/users', (req, res) => {
    res.json([]);
});