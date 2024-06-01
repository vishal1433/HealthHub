//ye 1st process h contact us form ka
// Import Mongoose
const mongoose = require('mongoose');

// Define the schema
const contactSchema  = new mongoose.Schema({
    name: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  },

 email: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
});

// Create the model
const Contact = mongoose.model('Contact', contactSchema);

// Export the model
module.exports = Contact;





