import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, BookOpen, Volume2, VolumeX, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';
import { FadeIn } from '../components/Animations';
import { ASSETS } from '../data';

const blogPosts: { [key: string]: any } = {
  'innovations-in-energy-infrastructure': {
    id: 1,
    title: "Innovations in Energy Infrastructure",
    category: "Design Testing",
    author: "Dr.Volt",
    date: "19 November 2025",
    readTime: "5 Min",
    image: ASSETS.servicesVideo,
    excerpt: "The Urgency of Automating Our Substations: A Leap Towards a Resilient Future",
    content: `Welcome to an exploration of innovation and resilience in the world of industrial design and manufacturing. Join Dr. Volt as we delve into critical advancements shaping the future of testing services and robust energy infrastructure.

The Urgency of Automating Our Substations: A Leap Towards a Resilient Future

"Friends, fellow enthusiasts of progress! Have you ever stopped to consider the silent guardians of our energy? Today, I want to talk about how we're making them smarter, faster, and more reliable."

Automated Substation

It's remarkable, isn't it, how quickly technology evolves? What felt cutting-edge just a decade ago can now seem almost… quaint. This rapid pace is especially true in the realm of power system control and protection. I often find myself pondering the necessity of upgrading our existing infrastructure, particularly our substations. These aren't just static points on a map; they are the beating hearts of our power grids, and their efficiency dictates the stability of our entire energy ecosystem.

The truth is, while some might feel a pang of nostalgia for older systems, the sheer speed of technological advancement means that waiting even a few years can leave us critically behind. Automating these substations isn't merely about adopting new gadgets; it's about embedding intelligence and resilience directly into the very fabric of our national power supply.

It means faster fault detection, quicker recovery, and a significantly more stable grid for every home and industry. Imagine the confidence that comes from knowing our power infrastructure is not just reacting, but proactively adapting. This isn't just an engineering upgrade; it's a commitment to a future where energy is as reliable as the sunrise, and that's why I believe innovation here isn't just a headline — it's our heartbeat.

Embracing Tomorrow: The Essential Tech Reshaping Modern Substations

"Now, let's talk about the very tools that are turning our energy dreams into reality. The future of our power grid is being built right now, with incredible technologies."

Modern Substations

Walking through a modern substation today feels like stepping into the future. The design philosophy has shifted dramatically, moving beyond mere functionality to embrace concepts of high availability, unwavering reliability, and unparalleled operational flexibility. This isn't just a luxury for new constructions; it's a vision we're striving to implement even in substations that have stood strong for forty years.

What excites me most is the ingenious integration of cutting-edge technologies. We're talking about smart sensors that monitor conditions with incredible precision, advanced communication protocols ensuring seamless data flow, and intelligent automation systems that can predict and prevent issues before they even arise.

Engineers, our role is evolving, and it's a beautiful thing to witness. Understanding these integrated systems, from intelligent electronic devices to advanced SCADA interfaces, is no longer optional; it's fundamental to shaping India's energy independence. It's about building a grid that doesn't just power our present, but also empowers our future with resilience and innovation. This journey into intelligent infrastructure is proof that our ingenuity knows no bounds.

Shielding Our Lifelines: Confronting Electromagnetic Threats to Power Systems

"Finally, let's address a critical, often overlooked aspect of our energy future: its safety. How do we protect the very infrastructure that powers our lives from unseen dangers?"

Electromagnetic Threats

In our increasingly interconnected world, the security of our critical infrastructure, especially our power systems, has taken on a profound new meaning. I've often reflected on the evolving landscape of threats we face, and it's become clear that we cannot afford to ignore the silent, yet potentially devastating, danger of intentional destructive electromagnetic attacks.

This isn't the stuff of science fiction; it's a tangible vulnerability that demands our immediate attention and strategic foresight. The consequences of such attacks could be catastrophic, plunging communities into darkness, disrupting essential services, and crippling economic activity.

Yet, I wonder, are we truly prepared? Are we investing enough in hardening our systems, in developing advanced shielding, and in implementing robust detection and response mechanisms? Protecting our power grid isn't just an engineering challenge; it's a national imperative, a cornerstone of our security and prosperity.

It requires collaboration between scientists, engineers, policymakers, and a vigilant public. This isn't a battle we can afford to lose, and our collective will to safeguard these vital lifelines defines our resilience as a nation. Let's awaken to this challenge, together.`
  },
};

export const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const blog = slug ? blogPosts[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        speechSynthesis.cancel();
      }
    };
  }, [slug]);

  const toggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    const synth = window.speechSynthesis;

    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    } else {
      if (blog?.content) {
        const utterance = new SpeechSynthesisUtterance(blog.content);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        synth.speak(utterance);
        setIsSpeaking(true);
      }
    }
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog?.title || '')}&url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareMenu(false);
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center section-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <button onClick={() => navigate('/blogs')} className="btn-primary">
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden section-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
          <div className="absolute inset-0 hero-gradient opacity-50" />
        </div>

        <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-20" />
        <div className="blue-glow -bottom-20 -right-20 w-[600px] h-[600px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <FadeIn>
            <motion.button
              whileHover={{ x: -5 }}
              onClick={() => navigate('/blogs')}
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Blogs</span>
            </motion.button>
          </FadeIn>

          {/* Category Badge */}
          <FadeIn delay={0.1}>
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-bold uppercase tracking-widest rounded-full mb-6">
              {blog.category}
            </span>
          </FadeIn>

          {/* Title */}
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              {blog.title}
            </h1>
          </FadeIn>

          {/* Meta Info */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8">
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen size={16} />
                {blog.readTime} Read
              </span>
              <span className="text-slate-500">By {blog.author}</span>
            </div>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleSpeech}
                className={`flex items-center gap-3 px-6 py-4 rounded-full font-bold transition-all ${
                  isSpeaking 
                    ? 'bg-green-600 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX size={20} />
                    Stop Reading
                  </>
                ) : (
                  <>
                    <Volume2 size={20} />
                    Listen to Article
                  </>
                )}
              </motion.button>

              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-3 px-6 py-4 bg-white/10 border border-white/20 rounded-full font-bold text-white hover:bg-white/20 transition-all"
                >
                  <Share2 size={20} />
                  Share
                </motion.button>

                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 bg-slate-800 border border-white/10 rounded-2xl p-4 z-20 min-w-[200px]"
                  >
                    <button
                      onClick={shareOnTwitter}
                      className="flex items-center gap-3 w-full px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors"
                    >
                      <Twitter size={18} />
                      Share on Twitter
                    </button>
                    <button
                      onClick={shareOnLinkedIn}
                      className="flex items-center gap-3 w-full px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors"
                    >
                      <Linkedin size={18} />
                      Share on LinkedIn
                    </button>
                    <button
                      onClick={shareOnFacebook}
                      className="flex items-center gap-3 w-full px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors"
                    >
                      <Facebook size={18} />
                      Share on Facebook
                    </button>
                    <button
                      onClick={copyLink}
                      className="flex items-center gap-3 w-full px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors"
                    >
                      <LinkIcon size={18} />
                      Copy Link
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8 z-20">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 section-dark relative overflow-hidden">
        <div className="blue-glow bottom-0 right-0 w-[600px] h-[600px] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="prose prose-lg prose-invert max-w-none">
              {blog.content.split('\n\n').map((paragraph: string, index: number) => {
                if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
                  return (
                    <motion.blockquote
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="border-l-4 border-blue-500 pl-8 py-4 my-10 bg-white/5 rounded-r-2xl italic text-xl text-slate-300"
                    >
                      {paragraph}
                    </motion.blockquote>
                  );
                }

                if (paragraph.match(/^[A-Z][A-Za-z\s]+$/)) {
                  return (
                    <motion.h2
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="text-2xl md:text-3xl font-black text-white mt-12 mb-6 uppercase italic"
                    >
                      {paragraph}
                    </motion.h2>
                  );
                }

                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8"
                  >
                    {paragraph}
                  </motion.p>
                );
              })}
            </div>
          </FadeIn>

          {/* Author Box */}
          <FadeIn delay={0.2}>
            <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-black text-blue-500">DV</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{blog.author}</h4>
                  <p className="text-slate-400">Design Testing Expert</p>
                </div>
              </div>
              <p className="text-slate-400">
                Dr. Volt is an expert in industrial design and manufacturing, dedicated to exploring innovations that shape the future of testing services and robust energy infrastructure.
              </p>
            </div>
          </FadeIn>

          {/* Tags */}
          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-3">
              {['Corporate', 'Fashion', 'Latest', 'Recent', 'Tags', 'Theme', 'Trends', 'WordPress'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Related Posts Section */}
          <FadeIn delay={0.4}>
            <div className="mt-20 pt-12 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 uppercase italic">
                Related <span className="text-blue-500">Articles</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <Clock size={12} />
                    <span>17 November 2025</span>
                    <span>•</span>
                    <BookOpen size={12} />
                    <span>6 Min</span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    Design Testing Innovations – November 17, 2025
                  </h4>
                  <p className="text-sm text-slate-400 line-clamp-2">
                    Design Testing – Beyond Compliance. Friends, have you ever stopped to think about the invisible network that...
                  </p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <Clock size={12} />
                    <span>17 November 2025</span>
                    <span>•</span>
                    <BookOpen size={12} />
                    <span>7 Min</span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    Design Testing – Future Insights for Manufacturing & Services
                  </h4>
                  <p className="text-sm text-slate-400 line-clamp-2">
                    Latest Industry Innovations & Challenges. Good morning, esteemed readers! Today, I want...
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
