import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import sazon from "../../assets/sazondelalma.png";
import ritmoweb from "../../assets/ritmoWeb.png";
import donapirola from "../../assets/donapirola.png";
import sportivo from "../../assets/sportivo.png";
import Print from "../../assets/print.png";
import apiSimpsons from "../../assets/simpsons.png";
import apiNoticia from "../../assets/api-noticia.png";
import estudio from "../../assets/estudio.png";
import mongodb from "../../assets/mongodb.png";
import MiPerfil from "../../assets/miPerfil.png";
import Contacto from "./Contacto";


const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Bootstrap" },
      { name: "React Bootstrap" },
    ],
  },
  {
    category: "Backend",
    skills: [{ name: "Node.js" }, { name: "Express" }],
  },
  {
    category: "Bases de Datos",
    skills: [{ name: "MongoDB" }, { name: "Mongoose" }],
  },
  {
    category: "Autenticación y Seguridad",
    skills: [{ name: "JWT" }, { name: "bcrypt" }],
  },
  {
    category: "Herramientas",
    skills: [{ name: "GitHub" }, { name: "Trello" }, { name: "Vercel" }],
  },
];

const Principal = () => {
  return (
    <section className="pagPrinc ">
      <Container className="text-light bienvenidaCont text-center flex-md-row align-items-center justify-content-center justify-content-md-around">
        <h6>Hola! Mi nombre es</h6>
        <h1 className="my-3">Sheyla Astorga</h1>
        <h5>Desarrolladora Web </h5>
        <h5 className="mb-4">-Frontend-</h5>
        <section>
          <div className="social-icon ">
            <a href="https://github.com/SheylaAstorga" target="_blank">
              <i className="bi bi-github logo-git fs-3  "></i>
              <p>Github</p>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sheyla-luciana-astorga-40013a248/"
            >
              <i className="bi bi-linkedin logo-link fs-3 ms-4"></i>
              <p className="ms-4">Linkedin</p>
            </a>
            <a
              target="_blank"
              href="https://drive.google.com/uc?export=download&id=1n93uVX6EDNvGd-HCrpiqBvMjaAU1DAhk"
              download="Curriculum-Sheyla-Astorga.pdf"
            >
              <i className="fa-solid fa-download  fs-3 mt-4 ms-4"></i>
              <p className="ms-4">CV</p>
            </a>
            <div>
              <a href="#seccion-siguiente" className="scroll-link">
                <i className="fa-solid fa-angles-down text-light fs-3 mt-4"></i>
              </a>
            </div>
          </div>
        </section>
      </Container>

      <Container className="my-5" id="seccion-siguiente">
        <div className="d-flex flex-lg-wrap justify-content-between">
          <h1 className="mt-5 fs-1 text-light">
            <i className="bi bi-laptop"> </i>Mis proyectos
          </h1>
        </div>
        <section className="cardProyectos">
          <Row className="mt-4 g-5 ">
            <Col xs={12} md={6} lg={4} className="mb-5">
              <Card bg="dark" text="light" className="cardPagina">
                <a
                  href="https://sazondelalma-restaurant73i.netlify.app/"
                  target="_blank"
                >
                  <Card.Img
                    variant="top"
                    src={sazon}
                    className="imagenCard img-fluid"
                  />
                </a>
                <Card.Body className="text-center ">
                  <Card.Title className="fs-4">Sazón del Alma</Card.Title>
                  <Card.Text>Restaurante</Card.Text>
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
                    <FontAwesomeIcon
                      icon={faJs}
                      style={{ color: "#f8cc30" }}
                      size="2x"
                      className="me-3"
                    />
                    <FontAwesomeIcon
                      icon={faReact}
                      style={{ color: "#30a1f8" }}
                      size="2x"
                      className="me-3"
                    />
                    <img src={mongodb} alt="mongoDB" className="iconoMongo" />
                  </section>
                  <a
                    href="https://sazondelalma-restaurant73i.netlify.app/"
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
                <a
                  href="https://donapirolarecetas.netlify.app/"
                  target="_blank"
                >
                  <Card.Img
                    variant="top"
                    src={donapirola}
                    className="imagenCard"
                  />
                </a>
                <Card.Body className="text-center">
                  <Card.Title className="fs-4">Doña Pirola</Card.Title>
                  <Card.Text>Blog de Recetas</Card.Text>
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
                    <FontAwesomeIcon
                      icon={faReact}
                      style={{ color: "#30a1f8" }}
                      size="2x"
                      className="me-3"
                    />
                  </section>
                  <a
                    href="https://donapirolarecetas.netlify.app/"
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
                <a href="https://3dprintfilament.netlify.app/" target="_blank">
                  <Card.Img
                    variant="top"
                    src={Print}
                    className="imagenCard img-fluid"
                  />
                </a>
                <Card.Body className="text-center ">
                  <Card.Title className="fs-4">3D Print</Card.Title>
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
                    <FontAwesomeIcon
                      icon={faBootstrap}
                      style={{ color: "#7c58e9" }}
                      size="2x"
                      className="me-3"
                    />
                  </section>
                  <a
                    href="https://3dprintfilament.netlify.app/"
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
                    <FontAwesomeIcon
                      icon={faBootstrap}
                      style={{ color: "#7c58e9" }}
                      size="2x"
                      className="me-3"
                    />
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
                  <Card.Img
                    variant="top"
                    src={ritmoweb}
                    className="imagenCard"
                  />
                </a>
                <Card.Body className="text-center">
                  <Card.Title className="fs-4">Ritmo Web</Card.Title>
                  <Card.Text>Streaming de Música</Card.Text>
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
                <a
                  href="https://webnoticias2react.netlify.app/"
                  target="_blank"
                >
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
                <a
                  href="https://lossimpsons-react.netlify.app/"
                  target="_blank"
                >
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
            <Col xs={12} md={6} lg={4} className="mb-4 mx-auto">
              <Card bg="dark" text="light" className="cardPagina">
                <a
                  href="https://estudiojuridicovega.netlify.app/"
                  target="_blank"
                >
                  <Card.Img
                    variant="top"
                    src={estudio}
                    className="imagenCard"
                  />
                </a>
                <Card.Body className="text-center">
                  <Card.Title className="fs-4">Estudio Juridico</Card.Title>
                  <Card.Text>Estudio de Abogados</Card.Text>
                  <section>
                    
                    <FontAwesomeIcon
                      icon={faJs}
                      style={{ color: "#f8cc30" }}
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
                    href="https://donapirolarecetas.netlify.app/"
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
      <section>
        <div className="skills">
          <h2>Habilidades y Tecnologías</h2>
          <p>Estas son las tecnologías y herramientas con las que trabajo:</p>
          <div className="skills-container mt-5">
            {skillsData.map((category, index) => (
              <div key={index} className="skills-category">
                <h3>{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Container className="py-3 text-light sobreMi-container ">
        <Row>
          <Col
            xs={12}
            lg={6}
            className="d-flex justify-content-center mb-4 mb-lg-0"
          >
            <div className="cardPerfil">
              <div className="card__content ">
                <img
                  className="img-fluid w-100 h-auto"
                  src={MiPerfil}
                  alt="Perfil"
                  style={{
                    maxWidth: "300px",
                    maxHeight: "370px",
                    maskImage:
                      "linear-gradient(to bottom, black 70%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 70%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="d-flex flex-column justify-content-center "
          >
            <h2 className="text-center mb-4">Sobre mí</h2>
            <p className="intro ">
              ¡Hola! Soy{" "}
              <span className="highlight">Sheyla Luciana Astorga</span>, una
              desarrolladora web apasionada por crear aplicaciones web modernas
              y eficientes.
            </p>
            <ul className="education">
              <li>
                <i className="fas fa-graduation-cap"></i> Egresada de
                RollingCode School, donde me recibí de - Desarrolladora Full
                Stack MERN-
                <p>Me encanta aprender cosas nuevas y enfrentar desafíos.</p>
                <p>Cuando no estoy programando, me gusta:</p>
              </li>
            </ul>
            <ul className="hobbies">
              <li>
                <i className="fas fa-gamepad"></i> Jugar videojuegos
              </li>
              <li>
                <i className="fas fa-dumbbell"></i> Hacer gimnasia
              </li>
            </ul>
            <p className="pSobreMi">
              Estoy emocionada por las oportunidades que el desarrollo web
              ofrece y siempre estoy buscando colaborar en proyectos
              interesantes.
            </p>
          </Col>
        </Row>
      </Container>
      <section className="contenedorContacto" id="contacto">
        <Contacto></Contacto>
      </section>
    </section>
  );
};

export default Principal;
