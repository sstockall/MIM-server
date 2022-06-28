const express = require('express');
const cors = require('cors');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
const dashboardRoutes = require('./routes/dashboard');

const app = express();
const PORT = process.env.PORT || 8080;

require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})