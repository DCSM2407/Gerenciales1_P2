import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { sendOrderEmail } from '../utils/emailService';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast.error('Tu carrito está vacío');
      return;
    }

    setIsProcessing(true);

    try {
      // Simular procesamiento de pago
      await new Promise(resolve => setTimeout(resolve, 2000));

      const orderNumber = uuidv4().slice(0, 8).toUpperCase();
      const orderData = {
        orderNumber,
        customerName: formData.name,
        customerEmail: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.postalCode}`,
        items: cartItems,
        total: getCartTotal().toFixed(2)
      };

      // Enviar email de confirmación
      const emailResult = await sendOrderEmail(orderData);
      
      if (emailResult.success) {
        toast.success('¡Pedido realizado con éxito! Te enviamos un email de confirmación.');
      } else {
        toast.success('¡Pedido realizado con éxito!');
        toast.error('No pudimos enviar el email de confirmación, pero tu pedido fue procesado.');
      }

      // Limpiar carrito y redirigir
      clearCart();
      navigate('/', { 
        state: { 
          orderSuccess: true, 
          orderNumber 
        } 
      });

    } catch (error) {
      toast.error('Hubo un error procesando tu pedido. Inténtalo de nuevo.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ 
        padding: '4rem 0', 
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
            Tu carrito está vacío
          </h2>
          <p style={{ color: 'var(--color-gray-dark)', marginBottom: '2rem' }}>
            Agrega algunos productos antes de proceder al checkout
          </p>
          <button 
            onClick={() => navigate('/productos')}
            className="btn-primary"
          >
            Ver Productos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem 0', backgroundColor: 'var(--color-gray-light)' }}>
      <div className="container">
        <h1 style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'var(--color-primary)'
        }}>
          Finalizar Compra
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 400px)',
          gap: '3rem',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr'
          }
        }}>
          {/* Formulario */}
          <div className="card" style={{ padding: '2rem' }}>
            <form onSubmit={handleSubmit}>
              <h2 style={{ 
                color: 'var(--color-primary)', 
                marginBottom: '1.5rem',
                borderBottom: '2px solid var(--color-accent)',
                paddingBottom: '0.5rem'
              }}>
                Información Personal
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)',
                    fontWeight: '500'
                  }}>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-secondary)',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)',
                    fontWeight: '500'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-secondary)',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: '500'
                }}>
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--color-secondary)',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <h3 style={{ 
                color: 'var(--color-primary)', 
                marginBottom: '1rem',
                borderBottom: '2px solid var(--color-accent)',
                paddingBottom: '0.5rem'
              }}>
                Dirección de Envío
              </h3>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: '500'
                }}>
                  Dirección *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--color-secondary)',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)',
                    fontWeight: '500'
                  }}>
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-secondary)',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)',
                    fontWeight: '500'
                  }}>
                    Código Postal *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-secondary)',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <h3 style={{ 
                color: 'var(--color-primary)', 
                marginBottom: '1rem',
                borderBottom: '2px solid var(--color-accent)',
                paddingBottom: '0.5rem'
              }}>
                Información de Pago
              </h3>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: '500'
                }}>
                  Número de Tarjeta *
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--color-secondary)',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)',
                    fontWeight: '500'
                  }}>
                    Nombre en la Tarjeta *
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-secondary)',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)',
                    fontWeight: '500'
                  }}>
                    Fecha Exp. *
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-secondary)',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)',
                    fontWeight: '500'
                  }}>
                    CVV *
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    required
                    maxLength="4"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-secondary)',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.1rem',
                  marginTop: '2rem',
                  opacity: isProcessing ? 0.7 : 1
                }}
              >
                {isProcessing ? 'Procesando...' : `Pagar Q.${getCartTotal().toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* Resumen del pedido */}
          <div>
            <div className="card" style={{ padding: '2rem', position: 'sticky', top: '2rem' }}>
              <h3 style={{ 
                color: 'var(--color-primary)', 
                marginBottom: '1.5rem',
                borderBottom: '2px solid var(--color-accent)',
                paddingBottom: '0.5rem'
              }}>
                Resumen del Pedido
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                {cartItems.map(item => (
                  <div key={item.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid var(--color-accent)'
                  }}>
                    <div>
                      <div style={{ 
                        fontWeight: '500',
                        color: 'var(--color-primary)',
                        fontSize: '0.9rem'
                      }}>
                        {item.name}
                      </div>
                      <div style={{ 
                        fontSize: '0.8rem',
                        color: 'var(--color-gray-dark)'
                      }}>
                        Cantidad: {item.quantity}
                      </div>
                    </div>
                    <div style={{ 
                      fontWeight: '500',
                      color: 'var(--color-highlight)'
                    }}>
                      Q.{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 0',
                borderTop: '2px solid var(--color-primary)',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                <span style={{ color: 'var(--color-primary)' }}>Total:</span>
                <span style={{ color: 'var(--color-highlight)' }}>
                  Q.{getCartTotal().toFixed(2)}
                </span>
              </div>

              <div style={{
                backgroundColor: 'var(--color-accent)',
                padding: '1rem',
                borderRadius: '8px',
                marginTop: '1rem'
              }}>
                <h4 style={{ 
                  color: 'var(--color-primary)', 
                  marginBottom: '0.5rem',
                  fontSize: '1rem'
                }}>
                  Información de Entrega
                </h4>
                <p style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--color-gray-dark)',
                  margin: '0 0 0.5rem 0'
                }}>
                  📦 Envío gratuito en compras mayores a Q.50
                </p>
                <p style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--color-gray-dark)',
                  margin: 0
                }}>
                  🚚 Entrega estimada: 2-3 días hábiles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
