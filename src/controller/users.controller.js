import Users from "../models/Users";
export const registerControllerPost = async (req, res) => {
  try {
    const { email } = req.body;
    const responseEmail = await Users.findOne({ email });
    if (responseEmail) return res.status(400).json("user already exist");

    let userSaved = new Users(req.body);
    await userSaved.save(userSaved);
    res.status(201).json(userSaved);
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
