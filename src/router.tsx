import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/settings/kiosks" element={<Settings/>} />
    </Routes>
  );
};

export default Router;
