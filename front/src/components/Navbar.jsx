import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search, Heart, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, isAuthenticated, logout, isLoading } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeUserMenu();
  };

  const menuItems = [
    { name: 'Inicio', to: '/' },
    { name: 'Productos', to: '/productos' },
    { name: 'Blog', to: '/blog' },
    { name: 'Accesorios', to: '/' },
    { name: 'Contacto', to: '/contact' },
    { name: 'Ofertas', to: '/' },
    { name: 'Sostenibilidad', to: '/' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-green-600">e-</span>clothe
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 text-base lg:text-lg font-medium transition-colors duration-200 relative group"                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600 transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-green-600 transition-colors duration-200">
              <Heart size={20} />
            </button>
            
            {/* User Menu Desktop */}
            <div className="relative">
              <button 
                onClick={toggleUserMenu}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 flex items-center"
              >
                <User size={20} />
                {user && (
                  <span className="ml-2 text-sm font-medium hidden lg:block">
                    {user.name.split(' ')[0]}
                  </span>
                )}
                <span className="ml-1 text-xs">▾</span>
              </button>
              
              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <>
                  {/* Overlay para cerrar al hacer clic fuera */}
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={closeUserMenu}
                  ></div>
                  
                  {/* Menu desplegable */}
                  <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-2">
                    {!isAuthenticated() ? (
                      // Menú para usuarios no autenticados
                      <>
                        <Link
                          to="/crear-cuenta"
                          onClick={closeUserMenu}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                          <User size={16} className="mr-3" />
                          Crear cuenta
                        </Link>
                        <Link
                          to="/iniciarSesion"
                          onClick={closeUserMenu}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                          <span className="mr-3 text-sm">🔑</span>
                          Iniciar sesión
                        </Link>
                      </>
                    ) : (
                      // Menú para usuarios autenticados
                      <>
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                        <Link
                          to="/perfil"
                          onClick={closeUserMenu}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                          <span className="mr-3 text-sm">⚙️</span>
                          Mi perfil
                        </Link>
                        <Link
                          to="/mis-pedidos"
                          onClick={closeUserMenu}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                          <span className="mr-3 text-sm">📦</span>
                          Mis pedidos
                        </Link>
                        <div className="border-t border-gray-100 my-1"></div>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                          <LogOut size={16} className="mr-3" />
                          Cerrar sesión
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>

            <button className="text-gray-700 hover:text-green-600 transition-colors duration-200 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                5
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button className="text-gray-700 hover:text-green-600 transition-colors duration-200 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-xs">
                3
              </span>
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-gray-700 hover:text-green-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Icons Menu */}
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-around py-2">
              <button className="flex flex-col items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
                <Search size={20} />
                <span className="text-xs mt-1">Buscar</span>
              </button>
              <button className="flex flex-col items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
                <Heart size={20} />
                <span className="text-xs mt-1">Favoritos</span>
              </button>
            </div>
            
            {/* User options in mobile menu */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              {!isAuthenticated() ? (
                <>
                  <h3 className="text-sm font-semibold text-gray-500 px-3 mb-2">Cuenta</h3>
                  <Link
                    to="/crear-cuenta"
                    className="flex items-center text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={18} className="mr-3" />
                    Crear cuenta
                  </Link>
                  <Link
                    to="/iniciarSesion"
                    className="flex items-center text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3">🔑</span>
                    Iniciar sesión
                  </Link>
                </>
              ) : (
                <>
                  <div className="px-3 mb-2">
                    <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <Link
                    to="/perfil"
                    className="flex items-center text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3">⚙️</span>
                    Mi perfil
                  </Link>
                  <Link
                    to="/mis-pedidos"
                    className="flex items-center text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3">📦</span>
                    Mis pedidos
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full text-red-600 hover:bg-red-50 px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    <LogOut size={18} className="mr-3" />
                    Cerrar sesión
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;