import React from "react";
import { Button, Container, Form, FormText } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container className="contact">
      <h2>Contacto</h2>
      <p>
        ¡Contáctame para colaboraciones, preguntas o simplemente para saludar!
      </p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="nombre"
          minLength={3}
          maxLength={30}
          placeholder="Nombre"
          {...register("nombre", {
            required: "Tu nombre es obligatorio",
            minLength: {
              value: 3,
              message: "Tu nombre debe tener como mínimo 3 caracteres",
            },
            maxLength: {
              value: 30,
              message: "Tu nombre debe tener como máximo 50 caracteres",
            },
          })}
          />
          <Form.Text  className="mb-4 text-light">
         {errors.nombre?.message}
          </Form.Text>
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          {...register("email", {
            required: "El correo electrónico es obligatorio",
            minLength: {
              value: 16,
              message: "Tu correo debe tener como mínimo 16 caracteres",
            },
            maxLength: {
              value: 150,
              message: "Tu correo debe tener como máximo 150 caracteres",
            },
          })}
        />
        <FormText className="mb-4 text-light">
       {errors.email?.message}
        </FormText>
        <textarea
          name="message"
          placeholder="Mensaje"
          {...register("message", { required: "El mensaje es obligatorio",
          minLength: {
            value: 16,
            message: "El mensaje debe tener como mínimo 16 caracteres",
          },
          maxLength: {
            value: 400,
            message: "El mensaje debe tener como máximo 400 caracteres",
          },
           })}
        ></textarea>
        <FormText className="mb-4 text-light">
        {errors.message?.message}
        </FormText>
        <Button variant="dark" type="submit">
          Enviar
        </Button>
      </Form>
      <p className="mt-4">
        También puedes enviarme un correo electrónico a: {" "}
        <a href="mailto:sheylaastorga1998@gmail.com">
          sheylaastorga1998@gmail.com
        </a>
      </p>
    </Container>
  );
};

export default Contacto;
