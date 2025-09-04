import { useState } from 'react';
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    getCartTotal 
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1999
        }}
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart Sidebar */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '400px',
        height: '100vh',
        backgroundColor: 'var(--color-white)',
        zIndex: 2000,
        boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '90vw'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid var(--color-accent)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>
            Carrito de Compras
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-primary)'
            }}
          >
            <XMarkIcon style={{ width: '24px', height: '24px' }} />
          </button>
        </div>

        {/* Cart Items */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              color: 'var(--color-gray-dark)'
            }}>
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} style={{
                display: 'flex',
                gap: '1rem',
                padding: '1rem 0',
                borderBottom: '1px solid var(--color-accent)'
              }}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    color: 'var(--color-primary)',
                    margin: '0 0 0.5rem 0',
                    fontSize: '0.9rem'
                  }}>
                    {item.name}
                  </h4>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      color: 'var(--color-highlight)',
                      fontWeight: 'bold'
                    }}>
                      Q.{item.price.toFixed(2)}
                    </span>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{
                          background: 'var(--color-accent)',
                          border: '1px solid var(--color-secondary)',
                          borderRadius: '4px',
                          width: '24px',
                          height: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <MinusIcon style={{ width: '12px', height: '12px' }} />
                      </button>
                      
                      <span style={{ minWidth: '20px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                          background: 'var(--color-accent)',
                          border: '1px solid var(--color-secondary)',
                          borderRadius: '4px',
                          width: '24px',
                          height: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <PlusIcon style={{ width: '12px', height: '12px' }} />
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#dc3545',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      marginTop: '0.5rem'
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '1.5rem',
            borderTop: '1px solid var(--color-accent)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Total:</span>
              <span style={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                color: 'var(--color-highlight)'
              }}>
                Q.{getCartTotal().toFixed(2)}
              </span>
            </div>
            
            <button
              onClick={handleCheckout}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              Proceder al Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
