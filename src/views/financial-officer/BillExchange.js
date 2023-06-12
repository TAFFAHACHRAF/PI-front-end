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

const BillExchange = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Bill Of Exchange :</h3>
              </CardHeader>
              <CardBody>
                <div>
                  <Alert
                    color="secondary"
                    className="border d-flex align-items-center w-75"
                  >
                    <i class="fa-solid fa-check mr-5"></i>
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
                        <h5 className="mb-0">Abir Laaroussi</h5>
                        <small
                          className="d-block"
                          style={{
                            color: "#90A0B7",
                          }}
                        >
                          4364615
                        </small>
                      </div>
                    </div>
                    <p className="mb-0 text-muted mr-5">
                      <small>Le 09 September 08:12:34</small>
                    </p>

                    <Button className="" outline type="button">
                      View More
                    </Button>
                  </Alert>
                </div>

                <div>
                  <Alert
                    color="secondary"
                    className="border d-flex align-items-center w-75"
                  >
                    <i class="fa-sharp fa-solid fa-check-double mr-5"></i>
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
                        <h5 className="mb-0">Abir Laaroussi</h5>
                        <small
                          className="d-block"
                          style={{
                            color: "#90A0B7",
                          }}
                        >
                          4364615
                        </small>
                      </div>
                    </div>
                    <p className="mb-0 text-muted mr-5">
                      <small>Le 09 September 08:12:34</small>
                    </p>

                    <Button className="" outline type="button">
                      View More
                    </Button>
                  </Alert>
                </div>

                <div>
                  <Alert
                    color="secondary"
                    className="border d-flex align-items-center w-75"
                  >
                    <i class="fa-solid fa-check mr-5"></i>
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
                        <h5 className="mb-0">Abir Laaroussi</h5>
                        <small
                          className="d-block"
                          style={{
                            color: "#90A0B7",
                          }}
                        >
                          4364615
                        </small>
                      </div>
                    </div>
                    <p className="mb-0 text-muted mr-5">
                      <small>Le 09 September 08:12:34</small>
                    </p>

                    <Button className="" outline type="button">
                      View More
                    </Button>
                  </Alert>
                </div>

                <div>
                  <Alert
                    color="secondary"
                    className="border d-flex align-items-center w-75"
                  >
                    <i class="fa-solid fa-check mr-5"></i>
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
                        <h5 className="mb-0">Abir Laaroussi</h5>
                        <small
                          className="d-block"
                          style={{
                            color: "#90A0B7",
                          }}
                        >
                          4364615
                        </small>
                      </div>
                    </div>
                    <p className="mb-0 text-muted mr-5">
                      <small>Le 09 September 08:12:34</small>
                    </p>

                    <Button className="" outline type="button">
                      View More
                    </Button>
                  </Alert>
                </div>

                <div>
                  <Alert
                    color="secondary"
                    className="border d-flex align-items-center w-75"
                  >
                    <i class="fa-sharp fa-solid fa-check-double mr-5"></i>
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
                        <h5 className="mb-0">Abir Laaroussi</h5>
                        <small
                          className="d-block"
                          style={{
                            color: "#90A0B7",
                          }}
                        >
                          4364615
                        </small>
                      </div>
                    </div>
                    <p className="mb-0 text-muted mr-5">
                      <small>Le 09 September 08:12:34</small>
                    </p>

                    <Button className="" outline type="button">
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

export default BillExchange;
