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
                      <p className="text-muted mb-0" style={{fontSize: "0.8rem"}}>
                        <b>Abir Laaroussi</b> bill exchange details
                      </p>
                    </div>

                    <div className="message py-2">
                      <h3 class="mt-3">Message</h3>
                      <p class="mb-2">Dear Client,</p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        We are pleased to inform you that your project has been
                        completed successfully. We have put in our best efforts
                        to meet your requirements and deliver the desired
                        outcome.
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        We would like to express our gratitude for giving us the
                        opportunity to work on this project. Your trust and
                        support have been invaluable throughout the entire
                        process.
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        If you have any further questions or need any
                        assistance, please feel free to reach out to us. We are
                        always here to help.
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        Once again, thank you for choosing our services. We look
                        forward to working with you again in the future.
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        Best regards,
                      </p>
                      <p
                        class="mb-2 text-dark"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        Your Name
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
                      <p className="text-muted mb-0" style={{fontSize: "0.8rem"}}>
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
                          <Input placeholder="Subject" type="text" />
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
                            placeholder="Message"
                            type="textarea"
                            style={{ minHeight: "200px" }}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-center">
                        <Button className="mt-4" color="primary" type="button">
                          Send
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
