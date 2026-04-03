import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FadeIn } from '../components/Animations';

export default function Cookies() {
  const sections = [
    {
      title: "1. What Are Cookies?",
      content: "Cookies are small data files that are placed on your computer or mobile device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your overall experience."
    },
    {
      title: "2. How We Use Cookies",
      content: "DamnArt uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. Here's what we use:",
      items: [
        { label: "Essential Cookies:", desc: "Required for the website to function properly. They enable core features like security, authentication, and accessibility." },
        { label: "Performance Cookies:", desc: "Help us understand how visitors interact with our website by collecting anonymous information about pages visited and error messages encountered." },
        { label: "Functionality Cookies:", desc: "Remember your preferences and settings to provide a more personalized experience." },
        { label: "Analytics Cookies:", desc: "Track visitor behavior through tools like Google Analytics to help us improve our website and services." },
        { label: "Marketing Cookies:", desc: "Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns." }
      ]
    },
    {
      title: "3. Third-Party Cookies",
      content: "Some cookies on our website are set by third-party services we use:",
      items: [
        { label: "Google Analytics:", desc: "For website traffic analysis" },
        { label: "Google Ads:", desc: "For advertising and conversion tracking" },
        { label: "Social Media Platforms:", desc: "For social sharing and engagement features" },
        { label: "Customer Support Tools:", desc: "For live chat and support functionality" }
      ]
    },
    {
      title: "4. Cookie Purposes",
      items: [
        "Understand and save your preferences for future visits",
        "Compile aggregate data about site traffic and site interactions",
        "Track conversions and measure advertising effectiveness",
        "Remember your login status and preferences",
        "Provide personalized content and recommendations"
      ]
    },
    {
      title: "5. Managing Your Cookie Preferences",
      content: "You have several options for managing cookies:",
      items: [
        { label: "Browser Settings:", desc: "Most browsers allow you to block or delete cookies through their settings. However, this may affect website functionality." },
        { label: "Opt-Out Links:", desc: "You can opt out of Google Analytics using browser add-ons, and manage ad preferences through industry opt-out tools." },
        { label: "Our Preference Center:", desc: "Contact us to learn about any preference options we may offer." }
      ]
    },
    {
      title: "6. Impact of Disabling Cookies",
      content: "If you choose to disable cookies, please be aware that some features of our website may not function properly. You may experience:"
    },
    {
      title: "7. Updates to This Policy",
      content: "We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We encourage you to review this page periodically for the latest information."
    }
  ];

  const impacts = [
    "Reduced functionality on certain pages",
    "Inability to save preferences",
    "Login sessions may expire prematurely",
    "Some interactive features may not work"
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 section-dark relative overflow-hidden">
      <div className="green-glow top-0 right-0 w-[600px] h-[600px] opacity-10" />
      <div className="bubble bubble-green b2" />
      <div className="bubble bubble-green b4" />
      <div className="bubble bubble-green b6" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="mb-12">
            <p className="text-green-500 font-bold tracking-widest text-sm uppercase mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Cookie <span className="text-gradient-green">Policy</span>
            </h1>
            <p className="text-slate-400">Last Updated & Effective Date: 21 November 2025</p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <FadeIn key={idx} delay={idx * 0.04}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-green-500/20 transition-all"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{section.title}</h2>
                
                {section.content && (
                  <p className="text-slate-400 leading-relaxed mb-4">{section.content}</p>
                )}

                {section.items && section.items.length > 0 && (
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-400">
                        {typeof item === 'string' ? (
                          <>
                            <span className="text-green-500 mt-1.5">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>{item}</span>
                          </>
                        ) : (
                          <>
                            <span className="text-green-500 font-semibold mt-0.5">{item.label}</span>
                            <span>{item.desc}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {idx === 5 && (
                  <ul className="mt-4 space-y-2 text-slate-500">
                    {impacts.map((impact, i) => (
                      <li key={i} className="flex gap-2">
                        <span>•</span>
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 p-8 bg-green-500/10 rounded-2xl border border-green-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Cookie Preferences</h3>
            <p className="text-slate-400 mb-6">
              Want to manage your cookie settings or have questions about how we use cookies?
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:info@damnart.com" 
                className="px-6 py-3 bg-green-600 text-white rounded-full font-bold hover:bg-green-500 transition-colors"
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
              className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors font-bold"
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
