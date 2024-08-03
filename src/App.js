import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import Particles from "./utils/particles";

function App() {

  const location = useLocation();

  const renderPartcilesJSinHomePage = location.pathname === "/";
  return (
    <div className="App">
      {renderPartcilesJSinHomePage && <Particles id="particles" />}

      <Navbar />
      <div className="App_main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
