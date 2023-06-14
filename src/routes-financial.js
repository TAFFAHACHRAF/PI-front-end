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

import Payment from "views/financial-officer/Payment.js";
import BillExchange from "views/financial-officer/BillExchange.js";
import BillExchangeDetails from "views/financial-officer/BillExchangeDetails";
import Tables from "views/financial-officer/Tables";
import Classes from "views/financial-officer/Classes";
import TuitionFess from "views/financial-officer/TuitionFess";

var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: <Index />,
  //   layout: "/financial",
  // },
  {
    path: "/studentList",
    name: "studentList",
    icon: "a-sharp fa-solid fa-graduation-cap text-warning",
    component: <Tables />,
    layout: "/financial",
    hide: true
  },
  {
    path: "/classes",
    name: "Classes",
    icon: "fa-solid fa-link text-blue",
    component: <Classes />,
    layout: "/financial",
  },
  {
    path: "/bill-exchange",
    name: "Bill Exchange",
    icon: "fa-solid fa-money-bill text-orange",
    component: <BillExchange />,
    layout: "/financial",
  },
  {
    path: "/billexhangedetails",
    name: "exchange details",
    icon: "fa-solid fa-circle-info text-success",
    component: <BillExchangeDetails />,
    layout: "/financial",
    hide: true
  },
  {
    path: "/payment",
    name: "Add payment",
    icon: "fa-solid fa-plus text-blue",
    component: <Payment />,
    layout: "/financial",
    hide: true
  },
  {
    path: "/Tuition fess",
    name: "Tuition fess",
    icon: "fa-solid fa-money-bill text-blue",
    component: <TuitionFess />,
    layout: "/financial",
  }
];

export default routes;
