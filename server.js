const express = require('express');
const cors = require('cors');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
const dashboardRoutes = require('./routes/dashboard');
const imageRoutes = require("./routes/images");
const lesionsRoutes = require('./routes/lesions');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);
app.use("/images", imageRoutes);
app.use("/lesions", lesionsRoutes)


app.listen(process.env.PORT || 8080, () => {
    console.log(`Server listening on port ${PORT}`);
})