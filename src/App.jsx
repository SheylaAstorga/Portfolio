import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Principal from "./components/pages/Principal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Principal></Principal>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
