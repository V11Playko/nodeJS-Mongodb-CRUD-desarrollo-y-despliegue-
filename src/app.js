import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import morgan from "morgan";

import indexRoutes from "./routes/index.routes";

const app = express();

// Vistas
app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);

// Static files
app.use(express.static(path.join(__dirname, "public")));

export default app;
