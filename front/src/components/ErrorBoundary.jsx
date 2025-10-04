import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para mostrar la UI alternativa
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Aquí puedes loguear el error a un servicio externo si lo deseas
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center text-red-600">
          <h2 className="text-xl font-bold">Algo salió mal 😢</h2>
          <p>Intenta recargar la página o volver más tarde.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
