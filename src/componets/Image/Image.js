import React, { useState, useEffect } from "react";
import Moto from "../../assets/img/moto.png";
import { Container, Row } from "reactstrap";

export default function Image(props) {
  const [style, setStyle] = useState({
    style: {},
  });
  useEffect(() => {
    setStyle({
      style: {
        animation: `mymove ${props.velocidad / 10}s infinite`,
      },
    });
  }, [props]);
  return (
    <Container>
      <Row>
        <div id="fondo" className="fondo">
          <div id="fondo-moto">
            <img
              className="moto"
              style={style.style}
              src={Moto}
              alt="Imagen de Moto"
            />
          </div>
        </div>
      </Row>
    </Container>
  );
}
