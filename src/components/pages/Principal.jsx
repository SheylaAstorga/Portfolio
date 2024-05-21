import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import banner from "../../assets/banner.png";
import sazon from "../../assets/sazondelalma.png";
import ritmoweb from "../../assets/ritmoWeb.png";
import donapirola from "../../assets/donapirola.png";
import mongodb from "../../assets/mongodb.png";
import banneranime from "../../assets/bannerPort.png";
import logoPerfil from "../../assets/logoPerfil.png";
import Contacto from "./Contacto";
import Footer from "../common/Footer";

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
    <div className="pagPrinc">
      <section className="d-flex position-relative overflow-hidden contenedorBienvenida">
        <Container className="position-relative d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-around">
          <img
            src={banneranime}
            className="img-fluid logoBanner  mb-md-0"
            alt="Imagen de anime"
          />
          <div className="text-light text-lg-center text-md-start ms-md-5 bienvenida">
            <h1>"¡Bienvenidos a mi mundo digital!</h1>
            <h6 className="text-center mt-2">Soy Sheyla Astorga</h6>
            <h2>Desarrolladora Web</h2>
            <p className="lead mt-lg-5">
              Explorá mi trabajo y descubre cómo combino pasión y creatividad
              para construir experiencias web únicas y cautivadoras.
            </p>
          </div>
        </Container>
      </section>
      <Container className="my-5">
        <h1 className="mt-5 misProyectos mb-5 text-center">
          <i className="bi bi-laptop"> </i>Mis proyectos
        </h1>
        <section>
          <Row className="mt-4">
            <Col xs={12} md={6} lg={4} className="mb-5">
              <Card bg="dark" text="light" className="cardPagina">
                <a href="https://sazondelalma-restaurant73i.netlify.app/">
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
                <a href="https://ritmoweb.netlify.app/">
                  <Card.Img
                    variant="top"
                    src={ritmoweb}
                    className="imagenCard"
                  />
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
                <a href="https://donapirolarecetas.netlify.app/">
                  <Card.Img
                    variant="top"
                    src={donapirola}
                    className="imagenCard"
                  />
                </a>
                <Card.Body className="text-center">
                  <Card.Title className="fs-4">Doña Pirola</Card.Title>
                  <Card.Text>Descripción del proyecto 3.</Card.Text>
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
      <Container>
        <section className="sobreMi">
          <div className="sobreMi-container">
            <div className="sobreMi-imagen mb-4">
              <img src={logoPerfil} alt="Perfil" />
            </div>
            <div className="sobreMi-contenido">
              <h2>Sobre mí</h2>
              <p className="intro">
                ¡Hola! Soy <span className="highlight">Sheyla Luciana Astorga</span>
                , una desarrolladora web apasionada por crear aplicaciones web
                modernas y eficientes.
              </p>
              <ul className="education">
                <li>
                  <i className="fas fa-graduation-cap"></i> Egresada de RollingCode
                  School
                </li>
              </ul>
              <p>
                Me encanta aprender cosas nuevas y enfrentar desafíos. Cuando no
                estoy programando, me gusta:
              </p>
              <ul className="hobbies">
                <li>Tomar clases de danza</li>
                <li>
                  <i className="fas fa-gamepad"></i> Jugar video juegos
                </li>
                <li>
                  <i className="fas fa-dumbbell"></i> Hacer gimnasia
                </li>
              </ul>
              <p>
                Estoy emocionada por las oportunidades que el desarrollo web
                ofrece y siempre estoy buscando colaborar en proyectos
                interesantes.
              </p>
            </div>
          </div>
        </section>
      </Container>
      <section className="contenedorContacto">
        <Contacto></Contacto>
      </section>
      <section className="p-4 text-center bg-dark text-light">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Principal;
