import { Sequelize } from "sequelize";
import { Request, Response } from "express";

import City from "../models/city";
import Weather from "../models/weather";
import { CptecService } from "../services/brasilapi";

class CityController {
  sequelize: Sequelize;
  cptecService: CptecService;

  constructor(sequelize: Sequelize) {
    this.sequelize = sequelize;
    this.cptecService = new CptecService();
    City.sync();
    Weather.sync();
  }

  findCityByName = async (req: Request, res: Response) => {
    try {
      const { data } = await this.cptecService.findCityByName(
        req.params.cityName
      );
      await this.sequelize.models["City"].bulkCreate(data, {
        updateOnDuplicate: ["nome", "estado"],
      });
      res.json(data);
    } catch (error) {
      res.status(500);
    }
  };

  getCityWeather = async (req: Request, res: Response) => {
    try {
      const cityId = parseInt(req.params.cityId);
      const { data } = await this.cptecService.getCityWeather(cityId);
      const weatherModel = this.sequelize.models["Weather"];
      await weatherModel.destroy({ where: { cityId: req.params.cityId } });
      await weatherModel.create({
        ...data.clima[0],
        cityId,
      });
      res.json(data);
    } catch (error) {
      res.status(500);
    }
  };
}

export default CityController;
