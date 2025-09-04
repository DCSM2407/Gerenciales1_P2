import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section con imagen de fondo */}
      <section style={{
        background: `linear-gradient(rgba(63, 66, 46, 0.8), rgba(159, 136, 111, 0.8)), url('/images/hero/coffee-hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'var(--color-white)',
        padding: '6rem 0',
        textAlign: 'center',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '3rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h1 style={{
              fontSize: '3.5rem',
              marginBottom: '1rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              ☕ MayaCode Premium
            </h1>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '2rem',
              opacity: 0.95,
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Los mejores granos de café del mundo, tostados a la perfección para tu disfrute
            </p>
            <Link to="/productos">
              <button className="btn-primary" style={{
                fontSize: '1.2rem',
                padding: '1.2rem 2.5rem',
                backgroundColor: 'var(--color-highlight)',
                border: 'none',
                boxShadow: '0 4px 15px rgba(215, 139, 48, 0.4)'
              }}>
                Descubre Nuestros Cafés
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de introducción con imagen */}
      <section style={{ 
        padding: '4rem 0',
        backgroundColor: 'var(--color-white)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr'
            }
          }}>
            <div>
              <h2 style={{
                color: 'var(--color-primary)',
                fontSize: '2.5rem',
                marginBottom: '1.5rem'
              }}>
                Nuestra Pasión por el Café
              </h2>
              <p style={{
                color: 'var(--color-gray-dark)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                Desde 2020, seleccionamos cuidadosamente los mejores granos de café 
                de plantaciones sostenibles alrededor del mundo.
              </p>
              <p style={{
                color: 'var(--color-gray-dark)',
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}>
                Cada taza cuenta una historia de dedicación, calidad y amor por 
                el arte del café perfecto.
              </p>
            </div>
            <div>
              <img 
                src="/images/backgrounds/coffee-plantation.jpg"
                alt="Plantación de café"
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section con iconos mejorados */}
      <section style={{ 
        padding: '4rem 0',
        backgroundColor: 'var(--color-accent)'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'var(--color-primary)',
            fontSize: '2.5rem'
          }}>
            ¿Por qué elegir nuestro café?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div className="card" style={{ 
              padding: '2rem', 
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '60px',
                background: 'linear-gradient(135deg, var(--color-highlight), var(--color-secondary))',
                opacity: 0.1
              }}></div>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--color-highlight)',
                borderRadius: '50%',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                position: 'relative',
                zIndex: 1
              }}>
                🌱
              </div>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Origen Controlado
              </h3>
              <p style={{ color: 'var(--color-gray-dark)' }}>
                Trabajamos directamente con productores para garantizar calidad
              </p>
            </div>

            <div className="card" style={{ 
              padding: '2rem', 
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '60px',
                background: 'linear-gradient(135deg, var(--color-highlight), var(--color-secondary))',
                opacity: 0.1
              }}></div>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--color-highlight)',
                borderRadius: '50%',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                position: 'relative',
                zIndex: 1
              }}>
                🔥
              </div>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Tostado Fresco
              </h3>
              <p style={{ color: 'var(--color-gray-dark)' }}>
                Tostamos semanalmente para mantener la frescura y aroma
              </p>
            </div>

            <div className="card" style={{ 
              padding: '2rem', 
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '60px',
                background: 'linear-gradient(135deg, var(--color-highlight), var(--color-secondary))',
                opacity: 0.1
              }}></div>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--color-highlight)',
                borderRadius: '50%',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                position: 'relative',
                zIndex: 1
              }}>
                ⭐
              </div>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Calidad Premium
              </h3>
              <p style={{ color: 'var(--color-gray-dark)' }}>
                Solo los mejores granos llegan a tu taza
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{
        padding: '4rem 0',
        backgroundColor: 'var(--color-white)'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            marginBottom: '1rem',
            color: 'var(--color-primary)',
            fontSize: '2.5rem'
          }}>
            Cafés Destacados
          </h2>
          <p style={{
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'var(--color-gray-dark)',
            fontSize: '1.1rem'
          }}>
            Nuestras selecciones más populares
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Link to="/productos">
              <button className="btn-secondary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem'
              }}>
                Ver Toda Nuestra Colección
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de call-to-action con imagen de fondo */}
      <section style={{
        background: `linear-gradient(rgba(63, 66, 46, 0.9), rgba(159, 136, 111, 0.9)), url('/images/backgrounds/coffee-beans-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 0',
        color: 'var(--color-white)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            ¿Listo para la experiencia perfecta?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Únete a miles de amantes del café que ya disfrutan de nuestros productos
          </p>
          <Link to="/productos">
            <button className="btn-primary" style={{
              backgroundColor: 'var(--color-highlight)',
              padding: '1rem 2rem',
              fontSize: '1.1rem'
            }}>
              Comprar Ahora
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
