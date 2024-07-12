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

module.exports = { createFormData,admindata };
