import { Link } from 'react-router-dom';

const BlogVisualizer = () => {
  const blogs = [
    {
      id: 1,
      title: '5 ejercicios para mejorar tu resistencia',
      image: '/img/blog-resistencia.jpg',
      excerpt: 'Descubre rutinas efectivas para aumentar tu capacidad cardiovascular y mantenerte en forma.',
    },
    {
      id: 2,
      title: 'Cómo elegir la ropa deportiva ideal',
      image: '/img/blog-ropa.jpg',
      excerpt: 'Te explicamos qué materiales y cortes favorecen tu rendimiento y comodidad al entrenar.',
    },
    {
      id: 3,
      title: 'Nutrición para atletas: lo que debes saber',
      image: '/img/blog-nutricion.jpg',
      excerpt: 'Conoce los principios básicos de alimentación deportiva para mejorar tu recuperación y energía.',
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          <span className="text-green-600">Blog</span> deportivo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600">{blog.excerpt}</p>
                </div>
                <Link
                  to={`/blog/${blog.id}`}
                  className="mt-4 inline-block bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-center"
                >
                  Leer más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogVisualizer;
