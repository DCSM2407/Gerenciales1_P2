import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import About from './pages/About';
import Checkout from './pages/Checkout';
import './styles/global.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-accent)' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/acerca-de" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          
          {/* Footer */}
          <footer style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-accent)',
            padding: '2rem 0',
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <div className="container">
              <p>&copy; 2025 MayaCode. Todos los derechos reservados.</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                Hecho con ❤️ usando Vite + React
              </p>
            </div>
          </footer>
        </div>
        
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: 'var(--color-white)',
              color: 'var(--color-primary)',
            },
            success: {
              iconTheme: {
                primary: 'var(--color-highlight)',
                secondary: 'var(--color-white)',
              },
            },
          }}
        />
      </Router>
    </CartProvider>
  );
}

export default App;
