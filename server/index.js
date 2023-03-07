import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bankRoute from "./routes/bankRoute.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extender: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extender: "true" }));

const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URL).then(() =>
  app.listen(PORT, () => {
    console.log(`PORT ${PORT} Connected`);
  })
);

app.use("/user", bankRoute);
