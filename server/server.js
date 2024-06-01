require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require('./router/auth-router');
// const contactRoute =require('./router/contact-router')
const connectDb = require('./utils/db')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors') 

app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth",authRoute);
// app.use('/api/patient', patientRoutes);
// app.use("/api/form",contactRoute);
app.get("/", (req, res) => {
    res.status(200).send('Welcome')
});
app.get("/register", (req, res) => {
    res.status(200).send('Welcome to register')
});

  

const PORT = 8000;
connectDb().then(()=>{

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
});
