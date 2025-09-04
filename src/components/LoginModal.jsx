import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const LoginModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Simular login
      if (formData.email && formData.password) {
        localStorage.setItem('user', JSON.stringify({
          email: formData.email,
          name: formData.name || formData.email.split('@')[0]
        }));
        toast.success('¡Sesión iniciada correctamente!');
        onClose();
      } else {
        toast.error('Por favor completa todos los campos');
      }
    } else {
      // Simular registro
      if (formData.password !== formData.confirmPassword) {
        toast.error('Las contraseñas no coinciden');
        return;
      }
      
      if (formData.email && formData.password && formData.name) {
        localStorage.setItem('user', JSON.stringify({
          email: formData.email,
          name: formData.name
        }));
        toast.success('¡Cuenta creada correctamente!');
        onClose();
      } else {
        toast.error('Por favor completa todos los campos');
      }
    }
    
    setFormData({ email: '', password: '', name: '', confirmPassword: '' });
  };

  if (!isOpen) return null;

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
          zIndex: 1999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={onClose}
      >
        <div 
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: '12px',
            padding: '2rem',
            width: '100%',
            maxWidth: '400px',
            margin: '1rem'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>
              {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </h2>
            <button
              onClick={onClose}
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

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: '500'
                }}>
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--color-secondary)',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  required={!isLogin}
                />
              </div>
            )}

            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--color-primary)',
                fontWeight: '500'
              }}>
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--color-secondary)',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--color-primary)',
                fontWeight: '500'
              }}>
                Contraseña
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--color-secondary)',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
                required
              />
            </div>

            {!isLogin && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: '500'
                }}>
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--color-secondary)',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  required={!isLogin}
                />
              </div>
            )}

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', marginBottom: '1rem' }}
            >
              {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </button>
          </form>

          {/* Toggle */}
          <div style={{ textAlign: 'center' }}>
            <span style={{ color: 'var(--color-gray-dark)' }}>
              {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-highlight)',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
