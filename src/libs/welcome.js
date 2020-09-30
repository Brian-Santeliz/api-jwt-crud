import metaInfo from "../../package.json";
const welcome = (req, res) => {
  res.status(200).json({
    msg: "Welcome to the API Products",
    Author: metaInfo.author,
    Description: metaInfo.description,
    Version: metaInfo.version,
  });
};
export default welcome;
