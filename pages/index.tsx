import type { NextPage } from "next";
import { useThemeContext } from "../context/theme";

const Home: NextPage = () => {
  const [theme, toggleTheme] = useThemeContext();

  return (
    <main>
      <h1 className="text-accent">Hello this is now a {theme} theme.</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </main>
  );
};

export default Home;
