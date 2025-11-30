import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { NavLink } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navLinks: NavLink[] = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/#services' },
  { label: 'Sobre', href: '/#features' },
  { label: 'Contato', href: '/#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.replace('/#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname !== '/') {
        // If we are on a location page, we let the Link component handle the routing to home first
        return; 
      }
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-brand-blue/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`p-2 rounded-full ${isScrolled ? 'bg-brand-blue text-white' : 'bg-white text-brand-blue'}`}>
              <Wrench size={24} />
            </div>
            <div>
              <h1 className={`text-xl md:text-2xl font-bold leading-tight ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
                Desentope ADP
                <span className={`block text-xs md:text-sm font-medium ${isScrolled ? 'text-brand-orange' : 'text-brand-orange'}`}>
                  24h • Curitiba e Região
                </span>
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-semibold hover:text-brand-orange transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5541985171966"
              className="flex items-center gap-2 bg-brand-orange hover:bg-amber-600 text-white px-5 py-2.5 rounded-full font-bold transition-transform hover:-translate-y-0.5 shadow-lg"
            >
              <Phone size={18} />
              <span>(41) 98517-1966</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Nav Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6 space-y-6">
            <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-gray-500"
            >
                <X size={28} />
            </button>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-xl font-medium text-gray-800 border-b border-gray-100 pb-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto">
             <a
              href="https://wa.me/5541985171966"
              className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-lg font-bold text-lg shadow-md"
            >
              <Phone size={20} />
              WhatsApp (41) 98517-1966
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;