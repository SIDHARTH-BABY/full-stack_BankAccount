import bank from "../model/bank.js";

export const postBankDetails = async (req, res) => {
  let { name, gender, dob, email } = req.body;
  console.log(name, gender, dob, email, "kkkkk");

  const newBankDetails = new bank({
    name,
    gender,
    dob,
    email,
  });
  const savedBank = await newBankDetails.save();
  res.status(200).json({ message: "success", savedBank });
};
