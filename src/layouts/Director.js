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
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import SidebarStudent from "components/Sidebar/Sidebar-student";

import routes from "routes-director.js";
import { useNavigate } from "react-router-dom";

const Director = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthentificated = localStorage.getItem("role");


  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  if (isAuthentificated !== "director") {
    navigate("/auth/login");
  }

  const getRoutes = (routes) => {
    if (!isAuthentificated || isAuthentificated !== "director") {
      return navigate("/auth/login");
    }

    return routes.map((prop, key) => {
      if (prop.layout === "/director") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props?.location?.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <SidebarStudent
        {...props}
        routes={routes}
        logo={{
          innerLink: "/director/index",
          imgSrc: require("../assets/img/brand/enset.svg").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar {...props} brandText="Director" />
        <Routes>
          {getRoutes(routes)}
          <Route
            path="*"
            element={<Navigate to="/director/classes" replace />}
          />
        </Routes>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Director;
