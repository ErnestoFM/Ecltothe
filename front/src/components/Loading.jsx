import React from 'react';

// Versión 1: Spinner simple
export const LoadingSpinner = ({ size = 'md', color = 'green' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const colorClasses = {
    green: 'border-green-600',
    gray: 'border-gray-600',
    white: 'border-white'
  };

  return (
    <div className={`${sizeClasses[size]} border-4 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}></div>
  );
};

// Versión 2: Loading con texto
export const LoadingWithText = ({ text = 'Cargando...', size = 'md' }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <LoadingSpinner size={size} color="green" />
      <p className="text-gray-600 text-sm font-medium">{text}</p>
    </div>
  );
};

// Versión 3: Loading de página completa (overlay)
export const LoadingOverlay = ({ text = 'Cargando...' }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 shadow-2xl">
        <LoadingWithText text={text} size="lg" />
      </div>
    </div>
  );
};

// Versión 4: Loading inline (para botones)
export const LoadingButton = ({ text = 'Cargando...' }) => {
  return (
    <div className="flex items-center justify-center">
      <LoadingSpinner size="sm" color="white" />
      <span className="ml-2">{text}</span>
    </div>
  );
};

// Versión 5: Loading con logo de Eclothe
export const LoadingEclothe = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <div className="h-16 w-16 border-4 border-green-200 rounded-full"></div>
        <div className="absolute inset-0 h-16 w-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900">
        <span className="text-green-600">e-</span>clothe
      </h2>
      <div className="flex space-x-1">
        <div className="h-2 w-2 bg-green-600 rounded-full animate-bounce"></div>
        <div className="h-2 w-2 bg-green-600 rounded-full animate-bounce delay-100"></div>
        <div className="h-2 w-2 bg-green-600 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
};

// Versión 6: Skeleton loader (para productos)
export const SkeletonProduct = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 animate-pulse">
      <div className="aspect-square bg-gray-200 rounded-xl mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-10 bg-gray-200 rounded-xl"></div>
    </div>
  );
};

// Componente principal (exportación por defecto)
const Loading = ({ 
  type = 'spinner', 
  text = 'Cargando...', 
  size = 'md',
  fullscreen = false 
}) => {
  if (type === 'overlay' || fullscreen) {
    return <LoadingOverlay text={text} />;
  }

  if (type === 'eclothe') {
    return <LoadingEclothe />;
  }

  if (type === 'skeleton') {
    return <SkeletonProduct />;
  }

  if (type === 'button') {
    return <LoadingButton text={text} />;
  }

  if (type === 'text') {
    return <LoadingWithText text={text} size={size} />;
  }

  return <LoadingSpinner size={size} color="green" />;
};

export default Loading;