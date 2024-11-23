import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Documentation",
      version: "1.0.0",
      description: "API documentation with Swagger and TypeScript",
    },
    servers: [{ url: "http://localhost:3000/api" }],
  },
  apis: ["./src/routes/*.ts"], // JSDoc comments in route files
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
