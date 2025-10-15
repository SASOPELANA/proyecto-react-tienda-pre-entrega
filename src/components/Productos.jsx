import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carrito from "./Carrito";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const APIS = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(APIS)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Hubo un error");
        setError(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`${producto.title} agregado al carrito`);
  };

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.title} : $ {producto.price}
            <img src={producto.image} height={80} width={80} />
            <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
            <Link to={`/detalle/${producto.id}`} state={{ producto }}>
              Detalles
            </Link>
          </li>
        ))}
      </ul>
      <Carrito carrito={carrito} setCarrito={setCarrito} />
    </div>
  );
};

export default Productos;
