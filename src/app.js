import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import routerProducto from "./routes/products.router";
import routerUsers from "./routes/users.router";
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

//Router
app.use("/api/products", routerProducto);
app.use("/api/register", routerUsers);

//Listening
app.listen(app.get("port"), () =>
  console.log(`Server working! port: ${app.get("port")}`)
);

export default app;
