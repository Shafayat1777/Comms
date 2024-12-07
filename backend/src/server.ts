import app from './app';
import { envConfig } from "./config/envConfig";

const PORT = envConfig.port;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API Docs are available at http://localhost:${PORT}/api-docs`);
});
