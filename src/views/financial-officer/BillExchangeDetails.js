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
  const { id } = location.state;

  // const notify = () => toast("Paiment added successfully !");

  useEffect(() => {
    axios
      .get("http://localhost:8888/payments/payments/" + id, {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((res) => {
        setPayments(res.data);
        getStudentData(res.data.idStudent);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getStudentData = (id) => {
    axios
      .get("http://localhost:8888/authentification/student/" + id, {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validate = (id, isValid) => {
    const cash = {
      isValid: isValid,
    };
    axios
      .put("http://localhost:8888/payments/cash/validate/" + id, cash, {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((res) => {
        if (isValid == false) {
          toast.error("Paiment is declined !")
        } else {
          toast("Paiment is validated!")
        }
        setPayments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                  <Col lg="6">
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
                        <b>{student.firstName + " " + student.lastName}</b> bill
                        exchange details
                      </p>
                    </div>

                    <div className="details py-2">
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        <b>Date</b> :{" "}
                        {new Date(payment.date).toLocaleString("en-GB")}
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        <b>Type de payment : </b>
                        {payment.isWithCash ? "Cash" : ""}
                        {payment.isWithCheque ? "Cheque" : ""}
                        {payment.isWithTransfer ? "Transfer" : ""}
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        <b>Montant : </b> {payment.montant} DHs
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        <b>Status : </b> {payment.isValid ? "Valid" : "pending"}
                      </p>

                      <p className="mt-3">
                        <b className="border-bottom">
                          <small>
                            Please find the attached files for your reference:
                          </small>
                        </b>
                      </p>
                      <div>
                        <ul class="attachment-list ">
                          <li style={{ fontSize: "14px" }}>
                            <a href="path/to/file1.pdf">File 1</a>
                          </li>
                          <li style={{ fontSize: "14px" }}>
                            <a href="path/to/file2.docx">File 2</a>
                          </li>
                          <li style={{ fontSize: "14px" }}>
                            <a href="path/to/file3.png">File 3</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="d-flex align-items-center border-bottom pb-3 pt-2">
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <b>Professor</b> reply
                      </p>
                    </div>
                    <Form role="form" className="mt-5">
                      {/* <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Subject (optional)" type="text" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon>
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Message (optional)"
                            type="textarea"
                            style={{ minHeight: "200px" }}
                          />
                        </InputGroup>
                      </FormGroup> */}
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="success"
                          type="button"
                          onClick={() => validate(payment.id, true)}
                        >
                          Valider
                        </Button>
                        <Button
                          className="mt-4"
                          color="danger"
                          type="button"
                          onClick={() => validate(payment.id, false)}
                        >
                          Decliner
                        </Button>
                      </div>
                    </Form>
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
