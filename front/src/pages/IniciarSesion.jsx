import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn } from 'lucide-react';

const IniciarSesion = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Por favor completa todos los campos');
      return;
    }

    login({ name: 'Ernesto López', email });
    navigate('/');
  };

  const handleGoogleLogin = () => {
    // Simulación de login con Google
    login({ name: 'Ernesto con Google', email: 'ernesto@google.com' });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          <span className="text-green-600">e-</span>clothe | Iniciar sesión
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

          <button
            type="submit"
            className="w-full flex justify-center items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            <LogIn size={18} className="mr-2" />
            Iniciar sesión
          </button>
        </form>

        {/* Separador visual */}
        <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-4 text-base font-medium text-gray-500">o</span>
            <div className="flex-grow h-px bg-gray-300"></div>
        </div>


        {/* Botón Google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <img
            src="google-icon.png"
            alt="Google"
            className="h-5 w-5 mr-3"
          />
          <span className="text-sm text-gray-700 font-medium">Continuar con Google</span>
        </button>

        <p className="mt-6 text-sm text-center text-gray-600">
          ¿No tienes cuenta?{' '}
          <a href="/crear-cuenta" className="text-green-600 hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default IniciarSesion;
