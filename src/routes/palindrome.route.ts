import express from "express";
import {
  getPalindromicSubsequences,
  getLongestPalindromicSubstring,
} from "../controllers/palindrome.controller";

const router = express.Router();

// Rutas para el módulo de palíndromos
router.post("/subsequences", getPalindromicSubsequences);
router.post("/substring", getLongestPalindromicSubstring);

export default router;
