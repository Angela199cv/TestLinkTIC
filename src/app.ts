import express, { Application } from "express";
import morgan from "morgan";
import indexRoutes from "./routes/indexRoutes";
import postRoutes from "./routes/productsRoutes";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", this.port || 4000);
  }

  middlewares() {
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use("/list/products",postRoutes);
  }

  listen() {
    this.app.listen(this.app.get("port"));
    console.log("server on port", this.app.get("port"));
  }
}
