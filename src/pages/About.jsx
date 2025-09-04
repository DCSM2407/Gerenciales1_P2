const About = () => {
  return (
    <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
      <div className="container">
        {/* Header con imagen de fondo */}
        <div style={{
          background: `linear-gradient(rgba(63, 66, 46, 0.8), rgba(159, 136, 111, 0.8)), url('/images/backgrounds/coffee-team.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--color-white)',
          padding: '4rem 2rem',
          borderRadius: '15px',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Acerca de Nosotros
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Conoce la historia detrás de cada taza perfecta
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Historia con imagen */}
          <div className="card" style={{ padding: '2rem' }}>
            <img 
              src="/images/backgrounds/coffee-roasting.jpg"
              alt="Proceso de tostado"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '1.5rem'
              }}
            />
            <h2 style={{
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              Nuestra Historia
            </h2>
            <p style={{
              color: 'var(--color-gray-dark)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              CaféOnline nació en 2020 con la visión de crear una experiencia de compra 
              en línea excepcional. Comenzamos como una pequeña startup con el sueño de 
              conectar productos de calidad con personas que valoran la excelencia.
            </p>
            <p style={{
              color: 'var(--color-gray-dark)',
              lineHeight: 1.6
            }}>
              Hoy, somos un equipo apasionado dedicado a ofrecer los mejores cafés 
              con un servicio al cliente incomparable.
            </p>
          </div>

          {/* Misión con imagen */}
          <div className="card" style={{ padding: '2rem' }}>
            <img 
              src="/images/backgrounds/coffee-farm.jpg"
              alt="Finca de café"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '1.5rem'
              }}
            />
            <h2 style={{
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              Nuestra Misión
            </h2>
            <p style={{
              color: 'var(--color-gray-dark)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              Democratizar el acceso a cafés de calidad premium, ofreciendo 
              una experiencia de compra simple, segura y satisfactoria para todos 
              nuestros clientes.
            </p>
            <p style={{
              color: 'var(--color-gray-dark)',
              lineHeight: 1.6
            }}>
              Creemos que cada compra debe ser una experiencia memorable y cada 
              taza debe contar una historia.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="card" style={{ padding: '3rem 2rem', marginBottom: '3rem' }}>
          <h2 style={{
            textAlign: 'center',
            color: 'var(--color-primary)',
            marginBottom: '2rem'
          }}>
            Nuestros Valores
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqXrEDRr37kZ7UaUGnOxYBpI8KPZG0X8aOj848DyXcnq4FvWGx0V7wfGHb0p9OCudvQbve7PNidt3CClj9ewMmOBgvRMff1gBfyTiQc8Hin0DGQ17iMzmXcCQOjLxdDMdJmLhzR"
                alt="Granos de café de calidad"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{
                color: 'var(--color-primary)',
                marginBottom: '0.5rem'
              }}>
                Calidad
              </h3>
              <p style={{ color: 'var(--color-gray-dark)' }}>
                Solo ofrecemos productos que nosotros mismos usaríamos
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img 
                src="https://img1.wsimg.com/isteam/ip/9a5c0b7c-7f1a-47fb-9b91-3f6d0f076247/521A7026.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:74.99%25/rs=w:600,h:300,cg:true"
                alt="Confianza"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{
                color: 'var(--color-primary)',
                marginBottom: '0.5rem'
              }}>
                Confianza
              </h3>
              <p style={{ color: 'var(--color-gray-dark)' }}>
                Construimos relaciones duraderas con nuestros clientes
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop"
                alt="Innovación"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{
                color: 'var(--color-primary)',
                marginBottom: '0.5rem'
              }}>
              Innovación
              </h3>
              <p style={{ color: 'var(--color-gray-dark)' }}>
                Siempre buscamos mejorar la experiencia de compra
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            color: 'var(--color-primary)',
            marginBottom: '2rem'
          }}>
            Nuestro Equipo
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <img 
                src="/images/coffee/arabica-premium.jpg"
                alt="Ana García - CEO"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 1rem',
                  border: '3px solid var(--color-highlight)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'var(--color-accent)',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                👨‍💻
              </div>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Dilan Suy
              </h4>
              <p style={{ color: 'var(--color-gray-dark)', fontSize: '0.9rem' }}>
                Integrante de Equipo
              </p>
            </div>

            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <img 
                src="/images/coffee/arabica-premium.jpg"
                alt="Carlos Méndez - CTO"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 1rem',
                  border: '3px solid var(--color-highlight)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'var(--color-accent)',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                👨‍💻
              </div>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Erick Gonzales
              </h4>
              <p style={{ color: 'var(--color-gray-dark)', fontSize: '0.9rem' }}>
                Integrante de Equipo
              </p>
            </div>

            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <img 
                src="/images/coffee/arabica-premium.jpg"
                alt="María López - Marketing"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 1rem',
                  border: '3px solid var(--color-highlight)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'var(--color-accent)',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                👨‍💻
              </div>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Melvin Valencia
              </h4>
              <p style={{ color: 'var(--color-gray-dark)', fontSize: '0.9rem' }}>
                Integrante de Equipo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
