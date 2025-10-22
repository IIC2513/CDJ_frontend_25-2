import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/**
 * Contexto para modo claro/oscuro.
 * Persistencia en localStorage y sincroniza la clase "dark" en <html>.
 */
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Cargar tema desde localStorage o preferencia del sistema
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("lumen_theme");
    if (stored) {
      return stored;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // Al cambiar el tema: actualizar clase y persistencia
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("lumen_theme", theme);
  }, [theme]);

  // Función para alternar
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook de acceso
export const useTheme = () => useContext(ThemeContext);
