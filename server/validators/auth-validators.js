const {z} = require("zod");
//creating a object schema
const signupSchema = z.object({
    username:z
    .string({required_error:"Name is Required"})
    .trim()
    .min(3,{message: "Name must be atleast of 3 char."})
    .max(255,{message: "Name must not be more then 255 characters"}),
   email:z
    .string({required_error:"Email is Required"})
    .trim()
    .email({message: "Invalid Email address"})
    .min(3,{message: "Email must be atleast of 3 char."})
    .max(255,{message: "Email must not be more then 255 characters"}),
    phone:z
    .string({required_error:"Phone is Required"})
    .trim()
    .min(10,{message: "Phone must be atleast of 10 char."})
    .max(20,{message: "Phone must not be more then 20 characters"}),
    password:z
    .string({required_error:"Password is Required"})
    .trim()
    .min(6,{message: "Password must be atleast of 6 char."})
    .max(1024,{message: "Password must not be more then 1024 characters"}),
});
//jb hum scema create kar lete h tb we need a  validate middleware
//  jo validate kare ki user ne registration karte samay jo v data fill kiya he
//or zod me jo v schema define kiya hai h kya wo mil rhe h ya NAHI
//to hum middlware bnaynge or validate-middlewares par baki code krnge

module.exports= signupSchema;