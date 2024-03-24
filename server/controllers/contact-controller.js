const Contact = require("../models/contact-model")

const contactForm = async(req,res)=> {
try {
    const response = req.body;
    await Contact.create(response);
 return res.status(200).json({message:"message send sucessfully"});
} catch (error) {
    console.log(error);
    return res.status(500).json({message:"message not delivered"}); 
}
};
//ye sb hone ke bad path decide krn HOGA In server file
module.exports =contactForm;