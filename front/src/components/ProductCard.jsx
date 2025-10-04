import React, { useState } from 'react';
const currency = import.meta.env.VITE_CURRENCY_SYMBOL; // "$"


const ProductCard = ({ title, image, price, originalPrice, isNew, isSale, ecoLabel }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
      {/* Contenedor de imagen */}
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {isNew && (
            <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Nuevo
            </span>
          )}
          {isSale && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Oferta
            </span>
          )}
          {ecoLabel && (
            <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
              <span>🌱</span>
              {ecoLabel}
            </span>
          )}
        </div>

        {/* Botón de favoritos */}
        <button 
          onClick={toggleLike}
          className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <span className={`text-lg transition-colors duration-200 ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}>
            {isLiked ? '🤍' : '❤️'}
          </span>
        </button>

        {/* Imagen del producto */}
        <div className="relative w-full h-full">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
              <div className="text-gray-400 text-sm">Cargando...</div>
            </div>
          )}
          <img 
            src={image} 
            alt={title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Overlay con botón de vista rápida */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-white transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
            Vista rápida
          </button>
        </div>
      </div>

      {/* Contenido de la card */}
      <div className="p-4 space-y-3">
        {/* Título del producto */}
        <h3 className="font-semibold text-gray-900 text-lg leading-tight group-hover:text-green-600 transition-colors duration-200">
          {title}
        </h3>

        {/* Precios */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            {import.meta.env.VITE_CURRENCY_SYMBOL}{price}
          </span>
          {originalPrice && originalPrice > price && (
            <>
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice}
              </span>
              <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                -{Math.round((1 - price / originalPrice) * 100)}%
              </span>
            </>
          )}
        </div>

        {/* Rating y reviews (opcional) */}
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <div className="flex">
            {'⭐'.repeat(5)}
          </div>
          <span>(4.8)</span>
          <span className="text-gray-300">•</span>
          <span>127 reseñas</span>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-2 pt-2">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Ver Prodcuto
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-xl transition-colors duration-200">
            🛒
          </button>
        </div>

        {/* Información adicional */}
        <div className="flex items-center gap-4 text-xs text-gray-500 pt-1">
          <div className="flex items-center gap-1">
            <span>🚚</span>
            <span>Envío gratis</span>
          </div>
          <div className="flex items-center gap-1">
            <span>↩️</span>
            <span>Devolución fácil</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;