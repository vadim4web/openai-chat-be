import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PORT } from "./config.js";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '10mb', type: 'application/json', charset: 'utf-8' }));
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  next();
});
app.use("/", router);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
