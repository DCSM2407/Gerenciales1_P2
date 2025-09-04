import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import Cart from './Cart';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { getCartItemsCount, setIsCartOpen } = useCart();

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Acerca de', path: '/acerca-de' }
  ];

  return (
    <>
      <nav style={{ 
        backgroundColor: 'var(--color-primary)', 
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          {/* Logo */}
          <Link to="/" style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: 'var(--color-accent)', 
            textDecoration: 'none' 
          }}>
            MayaCode
          </Link>

          {/* Menu Desktop */}
          <div style={{ 
            display: 'flex', 
            gap: '2rem', 
            alignItems: 'center',
            '@media (max-width: 768px)': { display: 'none' }
          }} className="desktop-menu">
            {menuItems.map(item => (
              <Link 
                key={item.name}
                to={item.path}
                style={{ 
                  color: 'var(--color-accent)', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease' 
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-highlight)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-accent)'}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Iconos de acción */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--color-accent)', 
                cursor: 'pointer' 
              }}
            >
              <UserIcon style={{ width: '24px', height: '24px' }} />
            </button>
            
            <button
              onClick={() => setIsCartOpen(true)}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--color-accent)', 
                cursor: 'pointer',
                position: 'relative' 
              }}
            >
              <ShoppingCartIcon style={{ width: '24px', height: '24px' }} />
              {getCartItemsCount() > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: 'var(--color-highlight)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getCartItemsCount()}
                </span>
              )}
            </button>

            {/* Menu móvil toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--color-accent)', 
                cursor: 'pointer',
                display: 'none' 
              }}
              className="mobile-menu-toggle"
            >
              {isMenuOpen ? 
                <XMarkIcon style={{ width: '24px', height: '24px' }} /> : 
                <Bars3Icon style={{ width: '24px', height: '24px' }} />
              }
            </button>
          </div>
        </div>

        {/* Menu móvil */}
        {isMenuOpen && (
          <div style={{
            backgroundColor: 'var(--color-secondary)',
            padding: '1rem',
            display: 'none'
          }} className="mobile-menu">
            {menuItems.map(item => (
              <Link 
                key={item.name}
                to={item.path}
                style={{ 
                  display: 'block',
                  color: 'var(--color-accent)', 
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--color-primary)'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <Cart />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
