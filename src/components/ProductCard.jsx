import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Imagen de fallback si no se puede cargar la imagen principal
  const fallbackImage = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop";

  return (
    <div className="card" style={{ 
      padding: '1.5rem',
      textAlign: 'center',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Imagen del producto */}
      <div style={{
        position: 'relative',
        marginBottom: '1.5rem',
        borderRadius: '12px',
        overflow: 'hidden',
        height: '200px'
      }}>
        {imageLoading && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--color-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid var(--color-secondary)',
              borderTop: '3px solid var(--color-highlight)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
          </div>
        )}
        
        <img 
          src={imageError ? fallbackImage : product.image}
          alt={product.name}
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            borderRadius: '12px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        />

        {/* Badge de categoría */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'var(--color-highlight)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '15px',
          fontSize: '0.7rem',
          fontWeight: '500',
          textTransform: 'uppercase'
        }}>
          {product.category}
        </div>
      </div>
      
      <h3 style={{ 
        color: 'var(--color-primary)',
        marginBottom: '0.5rem',
        fontSize: '1.2rem',
        fontWeight: '600'
      }}>
        {product.name}
      </h3>
      
      <p style={{ 
        color: 'var(--color-gray-dark)',
        fontSize: '0.9rem',
        marginBottom: '1rem',
        flex: 1,
        lineHeight: 1.5
      }}>
        {product.description}
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        padding: '0.5rem 0',
        borderTop: '1px solid var(--color-accent)',
        borderBottom: '1px solid var(--color-accent)'
      }}>
        <span style={{ 
          fontSize: '1.4rem',
          fontWeight: 'bold',
          color: 'var(--color-highlight)'
        }}>
          Q.{product.price.toFixed(2)}
        </span>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{
            fontSize: '0.8rem',
            color: product.stock > 10 ? 'var(--color-primary)' : '#dc3545',
            fontWeight: '500'
          }}>
            {product.stock > 10 ? '✓ En stock' : `Solo Q.${product.stock} disponibles`}
          </span>
        </div>
      </div>
      
      <button
        onClick={handleAddToCart}
        className="btn-primary"
        style={{ 
          width: '100%',
          padding: '12px',
          fontSize: '1rem',
          fontWeight: '600'
        }}
        disabled={product.stock === 0}
      >
        {product.stock > 0 ? 'Agregar al Carrito' : 'Agotado'}
      </button>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
