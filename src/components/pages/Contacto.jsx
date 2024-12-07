import { Button } from "react-bootstrap";

const Contacto = () => {
  const whatsappLink = "https://wa.me/5493813602097";

  return (
    <>
      <section className="contactoW text-white pb-5 px-6">
        <div className=" mx-auto text-center">
          <h2 className="mb-4">¡Hablemos!</h2>
          <p className="mb-6">
            ¿Tienes un proyecto en mente? ¡Contáctame en WhatsApp y comencemos a
            trabajar juntos!
          </p>
          <Button
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="sendMessage d-inline-block bg-dark text-white border border-dark py-3 px-4 rounded"
          >
            Enviar mensaje
          </Button>
        </div>
      </section>
    </>
  );
};

export default Contacto;
