// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatbotWidget from './ChatbotWidget'; 
import ErrorBoundary from './ErrorBoundary';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      
      
        <Outlet /> 


      <Footer />
      
      <ChatbotWidget />
    </div>
  );
};

export default Layout;  