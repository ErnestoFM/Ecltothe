// services/pedidos.js
export const getPedidos = async (userId) => {
  // Aquí luego reemplazas por fetch real
  return [
    { id: 1, fecha: '2023-02-15', estado: 'Enviado', total: 100 },
    { id: 2, fecha: '2023-02-10', estado: 'Entregado', total: 200 },
    { id: 3, fecha: '2023-02-05', estado: 'Cancelado', total: 50 },
  ];
};