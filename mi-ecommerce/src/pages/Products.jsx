import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { value: 'todos', label: 'Todos los cafés' },
    { value: 'arabica', label: 'Arábica' },
    { value: 'espresso', label: 'Espresso' },
    { value: 'organico', label: 'Orgánico' },
    { value: 'descafeinado', label: 'Descafeinado' },
    { value: 'especialidad', label: 'Especialidad' }
  ];

  const filteredProducts = products
    .filter(product => 
      selectedCategory === 'todos' || product.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
      <div className="container">
        <h1 style={{
          textAlign: 'center',
          marginBottom: '1rem',
          color: 'var(--color-primary)',
          fontSize: '2.5rem'
        }}>
          Nuestra Selección de Cafés
        </h1>
        
        <p style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'var(--color-gray-dark)',
          fontSize: '1.1rem'
        }}>
          Desde granos premium hasta mezclas exclusivas, encuentra tu café perfecto
        </p>

        {/* Filtros */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'var(--color-primary)',
              fontWeight: '500'
            }}>
              Tipo de Café:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '0.5rem',
                border: '1px solid var(--color-secondary)',
                borderRadius: '6px',
                fontSize: '1rem',
                minWidth: '200px'
              }}
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'var(--color-primary)',
              fontWeight: '500'
            }}>
              Ordenar por:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.5rem',
                border: '1px solid var(--color-secondary)',
                borderRadius: '6px',
                fontSize: '1rem',
                minWidth: '200px'
              }}
            >
              <option value="name">Nombre</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>

        {/* Productos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: 'var(--color-gray-dark)'
          }}>
            <p>No se encontraron cafés en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
