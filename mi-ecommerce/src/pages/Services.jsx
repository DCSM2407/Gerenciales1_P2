const Services = () => {
  const services = [
    {
      title: "Entrega Rápida",
      description: "Entregamos tus productos en 24-48 horas",
      icon: "🚚",
      features: ["Entrega gratuita +Q.50", "Seguimiento en tiempo real", "Entrega en puerta"]
    },
    {
      title: "Soporte 24/7",
      description: "Estamos aquí para ayudarte cuando lo necesites",
      icon: "💬",
      features: ["Chat en vivo", "Soporte telefónico", "Email de soporte"]
    },
    {
      title: "Garantía de Calidad",
      description: "Todos nuestros productos tienen garantía",
      icon: "🛡️",
      features: ["30 días de garantía", "Devolución gratuita", "Productos verificados"]
    },
    {
      title: "Instalación y Setup",
      description: "Te ayudamos con la instalación de productos tecnológicos",
      icon: "🔧",
      features: ["Instalación profesional", "Configuración inicial", "Tutorial personalizado"]
    }
  ];

  return (
    <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
      <div className="container">
        <h1 style={{
          textAlign: 'center',
          marginBottom: '1rem',
          color: 'var(--color-primary)',
          fontSize: '2.5rem'
        }}>
          Nuestros Servicios
        </h1>
        
        <p style={{
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--color-gray-dark)',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          Ofrecemos servicios de calidad para garantizar la mejor experiencia de compra
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <div key={index} className="card" style={{
              padding: '2rem',
              textAlign: 'center',
              height: '100%'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                {service.icon}
              </div>
              
              <h3 style={{
                color: 'var(--color-primary)',
                marginBottom: '1rem',
                fontSize: '1.3rem'
              }}>
                {service.title}
              </h3>
              
              <p style={{
                color: 'var(--color-gray-dark)',
                marginBottom: '1.5rem',
                fontSize: '1rem'
              }}>
                {service.description}
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{
                    padding: '0.5rem 0',
                    color: 'var(--color-secondary)',
                    borderBottom: '1px solid var(--color-accent)'
                  }}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: 'var(--color-white)',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            color: 'var(--color-primary)',
            marginBottom: '1rem'
          }}>
            ¿Necesitas ayuda personalizada?
          </h2>
          <p style={{
            color: 'var(--color-gray-dark)',
            marginBottom: '2rem'
          }}>
            Nuestro equipo de expertos está listo para ayudarte
          </p>
          <button className="btn-primary">
            Contactar Soporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
