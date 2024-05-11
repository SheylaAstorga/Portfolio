import React from "react";
import { Container, Image } from "react-bootstrap";
import banner from "../../assets/banner.png";
import logo from "../../assets/logoPerfil.png";
const Principal = () => {
  return (
    <div className="position-relative">
      <section className="position-absolute top-0 start-0 w-100">
        <img
          src={banner}
          className="w-100 bannerPrincipal position-relative z-n1"
          alt="banner"
        />
      </section>
      <section className="w-100 position-relative z-index-1 text-light d-flex ">
        <div>
          <img src={logo} alt="perfil" className="perfilLogo" />
        </div>
        <div className="textoBienvenida align-content-center w-75 p-5">
          <h1 className="text-center mb-5">
            👩🏻‍💻​¡Hola , Bienvenidos a mi portfolio!👩🏻‍💻​
          </h1>
          <h4 className="text-center">
            Soy Sheyla Astorga, una desarrolladora web apasionada y creativa.
          </h4>
          <h4 className="text-center">
            Aquí podrás echar un vistazo a mi trabajo y ver mi dedicación a la
            creación de experiencias digitales increíbles.
          </h4>
        </div>
      </section>
    </div>
  );
};

export default Principal;
