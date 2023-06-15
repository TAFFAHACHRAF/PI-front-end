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
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  CardHeader,
  CardBody,
  Button,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  TextArea,
  Label,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BillExchangeDetails = () => {
  const location = useLocation();
  const [payment, setPayments] = useState([]);
  const [idStudent, setIdStudent] = useState([]);
  const [student, setStudent] = useState([]);
  //   const { id } = location.state;

  // const notify = () => toast("Paiment added successfully !");

  useEffect(() => {
    // axios
    //   .get("http://localhost:8888/payments/payments/" + id, {
    //     headers: {
    //       Authorization:
    //         "Bearer " +
    //         JSON.parse(localStorage.getItem("user_data")).accessToken,
    //     },
    //   })
    //   .then((res) => {
    //     setPayments(res.data);
    //     getStudentData(res.data.idStudent);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
  //         setStudent(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   const validate = (id, isValid) => {
  //     const cash = {
  //       isValid: isValid,
  //     };
  //     axios
  //       .put("http://localhost:8888/payments/cash/validate/" + id, cash, {
  //         headers: {
  //           Authorization:
  //             "Bearer " +
  //             JSON.parse(localStorage.getItem("user_data")).accessToken,
  //         },
  //       })
  //       .then((res) => {
  //         if (isValid == false) {
  //           toast.error("Paiment is declined !")
  //         } else {
  //           toast("Paiment is validated!")
  //         }
  //         setPayments(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Bill of exchange details:</h3>
              </CardHeader>
              {/* notify */}
              <ToastContainer />
              <CardBody>
                <Row>
                  <Col lg="8">
                    <div className="d-flex align-items-center border-bottom pb-2">
                      <img
                        src={require("assets/img/payment/abir.png")}
                        style={{
                          width: "40px",
                          height: "40px",
                        }}
                        className="mr-2"
                      />
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <b>Abdelmalek ENNANI</b> notifcation details
                      </p>
                    </div>

                    <div className="details py-2">
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        <b>Date</b> : {new Date().toLocaleString("en-GB")}
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        <b>payment N 1232: </b>
                        Not Valid
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        <b>Raison : </b>
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        The provided payment information, such as date, amount,
                        and type is incorrect.
                        <br />
                        <br />
                        <b>
                          * Please check your information and validate your
                          payment again
                        </b>
                      </p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default BillExchangeDetails;
