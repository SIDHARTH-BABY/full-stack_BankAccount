import mongoose from "mongoose";

const bankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  gender: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  dob: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
});

const Bank = mongoose.model('bank', bankSchema)


export default Bank
