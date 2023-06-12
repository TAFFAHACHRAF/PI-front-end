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

const BillExchangeDetails = () => {
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
                        <b>Abir Laaroussi</b> bill exchange details
                      </p>
                    </div>

                    <div className="details py-2">
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        <b>Date</b> : 12/02/2023
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        <b>Type de payment : </b> virement bancaire
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                       <b>Montant : </b> 1000DHs
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        <b>Status : </b> pending
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
                      <FormGroup>
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
                        
                      </FormGroup>
                      <div className="text-center">
                        <Button className="mt-4" color="success" type="button">
                          Valider
                        </Button>
                        <Button className="mt-4" color="danger" type="button">
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
