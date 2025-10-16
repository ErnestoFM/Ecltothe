import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserPlus } from 'lucide-react';

const CrearCuenta = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Correo y contraseña son obligatorios');
      return;
    }

    login({ name: 'Nuevo usuario', email, telefono });
    navigate('/');
  };

  const handleGoogleRegister = () => {
    login({ name: 'Usuario Google', email: 'google@eclothe.com' });
    navigate('/');
  };

  const handleFacebookRegister = () => {
    login({ name: 'Usuario Facebook', email: 'facebook@eclothe.com' });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          <span className="text-green-600">e-</span>clothe | Crear cuenta
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Teléfono (opcional)</label>
            <input
              type="tel"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="+52 33 1234 5678"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            <UserPlus size={18} className="mr-2" />
            Crear cuenta
          </button>
        </form>

        {/* Separador visual */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-base font-medium text-gray-500">o</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Botones de registro con redes sociales */}
        <button
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 mb-4"
        >
          <img
            src="google-icon.png"
            alt="Google"
            className="h-5 w-5 mr-3"
          />
          <span className="text-sm text-gray-700 font-medium">Registrarse con Google</span>
        </button>

        <button
          onClick={handleFacebookRegister}
          className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 mr-3"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.727 4.147 10.481 9.542 11.521v-7.875h-2.542v-2.875h2.542v-2.375c0-2.516 1.542-3.875 3.792-3.875 1.083 0 2.542.208 2.542.208v2.708h-1.375c-1.375 0-1.667 1-1.667 2v1.708h2.792l-.417 2.875h-2.375v7.875c5.395-1.04 9.542-5.794 9.542-11.521z" />
          </svg>
          <span className="text-sm font-medium">Registrarse con Facebook</span>
        </button>

        <p className="mt-6 text-sm text-center text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <a href="/iniciarSesion" className="text-green-600 hover:underline">
            Inicia sesión aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default CrearCuenta;