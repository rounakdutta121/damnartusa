import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FadeIn } from '../components/Animations';

export default function Terms() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the DamnArt website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service."
    },
    {
      title: "2. Services Description",
      content: "DamnArt provides digital marketing services including but not limited to PPC management, social media marketing, SEO, web development, content writing, graphic design, and related consulting services."
    },
    {
      title: "3. User Responsibilities",
      items: [
        "You must be at least 18 years old to use our services",
        "You agree to provide accurate, current, and complete information",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree not to use our services for any illegal or unauthorized purpose",
        "You will not interfere with or disrupt our servers or networks"
      ]
    },
    {
      title: "4. Intellectual Property",
      content: "All content, trademarks, service marks, trade names, logos, and intellectual property on this website are owned by or licensed to DamnArt. You may not use, reproduce, or distribute any content from this website without our prior written consent."
    },
    {
      title: "5. Payment Terms",
      items: [
        "Payment terms are as specified in individual service agreements",
        "We accept various payment methods as indicated during checkout",
        "All fees are exclusive of applicable taxes unless stated otherwise",
        "Refunds are subject to our refund policy and individual contract terms"
      ]
    },
    {
      title: "6. Limitation of Liability",
      content: "DamnArt shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of our services."
    },
    {
      title: "7. Confidentiality",
      content: "Both parties agree to maintain the confidentiality of any proprietary information shared during the course of business. This obligation survives the termination of any agreement between the parties."
    },
    {
      title: "8. Termination",
      content: "Either party may terminate services with written notice as specified in individual service agreements. Upon termination, any outstanding fees become immediately due and payable."
    },
    {
      title: "9. Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which DamnArt operates, without regard to its conflict of law provisions."
    },
    {
      title: "10. Changes to Terms",
      content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of any changes."
    },
    {
      title: "11. Contact Information",
      content: "If you have any questions about these Terms of Service, please contact us at info@damnart.com or through our contact form."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 section-dark relative overflow-hidden">
      <div className="purple-glow top-0 right-0 w-[600px] h-[600px] opacity-10" />
      <div className="bubble bubble-purple b2" />
      <div className="bubble bubble-purple b4" />
      <div className="bubble bubble-purple b6" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="mb-12">
            <p className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Terms of <span className="text-gradient-purple">Service</span>
            </h1>
            <p className="text-slate-400">Last Updated & Effective Date: 21 November 2025</p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <FadeIn key={idx} delay={idx * 0.03}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{section.title}</h2>
                
                {section.content && (
                  <p className="text-slate-400 leading-relaxed">{section.content}</p>
                )}

                {section.items && section.items.length > 0 && (
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-400">
                        <span className="text-purple-500 mt-1.5">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 p-8 bg-purple-500/10 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Questions About Our Terms?</h3>
            <p className="text-slate-400 mb-6">
              We're here to help clarify any questions you may have about our terms of service.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:info@damnart.com" 
                className="px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-500 transition-colors"
              >
                Email Us
              </a>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors font-bold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
