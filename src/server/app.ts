import express from "express";
import morgan from "morgan";
import userRoutes from "../routes";
import router from "../pag/made";

class Application {
  app: express. Application;
  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }
  settings() {
    this.app.set("port", process.env.PORT || 8000);
    
  }
  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`server running on port ${this.app.get("port")}`);
    });
  }
  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  routes(){
    this.app.use("/api", userRoutes);
    this.app.use("/", router);
  }
}

export default Application;
