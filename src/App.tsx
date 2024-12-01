import React from "react";
import {LoginPage} from "./pages";
import {Route, Routes} from "react-router-dom";
import {RegistrationPage} from "./pages/registration";
import {RoutesPath} from "./constants/commonConstans";

export const App: React.FC = () => {

  return (
      <Routes>
          <Route path="*" element={<LoginPage />} />
          <Route path={RoutesPath.Login} element={<LoginPage />} />
          <Route path={RoutesPath.Registration} element={<RegistrationPage />} />
      </Routes>
  )
}