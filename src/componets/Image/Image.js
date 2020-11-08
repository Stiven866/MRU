import React from "react";
import Moto from "../../assets/img/moto.png";
import { Container, Row } from "reactstrap";

export default function Image(props) {
  return (
    <Container>
      <Row>
        <div className="fondo">
          <div className="fondo-moto" style={{ marginLeft: props.margin }}>
            <img className="moto" src={Moto} alt="Imagen de Moto" />
          </div>
        </div>
      </Row>
    </Container>
  );
}
