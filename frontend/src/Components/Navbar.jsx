import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../Assets/logo.jpg";
import CM from "../Assets/CM.png";
import "../Styles/Navbar.css";
import { useEffect } from "react";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 768) setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setActiveDropdown(null);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,or,ml,fr,es,bn,ta",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <nav className="navbarContainer">
      <div className="navbarTop">
        <div className="navbarTopLeftElements">
          <img src={Logo} alt="Logo" className="navbarLogo" />
          <h1>FarmSathi</h1>
        </div>
        <div className="navbarTopRightElements">
          <div className="name">
            <h3>Shri Mohan Charan Majhi</h3>
            <p>Hon'ble Chief Minister</p>
          </div>
          <div className="image">
            <img src={CM} alt="cm-sir" />
          </div>
        </div>
        <div className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      <div className={`navbarBottom ${menuOpen ? "open" : ""}`}>
        <div className="linksContainer">
          <div
            className="navItem"
            onMouseEnter={() => handleMouseEnter("dashboard")}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleDropdown("dashboard")}
          >
            <span>Dashboard ▾</span>
            <div
              className={`dropdownMenu ${
                activeDropdown === "dashboard" ? "show" : ""
              }`}
            >
              <Link to="/">Home</Link>
              <Link to="/diseasedetection">Crop Disease Detection</Link>
              <Link to="/croprecommendation">Crop Recommendation</Link>
              <Link to="/fertilizer">Fertilizer</Link>
              <Link to="/satelliteimaging">Satellite Imaging</Link>
            </div>
          </div>

          <div
            className="navItem"
            onMouseEnter={() => handleMouseEnter("schemes")}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleDropdown("schemes")}
          >
            <span>Schemes ▾</span>
            <div
              className={`dropdownMenu ${
                activeDropdown === "schemes" ? "show" : ""
              }`}
            >
              <Link to="/agriculture">Agriculture</Link>
            </div>
          </div>

          <div className="navItem">
            <Link to="/about">About Us</Link>
          </div>
          <div className="navItem">
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="navItem">
            <Link to="/feedback">Feedback/Survey</Link>
          </div>
        </div>
        <div id="google_translate_element"></div>
      </div>
    </nav>
  );
}

export default Navbar;
