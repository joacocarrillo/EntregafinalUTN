import React from 'react';
import { Link } from 'react-router-dom';
import './Estilos.css'

const Home = () => {
  const products = [
    { id: 1, name: 'Buzo entrenamiento Negro' },
    { id: 2, name: 'Pantalon largo entrenamiento negro' },
    { id: 3, name: 'Buzo entrenamiento Gris 3' },
    { id: 4, name: 'Pantalon largo entrenamiento gris' },
  ];

  return (
    <div>
      <h1 className='titulo'>Tienda oficial de Banco Ciudad Futbol</h1>
      <h2 className='subtitulo'>Lista de Productos</h2>
      <div className="productos">
        {products.map((product) => (
          <div  className="home-product" key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
