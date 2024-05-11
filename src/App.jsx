import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Principal from "./components/pages/Principal";


function App() {
  return <>
  <NavBar></NavBar>
  <Principal></Principal>
  {/* <h1 className="text-center mt-5 colorTexto">Bienvenidos a mi portfolio</h1> */}
  </>;
}

export default App;
