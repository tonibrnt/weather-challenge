import { DataTypes, Model } from "sequelize";

import City from './city';
import sequelize from "../database";

interface WeatherAttributes {
  id: number;
  data: Date;
  condicao: string;
  condicao_desc: string;
  min: number;
  max: number;
  indice_uv: number;
  cityId: string;
}

export interface WeatherInput extends Required<WeatherAttributes> {}
export interface WeatherOutput extends Required<WeatherAttributes> {}

class Weather
  extends Model<WeatherAttributes, WeatherInput>
  implements WeatherAttributes
{
  id!: number;
  data: Date;
  condicao: string;
  condicao_desc: string;
  min: number;
  max: number;
  indice_uv: number;
  cityId: string;
}

Weather.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: DataTypes.DATE,
    condicao: DataTypes.STRING,
    condicao_desc: DataTypes.STRING,
    min: DataTypes.INTEGER,
    max: DataTypes.INTEGER,
    indice_uv: DataTypes.INTEGER,
    cityId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Cities",
      },
    },
  },
  {
    sequelize,
  }
);

export default Weather;
