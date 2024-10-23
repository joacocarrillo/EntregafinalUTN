import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Estilos.css';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/products.json'); 
        if (!response.ok) throw new Error('Error al obtener los datos');
        const data = await response.json();
        const productData = data.find((p) => p.id === parseInt(id));
        setProduct(productData);
      } 
     
      catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBuy = () => {
    
    console.log(`Comprando: ${product.name}`); };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div>
      <h2 className='product-detail'>{product.name}</h2>
      <p className='product-body'>{product.description}</p>
      <p className='product-body'>Precio: ${product.price}</p>
      <button className='product-button' onClick={handleBuy}>Comprar</button>
    </div>
  );
};

export default ProductDetail;
