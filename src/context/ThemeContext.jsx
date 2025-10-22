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
  // Cargar tema desde localStorage; si no existe, usar "light" por defecto
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("lumen_theme");
    if (stored) {
      return stored;
    }
    return "light";
  });

  // Al cambiar el tema: actualizar clase en <html> y persistir en localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("lumen_theme", theme);
  }, [theme]);

  // Función para alternar entre claro y oscuro
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
