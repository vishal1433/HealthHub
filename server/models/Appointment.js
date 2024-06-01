// Import Mongoose
const mongoose = require('mongoose');

// Define the schema
const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  disease: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  }
});

// Create the model
const Appointment = mongoose.model('Appointment', appointmentSchema);

// Export the model
module.exports = Appointment;
