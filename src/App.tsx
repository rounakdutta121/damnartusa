import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { lazyNamed } from './utils/lazyImport';

const Home = lazyNamed(() => import('./pages/Home'), 'Home');
const Services = lazyNamed(() => import('./pages/Services'), 'Services');
const About = lazyNamed(() => import('./pages/About'), 'About');
const Contact = lazyNamed(() => import('./pages/Contact'), 'Contact');
const PPC = lazyNamed(() => import('./pages/PPC'), 'PPC');
const SMM = lazyNamed(() => import('./pages/SMM'), 'SMM');
const WebDevelopment = lazyNamed(() => import('./pages/WebDevelopment'), 'WebDevelopment');
const ContentWriting = lazyNamed(() => import('./pages/ContentWriting'), 'ContentWriting');
const GraphicDesign = lazyNamed(() => import('./pages/GraphicDesign'), 'GraphicDesign');
const SEO = lazyNamed(() => import('./pages/SEO'), 'SEO');
const DigitalMarketingAudit = lazyNamed(() => import('./pages/DigitalMarketingAudit'), 'DigitalMarketingAudit');
const DataMining = lazyNamed(() => import('./pages/DataMining'), 'DataMining');
const LeadGeneration = lazyNamed(() => import('./pages/LeadGeneration'), 'LeadGeneration');
const PayPerValidLead = lazyNamed(() => import('./pages/PayPerValidLead'), 'PayPerValidLead');
const InfluencerMarketing = lazyNamed(() => import('./pages/InfluencerMarketing'), 'InfluencerMarketing');
const Blogs = lazyNamed(() => import('./pages/Blogs'), 'Blogs');
const BlogDetail = lazyNamed(() => import('./pages/BlogDetail'), 'BlogDetail');

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

const FloatingActions = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    <motion.a 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/919056544487"
      aria-label="Chat on WhatsApp"
      className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-colors"
    >
      <MessageCircle size={28} />
    </motion.a>
    <motion.a 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="tel:+919056544487"
      aria-label="Call us"
      className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700 transition-colors"
    >
      <Phone size={28} />
    </motion.a>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans bg-slate-950 text-slate-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ppc" element={<PPC />} />
            <Route path="/smm" element={<SMM />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/content-writing" element={<ContentWriting />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/digital-marketing-audit" element={<DigitalMarketingAudit />} />
            <Route path="/data-mining" element={<DataMining />} />
            <Route path="/lead-generation" element={<LeadGeneration />} />
            <Route path="/pay-per-valid-lead" element={<PayPerValidLead />} />
            <Route path="/influencer-marketing" element={<InfluencerMarketing />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
