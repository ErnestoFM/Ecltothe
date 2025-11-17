import React, { useEffect, useRef } from 'react';

const FaqItem = ({ pregunta, respuesta, preguntaId, respuestaId }) => {
  const preguntaRef = useRef(null);
  const respuestaRef = useRef(null);

  useEffect(() => {
    // Función para mostrar/ocultar usando JavaScript vanilla
    const mostrarOcultar = () => {
      if (respuestaRef.current) {
        respuestaRef.current.classList.toggle('hidden');
      }
    };

    // Agregar event listener al elemento de la pregunta
    const preguntaElement = preguntaRef.current;
    if (preguntaElement) {
      preguntaElement.addEventListener('click', mostrarOcultar);
    }

    // Cleanup: remover event listener cuando el componente se desmonte
    return () => {
      if (preguntaElement) {
        preguntaElement.removeEventListener('click', mostrarOcultar);
      }
    };
  }, []);

  return (
    <div>
      {/* Pregunta */}
      <div
        id={preguntaId}
        ref={preguntaRef}
        className="cursor-pointer border p-4 bg-gray-100 hover:bg-gray-200 transition"
      >
        <p className="font-bold text-gray-900">{pregunta}</p>
      </div>
      
      {/* Respuesta */}
      <div
        id={respuestaId}
        ref={respuestaRef}
        className="hidden border p-4 bg-gray-50 border-t-0"
      >
        <p className="text-gray-700">{respuesta}</p>
      </div>
    </div>
  );
};

export default FaqItem;