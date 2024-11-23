import express, { Application } from 'express';
import router from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swaggerConfig';

const app: Application = express();

app.use(express.json());

// Routes
app.use('/api', router);

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
