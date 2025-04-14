// Función para encontrar las subsecuencias palindrómicas más largas en una cadena de texto
export const findLongestPalindromicSubsequences = (text: string) => {
  const n = text.length;
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  // Inicializar la diagonal principal del dp con 1, ya que cada carácter es un palíndromo de longitud 1
  for (let i = 0; i < n; i++) dp[i][i] = 1;

  // Llenar la tabla dp
  for (let length = 2; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      if (text[i] === text[j]) {
        dp[i][j] = length === 2 ? 2 : dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  const maxLen = dp[0][n - 1];
  const results = new Set<string>();

  // Función auxiliar para reconstruir las subsecuencias palindrómicas
  const dfs = (i: number, j: number, path: string) => {
    if (i > j) {
      results.add(path);
      return;
    }
    if (i === j) {
      results.add(path + text[i] + [...path].reverse().join(""));
      return;
    }
    if (text[i] === text[j]) {
      dfs(i + 1, j - 1, path + text[i]);
    } else {
      if (dp[i + 1][j] >= dp[i][j - 1]) dfs(i + 1, j, path);
      if (dp[i][j - 1] >= dp[i + 1][j]) dfs(i, j - 1, path);
    }
  };

  dfs(0, n - 1, "");

  return {
    length: maxLen,
    subsequences: Array.from(results),
  };
};

// Función para encontrar las subcadenas palindrómicas más largas en una cadena de texto
export const findLongestPalindromicSubstrings = (text: string) => {
  const n = text.length;
  const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));
  let maxLength = 1;
  const results = new Set<string>();

  // Inicializar la diagonal principal del dp como true
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    results.add(text[i]);
  }

  // Llenar la tabla dp
  for (let length = 2; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      if (text[i] === text[j]) {
        if (length === 2 || dp[i + 1][j - 1]) {
          dp[i][j] = true;

          if (length > maxLength) {
            maxLength = length;
            results.clear();
            results.add(text.substring(i, j + 1));
          } else if (length === maxLength) {
            results.add(text.substring(i, j + 1));
          }
        }
      }
    }
  }

  return {
    length: maxLength,
    substrings: Array.from(results),
  };
};
