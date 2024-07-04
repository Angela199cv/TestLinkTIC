"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const main = () => {
    const app = new app_1.App(4000);
    app.listen();
};
main();
