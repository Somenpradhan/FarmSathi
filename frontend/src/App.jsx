import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import IndexPage from "./Components/IndexPage.jsx";

import "./Styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={IndexPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
