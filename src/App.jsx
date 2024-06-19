import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Principal from "./components/pages/Principal";
import Proyectos from "./components/pages/Proyectos";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Principal></Principal>}></Route>
          <Route exact path="/proyectos" element={<Proyectos></Proyectos>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      {/* <NavBar></NavBar> */}
      {/* <Principal></Principal> */}
      {/* <Proyectos></Proyectos> */}
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
