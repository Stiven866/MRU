import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function Inputs(props) {
  const { onInputChange } = props;
  const [vel, setVel] = useState(0);
  const [time, setTime] = useState(0);

  function handleChange(event) {
    if (event.target.name === "velocidad") {
      setVel(event.target.value);
    } else {
      setTime(event.target.value);
    }
  }

  return (
    <Container>
      <Form>
        <Row form>
          <Col md={{ offset: 3, size: 3 }}>
            <FormGroup>
              <Label for="velocidad">Velocidad (m)</Label>
              <Input
                type="text"
                name="velocidad"
                id="velocidad"
                placeholder="Velocidad en metros"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="tiempo">Tiempo (s)</Label>
              <Input
                type="text"
                name="tiempo"
                id="tiempo"
                placeholder="Tiempo en segundos"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 3, size: 6 }}>
            <Button
              block
              color="success"
              onClick={() => onInputChange(vel, time)}
            >
              Simular
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
