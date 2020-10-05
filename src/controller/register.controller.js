import Users from "../models/Users";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
export const registerControllerPost = async (req, res) => {
  try {
    //check for de express-validator
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json(error.array());

    //verify this user dont exist
    const { email, name, password } = req.body;
    const responseEmail = await Users.findOne({ email });
    if (responseEmail) return res.status(400).json("user already exist");

    //create new user & encript password
    let userSaved = new Users({
      name,
      email,
      password: await Users.encryptPassword(password),
    });
    await userSaved.save(userSaved);

    //create JWT
    const payload = {
      id: userSaved.id,
    };
    const options = {
      expiresIn: 3600, //seconds
    };
    //verify jwt and check if is same id in payload
    const Jwt = jwt.sign(payload, process.env.SECRET_KEY, options);
    res.status(201).json(Jwt);
  } catch (error) {
    console.error(error);
    res.status(500).json("something was wrong");
  }
};
export const registerControllerGet = async (req, res) => {
  try {
    const response = await Users.find();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).json("something was wrong");
  }
};
