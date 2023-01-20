import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings/kiosks" element={<Settings />} />
    </Routes>
  );
};

export default Router;
