import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { PlusCircle, MapPin, CreditCard, User, Trash2 } from 'lucide-react';

const Configuracion = () => {
  const [datosPersonales, setDatosPersonales] = useState([
    { nombre: '', correo: '', telefono: '', fechaNacimiento: '' },
  ]);

  const [direcciones, setDirecciones] = useState([
    { direccion: '', ciudad: '', pais: '' },
  ]);

  const [metodosPago, setMetodosPago] = useState([
    { metodo: '', tarjeta: '', vencimiento: '' },
  ]);

  const [preferencias, setPreferencias] = useState('');

  const handlePersonalChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...datosPersonales];
    updated[index][name] = value;
    setDatosPersonales(updated);
  };

  const handleDireccionChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...direcciones];
    updated[index][name] = value;
    setDirecciones(updated);
  };

  const handlePagoChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...metodosPago];
    updated[index][name] = value;
    setMetodosPago(updated);
  };

  const removeItem = (list, setList, index) => {
    const updated = [...list];
    if (updated.length > 1) {
      updated.splice(index, 1);
    } else {
      Object.keys(updated[0]).forEach((key) => (updated[0][key] = ''));
    }
    setList(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ datosPersonales, direcciones, metodosPago, preferencias });
  };

  return (
    <>
      <Navbar />

      <section className="w-full max-w-4xl mx-auto bg-white py-8 px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Configuración de cuenta</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Información personal */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User size={20} className="text-green-600" />
              <h3 className="text-lg font-semibold">Información personal</h3>
            </div>
            {datosPersonales.map((item, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 relative">
                <input type="text" name="nombre" value={item.nombre} onChange={(e) => handlePersonalChange(index, e)} placeholder="Nombre completo" className="border rounded px-3 py-2 text-sm w-full" />
                <input type="email" name="correo" value={item.correo} onChange={(e) => handlePersonalChange(index, e)} placeholder="Correo electrónico" className="border rounded px-3 py-2 text-sm w-full" />
                <input type="tel" name="telefono" value={item.telefono} onChange={(e) => handlePersonalChange(index, e)} placeholder="Teléfono" className="border rounded px-3 py-2 text-sm w-full" />
                <input type="date" name="fechaNacimiento" value={item.fechaNacimiento} onChange={(e) => handlePersonalChange(index, e)} placeholder="Fecha de nacimiento" className="border rounded px-3 py-2 text-sm w-full" />
                <button type="button" onClick={() => removeItem(datosPersonales, setDatosPersonales, index)} className="absolute top-0 right-0 text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Direcciones */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-green-600" />
                <h3 className="text-lg font-semibold">Direcciones</h3>
              </div>
              <button type="button" onClick={() => setDirecciones([...direcciones, { direccion: '', ciudad: '', pais: '' }])} className="flex items-center gap-1 text-sm text-green-700 hover:underline">
                <PlusCircle size={16} /> Agregar otra
              </button>
            </div>
            {direcciones.map((item, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 relative">
                <input type="text" name="direccion" value={item.direccion} onChange={(e) => handleDireccionChange(index, e)} placeholder="Dirección" className="border rounded px-3 py-2 text-sm w-full" />
                <input type="text" name="ciudad" value={item.ciudad} onChange={(e) => handleDireccionChange(index, e)} placeholder="Ciudad" className="border rounded px-3 py-2 text-sm w-full" />
                <input type="text" name="pais" value={item.pais} onChange={(e) => handleDireccionChange(index, e)} placeholder="País" className="border rounded px-3 py-2 text-sm w-full" />
                <button type="button" onClick={() => removeItem(direcciones, setDirecciones, index)} className="absolute top-0 right-0 text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Métodos de pago */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CreditCard size={20} className="text-green-600" />
                <h3 className="text-lg font-semibold">Métodos de pago</h3>
              </div>
              <button type="button" onClick={() => setMetodosPago([...metodosPago, { metodo: '', tarjeta: '', vencimiento: '' }])} className="flex items-center gap-1 text-sm text-green-700 hover:underline">
                <PlusCircle size={16} /> Agregar otro
              </button>
            </div>
            {metodosPago.map((item, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 relative">
                <select name="metodo" value={item.metodo} onChange={(e) => handlePagoChange(index, e)} className="border rounded px-3 py-2 text-sm w-full">
                  <option value="">Selecciona método de pago</option>
                  <option value="Tarjeta de crédito">Tarjeta de crédito</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Transferencia">Transferencia bancaria</option>
                </select>
                <input type="text" name="tarjeta" value={item.tarjeta} onChange={(e) => handlePagoChange(index, e)} placeholder="Número de tarjeta" className="border rounded px-3 py-2 text-sm w-full" />
                <input type="month" name="vencimiento" value={item.vencimiento} onChange={(e) => handlePagoChange(index, e)} placeholder="Fecha de vencimiento" className="border rounded px-3 py-2 text-sm w-full" />
                <button type="button" onClick={() => removeItem(metodosPago, setMetodosPago, index)} className="absolute top-0 right-0 text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Otros datos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Otros datos</h3>
            <textarea name="preferencias" value={preferencias} onChange={(e) => setPreferencias(e.target.value)} placeholder="Preferencias, notas o datos adicionales" className="border rounded px-3 py-2 text-sm w-full" rows={4}></textarea>
          </div>

          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition w-full sm:w-auto">Guardar cambios</button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Configuracion;
