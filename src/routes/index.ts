import express from "express";

// Función que se encarga de cargar las rutas
function loadRoutes(app: express.Application) {
  const router = express.Router();
  // Prefijo para las rutas de la API
  app.use("/api/v1", router);
}

export default loadRoutes;
