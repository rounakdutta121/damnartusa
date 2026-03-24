import { motion } from 'motion/react';
import { 
  Users, Target, Rocket, Shield, Award, 
  ArrowRight, Download, Mail, Phone, MapPin,
  CheckCircle2, Globe, MousePointerClick, DollarSign, Heart, BarChart3, Zap
} from 'lucide-react';
import { FadeIn, FloatingText } from '../components/Animations';
import { Typewriter } from '../components/Typewriter';
import { ASSETS } from '../data';

export const About = () => {
  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-0 section-dark">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src={ASSETS.aboutVideo} type="video/mp4" />
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
                <Users size={16} />
                <span>WHO WE ARE | YOUR GROWTH PARTNER</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">
              <FadeIn delay={0.4} distance={40}>
                WE ARE THE<br />
              </FadeIn>
              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue inline-block sm:whitespace-nowrap">
                  <Typewriter words={["GROWTH ENGINE!", "CREATIVE HUB!", "DATA ALLY!", "STRATEGIC PARTNER!"]} />
                </span>
              </FadeIn>
            </h1>
            
            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium">
                DamnArt is a premier digital marketing agency dedicated to helping businesses grow and thrive. 
                With over 15 years of experience, we craft innovative strategies that align with the latest trends.
              </p>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary px-12 py-5 text-xl justify-center"
                >
                  Work With Us! <ArrowRight size={24} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary px-12 py-5 text-xl justify-center"
                >
                  View Our Story
                </motion.button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values / Who We Are Detailed */}
      <section className="py-24 section-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic">
                  Powering <span className="text-gradient-blue">Growth</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                  <p>
                    We have collaborated to leverage our 15+ years of experience to provide Digital Marketing Services that power the growth in Businesses. 
                    Our commitment is to deliver exceptional results by crafting innovative strategies that align with the latest trends and technologies.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "15+ Years of Industry Experience",
                      "AI-Powered Marketing Strategies",
                      "Creative Excellence in Design & Content",
                      "Performance-Driven PPC & SEO"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white font-bold">
                        <CheckCircle2 className="text-blue-500" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full" />
                <div className="relative service-card backdrop-blur-xl">
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">Want to Know us Better?</h3>
                  <p className="text-slate-400 mb-8 text-lg">
                    Download DamnArt's Services' Portfolio to know what more we have to offer!
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full py-6 text-xl justify-center"
                  >
                    <Download size={24} /> Download Brochure
                  </motion.button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-32 section-dark relative overflow-hidden">
        <div className="blue-glow bottom-0 right-0 w-[600px] h-[600px] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <FadeIn delay={0.2}>
              <div className="service-card h-full group">
                <div className="w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Target size={40} />
                </div>
                <h3 className="text-4xl font-black text-white mb-8 uppercase italic">Our <span className="text-gradient-blue">Vision</span></h3>
                <ul className="space-y-6 text-slate-400 text-lg">
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>To be the leading digital marketing agency recognized for our expertise, creativity, and exceptional client service.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>Experts in Pay Per Click, Social Media Management, Graphic Designing, Search Engine Optimization, Content Creation, and more.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>To continuously evolve and set new standards in the digital marketing industry, driving positive change and innovation.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Mission */}
            <FadeIn delay={0.4}>
              <div className="service-card h-full group">
                <div className="w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Rocket size={40} />
                </div>
                <h3 className="text-4xl font-black text-white mb-8 uppercase italic">Our <span className="text-gradient-blue">Mission</span></h3>
                <ul className="space-y-6 text-slate-400 text-lg">
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>Empower growth in businesses by addressing their simple to complex digital marketing issues like inconsistent lead generation and low ROAS.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>Deliver innovative solutions through data-driven strategies and creative advertisement campaigns tailored to fuel revenue growth.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>Focus on measurable results that help clients overcome challenges and reach their business objectives.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                    <span>Build lasting relationships with clients based on Analytics & Reporting, Trust, Transparency, and Mutual Success.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 section-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase italic">
                Why Choose <span className="text-gradient-blue">DamnArt?</span>
              </h2>
              <p className="text-2xl md:text-3xl font-black text-blue-500 mb-8 tracking-widest uppercase">
                DIGITAL ADVERTISEMENT MARKETING NETWORK
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expert Team", desc: "Professionals delivering tailored digital marketing solutions.", icon: Users },
              { title: "Improved ROI", desc: "Data-driven strategies maximizing returns on investment.", icon: BarChart3 },
              { title: "High ROAS", desc: "Optimized campaigns for better return on ad spend.", icon: Zap },
              { title: "Increased CTR", desc: "Boosting click-through rates for better engagement.", icon: MousePointerClick },
              { title: "Lower CPC", desc: "Efficient ad management reducing cost per click.", icon: DollarSign },
              { title: "Higher Conversion Rates", desc: "Strategies focused on driving quality leads.", icon: Target },
              { title: "Client-Centric", desc: "Transparent communication and adaptable approaches.", icon: Heart }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex flex-col items-center justify-center p-4 mb-6 shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="text-white mb-2" size={32} />
                    <span className="text-white font-black text-xs uppercase leading-tight">{item.title}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info (Specific to About Page) */}
      <section id="contact" className="py-32 section-dark border-t border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                  <Mail size={32} />
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Email Us</h4>
                <p className="text-xl font-bold text-white">info@damnart.com</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                  <Phone size={32} />
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Call Us</h4>
                <p className="text-xl font-bold text-white">+91-90565-44487</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                  <Globe size={32} />
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Global Presence</h4>
                <p className="text-xl font-bold text-white">India | UK | USA | Canada | Dubai</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};
