import { Link } from 'react-router-dom';

export default function Cookies() {
  return (
    <div className="min-h-screen pt-32 pb-16 section-dark">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Cookie Policy</h1>
        <div className="prose prose-invert prose-lg max-w-none text-slate-400">
          <p>Last updated: April 3, 2026</p>
          <p>This Cookie Policy explains how DamnArt uses cookies and similar technologies to recognize you when you visit our website.</p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What are cookies?</h2>
          <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. We use cookies to enhance your browsing experience.</p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about our use of cookies, please contact us at info@damnart.com.</p>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-blue-500 hover:text-blue-400">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
