import Users from "../models/Users";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

export const loginControllerPost = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) return res.status(400).json(error.array());
  const { email, password } = req.body;
  //check if the email exist
  let checkUser = await Users.findOne({ email });
  if (!checkUser) return res.status(400).json("this user don't exist");
  //check password is the same
  const resPass = await Users.verifyPassword(password, checkUser.password);
  if (!resPass) return res.status(403).json("password incorrect");

  const payload = {
    id: checkUser.id,
  };
  const options = {
    expiresIn: 3600,
  };
  const JWT = jwt.sign(payload, process.env.SECRET_KEY, options);
  return res.status(200).json({ msg: "Login succesfully", token: JWT });
};
