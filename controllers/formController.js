const FormData = require('../models/FormData');
const { formValidationSchema } = require('../validation/formValidation');

const createFormData = async (req, res) => {
  const { error } = formValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    // Check if a document with the same USN already exists
    const existingFormData = await FormData.findOne({ usn: req.body.usn });
    if (existingFormData) {
      return res.status(200).json({ status: true, msg: "Data with this USN already exists" });
    }

    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json({ status: true, msg: "Your data has been recorded!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const admindata=async(req,res)=>{
    let data= await FormData.find();
    // console.log(data)
    res.status(200).json(data)
}

const hitfunc=(req,res)=>{
  res.status(200).json({ status: true, msg: "Server Running..." });
}
const axios = require('axios');

// Function to make the API call
const hitApiRoute = async () => {
  try {
    const response = await axios.get('https://workshop-frgm.onrender.com/api/hit'); // Replace with your actual API endpoint
    console.log(response.data); // Log the response if needed
  } catch (error) {
    console.error('Error hitting API:', error.message);
  }
};

// Function to schedule hitting the API route every 2 minutes
const scheduleHit = () => {
  // Initially hit the API when starting the script
  hitApiRoute();

  // Schedule hitting the API every 2 minutes (120000 milliseconds)
  setInterval(hitApiRoute, 120000);
};
module.exports = { createFormData,admindata, hitApiRoute, scheduleHit };
