import express, { Application } from "express";
import morgan from "morgan";
import indexRoutes from "./v1/routes/indexRoutes";
import productRoutes from "./v1/routes/productsRoutes";
import { swaggerDocs as V1SwaggerDocs } from "./v1/swagger";

export class App {
  public app: Application;

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
    this.app.use(express.urlencoded({ extended: false }));
    V1SwaggerDocs(this.app, this.port);
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use("/v1/products", productRoutes);
  }

  listen() {
    this.app.listen(this.app.get("port"));
    console.log("server on port", this.app.get("port"));
  }
}
