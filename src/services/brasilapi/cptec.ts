import BaseService from "./baseService";

class CptecService extends BaseService {
  constructor() {
    super();
  }

  async findCityByName(name: string) {
    return this.axios.get(`cptec/v1/cidade/${name}`);
  }

  async getCityWeather(cityId: number) {
    return this.axios.get(`cptec/v1/clima/previsao/${cityId}`);
  }
}

export default CptecService;
