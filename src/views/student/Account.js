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
  Col,
  Container,
  Row,
  CardBody,
  CardHeader,
  Alert,
  CardTitle,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const Maps = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Your Credit Card</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="col-6">
                    <div className="mb-2">
                      <img
                        src={require("assets/img/payment/visa-1.png")}
                        alt="visa card"
                        className="img-fluid w-75 mx-auto d-block"
                      />
                    </div>
                    <div>
                      <img
                        src={require("assets/img/payment/visa-2.png")}
                        alt="visa card"
                        className="img-fluid mx-auto d-block"
                        style={{ width: "78%" }}
                      />
                    </div>
                  </Col>
                  <Col className="col-6">
                    <div
                      style={{
                        backgroundImage: `url(${require("assets/img/payment/bg-rectangle.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                        margin: "0 auto",
                      }}
                    >
                      <div className="header pt-2">
                        <img
                          src={require("assets/img/payment/abir.png")}
                          alt="student's picture"
                          className="img-fluid mx-auto d-block"
                        />
                        <p className="text-center mt-1 mb-0">
                          <b>Abir Laaroussi</b>
                        </p>
                        <p className="text-center mt--2">
                          <small>2 ème anneé master en XXXX</small>
                        </p>
                      </div>
                      <div
                        className="paid-tuition border-top border-bottom mx-auto py-2"
                        style={{
                          width: "90%",
                          borderColor: "#5B5F7B",
                        }}
                      >
                        <p className="text-center mb-0">
                          <small
                            style={{
                              fontSize: "12px",
                            }}
                          >
                            PAID TUITION
                          </small>
                        </p>
                        <p
                          className="text-center mb-0"
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          5000.00 DHs
                        </p>
                      </div>

                      <div className="card-number text-center mt-2">
                        <img
                          src={require("assets/img/payment/info-infornation.png")}
                          alt="visa card"
                          className="img-fluid"
                        />
                        <small
                          style={{
                            fontSize: "10px",
                          }}
                        >
                          You will get reminded to pay the tuition 3 days before
                          the deadline
                        </small>

                        <div
                          className="mx-auto mt-2"
                          style={{
                            width: "90%",
                          }}
                        >
                          <Container fluid>
                            <div className="header-body">
                              {/* Card stats */}
                              <Row>
                                <Col className="col-12 mb-2">
                                  <Card className="card-stats mb-4 mb-xl-0 py-1">
                                    <CardBody className="py-2">
                                      <Row>
                                        <div className="col">
                                          <CardTitle
                                            tag="h5"
                                            className="text-uppercase text-muted mb-0"
                                          >
                                            Balance
                                          </CardTitle>
                                          <span className="h5 font-weight-bold mb-0">
                                            15.0000 DHs
                                          </span>
                                        </div>
                                        <Col className="col-auto">
                                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                            <i className="fas fa-users" />
                                          </div>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                                <Col className="col-12 mb-2 ">
                                  <Card className="card-stats mb-4 mb-xl-0 py-1">
                                    <CardBody className="py-2">
                                      <Row>
                                        <div className="col">
                                          <CardTitle
                                            tag="h5"
                                            className="text-uppercase text-muted mb-0"
                                          >
                                            Credit
                                          </CardTitle>
                                          <span className="h5 font-weight-bold mb-0">
                                            3000.00 DHs
                                          </span>
                                        </div>
                                        <Col className="col-auto">
                                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                            <i className="fas fa-percent" />
                                          </div>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                                <Col className="col-12 mb-2 ">
                                  <Card className="card-stats mb-4 mb-xl-0 py-1">
                                    <CardBody className="py-2">
                                      <Row>
                                        <div className="col">
                                          <CardTitle
                                            tag="h5"
                                            className="text-uppercase text-muted mb-0"
                                          >
                                            Due Date
                                          </CardTitle>
                                          <span className="h5 font-weight-bold mb-0">
                                            14/05/2023
                                          </span>
                                        </div>
                                        <Col className="col-auto">
                                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                            <i className="fas fa-percent" />
                                          </div>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                                <Col className="col-12 mb-2">
                                  <Card className="card-stats mb-4 mb-xl-0 py-1">
                                    <CardBody className="py-2">
                                      <Row>
                                        <div className="col">
                                          <CardTitle
                                            tag="h5"
                                            className="text-uppercase text-muted mb-0"
                                          >
                                            Paid Tuition
                                          </CardTitle>
                                          <span className="h5 font-weight-bold mb-0">
                                            5000.00 DHs
                                          </span>
                                        </div>
                                        <Col className="col-auto">
                                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                            <i className="fas fa-percent" />
                                          </div>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                </Col>
                              </Row>
                            </div>
                          </Container>
                        </div>
                      </div>
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

export default Maps;
