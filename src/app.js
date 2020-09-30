import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import routerProducts from "./routes/products.router";
import routerRegister from "./routes/register.router";
import routerLogin from "./routes/login.router";
import verifyToken from "./middlewares/verifyToken";
import welcome from "./libs/welcome";
const app = express();
dotenv.config();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
app.use("/api/welcome", welcome);
app.use("/api/register", routerRegister);
app.use("/api/login", routerLogin);
app.use("/api/products", verifyToken, routerProducts);
//Listening
app.listen(app.get("port"), () =>
  console.log(`Server working! port: ${app.get("port")}`)
);

export default app;
