import express from "express";
import indexRoutes from "./routes/index.routes";

const app = express();

app.use(indexRoutes);

export default app;
