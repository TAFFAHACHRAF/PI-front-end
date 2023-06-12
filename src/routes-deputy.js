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
import StudentList from "views/deputy-director/StudentList";
import Classes from "views/deputy-director/Classes";
import Diploma from "views/deputy-director/Diploma";
import Profile from "views/IT-manager/Profile";

var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: <Index />,
  //   layout: "/deputy",
  // },
  {
    path: "/studentList",
    name: "studentList",
    icon: "fa-sharp fa-solid fa-graduation-cap text-blue",
    component: <StudentList />,
    layout: "/deputy",
  },
  {
    path: "/classes",
    name: "Classes",
    icon: "fa-solid fa-link text-pink",
    component: <Classes />,
    layout: "/deputy",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "fa-regular fa-user text-red ",
    component: <Profile />,
    layout: "/deputy",
  },
  {
    path: "/diploma",
    name: "studentData",
    icon: "fa-solid fa-graduation-cap text-yellow",
    component: <Diploma />,
    layout: "/deputy",
  }
];

export default routes;
