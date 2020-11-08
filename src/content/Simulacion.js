import React, { useState } from "react";
import Inputs from "../componets/Form/Inputs";
import Imagen from "../componets/Image/Image";
import { Row, Container, Col } from "reactstrap";
import Line from "../componets/Charts/ChartLine";

export default function Simulacion() {
  const [velocidad, setVelocidad] = useState([]);
  const [time, setTime] = useState([]);

  const [margin, setMargin] = useState(10);
  var a;

  function initMov(count) {
    a = setInterval(function () {
      count = count + 10;
      console.log("pantalla", window.screen.width, window.screen.height);
      if (window.screen.width < 500) {
        if (count > 330) {
          clearInterval(a);
        }
      }
      if (window.screen.width < 1300) {
        if (count > 950) {
          clearInterval(a);
        }
      }
      setMargin(count);
    }, 100);
  }

  function handleChanges(vel, time) {
    setVelocidad(vel);
    setTime(time);
    if (time > 0) {
      initMov(10);
    }
  }

  return (
    <Container>
      <Row>
        <Inputs onInputChange={handleChanges} />
      </Row>

      <Row>
        <Col md={6}>
          <Line
            velocidad={velocidad}
            time={time}
            name="Distancia"
            sim={initMov}
          />
        </Col>
        <Col md={6}>
          <Line velocidad={velocidad} time={time} name="Velocidad" />
        </Col>
      </Row>
      <Row>
        <Imagen margin={margin} />
      </Row>
    </Container>
  );
}
