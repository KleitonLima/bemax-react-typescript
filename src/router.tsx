import {  Route } from "react-router";
import { Routes } from "react-router-dom";
import Login from "./pages/Login";

const Router = () => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
