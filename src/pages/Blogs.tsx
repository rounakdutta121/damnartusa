import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen, FileText, PenTool } from 'lucide-react';
import { FadeIn } from '../components/Animations';
import { ASSETS } from '../data';

const blogPosts = [
  {
    id: 1,
    title: "Innovations in Energy Infrastructure",
    category: "Design Testing",
    author: "Dr.Volt",
    date: "19 November 2025",
    readTime: "5 Min",
    image: ASSETS.servicesVideo,
    excerpt: "The Urgency of Automating Our Substations: A Leap Towards a Resilient Future"
  },
  {
    id: 2,
    title: "Healthy Living: Proactive Steps for Healthy Aging",
    category: "Healthy Living",
    author: "Editorial Team",
    date: "19 November 2025",
    readTime: "4 Min",
    image: ASSETS.heroVideo,
    excerpt: "Nurturing Our Golden Years: Proactive Steps for Healthy Aging and Flu Protection"
  },
  {
    id: 3,
    title: "Green Consulting Insights",
    category: "Green Consulting",
    author: "Environmental Team",
    date: "19 November 2025",
    readTime: "6 Min",
    image: ASSETS.aboutVideo,
    excerpt: "Exploring the Harmony between Technology and Nature"
  },
  {
    id: 4,
    title: "Finance Forward: Strategic Update",
    category: "Finance",
    author: "The Chartered Chronicle",
    date: "19 November 2025",
    readTime: "5 Min",
    image: ASSETS.servicesVideo,
    excerpt: "India's GST Council Streamlines Compliance for MSMEs and Taxpayers"
  },
  {
    id: 5,
    title: "Innovations in Power Grids",
    category: "Design Testing",
    author: "Dr.Volt",
    date: "19 November 2025",
    readTime: "7 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Design, Automation, and Security in Modern Power Infrastructure"
  },
  {
    id: 6,
    title: "Winter Wellness: A Community's Shield",
    category: "Healthy Living",
    author: "Health Bulletin",
    date: "19 November 2025",
    readTime: "4 Min",
    image: ASSETS.contactVideo,
    excerpt: "Your Bi-Monthly Health Update for Winter Preparedness"
  },
];

export const Blogs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-0 section-dark">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-20" />
        <div className="blue-glow -bottom-20 -right-20 w-[600px] h-[600px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
                <BookOpen size={16} />
                <span>DAMNART BLOGS | INSIGHTS & UPDATES</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">
              <FadeIn delay={0.4} distance={40}>
                LATEST<br />
              </FadeIn>
              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue">INSIGHTS</span>
              </FadeIn>
            </h1>

            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium">
                Stay ahead with our curated collection of industry insights, expert opinions, and the latest trends in digital marketing, technology, and business strategy.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 section-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 uppercase italic">
              Featured <span className="text-gradient-blue">Articles</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post, idx) => (
              <FadeIn key={post.id} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-blue-600/90 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-2">
                        <Clock size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <BookOpen size={14} />
                        {post.readTime} Read
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">By {post.author}</span>
                      <div className="flex items-center gap-2 text-blue-500 font-bold group-hover:gap-4 transition-all">
                        Read More <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* All Blogs Section */}
      <section className="py-32 section-dark relative overflow-hidden">
        <div className="blue-glow bottom-0 right-0 w-[600px] h-[600px] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 uppercase italic">
              All <span className="text-gradient-blue">Articles</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <FadeIn key={post.id} delay={idx * 0.05}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-500 cursor-pointer h-full flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600/90 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <BookOpen size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-xs text-slate-500">By {post.author}</span>
                      <div className="flex items-center gap-1 text-blue-500 text-sm font-bold group-hover:gap-2 transition-all">
                        Read <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-32 section-dark relative overflow-hidden">
        <div className="blue-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-blue-600 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center">
            <FadeIn>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <FileText size={40} className="text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Subscribe to Our <br /> <span className="text-blue-200">Newsletter</span>
              </h2>
              <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto font-medium">
                Get the latest insights, trends, and expert opinions delivered directly to your inbox. Join our community of forward-thinkers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/20 border border-white/30 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-black uppercase tracking-widest shadow-xl hover:bg-blue-50 transition-all whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};
