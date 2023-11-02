import express from "express";

import sequelize from "./database";
import CityController from "./controllers/cityController";

const routes = express.Router();

const cityController = new CityController(sequelize);

routes.get("/city/weather/:cityId", cityController.getCityWeather);
/**
 * @swagger
 * city/{cityName}:
 *   get:
 *     summary: Find city by given name
 *     parameters:
 *       - in: path
 *         name: cityName
 *         schema:
 *           type: string
 *         required: true
 *         description: The city name 
 */
routes.get("/city/:cityName", cityController.findCityByName);

export default routes;
