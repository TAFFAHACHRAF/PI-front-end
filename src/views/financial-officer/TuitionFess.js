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
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import axios from "axios";
import { useEffect } from "react";

const TuitionFess = () => {
  const [fomation, setFormatins] = useState([]);
  const [formationId, setFormationId] = useState();
  const [payments, setPayments] = useState([]);
  const [students, setStudents] = useState([]);
  const [year, setYear] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8888/educations/continuing/", {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((res) => {
        console.log(res.data)
        setFormatins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        "http://localhost:8888/payments/education/" + formationId + "/payments/"+year,
        {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("user_data")).accessToken,
          },
        }
      )
      .then((res) => {
        setPayments(res.data);
        res.data.map((payment) => {
          getStudentData(payment.idStudent);
        });
      })
      .catch((err) => console.log(err));
  };

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
        console.log(res.data)
        setStudents((prev) => [
          ...prev,
          res.data.firstName + " " + res.data.lastName,
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
                <h3 className="mb-0">Tuition Fees</h3>
                <Form
                  role="form"
                  style={{
                    width: "60%",
                  }}
                  className="d-flex justify-content-between"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <FormGroup className="mb-0">
                    <Input
                      id="exampleSelect"
                      name="select"
                      onChange={(e) => setFormationId(e.target.value)}
                      type="select"
                    >
                      {fomation.map((formation) => (
                        <option value={formation.id}>
                          {formation.description}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <Input
                      id="exampleSelect"
                      name="select"
                      onChange={(e) => setYear(e.target.value)}
                      type="select"
                    >
                     <option value="2024">2023</option>
                    </Input>
                  </FormGroup>
                  <div className="text-center">
                    <Button color="primary" type="submit">
                      Search students
                    </Button>
                  </div>
                </Form>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">
                  {payments.map((payment , index) => (
                    <Col lg="6" md="6" className="mb-3">
                      <div
                        style={{ backgroundColor: "rgb(248, 249, 250)" }}
                        className="p-2 border border-2"
                      >
                        <img
                          src={require("assets/img/payment/abir.png")}
                          className="d-block mx-auto"
                          style={{ width: "50px" }}
                        />
                        <p className="text-center mb-0">
                          <small>
                            <b>{students[index]}</b>
                          </small>
                        </p>
                        <p className="text-center mb-0">
                          <small>2 ème année master en XXXXX</small>
                        </p>
                        <hr className="mt-0 mb-0" />
                        <p className="text-center mt-2 mb-0">
                          <b>{new Date(payment.date).toLocaleString("en-GB")}</b>
                        </p>
                        <hr className="mt-0 mb-0" />
                        <div className="d-flex justify-content-center flex-column align-items-center px-5 pt-4">
                          <div>
                            <p className="mb-0">Paid amount</p>
                            <p
                              style={{
                                backgroundColor: "#505470",
                                color: "white",
                                padding: "2px 10px",
                                borderRadius: "5px",
                                fontWeight: "500",
                              }}
                            >
                             {payment.montant} DHs
                            </p>
                          </div>
                          <div>
                            <Button
                              style={{
                                padding: "5px 40px",
                              }}
                              color="success"
                              type="button"
                            >
                              Check
                            </Button>
                          </div>
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

export default TuitionFess;
