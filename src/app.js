import express from "express";
import { engine } from "express-handlebars";
import path from "path";
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

// Routes
app.use(indexRoutes);

export default app;
