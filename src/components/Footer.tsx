import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { ASSETS } from '../data';

export const Footer = () => {
  return (
    <footer className="py-24 section-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <img src={ASSETS.logo} alt="DamnArt Logo" width="100" height="100" loading="lazy" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              <span className="text-2xl font-black text-white tracking-tighter italic uppercase">DamnArt</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Empowering brands with AI-driven strategies and creative excellence. Your partner in digital dominance.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, url: ASSETS.social.facebook, name: "Facebook" },
                { Icon: Instagram, url: ASSETS.social.instagram, name: "Instagram" },
                { Icon: Youtube, url: ASSETS.social.youtube, name: "YouTube" },
                { Icon: Linkedin, url: ASSETS.social.linkedin, name: "LinkedIn" }
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-white/10 transition-all"
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
              <li><Link to="/blogs" className="hover:text-blue-500 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Services</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/ppc" className="hover:text-blue-500 transition-colors">PPC Management</Link></li>
              <li><Link to="/smm" className="hover:text-blue-500 transition-colors">Social Media</Link></li>
              <li><Link to="/seo" className="hover:text-blue-500 transition-colors">SEO Services</Link></li>
              <li><Link to="/web-development" className="hover:text-blue-500 transition-colors">Web Development</Link></li>
              <li><Link to="/graphic-design" className="hover:text-blue-500 transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="hover:text-blue-500 transition-colors cursor-pointer">
                <a href="mailto:info@damnart.com" className="hover:text-blue-500 transition-colors">info@damnart.com</a>
              </li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">
                <a href="tel:+919056544487" className="hover:text-blue-500 transition-colors">+91-90565-44487</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-slate-500">
          <p>© 2026 DamnArt. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
