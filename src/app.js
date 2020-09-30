import express from "express";
import morgan from "morgan";
import routerProducto from "./routes/products.router";
import dotenv from "dotenv";
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
app.listen(app.get("port"), () =>
  console.log(`Server working! port: ${app.get("port")}`)
);

export default app;
