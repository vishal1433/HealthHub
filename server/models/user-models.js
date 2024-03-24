const { genSalt } = require("bcrypt");
const bcrypt = require("bcrypt")
const mongoose = require ("mongoose");
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
   phone:{
        type:String,
        required:true,
    },
   password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    
});
//Secure the password
userSchema.pre("save",async function(next){
    // console.log("pre method",this); //ye data ko console pe dikhane ke liye
    const user = this; //this ko user ke andr add kiya
    //agar password change nhi hua h to next  databasase me store ktrega
    //ek tarah se ye middleware h
    if(!user.isModified('password')){
        next();
    }

    //agr password chnge hua hai tb try catch hoga
    try {
        const saltRound= await bcrypt.genSalt(10);
        //this me user.password tha or usi ko hash_password kr diya
        const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password=hash_password;
    } catch (error) {
        next(error);
    }

});

//JSON Web tokens
// ye use hote h 2 kam ke liye authentication and authorization
//authentication matlb identify kar rhe h
//authorization identify krne ke bad kya acces denge usko
//components
// header - contains metadata about the token
// payload - user ka information add krte h as a entity
// signature- secreat signature hoga jo server ko malum hoga
//its like a token agr token raha to enter kr skte nhi to nahi

//ye database pe store nhi krna always browser pe store krna h  in the form of cookies or local storage
//code start ho rha  auth-conrtoller ka catch (error) ke upr se
userSchema.methods.generateToken = async function(){
    //ab hum generate token ko kahi v access kar skte hai auth-controller me
 //isme do chiz h jwt.sign or jwt.verify
try {
    return jwt.sign({
        userId: this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin,
    },
    //ab signature pass krni h dotenv pe
    process.env.JWT_SECRET_KEY,
    {
    expiresIn: "30d",
    }
    );
    // res.cookie('jwt', token, { httpOnly: true });
    // res.send('Login successful');
} catch (error) {
    console.error(error);
}
}

const User= new mongoose.model("User",userSchema);
module.exports = User;