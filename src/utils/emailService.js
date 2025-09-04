import emailjs from 'emailjs-com';

// 🔥 SOLUCIÓN RÁPIDA: Valores hardcodeados
const SERVICE_ID = 'service_2hdwov4';
const TEMPLATE_ID = 'template_4vb3szl'; 
const PUBLIC_KEY = 'QdCQtH8Bj6Ix-eVd2';

// Inicializar EmailJS
emailjs.init(PUBLIC_KEY);

export const sendOrderEmail = async (orderData) => {
  try {
    if (!orderData?.customerEmail) {
      throw new Error('Email del cliente es requerido');
    }

    console.log('📧 [PRODUCCIÓN] Iniciando envío para:', orderData.customerEmail);
    console.log('🔧 [PRODUCCIÓN] SERVICE_ID:', SERVICE_ID);
    console.log('🔧 [PRODUCCIÓN] TEMPLATE_ID:', TEMPLATE_ID);

    const templateParams = {
      to_email: orderData.customerEmail,
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
      order_items: orderData.items?.map(item => 
        `☕ ${item.name} x${item.quantity} - Q.${(item.price * item.quantity).toFixed(2)}`
      ).join('\n') || 'Sin productos',
      customer_address: orderData.address || 'No especificada',
      customer_phone: orderData.phone || 'No especificado'
    };

    console.log('📋 [PRODUCCIÓN] Template params:', templateParams);

    // Envío con timeout
    const response = await Promise.race([
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout: EmailJS tardó más de 15 segundos')), 15000)
      )
    ]);

    console.log('✅ [PRODUCCIÓN] Email enviado exitosamente:', response);
    return { success: true, response };

  } catch (error) {
    console.error('❌ [PRODUCCIÓN] Error completo:', error);
    
    let errorMessage = 'Error al enviar el email en producción';
    if (error.status === 404) {
      errorMessage = 'Error 404: Problema con SERVICE_ID o TEMPLATE_ID en producción';
    } else if (error.status === 422) {
      errorMessage = 'Error 422: Problema con configuración del template';
    } else if (error.message?.includes('Timeout')) {
      errorMessage = 'Timeout: El servicio de email tardó demasiado';
    } else if (error.text) {
      errorMessage = error.text;
    }

    return { 
      success: false, 
      error: errorMessage,
      details: error
    };
  }
};

// Función de prueba para producción
export const testProductionEmail = async () => {
  console.log('🧪 [PRODUCCIÓN] Iniciando test...');
  
  const testData = {
    customerEmail: 'dilansuy24@gmail.com',
    customerName: 'Test Producción',
    orderNumber: 'PROD-TEST-' + Date.now(),
    total: '1.00',
    items: [{ name: 'Test Café Producción', quantity: 1, price: 1.00 }],
    address: 'Test Address Production',
    phone: '12345678'
  };
  
  const result = await sendOrderEmail(testData);
  console.log('🧪 [PRODUCCIÓN] Resultado:', result);
  return result;
};
