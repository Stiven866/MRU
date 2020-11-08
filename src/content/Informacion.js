import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function Informacion() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            Movimiento Rectilineo Uniforme <strong>MRU</strong>
          </h1>
          <p>
            El movimiento rectilíneo uniforme se designa frecuentemente con el
            acrónimo MRU, aunque en algunos países es MRC, por movimiento
            rectilíneo constante. El MRU se caracteriza por: Movimiento que se
            realiza sobre una línea recta. Velocidad constante; implica magnitud
            y dirección constantes. La magnitud de la velocidad recibe el nombre
            de celeridad o rapidez sin aceleración. Para este tipo de
            movimiento, la distancia recorrida se calcula multiplicando la
            magnitud de la velocidad por el tiempo transcurrido. Esta relación
            también es aplicable si la trayectoria no es rectilínea, con tal que
            la rapidez o módulo de la velocidad sea constante. Por lo tanto, el
            movimiento puede considerarse en dos sentidos; una velocidad
            negativa representa un movimiento en dirección contraria al sentido
            que convencionalmente hayamos adoptado como positivo. De acuerdo con
            la Primera Ley de Newton, toda partícula puntual permanece en reposo
            o en movimiento rectilíneo uniforme cuando no hay una fuerza externa
            que actúe sobre el cuerpo, dado que las fuerzas actuales están en
            equilibrio, por lo cual su estado es de reposo o de movimiento
            rectilíneo uniforme. Esta es una situación ideal, ya que siempre
            existen fuerzas que tienden a alterar el movimiento de las
            partículas, por lo que en el movimiento rectilíneo uniforme (MRU) es
            difícil encontrar la fuerza amplificada.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
