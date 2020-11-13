import React, { useState } from "react";
import Inputs from "../componets/Form/Inputs";
import Imagen from "../componets/Image/Image";
import { Row, Container, Col } from "reactstrap";
import LineComponent from "../componets/Charts/ChartLine";

export default function Simulacion() {
  const [velocidad, setVelocidad] = useState(0);
  const [time, setTime] = useState(0);

  function handleChanges(vel, time) {
    setVelocidad(vel);
    setTime(time);
  }

  return (
    <Container>
      <Row>
        <Inputs handleChanges={handleChanges} />
      </Row>

      <Row>
        <Col md={6}>
          <LineComponent velocidad={velocidad} time={time} name="Distancia" />
        </Col>
        <Col md={6}>
          <LineComponent velocidad={velocidad} time={time} name="Velocidad" />
        </Col>
      </Row>
      <Row>
        <Imagen velocidad={velocidad} />
      </Row>
    </Container>
  );
}
