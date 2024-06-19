import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Principal from "./components/pages/Principal";
import Proyectos from "./components/pages/Proyectos";
import Footer from "./components/common/Footer";

function App() {
  return <>
  <NavBar></NavBar>
  <Principal></Principal>
  {/* <Proyectos></Proyectos> */}
  <Footer></Footer>
  </>
}

export default App;
