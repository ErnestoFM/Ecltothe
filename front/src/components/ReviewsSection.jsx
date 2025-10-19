import React, { useState } from 'react';
import ReviewCard from './ReviewCard';


const ReviewsSection = () => {
  const [filterRating, setFilterRating] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Base de  datos de reseñas
  const allReviews = [
    {
      id: 1,
      name: 'Ana G.',
      date: '2024-03-12',
      rating: 5,
      comment: 'Excelente calidad y atención. Me encantó la sudadera térmica outdoor.',
      avatar: 'https://randomuser.me/api/portraits/women/21.jpg'
    },
    {
      id: 2,
      name: 'Luis R.',
      date: '2024-04-05',
      rating: 4,
      comment: 'Buena relación calidad-precio. Ideal para clima frío.',
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    {
      id: 3,
      name: 'Ana M.',
      date: '2024-02-20',
      rating: 5,
      comment: 'Muy buen servicio y productos. Volveré a comprar seguro.',
      avatar: 'https://randomuser.me/api/portraits/women/50.jpg'
    },
    {
      id: 4,
      name: 'Carlos T.',
      date: '2024-05-10',
      rating: 5,
      comment: 'La chamarra que compré superó mis expectativas. Perfecta para actividades al aire libre.',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      id: 5,
      name: 'María S.',
      date: '2024-01-15',
      rating: 4,
      comment: 'Productos de calidad, aunque el envío tardó un poco más de lo esperado.',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      id: 6,
      name: 'Pedro L.',
      date: '2024-06-03',
      rating: 5,
      comment: 'Increíble diseño y comodidad. La tela es de primera calidad.',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
      id: 7,
      name: 'Laura P.',
      date: '2024-03-28',
      rating: 3,
      comment: 'El producto es bueno, pero esperaba un poco más por el precio.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 8,
      name: 'Roberto F.',
      date: '2024-04-18',
      rating: 5,
      comment: 'Excelente experiencia de compra. Totalmente recomendado.',
      avatar: 'https://randomuser.me/api/portraits/men/23.jpg'
    },
    {
      id: 9,
      name: 'Sofía H.',
      date: '2024-05-25',
      rating: 4,
      comment: 'Me gustó mucho el diseño. La talla es perfecta.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 10,
      name: 'Diego M.',
      date: '2024-02-08',
      rating: 5,
      comment: 'La mejor inversión que he hecho en ropa outdoor. Resistente y funcional.',
      avatar: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
      id: 11,
      name: 'Carmen V.',
      date: '2024-06-12',
      rating: 5,
      comment: 'Superó todas mis expectativas. El equipo de atención al cliente es excepcional.',
      avatar: 'https://randomuser.me/api/portraits/women/29.jpg'
    },
    {
      id: 12,
      name: 'Javier N.',
      date: '2024-01-30',
      rating: 4,
      comment: 'Buen producto, aunque me gustaría que tuvieran más variedad de colores.',
      avatar: 'https://randomuser.me/api/portraits/men/40.jpg'
    }
  ];

  // Filtrar por rating
  const filteredReviews = filterRating === 'all' 
    ? allReviews 
    : allReviews.filter(review => review.rating === parseInt(filterRating));

  // Ordenar
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'oldest') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'highest') {
      return b.rating - a.rating;
    } else if (sortBy === 'lowest') {
      return a.rating - b.rating;
    }
    return 0;
  });

  // Calcular estadísticas
  const avgRating = (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1);
  const ratingCounts = [5, 4, 3, 2, 1].map(star => 
    allReviews.filter(r => r.rating === star).length
  );

  return (
    <div id="resenas" className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Reseñas de Clientes</h2>
      
      {/* Estadísticas de reseñas */}
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center">
            <p className="text-5xl font-bold text-gray-800">{avgRating}</p>
            <div className="flex text-yellow-400 justify-center my-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600">Basado en {allReviews.length} reseñas</p>
          </div>
          
          <div className="flex-1 w-full md:max-w-md">
            {ratingCounts.map((count, index) => (
              <div key={index} className="flex items-center gap-2 mb-1">
                <span className="text-sm w-12">{5 - index} ★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(count / allReviews.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm w-8 text-right">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filtrar por estrellas:
          </label>
          <select 
            value={filterRating} 
            onChange={(e) => setFilterRating(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Todas las reseñas</option>
            <option value="5">5 estrellas</option>
            <option value="4">4 estrellas</option>
            <option value="3">3 estrellas</option>
            <option value="2">2 estrellas</option>
            <option value="1">1 estrella</option>
          </select>
        </div>
        
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ordenar por:
          </label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="newest">Más recientes</option>
            <option value="oldest">Más antiguas</option>
            <option value="highest">Mayor puntuación</option>
            <option value="lowest">Menor puntuación</option>
          </select>
        </div>
      </div>

      {/* Contador de resultados */}
      <p className="text-center text-gray-600 mb-6">
        Mostrando {sortedReviews.length} {sortedReviews.length === 1 ? 'reseña' : 'reseñas'}
      </p>

      {/* Grid de reseñas */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedReviews.map((review) => (
          <ReviewCard 
            key={review.id}
            name={review.name}
            date={new Date(review.date).toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
            rating={review.rating}
            comment={review.comment}
            avatar={review.avatar}
          />
        ))}
      </div>

      {sortedReviews.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          No hay reseñas que coincidan con los filtros seleccionados.
        </p>
      )}
    </div>
  );
};

export default ReviewsSection;