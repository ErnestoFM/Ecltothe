// src/components/Toast.jsx
import React, { createContext, useContext, useState, useCallback } from 'react';

// Contexto para el Toast
const ToastContext = createContext();

// Hook para usar el Toast
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast debe usarse dentro de ToastProvider');
  }
  return context;
};

// Componente individual de Toast
const ToastItem = ({ id, type, message, duration, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  const typeStyles = {
    success: {
      icon: '✅',
      bg: 'bg-green-50',
      border: 'border-green-500',
      text: 'text-green-800',
      iconBg: 'bg-green-100'
    },
    error: {
      icon: '❌',
      bg: 'bg-red-50',
      border: 'border-red-500',
      text: 'text-red-800',
      iconBg: 'bg-red-100'
    },
    warning: {
      icon: '⚠️',
      bg: 'bg-yellow-50',
      border: 'border-yellow-500',
      text: 'text-yellow-800',
      iconBg: 'bg-yellow-100'
    },
    info: {
      icon: 'ℹ️',
      bg: 'bg-blue-50',
      border: 'border-blue-500',
      text: 'text-blue-800',
      iconBg: 'bg-blue-100'
    }
  };

  const style = typeStyles[type] || typeStyles.info;

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => onClose(id), 300);
  };

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(handleClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id]);

  return (
    <div
      className={`
        ${style.bg} ${style.border} border-l-4 rounded-lg shadow-lg p-4 mb-3 
        transition-all duration-300 transform
        ${isExiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}
        hover:shadow-xl
      `}
    >
      <div className="flex items-start">
        <div className={`${style.iconBg} rounded-full p-2 mr-3`}>
          <span className="text-xl">{style.icon}</span>
        </div>
        <div className="flex-1">
          <p className={`${style.text} font-medium text-sm`}>{message}</p>
        </div>
        <button
          onClick={handleClose}
          className={`${style.text} hover:opacity-70 transition-opacity ml-2`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Provider del Toast
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // Métodos de ayuda
  const toast = {
    success: (message, duration) => addToast(message, 'success', duration),
    error: (message, duration) => addToast(message, 'error', duration),
    warning: (message, duration) => addToast(message, 'warning', duration),
    info: (message, duration) => addToast(message, 'info', duration),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      
      {/* Contenedor de toasts */}
      <div className="fixed top-4 right-4 z-50 w-full max-w-sm">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            {...toast}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// Componente para mostrar toast sin contexto (uso directo)
export const Toast = ({ type = 'info', message, onClose, show = true }) => {
  if (!show) return null;

  return (
    <ToastItem
      id={Date.now()}
      type={type}
      message={message}
      duration={0}
      onClose={onClose}
    />
  );
};

export default Toast;