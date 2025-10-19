import React, { useState } from 'react';
import { LayoutDashboard, Package, Users, BarChart3, Share2, TrendingUp, Plus, Edit, Trash2, Menu, X } from 'lucide-react';

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Administrador'
  });

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', label: 'Productos', icon: Package },
    { id: 'users', label: 'Usuarios', icon: Users },
    { id: 'analytics', label: 'Analíticas', icon: BarChart3 },
    { id: 'social', label: 'Redes Sociales', icon: Share2 },
    { id: 'traffic', label: 'Tráfico Web', icon: TrendingUp },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nuevo usuario:', formData);
    alert('Usuario administrador creado exitosamente');
    setFormData({ name: '', email: '', password: '', role: 'Administrador' });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">Panel de Control</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Productos</h3>
                <p className="text-3xl font-bold text-gray-800">248</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">Usuarios Activos</h3>
                <p className="text-3xl font-bold text-gray-800">1,432</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">Visitas Hoy</h3>
                <p className="text-3xl font-bold text-gray-800">3,891</p>
              </div>
            </div>
          </div>
        );
      
      case 'products':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">Gestión de Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button 
                onClick={() => window.location.href = '/priv/crear'}
                className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition flex flex-col items-center justify-center gap-3 shadow-md"
              >
                <Plus size={32} />
                <span className="font-semibold">Agregar Producto</span>
              </button>
              <button 
                onClick={() => window.location.href = '/priv/modificar'}
                className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition flex flex-col items-center justify-center gap-3 shadow-md"
              >
                <Edit size={32} />
                <span className="font-semibold">Modificar Producto</span>
              </button>
              <button 
                onClick={() => window.location.href = '/priv/eliminar'}
                className="bg-red-600 text-white p-6 rounded-lg hover:bg-red-700 transition flex flex-col items-center justify-center gap-3 shadow-md"
              >
                <Trash2 size={32} />
                <span className="font-semibold">Eliminar Producto</span>
              </button>
            </div>
          </div>
        );
      
      case 'users':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">Gestión de Usuarios</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Crear Nuevo Administrador</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Nombre completo" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="admin@ejemplo.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="••••••••" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rol</label>
                  <select 
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Super Administrador</option>
                    <option>Administrador</option>
                    <option>Editor</option>
                  </select>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Crear Usuario
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">Analíticas de Productos</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Productos Más Vistos</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Producto Premium', views: 1847 },
                    { name: 'Producto Destacado', views: 1523 },
                    { name: 'Producto Nuevo', views: 1298 },
                    { name: 'Producto Especial', views: 982 },
                    { name: 'Producto Regular', views: 756 }
                  ].map((product, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">{product.name}</span>
                      <span className="text-gray-600">{product.views} vistas</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Conversión de Ventas</h3>
                <div className="h-64 flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded">
                  <div className="text-center">
                    <p className="text-gray-500 mb-2">Tasa de conversión</p>
                    <p className="text-4xl font-bold text-blue-600">3.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'social':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">Métricas de Redes Sociales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Share2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Instagram</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seguidores</span>
                    <span className="font-bold">12,458</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Engagement</span>
                    <span className="font-bold text-green-600">4.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posts este mes</span>
                    <span className="font-bold">24</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Share2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Facebook</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Likes</span>
                    <span className="font-bold">8,923</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Alcance semanal</span>
                    <span className="font-bold">45,231</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interacciones</span>
                    <span className="font-bold">1,834</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'traffic':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">Análisis de Tráfico Web</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Visitantes Únicos - Últimos 7 días</h3>
                <div className="h-64 flex items-end justify-around bg-gray-50 rounded p-4 gap-2">
                  {[42, 58, 65, 48, 72, 81, 76].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-blue-500 rounded-t transition-all hover:bg-blue-600"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-xs text-gray-500">D{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-gray-600 text-sm font-semibold mb-2">Tasa de Rebote</h3>
                  <p className="text-3xl font-bold text-gray-800">42.3%</p>
                  <p className="text-sm text-green-600 mt-1">↓ 2.1% vs. mes anterior</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-gray-600 text-sm font-semibold mb-2">Tiempo Promedio</h3>
                  <p className="text-3xl font-bold text-gray-800">3:24</p>
                  <p className="text-sm text-green-600 mt-1">↑ 18s vs. mes anterior</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-gray-600 text-sm font-semibold mb-2">Páginas/Sesión</h3>
                  <p className="text-3xl font-bold text-gray-800">4.7</p>
                  <p className="text-sm text-green-600 mt-1">↑ 0.3 vs. mes anterior</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-800 rounded">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="flex-1 py-6">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition ${
                  activeSection === item.id ? 'bg-gray-800 border-l-4 border-blue-500' : ''
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;