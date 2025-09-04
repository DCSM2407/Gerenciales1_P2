import emailjs from 'emailjs-com';

// Configuración de EmailJS
const SERVICE_ID = 'service_2hdwov4';
const TEMPLATE_ID = 'template_4vb3szl'; 
const PUBLIC_KEY = 'QdCQtH8Bj6Ix-eVd2';

// Inicializar EmailJS
emailjs.init(PUBLIC_KEY);

export const sendOrderEmail = async (orderData) => {
  try {
    // Validación de datos esenciales
    if (!orderData || !orderData.customerEmail) {
      throw new Error('Email del cliente es requerido');
    }

    console.log('📧 Iniciando envío para:', orderData.customerEmail);

    // ⚠️ CLAVE: Usar exactamente estos nombres de parámetros
    const templateParams = {
      to_email: orderData.customerEmail,           // ← ESTE ES EL CAMPO CRÍTICO
      customer_name: orderData.customerName,
      order_number: orderData.orderNumber,
      order_date: new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      order_total: orderData.total,
      order_items: orderData.items.map(item => 
        `☕ ${item.name} x${item.quantity} - Q.${(item.price * item.quantity).toFixed(2)}`
      ).join('\n'),
      customer_address: orderData.address || 'No especificada',
      customer_phone: orderData.phone || 'No especificado'
    };

    console.log('📋 Template params:', templateParams);

    // Enviar email
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log('✅ Email enviado exitosamente:', response);
    return { success: true, response };

  } catch (error) {
    console.error('❌ Error enviando email:', error);
    
    let errorMessage = 'Error al enviar el email';
    if (error.text === 'The recipients address is empty') {
      errorMessage = 'Error de configuración: Verifica que el campo "To Email" en tu template sea {{to_email}}';
    } else if (error.text) {
      errorMessage = error.text;
    }

    return { success: false, error: errorMessage };
  }
};

// Función de prueba
export const testEmailService = async () => {
  const testData = {
    customerEmail: 'dilansuy24@gmail.com',
    customerName: 'Test Usuario',
    orderNumber: 'TEST-' + Date.now(),
    total: '45.00',
    items: [{ name: 'Café Test', quantity: 1, price: 45.00 }],
    address: 'Dirección de prueba',
    phone: '12345678'
  };

  console.log('🧪 Ejecutando test...');
  return await sendOrderEmail(testData);
};
