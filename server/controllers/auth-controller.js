// //home
const User = require("../models/user-models")
const Appointment = require('../models/Appointment');
const Contact =require('../models/Contact')
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
    const userExist = await User.findOne({ email });
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
    res.status(500).json({ message: "internal server error" });
    console.log(error);
  }
}


// Controller functions
const createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//signout

// POST endpoint for signing out
// const signout = async (req, res) => {
//   try {
//     // Clear any authentication-related data on the server side, if applicable
//     // For example, if you're using JWT tokens, you might want to blacklist the token

//     // Respond with a success message or status code
//     res.status(200).json({ message: 'Successfully logged out' });
//   } catch (error) {
//     // Handle any errors that occur during the logout process
//     console.error('Error during logout:', error);
//     res.status(500).json({ error: 'An error occurred during logout' });
//   }
// };

//contact us
const contactForm = async(req,res) => {
  try {
      const response = req.body;
      await Contact.create(response);
   return res.status(200).json({message:"message send sucessfully"});
  } catch (error) {
      console.log(error);
      return res.status(500).json({message:"message not delivered"}); 
  }
  };




module.exports = {
  home, register, login, createAppointment, getAllAppointments, getAppointmentById,
  deleteAppointment,contactForm
};
