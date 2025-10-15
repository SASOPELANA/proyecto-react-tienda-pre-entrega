import { Link, useParams, useLocation } from "react-router-dom";

const DetallesProductos = () => {
  const { id } = useParams();
  const location = useLocation();
  const producto = location.state?.producto;

  if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Detalles del producto {id}</h1>

      <ul>
        <li key={producto.id}>
          {producto.title}
          <br />
          <p>
            <strong>Descripción: </strong>
            {producto.description}
          </p>
          <p>Precio: ${producto.price}</p>
          <img src={producto.image} alt={producto.title} width="30%" />
        </li>
        <hr />
        <Link to={`/`}>
          <button>Volver</button>
        </Link>
      </ul>
    </div>
  );
};

export default DetallesProductos;
