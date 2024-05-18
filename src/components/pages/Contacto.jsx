import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, como enviar un correo electrónico o almacenar los datos en una base de datos.
    console.log(formData);
    // Limpia el formulario después de enviar
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container className="contact">
      <h2>Contacto</h2>
      <p>
        ¡Contáctame para colaboraciones, preguntas o simplemente para saludar!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <Button variant="dark"  type="submit">Enviar</Button>
      </form>
      <p>
        {" "}
        También puedes enviarme un correo electrónico a:{" "}
        <a href="sheylaastorga1998@gmail.com">sheylaastorga1998@gmail.com</a>
      </p>
    </Container>
  );
};

export default Contacto;
