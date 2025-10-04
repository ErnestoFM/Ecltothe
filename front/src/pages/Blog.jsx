import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { useState } from 'react';
import { Search } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [category, setCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'Tecnología que transforma: el futuro del comercio digital',
      image: 'https://ejemplo.com/imagen1.jpg',
      excerpt: 'Exploramos cómo la inteligencia artificial y la automatización están redefiniendo la experiencia de compra.',
      category: 'Tecnología',
      date: '2025-10-01',
    },
    {
      id: 2,
      title: 'Diseño responsivo: claves para interfaces modernas',
      image: 'https://ejemplo.com/imagen2.jpg',
      excerpt: 'Una guía práctica para crear layouts fluidos y accesibles en todos los dispositivos.',
      category: 'Diseño',
      date: '2025-09-28',
    },
    {
      id: 3,
      title: 'Estrategias de marketing para startups en 2025',
      image: 'https://ejemplo.com/imagen3.jpg',
      excerpt: 'Cómo posicionar tu marca desde cero con herramientas digitales efectivas.',
      category: 'Marketing',
      date: '2025-09-25',
    },
  ];

  const filteredArticles = articles
    .filter((article) =>
      category === 'all' ? true : article.category === category
    )
    .filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === 'desc'
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <>
      <Navbar />

      <section className="w-full bg-white py-8 px-4 sm:px-12">
        {/* Filtros y buscador */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center border rounded px-3 py-2 w-full sm:w-1/2">
            <Search size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="w-full outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="desc">Más recientes</option>
              <option value="asc">Más antiguos</option>
            </select>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="all">Todas</option>
              <option value="Tecnología">Tecnología</option>
              <option value="Diseño">Diseño</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
        </div>

        {/* Artículo destacado estilo periódico */}
        {filteredArticles.length > 0 && (
          <article className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 border-b pb-6">
            <img
              src={filteredArticles[0].image}
              alt={filteredArticles[0].title}
              className="w-full h-64 object-cover rounded"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
                {filteredArticles[0].title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {filteredArticles[0].excerpt}
              </p>
              <span className="text-xs text-gray-500">
                {filteredArticles[0].category} · {filteredArticles[0].date}
              </span>
            </div>
          </article>
        )}

        {/* Lista de artículos secundarios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.slice(1).map((article) => (
            <article
              key={article.id}
              className="border rounded-lg p-4 hover:shadow transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {article.excerpt}
              </p>
              <span className="text-xs text-gray-500">
                {article.category} · {article.date}
              </span>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
