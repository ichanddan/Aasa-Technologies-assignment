import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/index.js";
import db from "./model/index.js";
import dotenv from "dotenv";

const app = express();
const port = 3000 || process.env.PORT;
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
  }
app.use(cors(corsOptions));
dotenv.config()

app.use(bodyParser.json());
app.use('/api',router)
db.sequelize.sync();

app.listen(port, () => console.log(`Server running on port ${port}`));
