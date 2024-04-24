import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Courses from "./pages/Courses";
import { Menu } from "./components/Menu";
import { Title } from "./components/Title";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="App" data-theme={theme}>
      <Title className="title" />
      <header className="headerContainer">
        <Menu className="menu" />
        <button onClick={switchTheme} className="darkModeButton">
          <div
            className={
              theme === "light" ? "lightModeActive" : "lightModeInactive"
            }
          >
            Light
          </div>
          <div
            className={theme === "dark" ? "darkModeActive" : "darkModeInactive"}
          >
            Dark
          </div>
        </button>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
