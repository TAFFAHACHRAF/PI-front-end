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

const BillOfExchange = () => {
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
                <div className="row">
                  <div className="col-6">
                    <UploadArea />
                    <p className="pl-2 mt-2">
                      <img
                        src={require("assets/img/payment/attention-icon.png")}
                        style={{ width: "20px", height: "20px" }}
                        className="mr-1"
                      />
                      <small style={{
                        fontSize: "12px",
                      }}>
                        This solution will enable students to spread the costs
                        into three quarterly payments over a longer period.
                      </small>
                    </p>
                  </div>
                  <div className="col-6">
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Recipient" type="text" />
                        </InputGroup>
                      </FormGroup>
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
                          submit request
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default BillOfExchange;
