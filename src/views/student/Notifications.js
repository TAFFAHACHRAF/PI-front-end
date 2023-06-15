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

// reactstrap components
import {
  Card,
  Container,
  Row,
  CardHeader,
  CardBody,
  Alert,
  Button,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const [payments, setPayments] = useState([]);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8888/notifications/user/" + JSON.parse(localStorage.getItem("user_data")).userDTO.id, {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

//   const getStudentData = (id) => {
//     axios
//       .get("http://localhost:8888/authentification/student/" + id, {
//         headers: {
//           Authorization:
//             "Bearer " +
//             JSON.parse(localStorage.getItem("user_data")).accessToken,
//         },
//       })
//       .then((res) => {
//         setStudents(prev => [...prev, res.data.firstName + " " + res.data.lastName]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

  const goToNotificaionDetail = (id) => {
     navigate("/student/notificarionsDetails" , {
      state : {
        id,
      }
     })
  }

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Notifications :</h3>
              </CardHeader>
              <CardBody>
                  <div>
                    <Alert
                      color="secondary"
                      className="border d-flex align-items-center w-75"
                    >
                      {/* {!payment.isValid ? (
                        <i class="fa-solid fa-check mr-5"></i>
                      ) : ( */}
                        <i class="fa-sharp fa-solid fa-check-double mr-5"></i>
                      {/* )} */}
                      <div className="d-flex mr-4">
                        <img
                          src={require("../../assets/img/payment/abir.png")}
                          style={{
                            width: "40px",
                            height: "40px",
                          }}
                          alt="..."
                        />
                        <div className="ml-5">
                          <h5 className="mb-0">
                             <small>
                              Abir Laaroussi
                             </small>
                          </h5>
                          <small
                            className="d-block"
                            style={{
                              color: "#90A0B7",
                            }}
                          >
                            you got a new notification
                          </small>
                        </div>
                      </div>
                      <p className="mb-0 text-muted mr-5">
                        <small>
                          {new Date().toLocaleString("en-GB")}
                        </small>
                      </p>

                      <Button className="" outline type="button"
                        onClick={() => goToNotificaionDetail(1)}
                      >
                        View More
                      </Button>
                    </Alert>
                  </div>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Notifications;
