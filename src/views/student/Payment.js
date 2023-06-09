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
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  CardBody,
  Form, FormGroup, InputGroup, InputGroupAddon, Input, InputGroupText, Button
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import UploadArea from "./UploadArea";

const Tables = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">payment verification</h3>
              </CardHeader>
              <CardBody>
                <UploadArea />
                <Form role="form"
                  style={{
                     width: "60%",
                     margin: "15px auto"
                  }}
                >
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
                          <Input id="exampleSelect" name="select" type="select">
                            <option>Type of payment</option>
                            <option>Bank transfer</option>
                            <option>Bill of exchange</option>
                            <option>Check</option>
                          </Input>
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
                      submit payment
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
