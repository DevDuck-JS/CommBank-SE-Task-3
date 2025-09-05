import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppRoutes from "./routes/Routes.jsx";
import Navbar from "./components/Navbar.jsx";
import Supports from "./components/Supports.jsx";

import HomePage from "./pages/HomePage.jsx";
import UnderMaintenance from "./pages/UnderMaintenance.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <AppRoutes />
      </Router>
      <Supports />
      <Footer />
    </>
  );
}

export default App;
