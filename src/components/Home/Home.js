import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/0827b4ee303c776fe4b212a6ccfc4ebe.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Namaste!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻🙏  
                </span>
              </h1>

              <h1 className="heading-name">
              SUGHOSH
                <strong className="main-name"> DIXIT here</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
