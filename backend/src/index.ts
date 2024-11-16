import express from "express";
import router from "./routes";

const app = express();

app.use(router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
