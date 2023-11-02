import { Sequelize } from "sequelize";

const sequelize = new Sequelize("challengedb", "postgres", "challengepsw", {
  host: "postgres-db",
  port: 5432,
  dialect: "postgres",
});

export default sequelize;