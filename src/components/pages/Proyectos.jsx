import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap
} from "@fortawesome/free-brands-svg-icons";
import sportivo from "../../assets/sportivo.png";
import Print from "../../assets/print.png";
import ritmoweb from "../../assets/ritmoWeb.png";
import apiSimpsons from "../../assets/simpsons.png";
apiSimpsons
import apiNoticia from "../../assets/api-noticia.png";


const Proyectos = () => {
  return (
    <Container className="my-5">
      <div className="text-center my-5  justify-content-between">
        <h1 className="mt-5 misProyectos p-3">
        Mis proyectos
        </h1>
      </div>
      <section>
        <Row className="mt-4">
          <Col xs={12} md={6} lg={4} className="mb-5">
            <Card bg="dark" text="light" className="cardPagina">
              <a
                href="https://sportivoindumentaria.netlify.app/"
                target="_blank"
              >
                <Card.Img
                  variant="top"
                  src={Print}
                  className="imagenCard img-fluid"
                />
              </a>
              <Card.Body className="text-center ">
                <Card.Title className="fs-4">Sportivo</Card.Title>
                <Card.Text>e-commerce</Card.Text>
                <section className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon
                    icon={faHtml5}
                    style={{ color: "#ff622e" }}
                    size="2x"
                    className="me-3"
                  />
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    style={{ color: "#2278b9" }}
                    size="2x"
                    className="me-3"
                  />
                 <FontAwesomeIcon icon={faBootstrap} style={{color: "#7c58e9",}} size="2x"
                    className="me-3" />
                </section>
                <a
                  href="https://sportivoindumentaria.netlify.app/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="light"
                    className="border border-black mt-md-3 botonVer"
                  >
                    ver
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-5">
            <Card bg="dark" text="light" className="cardPagina">
              <a
                href="https://sportivoindumentaria.netlify.app/"
                target="_blank"
              >
                <Card.Img
                  variant="top"
                  src={sportivo}
                  className="imagenCard img-fluid"
                />
              </a>
              <Card.Body className="text-center ">
                <Card.Title className="fs-4">Sportivo</Card.Title>
                <Card.Text>e-commerce</Card.Text>
                <section className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon
                    icon={faHtml5}
                    style={{ color: "#ff622e" }}
                    size="2x"
                    className="me-3"
                  />
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    style={{ color: "#2278b9" }}
                    size="2x"
                    className="me-3"
                  />
                 <FontAwesomeIcon icon={faBootstrap} style={{color: "#7c58e9",}} size="2x"
                    className="me-3" />
                </section>
                <a
                  href="https://sportivoindumentaria.netlify.app/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="light"
                    className="border border-black mt-md-3 botonVer"
                  >
                    ver
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card bg="dark" text="light" className="cardPagina">
              <a href="https://ritmoweb.netlify.app/" target="_blank">
                <Card.Img variant="top" src={ritmoweb} className="imagenCard" />
              </a>
              <Card.Body className="text-center">
                <Card.Title className="fs-4">Ritmo Web</Card.Title>
                <Card.Text>Descripción del proyecto 2.</Card.Text>
                <section>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    style={{ color: "#ff622e" }}
                    size="2x"
                    className="me-3"
                  />
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    style={{ color: "#2278b9" }}
                    size="2x"
                    className="me-3"
                  />
                  <FontAwesomeIcon
                    icon={faJs}
                    style={{ color: "#f8cc30" }}
                    size="2x"
                    className="me-3"
                  />
                </section>
                <a
                  href="https://ritmoweb.netlify.app/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Button
                    variant="light"
                    className="border border-black mt-md-3 botonVer"
                  >
                    ver
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4 mx-auto">
            <Card bg="dark" text="light" className="cardPagina">
              <a href="https://webnoticias2react.netlify.app/" target="_blank">
                <Card.Img
                  variant="top"
                  src={apiNoticia}
                  className="imagenCard"
                />
              </a>
              <Card.Body className="text-center">
                <Card.Title className="fs-4">Web Noticias</Card.Title>
                <Card.Text>Integración con API</Card.Text>
                <section>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    style={{ color: "#ff622e" }}
                    size="2x"
                    className="me-3"
                  />
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    style={{ color: "#2278b9" }}
                    size="2x"
                    className="me-3"
                  />
                  <FontAwesomeIcon
                    icon={faReact}
                    style={{ color: "#30a1f8" }}
                    size="2x"
                    className="me-3"
                  />
                </section>
                <a
                  href="https://webnoticias2react.netlify.app/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="light"
                    className="border border-black mt-md-3 botonVer"
                  >
                    ver
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4 mx-auto">
            <Card bg="dark" text="light" className="cardPagina">
              <a href="https://lossimpsons-react.netlify.app/" target="_blank">
                <Card.Img
                  variant="top"
                  src={apiSimpsons}
                  className="imagenCard"
                />
              </a>
              <Card.Body className="text-center">
                <Card.Title className="fs-4">Los Simpsons</Card.Title>
                <Card.Text>Integración con API</Card.Text>
                <section>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    style={{ color: "#ff622e" }}
                    size="2x"
                    className="me-3"
                  />
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    style={{ color: "#2278b9" }}
                    size="2x"
                    className="me-3"
                  />
                  <FontAwesomeIcon
                    icon={faReact}
                    style={{ color: "#30a1f8" }}
                    size="2x"
                    className="me-3"
                  />
                </section>
                <a
                  href="https://lossimpsons-react.netlify.app/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="light"
                    className="border border-black mt-md-3 botonVer"
                  >
                    ver
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Proyectos;
