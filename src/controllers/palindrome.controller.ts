import { NextFunction, Request, Response } from "express";
import {
  findLongestPalindromicSubsequences,
  findLongestPalindromicSubstrings,
} from "../services/palindrome.service";

// Función para manejar la solicitud de subsecuencias palindrómicas más largas
export const getPalindromicSubsequences = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { text } = req.body;

    if (!text || typeof text !== "string") {
      res.status(400).json({
        error: 'El "text" es requerido y debe ser una cadena de texto.',
      });
      return;
    }

    const result = findLongestPalindromicSubsequences(text);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Función para manejar la solicitud de subcadenas palindrómicas más largas
export const getLongestPalindromicSubstring = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { text } = req.body;

    if (!text || typeof text !== "string") {
      res.status(400).json({
        error: 'El "text" es requerido y debe ser una cadena de texto.',
      });
      return;
    }

    const result = findLongestPalindromicSubstrings(text);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
