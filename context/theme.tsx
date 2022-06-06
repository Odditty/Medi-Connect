import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const themeContextDefaultValues: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
};

type Props = {
  children: ReactNode;
};

const Context = createContext<ThemeContextType>(themeContextDefaultValues);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (currentTheme: string) => {
    if (currentTheme === "light") {
      setTheme("light");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      setTheme("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  };

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem("theme");
    if (localStorageTheme) {
      changeTheme(localStorageTheme);
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        changeTheme("dark");
      } else {
        changeTheme("light");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      changeTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      changeTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  const value = {
    theme,
    toggleTheme,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export function useThemeContext() {
  return useContext(Context);
}
