// //home
const User = require("../models/user-models")
const bcrypt = require("bcrypt")

const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to vishal Homepage');
    } catch (error) {
        console.log("error");
    }
};


//Register 
const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "email already exisst" });
        }
        //agar email match nahi karta to hash the password
        // const saltRound= 10;
        // const hash_password =await bcrypt.hash(password,saltRound);

        const userCreated = await User.create(
            {
                username,
                email,
                phone,
                password,
            });
        //yaha se start kiye jwt ka code
        res.status(200).json({
            msg: "Registration Sucessful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
            //object se string me kiye sab

        });

    } catch (error) {
        res.status(400).send({ msg: "page not found" });
    }
};

//login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        //email valid or not
        const userExist = await User.findOne({ email});
        if (!userExist) {
            return res.status(400).json({ message: "invalid credential" });
        }
        //agr user exist krta hai to compare password krna hoga

        const user = await bcrypt.compare(password, userExist.password);
        // console.log(password,userExist.password);
        if (user) {
            res.status(200).json({
                msg: "Login Sucessful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
             
            }

            );
           
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({message:"internal server error"});
        console.log(error);
    }
}

module.exports = { home, register, login };
