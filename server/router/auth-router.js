const express = require ("express");
const router =  express.Router();
const {home,register,login} = require('../controllers/auth-controller')
const signupSchema = require('../validators/auth-validators')
const validate = require("../middlewares/validate-middleware")
// const router = require('./router/auth-router');

// app.use("/api/auth",router);

// router.get("/",(req,res)=>{
//     res.status(200).send('Welcome to vishal company')
//      });
//ye ek sath likha hua h esliye controllers use karenge

     router.route("/").get(home);
     //registration hone se phle ye check krega user ne jo v data fill ki h kya wo zod schema me maine jo define ki h uske barabar hai ya nahi 
     router.route("/register").post(validate(signupSchema),register);
     // yaha register pe phle check kar rha hai  sb perfect he ya nahi uske bad jake registraion logic pe jayega
     //after validation models pe jayega wo wala schema me
     router.route("/login").post(login);



     module.exports = router;
     