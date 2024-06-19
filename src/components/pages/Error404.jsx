import { Button } from "react-bootstrap";
import error404 from "../../assets/error404.png"
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <section id="contenedorError">
            <img src={error404} alt="error404"  className="img-fluid"/>
            <p className="fs-4">Página no encontrada</p>
            <Link className="btnError404 btn btn-dark " to="/">
                Volver <i className="bi bi-house-door-fill"></i> 
            </Link>
        </section>
    );
};

export default Error404;