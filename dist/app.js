"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
class App {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set("port", this.port || 4000);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)("dev"));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use("/products", productsRoutes_1.default);
    }
    listen() {
        this.app.listen(this.app.get("port"));
        console.log("server on port", this.app.get("port"));
    }
}
exports.App = App;
