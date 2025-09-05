import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UnderMaintenance from "../pages/UnderMaintenance";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maintenance" element={<UnderMaintenance />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
