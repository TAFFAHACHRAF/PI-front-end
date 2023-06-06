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

import Index from "views/student/Index.js";
import Profile from "views/student/Profile.js";
import Account from "views/student/Account.js";
import Register from "views/student/Register.js";
import Login from "views/student/Login.js";
import Payment from "views/student/Payment.js";
import Icons from "views/student/History.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/student",
  },
  {
    path: "/history",
    name: "hisotry",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/student",
  },
  {
    path: "/account",
    name: "Account",
    icon: "ni ni-pin-3 text-orange",
    component: <Account />,
    layout: "/student",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/student",
  },
  {
    path: "/payment",
    name: "Payment",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Payment />,
    layout: "/student",
  },
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
