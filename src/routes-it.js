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
import Tables from "views/admin/Tables";
import Maps from "views/IT-manager/Maps";
import Classes from "views/IT-manager/Classes";
import Formation from "views/admin/Formation";
import Staff from "views/IT-manager/Staff";
import AddClass from "views/IT-manager/AddClass";
import Profile from "views/IT-manager/Profile";
import StudentList from "views/IT-manager/StudentList";

var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: <Index />,
  //   layout: "/it",
  // },
  {
    path: "/studentList",
    name: "Students",
    icon: "fa-sharp fa-solid fa-graduation-cap text-warning",
    component: <StudentList />,
    layout: "/it",
    hide: true
  },
  {
    path: "/addStudent",
    name: "Add students",
    icon: "fa-solid fa-plus text-red",
    component: <Maps />,
    layout: "/it",
    hide: true
  },
  {
    path: "/classes",
    name: "Classes",
    icon: "fa-solid fa-link text-yellow",
    component: <Classes />,
    layout: "/it",
  },
  {
    path: "/staff",
    name: "Staff",
    icon: "fa-solid fa-user text-blue",
    component: <Staff />,
    layout: "/it",
  },
  {
    path: "/addClass",
    name: "AddClass",
    icon: "fa-solid fa-graduation-cap",
    component: <AddClass />,
    layout: "/it",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "fa-regular fa-user text-pink",
    component: <Profile />,
    layout: "/it",
  },
  {
    path: "/formations",
    name: "Education",
    icon: "fa-solid fa-link text-blue",
    component: <Formation />,
    layout: "/it",
  }
];

export default routes;
