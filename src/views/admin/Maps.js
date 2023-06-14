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
  Col,
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Label,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import UploadArea from "./UploadArea";
import { useLocation } from "react-router-dom";

const Maps = () => {
  // const location = useLocation();
  // const { id, students, classes } = location.state;
  // const [idMajorOfStudent, setIdMajorOfStudent] = useState([]);
  // const [studentData, setStudentData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   address: "",
  //   email: "",
  //   username: "",
  //   phone: "",
  //   cne: "",
  //   cni: "",
  //   username: "",
  //   dateNaissance: "",
  //   role: "STUDENT",
  //   nationality: "",
  // });
  // const []

  const getClasses = () => {};

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">add student :</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="6" md="6" className="border-right position-relative">
                    <Card className="border-0">
                      <CardBody className="px-lg-5 py-lg-2">
                        <div className="text-center text-muted mb-4">
                          <small>Students information</small>
                        </div>
                        <Form role="form">
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-hat-3" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="firstname"
                                type="text"
                                name="firstName"
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-hat-3" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="lastname"
                                type="text"
                                name="lastName"
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email"
                                type="email"
                                autoComplete="new-email"
                                name="email"
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="telephone"
                                type="tel"
                                autoComplete="telephone"
                                name="phone"
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="address"
                                type="text"
                                autoComplete="address"
                                name="adresse"
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="cne"
                                type="text"
                                autoComplete="cne"
                                name="cne"
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="cni"
                                type="text"
                                autoComplete="cni"
                                name="cni"
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="username"
                                type="text"
                                autoComplete="username"
                                name="username"
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <Input
                              id="exampleSelect"
                              name="gender"
                              type="select"
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </Input>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="date"
                                type="date"
                                name="dateNaissance"
                              />
                            </InputGroup>
                          </FormGroup>
                          <div className="text-center">
                            <Button
                              className="mt-4"
                              color="primary"
                              type="button"
                            >
                              Add student
                            </Button>
                          </div>
                        </Form>
                      </CardBody>
                    </Card>

                    <p
                      style={{
                        position: "absolute",
                        right: "-10px",
                        top: "50%",
                        fontSize: "15px",
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                      }}
                    >
                      <b>OR</b>
                    </p>
                  </Col>
                  <Col lg="6" md="6" className="pt-3">
                    <div className="d-flex">
                      <img
                        src={require("assets/img/payment/attention-icon.png")}
                        style={{ width: "20px", height: "20px" }}
                        className="mr-1"
                      />
                      <p className="mb-0">
                        <small>
                          You can Import an .xlsx file that contains students
                          informations
                        </small>
                      </p>
                    </div>
                    <p>
                      <small>
                        .xlsx file Format :{" "}
                        <b>ID, FirstName, LastName, Email, Telephone</b>
                      </small>
                    </p>
                    <Form role="form">
                      <FormGroup>
                        <Input id="exampleSelect" name="select" type="select">
                          <option>Class</option>
                          <option>GMASI</option>
                          <option>SEI</option>
                          <option>GMMI</option>
                          <option>IAA</option>
                          <option>II</option>
                        </Input>
                      </FormGroup>
                      <UploadArea />
                      <div className="text-center">
                        <Button className="mt-4" color="primary" type="button">
                          Add student
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

export default Maps;
