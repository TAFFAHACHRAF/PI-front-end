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
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Maps = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cne, setCne] = useState("");
  const [cni, setCni] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataTest = {
      firstName,
      lastName,
      cne,
      cni,
      email,
      phone,
      adresse,
      username,
      gender: gender.toUpperCase(),
      role: role.toUpperCase(),
      nationality: "Moroccan",
      password: "1234",
      idMajorOfStudent: role == "student" ? 1 : null,
      idEducationOfStudent: role == "student" ? 1 : null,
      idHeadOfDepartementManagerOfStudent: role == "student" ? 4 : null,
      idMajorOfHeadOfDepartement: role == "head_of_departement" ? 1 : null,
      dateNaissance: "1998-12-12",
    };

    axios
      .post("http://localhost:8888/authentification/" + role, dataTest, {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((res) => {
        console.log(res.data);
        toast(role + " added successfully !");
      })
      .catch((err) => console.log(err));
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
                <h3 className="mb-0">add {role} :</h3>
              </CardHeader>
              <CardBody>
                {/* notify */}
                <ToastContainer />
                <Row>
                  <Col lg="6" md="6" className="border-right position-relative">
                    <Card className="border-0">
                      <CardBody className="px-lg-5 py-lg-2">
                        <div className="text-center text-muted mb-4">
                          <small>Students information</small>
                        </div>
                        <Form role="form" onSubmit={(e) => handleSubmit(e)}>
                          <FormGroup>
                            <Input
                              id="exampleSelect"
                              name="role"
                              type="select"
                              required
                              onChange={(e) => setRole(e.target.value)}
                            >
                              <option value="student">student</option>
                              <option value="schooling">schooling</option>
                              <option value="it_manager">it_manager</option>
                              <option value="head_of_departement">
                                head_of_departement
                              </option>
                              <option value="general_director">
                                general_director
                              </option>
                              <option value="financial_officier">
                                financial_officier
                              </option>
                              <option value="deputy_manager">
                                deputy_manager
                              </option>
                            </Input>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-hat-3" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                                name="firstName"
                                type="text"
                                required
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
                                name="lastName"
                                type="text"
                                required
                                onChange={(e) => setLastName(e.target.value)}
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
                                required
                                onChange={(e) => setEmail(e.target.value)}
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
                                name="phone"
                                autoComplete="telephone"
                                required
                                onChange={(e) => setPhone(e.target.value)}
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
                                required
                                onChange={(e) => setAdresse(e.target.value)}
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
                                required
                                onChange={(e) => setCne(e.target.value)}
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
                                required
                                onChange={(e) => setCni(e.target.value)}
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
                                required
                                onChange={(e) => setUsername(e.target.value)}
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <Input
                              id="exampleSelect"
                              name="gender"
                              type="select"
                              required
                              onChange={(e) => setGender(e.target.value)}
                            >
                              <option value="MALE">Male</option>
                              <option value="FEMALE">Female</option>
                            </Input>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Telephone" type="tel" required />
                            </InputGroup>
                          </FormGroup>
                          <div className="text-center">
                            <Button
                              className="mt-4"
                              color="primary"
                              type="submit"
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
