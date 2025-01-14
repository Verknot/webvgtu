import React from "react";
import {LoginPage} from "./pages";
import { Route, Routes} from "react-router-dom";
import {RegistrationPage} from "./pages/registration";
import {RoutesPath} from "./constants/commonConstans";
import {DepartmentsPage} from "./pages/department";
import { AdministrationPage } from "./pages/administration";
import { NoPermissionsPage } from './pages/noPermissions';
import "./styles/globalStyles.scss"

export const App: React.FC = () => {

  return (
      <Routes>
          <Route path={RoutesPath.Login} element={<LoginPage />} />
          <Route path={RoutesPath.Registration} element={<RegistrationPage />} />
          <Route path={RoutesPath.Departments} element={<DepartmentsPage />} />
          <Route path={RoutesPath.Administration} element={<AdministrationPage />} />
          <Route path={RoutesPath.NoPermissions} element={<NoPermissionsPage />} />
          <Route path="*" element={<LoginPage />} />
      </Routes>
  )
}