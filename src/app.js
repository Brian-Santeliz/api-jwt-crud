import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import routerProducts from "./routes/products.router";
import routerRegister from "./routes/register.router";
import routerLogin from "./routes/login.router";
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

//Router
app.use("/api/products", routerProducts);
app.use("/api/register", routerRegister);
app.use("/api/login", routerLogin);
//Listening
app.listen(app.get("port"), () =>
  console.log(`Server working! port: ${app.get("port")}`)
);

export default app;
