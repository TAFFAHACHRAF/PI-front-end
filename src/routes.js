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

import Index from "views/Index.js";
import Profile from "views/admin/Profile.js";
import Maps from "views/admin/Maps.js";
import Register from "views/admin/Register.js";
import Login from "views/admin/Login.js";
import Tables from "views/admin/Tables.js";
import Classes from "views/admin/Classes.js";
import StudentData from "views/admin/StudentData";

var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: <Index />,
  //   layout: "/admin",
  // },
  {
    path: "/classes",
    name: "classes",
    icon: "fa-solid fa-link text-blue",
    component: <Classes />,
    layout: "/admin",
  },
  {
    path: "/addStudent",
    name: "Add students",
    icon: "fa-solid fa-plus text-orange",
    component: <Maps />,
    layout: "/admin",
    hide : true
  },
  {
    path: "/user-profile",
    name: "profile",
    icon: "fa-regular fa-user text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/studentsList",
    name: "SutdentsList",
    icon: "fa-solid fa-list text-red",
    component: <Tables />,
    layout: "/admin",
    hide : true
  },
  {
    path: "/studentData",
    name: "Payment's Data",
    icon: "fa-solid fa-server text-red",
    component: <StudentData />,
    layout: "/admin",
  },
  // {
  //   path: "/diploma",
  //   name: "Diplima",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Diploma />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/formation",
  //   name: "Formation",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Formation />,
  //   layout: "/admin",
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
