import express, { Application } from "express";
import router from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swaggerConfig";
import cookieParser from "cookie-parser";
import session from "express-session";

const app: Application = express();

// !!!!!!!!! NEED FXING !!!!!!!!!!!!!!!
// * need to fix this. session.d.ts is not working
// * so, I have to add this manually
declare module "express-session" {
  interface SessionData {
    visited?: boolean;
  }
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

// Routes
app.use("/api", router);

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
