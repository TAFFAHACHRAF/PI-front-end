/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import StudentLayout from "layouts/Student.js";
import FinancialLayout from "layouts/Financial";
import SchoolingLayout from "layouts/Schooling";
import DeputyLayout from "layouts/Deputy";
import ITLayout from "layouts/IT";
import DirectorLayout from "layouts/Director";
import Tables from "views/admin/Tables";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/student/*" element={<StudentLayout />} />
      <Route path="/financial/*" element={<FinancialLayout />} />	
      <Route path="/schooling/*" element={<SchoolingLayout />} />	
      <Route path="/deputy/*" element={<DeputyLayout />} />	
      <Route path="/it/*" element={<ITLayout />} />
      <Route path="/director/*" element={<DirectorLayout />} />
      <Route path="*" element={<Navigate to="/admin/index" replace />} />
    </Routes>
  </BrowserRouter>
);
