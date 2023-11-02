import { DataTypes, Model } from "sequelize";

import sequelize from "../database";

interface CityAttributes {
  id: string;
  nome: string;
  estado: string;
}

export interface CityInput extends Required<CityAttributes> {}
export interface CityOutput extends Required<CityAttributes> {}

class City
  extends Model<CityAttributes, CityInput>
  implements CityAttributes
{
  id!: string;
  nome!: string;
  estado!: string;
}

City.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    estado: DataTypes.STRING,
    nome: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

export default City;
