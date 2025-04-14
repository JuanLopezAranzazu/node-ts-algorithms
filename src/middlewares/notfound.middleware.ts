import { Request, Response, NextFunction } from "express";

// Middleware para manejar rutas no encontradas
export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(404).json({
    success: false,
    message: `Ruta ${req.originalUrl} no encontrada`,
  });
}
