export const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Weather challenge API",
      version: "0.1.0",
      description:
        "This is a simple API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["**/*.ts"],
};
