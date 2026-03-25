import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../data';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blogs', path: '/blogs' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="DamnArt Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
            <span className="text-2xl font-black tracking-tighter text-white">DAMN<span className="text-blue-500">ART</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.path.startsWith('/#') ? (
                <a 
                  key={item.name} 
                  href={item.path.substring(1)} 
                  className="text-sm font-bold text-white/70 hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`text-sm font-bold transition-colors ${location.pathname === item.path ? 'text-blue-500' : 'text-white/70 hover:text-blue-400'}`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <button onClick={scrollToContact} className="btn-primary">Work With Us!</button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-slate-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navItems.map((item) => (
                item.path.startsWith('/#') ? (
                  <a 
                    key={item.name} 
                    href={item.path.substring(1)} 
                    className="text-2xl font-bold text-white" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    className={`text-2xl font-bold ${location.pathname === item.path ? 'text-blue-500' : 'text-white'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button onClick={scrollToContact} className="btn-primary justify-center w-full py-4 text-lg">Work With Us!</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
