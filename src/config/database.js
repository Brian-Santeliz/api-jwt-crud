import mongoose from "mongoose";

const initDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error(error);
    res.status(500).json("Something was wrong with DB");
  }
};

export default initDB;
