import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-16 section-dark">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-lg max-w-none text-slate-400">
          <p>Last updated: April 3, 2026</p>
          <p>By accessing and using the DamnArt website and services, you accept and agree to be bound by the terms and provisions of this agreement.</p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at info@damnart.com.</p>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-blue-500 hover:text-blue-400">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
