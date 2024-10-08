import React from "react";
import { Button, Container, Form, FormText } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { enviarMail } from "../../helpers/queries.js";
import Swal from "sweetalert2";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const contactForm = async (data) => {
    try {
      const response = await enviarMail(data);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El correo fue enviado correctamente.",
          showConfirmButton: true,
        });
        reset();
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title:
            "Hubo un problema al enviar el correo. Por favor, inténtalo más tarde.",
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="text-light text-center fs-5 mb-5 p-lg-4 p-md-4 formContacto ">
      <div className="form-card1 mt-5 ">
        <div className="form-card2">
          <Form className="form" onSubmit={handleSubmit(contactForm)}>
            <h2 className="mt-4">Contacto</h2>
            <p>
              ¡Contáctame para colaboraciones, preguntas o simplemente para
              saludar!
            </p>

            <div className="form-field mb-lg-3 mb-md-3">
              <input
                type="text"
                name="nombre"
                id="nombre"
                minLength={3}
                maxLength={30}
                className="input-field"
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
                  pattern: {
                    value: /^[a-zA-ZÁÉÍÓÚáéíóúÜü\s]+$/,
                    message: "Por favor, ingresa un nombre válido.",
                  },
                })}
              />
            </div>
            <Form.Text className="mb-lg-3 mb-md-3 text-light">
              {errors.nombre?.message}
            </Form.Text>

            <div className="form-field mb-3">
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                className="input-field"
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
                  pattern: {
                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    message: "Por favor, ingresa un mail válido",
                  },
                })}
              />
            </div>
            <FormText className="mb-lg-3 mb-md-3 text-light">
              {errors.email?.message}
            </FormText>

            <div className="form-field mb-3">
              <textarea
                name="message"
                placeholder="Mensaje"
                className="input-field"
                {...register("message", {
                  required: "El mensaje es obligatorio",
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
            </div>
            <FormText className="mb-4 text-light">
              {errors.message?.message}
            </FormText>
            <div>
              <button variant="dark" type="submit" className="sendMessage-btn">
                Enviar
              </button>
            </div>
          </Form>
        </div>
      </div>
      {/* <Form onSubmit={handleSubmit(contactForm)}>
        <input
          type="text"
          name="nombre"
          id="nombre"
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
            pattern: {
              value: /^[a-zA-ZÁÉÍÓÚáéíóúÜü\s]+$/,
              message: "Por favor, ingresa un nombre válido.",
            },
          })}
        />
        <Form.Text className="mb-4 text-light">
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
            pattern: {
              value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              message: "Por favor, ingresa un mail válido",
            },
          })}
        />
        <FormText className="mb-4 text-light">{errors.email?.message}</FormText>
        <textarea
          name="message"
          placeholder="Mensaje"
          {...register("message", {
            required: "El mensaje es obligatorio",
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
      </Form> */}
    </Container>
  );
};

export default Contacto;
