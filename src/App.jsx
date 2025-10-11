import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio";
import Moda from "./pages/Moda";
import ProductoDetalle from "./pages/Detalles";
import { Route, Routes } from "react-router-dom";
import Carrito from "./components/Carrito";

function App() {
  return (
    <main className="font-montserrat">
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/moda" element={<Moda />} />
        <Route path="/detalle" element={<ProductoDetalle />} />
      </Routes>
      <Carrito />
      <Footer />
    </main>
  );
}

export default App;
