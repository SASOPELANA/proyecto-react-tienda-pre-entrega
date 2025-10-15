const Carrito = ({ carrito = [], setCarrito }) => {
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="flex flex-col  items-center justify-center">
      <div>
        <h1>Carrito</h1>
        <hr />
        <h2>Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <>
            {carrito.map((item) => (
              <div key={item.id}>
                {item.title} - ${Number(item.price).toFixed(3)}
              </div>
            ))}

            <div>
              <hr />
              Total: ${Number(total).toFixed(3)}
            </div>

            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;
