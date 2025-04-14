import express from "express";
import palindromeRouter from "./palindrome.route";

// Función que se encarga de cargar las rutas
function loadRoutes(app: express.Application) {
  const router = express.Router();
  // Prefijo para las rutas de la API
  app.use("/api/v1", router);
  // Cargar las rutas de los módulos
  router.use("/palindrome", palindromeRouter);
}

export default loadRoutes;
