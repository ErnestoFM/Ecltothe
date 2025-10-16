import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPedidos } from '../services/pedidos';
import { useNavigate } from 'react-router-dom';

const Pedidos = () => {
  const { user } = useAuth();
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchPedidos = async () => {
        try {
          const data = await getPedidos(user.id);
          setPedidos(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchPedidos();
    }
    
  }, [user]);

  const handleCancelarPedido = async (pedidoId) => {
    try {
      // Simulación de cancelación de pedido
      setPedidos((prev) =>
        prev.map((pedido) =>
          pedido.id === pedidoId ? { ...pedido, estado: 'Cancelado' } : pedido
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // Helpers para formato
  const formatFecha = (fecha) =>
    new Intl.DateTimeFormat('es-MX', { dateStyle: 'medium' }).format(
      new Date(fecha)
    );

  const formatMoneda = (monto) =>
    new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(monto);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Mis Pedidos</h1>

        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : pedidos && pedidos.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th scope="col" className="px-4 py-2">Número de Pedido</th>
                  <th scope="col" className="px-4 py-2">Fecha</th>
                  <th scope="col" className="px-4 py-2">Estado</th>
                  <th scope="col" className="px-4 py-2">Total</th>
                  <th scope="col" className="px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map((pedido) => (
                  <tr key={pedido.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">#{pedido.id}</td>
                    <td className="px-4 py-2">{formatFecha(pedido.fecha)}</td>
                    <td className="px-4 py-2">{pedido.estado}</td>
                    <td className="px-4 py-2">{formatMoneda(pedido.total)}</td>
                    <td className="px-4 py-2">
                      {pedido.estado !== 'Cancelado' && (
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2"
                          onClick={() => handleCancelarPedido(pedido.id)}
                        >
                          Cancelar
                        </button>
                      )}
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
                        onClick={() => navigate(`/pedidos/${pedido.id}`)}
                      >
                        Ver detalles
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No tienes pedidos registrados.</p>
        )}
        
      </main>
      <Footer />
    </div>
  );
};

export default Pedidos;