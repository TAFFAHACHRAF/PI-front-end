/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Timf

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Badge,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useEffect } from "react";
import axios from "axios";

const Diploma = () => {
  const [classes, setClasses] = useState([]);
  const [majorId, setMajorId] = useState();
  const [students, setStudents] = useState([]);
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8888/educations/major/", {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((response) => {
        console.log(response.data);
        setClasses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = () => {
    axios
      .get("http://localhost:8888/authentification/student/major/" + majorId, {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((res) => {
        setPaymentData([]);
        console.log(paymentData)
        res.data.map((student) => {
          getStudentPaymentData(student.id);
        });
        setStudents([...res.data]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("classes", classes);
    console.log("paymentData", paymentData);
  };

  const getStudentPaymentData = (id) => {
    axios
      .get(
        "http://localhost:8888/authentification/student/" +
          id +
          "/payment_status",
        {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("user_data")).accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setPaymentData((prev) => [
          ...prev,
          {
            payed: res.data["payments sum"],
            price: res.data["continuing education price"],
          },
        ]);
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
        {/* Table */}
        <Row>
          <div className="col-12">
            <Card className="shadow">
              <CardHeader className="bg-transparent d-flex justify-content-between">
                <h3 className="mb-0">Eligible Students for diploma:</h3>
                <Form
                  role="form"
                  style={{
                    width: "60%",
                  }}
                  className="d-flex justify-content-between"
                >
                  <FormGroup className="mb-0">
                    <Input id="exampleSelect" name="select" type="select">
                      <option>Departement</option>
                      <option>Bank transfer</option>
                      <option>Bill of exchange</option>
                      <option>Check</option>
                    </Input>
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      onChange={(e) => setMajorId(e.target.value)}
                    >
                      {classes.map((classe) => (
                        <option value={classe.id}>{classe.name}</option>
                      ))}
                    </Input>
                  </FormGroup>
                  <div className="text-center">
                    <Button
                      color="primary"
                      type="button"
                      onClick={() => handleSearch()}
                    >
                      Search students
                    </Button>
                  </div>
                </Form>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples px-2">
                  {students.map((student, index) => (
                    <Col className="col-12 mb-3">
                      <div
                        //   style={{ backgroundColor: "rgb(248, 249, 250)" }}
                        className="px-2 py-3 border border-2 row "
                      >
                        <div className="col-2">
                          <img
                            src={require("assets/img/payment/profile.png")}
                          />
                        </div>
                        <div className="col-4 pl-5 border-r">
                          <div className="d-flex justify-content-between">
                            <p className="mb-0" style={{ fontSize: "14px" }}>
                              Name :{" "}
                            </p>
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              {student.firstName + " " + student.lastName}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              class :{" "}
                            </p>
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              GLSID
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              payed :{" "}
                            </p>
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              {paymentData[index]?.payed} Dhs
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              Education price :{" "}
                            </p>
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              {paymentData[index]?.price} Dhs
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              Status :{" "}
                            </p>
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              {paymentData[index]?.payed <
                              paymentData[index]?.price ? (
                                <Badge color="" className="badge-dot">
                                  <i className="bg-danger" />
                                  not payed
                                </Badge>
                              ) : (
                                <Badge color="" className="badge-dot">
                                  <i className="bg-success" />
                                  payed
                                </Badge>
                              )}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              Eligible for diploma: :{" "}
                            </p>
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                            {paymentData[index]?.payed <
                              paymentData[index]?.price ? (
                                <b>No</b>
                              ) : (
                                <b>Yes</b>
                              )}
                              
                            </p>
                          </div>
                        </div>
                        <div className="col-6 border-1 border-left">
                          <h5>Comment : </h5>
                          <p
                            style={{
                              fontSize: "13px",
                            }}
                          >
                            L'extrait standard de Lorem Ipsum utilisé depuis le
                            XVIè siècle est reproduit ci-dessous pour les
                            curieux. Les sections 1.10.32 et 1.10.33 du "De
                            Finibus Bonorum et Malorum" de Cicéron sont aussi
                            reproduites dans leur version originale, accompagnée
                            de la traduction anglaise de H. Rackham (1914).
                          </p>
                        </div>
                      </div>
                    </Col>
                  ))}

                  <CardFooter className="py-4 ml-auto">
                    <nav aria-label="...">
                      <Pagination
                        className="pagination justify-content-end mb-0"
                        listClassName="justify-content-end mb-0"
                      >
                        <PaginationItem className="disabled">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            tabIndex="-1"
                          >
                            <i className="fas fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Diploma;
