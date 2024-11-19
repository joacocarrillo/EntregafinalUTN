import React from 'react';
import { Link } from 'react-router-dom';
import './Estilos.css'
import buzoNegro from '../images/buzonegro.jpeg';
import buzoGris from '../images/buzogris.jpeg';
import largoNegro from '../images/largonegro.jpeg';
import largogris from '../images/largogris.jpeg';

const Home = () => {
  const products = [
    { id: 1, name: 'Buzo entrenamiento Negro', image: buzoNegro } ,
    { id: 2, name: 'Pantalon largo entrenamiento negro', image: largoNegro},
    { id: 3, name: 'Buzo entrenamiento Gris ' , image: buzoGris},
    { id: 4, name: 'Pantalon largo entrenamiento gris', image: largogris },
  ];

  return (
    <div>
      <h1 className='titulo'>Tienda oficial de Banco Ciudad Futbol</h1>
      <h2 className='subtitulo'>Lista de Productos</h2>
      <div className="productos">
        {products.map((product) => (
          <div  className="home-product" key={product.id}>
            <Link className='product-link' to={`/products/${product.id}`}>
        <div>
          <img className='product-image' src={product.image} alt={product.name} />
        </div>
        <div className='product-name'>
          {product.name}
        </div>
        </Link>
        </div>

      
        ))}
      </div>
    </div>
  );
};

export default Home;
