import React, { useState, useEffect, useRef } from 'react';

export default function Header({ navItems = [], backgroundImage }) {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0] || '');
  const navRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current && headerRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom;
        setIsSticky(headerBottom <= 0);
      }

      for (let section of navItems) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header ref={headerRef} className="relative w-full bg-gray-100">
        <img
          src={
            backgroundImage ||
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80'
          }
          alt="Imagen de cabecera"
          className="w-full h-64 object-cover"
        />

        <nav
          ref={navRef}
          className={`z-40 mx-4 md:mx-auto max-w-5xl mt-4 rounded-3xl shadow-lg transition-all duration-3000 bg-white ${
            isSticky
              ? 'fixed top-20 left-0 right-0 mx-auto w-11/12 rounded-3xl'
              : 'relative'
          }`}
        >
          <ul className="flex justify-start md:justify-center space-x-4 md:space-x-6 py-4 px-4 text-gray-800 font-semibold overflow-x-auto whitespace-nowrap scrollbar-hide">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 capitalize ${
                    activeSection === item
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'hover:bg-blue-100 hover:text-blue-600'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}