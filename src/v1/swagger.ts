import swaggerJSDoc, { SwaggerDefinition } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from "express";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TestLinkTic Products Api",
      version: "1.0.0",
    },
  },
  apis: ["src/v1/routes/productsRoutes.ts", "src/database.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app: express.Application, port: string | number | undefined) => {
  app.use("/api/v1/docs", swaggerUi.serve);
  app.get("/api/v1/docs", swaggerUi.setup(swaggerSpec));

  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`Docs are available at http://localhost:${port}/api/v1/docs`);
};
