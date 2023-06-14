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
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Button,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import UploadArea from "./UploadArea";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Payment = () => {
  const [isTransfer, setIsTransfer] = useState(false);
  const [type, setType] = useState("");
  const [prosess, setProsess] = useState("");
  const [montant, setMontant] = useState("");

  useEffect(() => {
    console.log(localStorage.getItem("idStudent"));
    console.log(localStorage.getItem("idEducationOfStudent"));
  });

  const handleChange = (e) => {
    if (e.target.value == "transfer") {
      setIsTransfer(true);
      setType(e.target.value);
    } else {
      setIsTransfer(false);
      setType(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payment = {
      montant: Number(montant),
      idStudent: Number(localStorage.getItem("idStudent")),
      idContinuingEducation: Number(
        localStorage.getItem("idEducationOfStudent")
      ),
      paymentProcess: prosess,
    };

    axios
      .post("http://localhost:8888/payments/" + type, payment, {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((res) => {
        console.log(res.data);
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
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">payment verification</h3>
              </CardHeader>
              <CardBody>
                {isTransfer == true ? <UploadArea /> : ""}
                <Form
                  role="form"
                  style={{
                    width: "60%",
                    margin: "15px auto",
                  }}
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <FormGroup>
                    <Input
                      id="exampleSelect"
                      name="typePaiment"
                      type="select"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="cash">cash</option>
                      <option value="cheque">cheque</option>
                      <option value="transfer">transfer</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      id="exampleSelect"
                      name="prosess"
                      type="select"
                      onChange={(e) => setProsess(e.target.value)}
                    >
                      <option value="TRAITE_TRIMESTER">TRAITE_TRIMESTER</option>
                      <option value="TRAITE_SEMESTER">TRAITE_SEMESTER</option>
                      <option value="NORMAL" selected>
                        NORMAL
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
                        placeholder="montant"
                        onChange={(e) => setMontant(e.target.value)}
                        name="montant"
                        type="number"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="submit">
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

export default Payment;
