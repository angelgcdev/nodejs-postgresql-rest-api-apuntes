// src/index.js

import express from "express";
import { PORT } from "./config.js";
import { router } from "./routes/users.routes.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.listen(PORT);
console.log("Server on port", PORT);
