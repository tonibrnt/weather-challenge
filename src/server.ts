import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import { options } from "./swagger";
import routes from "./routes";
import "./database";

const app = express();

app.use(express.json());

const specs = swaggerJsdoc(options);

app.use("/", swaggerUi.serve, swaggerUi.setup(specs));

app.use(routes);

app.listen(3000, () => {
  console.log("Server up");
});
