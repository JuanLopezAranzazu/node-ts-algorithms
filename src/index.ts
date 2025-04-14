import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/error.middleware";
import { notFoundHandler } from "./middlewares/notfound.middleware";
import loadRoutes from "./routes";

dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Rutas de la API
loadRoutes(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Bienvenido a la API");
});

// Middlewares para manejar errores y rutas no encontradas
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
  console.log(`Modo: ${process.env.NODE_ENV}`);
});
