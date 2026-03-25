import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen, FileText, PenTool, Search, ChevronDown, X } from 'lucide-react';
import { FadeIn } from '../components/Animations';
import { ASSETS } from '../data';

const blogPosts = [
  {
    id: 28,
    slug: "funnel-stages",
    title: "If Your Funnel Still Has Stages, You're Already Behind",
    category: "Marketing",
    author: "DamnArt",
    date: "11 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774414178/Idhar-Udhar-ke-use-2025-04-11T101138.735-768x432_f7c6im.jpg",
    excerpt: "The Traditional Funnel Is Dead. Here's What Replaced It."
  },
  {
    id: 29,
    title: "How Brands Are Secretly 'Whispering' to You on Social Media",
    category: "Marketing",
    author: "Social Team",
    date: "9 April 2025",
    readTime: "2 Min",
    image: ASSETS.servicesVideo,
    excerpt: "Ever scrolled through your Instagram feed and felt like a post was speaking directly to you? You're not imagining it."
  },
  {
    id: 30,
    title: "Design Isn't What It Looks Like. It's What It Triggers in the Brain",
    category: "Design",
    author: "Design Team",
    date: "8 April 2025",
    readTime: "2 Min",
    image: ASSETS.webDevVideo,
    excerpt: "When we hear the word 'design', most of us think about what we see—fonts, colors, images, and layout."
  },
  {
    id: 31,
    title: "The Psychology of 'Almost Buying': Why Do People Abandon Carts and Forms?",
    category: "Marketing",
    author: "Marketing Team",
    date: "5 April 2025",
    readTime: "2 Min",
    image: ASSETS.servicesVideo,
    excerpt: "When someone lands on your website, they don't see HTML code or marketing copy—they see a story."
  },
  {
    id: 32,
    title: "Your Homepage Is Not a Page—It's a Persona",
    category: "Marketing",
    author: "Marketing Team",
    date: "4 April 2025",
    readTime: "2 Min",
    image: ASSETS.servicesVideo,
    excerpt: "When someone lands on your website, they don't see HTML code or marketing copy—they see a story."
  },
  {
    id: 33,
    title: "Marketing Process Audit: The Ultimate Game-Changer for Business Growth",
    category: "Marketing",
    author: "Marketing Team",
    date: "2 April 2025",
    readTime: "2 Min",
    image: ASSETS.servicesVideo,
    excerpt: "A Marketing Process Audit is a structured evaluation of a company's marketing activities"
  },
  {
    id: 34,
    title: "Content Isn't King. Context Is — How Smart Timing Beats Smart Writing",
    category: "Marketing",
    author: "Content Team",
    date: "1 April 2025",
    readTime: "2 Min",
    image: ASSETS.servicesVideo,
    excerpt: "You've probably heard the phrase 'Content is king.' But in today's hyper-connected digital ecosystem"
  },
  {
    id: 35,
    title: "Reverse Marketing: What If We Marketed 'Not Buying' a Product?",
    category: "Marketing",
    author: "Marketing Team",
    date: "29 March 2025",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "What if, instead of convincing people to buy a product, we marketed not buying it?"
  },
  {
    id: 36,
    title: "Pretty Doesn't Sell. Impact Does.",
    category: "Design",
    author: "Design Team",
    date: "29 March 2025",
    readTime: "2 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Moving from 'Aesthetic' to 'Actionable' in Design Strategy"
  },
  {
    id: 37,
    title: 'The "One-Day Digital Brand" Experiment',
    category: "Branding",
    author: "Branding Team",
    date: "26 March 2025",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "Can You Build a Recognizable Brand in 24 Hours?"
  },
  {
    id: 38,
    title: "AI Doesn't Just Predict Behavior—It Manufactures It",
    category: "AI & Marketing",
    author: "AI Team",
    date: "25 March 2025",
    readTime: "5 Min",
    image: ASSETS.webDevVideo,
    excerpt: "In today's world, Artificial Intelligence (AI) has become a buzzword in nearly every industry."
  },
  {
    id: 39,
    title: "Humans Swipe, Algorithms Sell: Welcome to the Era of Invisible Marketing",
    category: "Marketing",
    author: "Marketing Team",
    date: "21 March 2025",
    readTime: "5 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In the attention economy, visibility used to be everything. Flashy ads, bold CTAs, and loud campaigns ruled."
  },
  {
    id: 40,
    title: "FOMO Marketing Strategies: How to Drive Engagement and Boost Sales",
    category: "Marketing",
    author: "Marketing Team",
    date: "19 March 2025",
    readTime: "5 Min",
    image: ASSETS.servicesVideo,
    excerpt: "The Fear of Missing Out (FOMO) is a psychological phenomenon where people feel anxious about missing out."
  },
  {
    id: 41,
    title: "What Works on LinkedIn in 2025?",
    category: "Social Media",
    author: "Social Team",
    date: "18 March 2025",
    readTime: "5 Min",
    image: ASSETS.servicesVideo,
    excerpt: "LinkedIn continues to be a powerhouse for professional networking, personal branding, and B2B marketing in 2025."
  },
  {
    id: 42,
    title: "The Psychological Impact of Digital Ads on Consumers",
    category: "Marketing",
    author: "Marketing Team",
    date: "18 March 2025",
    readTime: "5 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In the digital era, advertisements have evolved from static billboards to highly targeted, interactive campaigns."
  },
  {
    id: 43,
    title: "AI-Generated Ads: Are They More Effective Than Human-Made Ads?",
    category: "AI & Marketing",
    author: "AI Team",
    date: "17 March 2025",
    readTime: "5 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Email marketing remains one of the most powerful digital marketing strategies, offering an average ROI of 4200%."
  },
  {
    id: 44,
    title: "The Future of AI in Email Marketing",
    category: "AI & Marketing",
    author: "AI Team",
    date: "12 March 2025",
    readTime: "5 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Smarter Campaigns & Higher Conversions"
  },
  {
    id: 45,
    title: "Top 5 AI Tools For Designers",
    category: "AI & Marketing",
    author: "AI Team",
    date: "11 March 2025",
    readTime: "5 Min",
    image: ASSETS.webDevVideo,
    excerpt: "ChatGPT is not just a chatbot—it's a powerful tool that can transform your productivity and creativity."
  },
  {
    id: 46,
    title: "Captions.ai and How to Use It in Digital Marketing",
    category: "AI & Marketing",
    author: "AI Team",
    date: "8 March 2025",
    readTime: "2 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Captions.ai and How to Use It in Digital Marketing"
  },
  {
    id: 47,
    title: "5 ChatGPT Hacks That You've Never Heard of",
    category: "AI & Marketing",
    author: "AI Team",
    date: "7 March 2025",
    readTime: "2 Min",
    image: ASSETS.webDevVideo,
    excerpt: "5 ChatGPT Hacks That You've Never Heard of (But Need to Know)"
  },
  {
    id: 48,
    title: "10 AI Tools That Will Save You 5 Hours Every Day!",
    category: "AI & Marketing",
    author: "AI Team",
    date: "4 March 2025",
    readTime: "3 Min",
    image: ASSETS.webDevVideo,
    excerpt: "In a world where time is money, AI-powered automation has become the ultimate game-changer."
  },
  {
    id: 49,
    title: "The Most Dangerous Marketing Hack That Actually Works",
    category: "Marketing",
    author: "Marketing Team",
    date: "3 March 2025",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "Every marketer dreams of skyrocketing engagement, multiplying conversions, and outshining competitors."
  },
  {
    id: 50,
    title: "What If You Had Only 10 Words to Sell Your Product?",
    category: "Marketing",
    author: "Marketing Team",
    date: "28 February 2025",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In a world overloaded with information, attention spans are shorter than ever."
  },
  {
    id: 51,
    title: "The Role of Blockchain in Digital Marketing",
    category: "Technology",
    author: "Tech Team",
    date: "27 February 2025",
    readTime: "3 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Ensuring Transparency and Security in Digital Marketing"
  },
  {
    id: 52,
    title: "Social Proof & Trust Signals",
    category: "Marketing",
    author: "Marketing Team",
    date: "26 February 2025",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "How Reviews, Testimonials, and Certifications Drive Sales"
  },
  {
    id: 53,
    title: "Can a Website Rank #1 on Google With No Content?",
    category: "SEO",
    author: "SEO Team",
    date: "25 February 2025",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "Search Engine Optimization (SEO) has long been associated with high-quality content, backlinks, and technical optimization."
  },
  {
    id: 54,
    title: "What If Every Brand Could Only Use ONE Color?",
    category: "Design",
    author: "Design Team",
    date: "25 February 2025",
    readTime: "2 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Imagine a world where every brand was restricted to just one color."
  },
  {
    id: 55,
    title: "What If Google Deleted Every Website Without SEO?",
    category: "SEO",
    author: "SEO Team",
    date: "18 February 2025",
    readTime: "2 Min",
    image: ASSETS.servicesVideo,
    excerpt: "Imagine waking up one day to find that Google has wiped out every website that lacks SEO."
  },
  {
    id: 56,
    title: "Nostalgia Marketing – Why Brands Are Leveraging Retro Themes in 2025",
    category: "Marketing",
    author: "Marketing Team",
    date: "18 February 2025",
    readTime: "2 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In the ever-evolving landscape of digital marketing, nostalgia marketing has proven to stand the test of time."
  },
  {
    id: 57,
    title: "What If Every Brand Had the Same Logo?",
    category: "Design",
    author: "Design Team",
    date: "17 February 2025",
    readTime: "3 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Imagine walking down a street lined with billboards, each featuring the exact same logo."
  },
  {
    id: 58,
    title: "Best Free Tools for Startups to Maximize Efficiency",
    category: "Business",
    author: "Business Team",
    date: "11 February 2025",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "Starting a new business is exciting, but managing operations efficiently while keeping costs low can be a challenge."
  },
  {
    id: 59,
    title: "Marketing Automation: How to Save Time & Increase ROI",
    category: "Marketing",
    author: "Marketing Team",
    date: "10 February 2025",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In today's fast-paced digital landscape, businesses must optimize their marketing efforts to stay competitive."
  },
  {
    id: 60,
    title: "Top AI Tools to Supercharge Your Life: The Ultimate Guide",
    category: "AI & Marketing",
    author: "AI Team",
    date: "7 February 2025",
    readTime: "4 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Imagine a world where AI handles your to-do list, drafts your emails, schedules your meetings."
  },
  {
    id: 61,
    title: "Top No-Code Platforms to Build Landing Pages That Convert",
    category: "Technology",
    author: "Tech Team",
    date: "7 February 2025",
    readTime: "4 Min",
    image: ASSETS.webDevVideo,
    excerpt: "In the fast-paced digital world, businesses need high-converting landing pages to capture leads."
  },
  {
    id: 62,
    title: "DeepSeek: The AI Earthquake That Shook Silicon Valley",
    category: "AI & Marketing",
    author: "AI Team",
    date: "4 February 2025",
    readTime: "4 Min",
    image: ASSETS.webDevVideo,
    excerpt: "The artificial intelligence (AI) landscape has just witnessed a seismic shift, and the aftershocks are still being felt."
  },
  {
    id: 63,
    title: "AI vs. Human Creativity: How to Balance Both in Marketing",
    category: "AI & Marketing",
    author: "AI Team",
    date: "3 February 2025",
    readTime: "4 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Artificial Intelligence has revolutionized digital marketing, enabling automation, predictive analytics, and personalized content."
  },
  {
    id: 64,
    title: "The Role of Chatbots in Customer Engagement",
    category: "AI & Marketing",
    author: "AI Team",
    date: "30 January 2025",
    readTime: "3 Min",
    image: ASSETS.webDevVideo,
    excerpt: "In today's fast-paced digital world, businesses must stay ahead by offering personalized and efficient communication."
  },
  {
    id: 65,
    title: "Mastering Google Performance Max Campaigns",
    category: "PPC",
    author: "PPC Team",
    date: "29 January 2025",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In the ever-evolving world of digital advertising, Google Performance Max campaigns are a game-changer."
  },
  {
    id: 66,
    title: "Is Social Media Marketing Really Delivering ROI?",
    category: "Social Media",
    author: "Social Team",
    date: "28 January 2025",
    readTime: "2 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In an era dominated by the digital pulse of social media, businesses everywhere are flocking to platforms."
  },
  {
    id: 67,
    title: "From Script to Screen: Why Overproduced Content is Killing Your Brand",
    category: "Content",
    author: "Content Team",
    date: "24 January 2025",
    readTime: "2 Min",
    image: ASSETS.servicesVideo,
    excerpt: "We've all seen it: the high-budget commercials, the Instagram ads with perfectly lit, ultra-processed images."
  },
  {
    id: 68,
    title: "Web Design 2025: A Battle of Ideas, Simplicity, and Chaos",
    category: "Design",
    author: "Design Team",
    date: "23 January 2025",
    readTime: "2 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Social media has become a cornerstone of modern communication and marketing."
  },
  {
    id: 69,
    title: "Exploring New Platforms: Are You on BeReal or Threads?",
    category: "Social Media",
    author: "Social Team",
    date: "10 January 2025",
    readTime: "4 Min",
    image: ASSETS.servicesVideo,
    excerpt: "Social media has become a cornerstone of modern communication and marketing."
  },
  {
    id: 70,
    title: "What is the Metaverse and Why Should Marketers Care?",
    category: "Technology",
    author: "Tech Team",
    date: "7 January 2025",
    readTime: "4 Min",
    image: ASSETS.webDevVideo,
    excerpt: "The term Metaverse has become one of the most talked-about concepts in the world of digital transformation."
  },
  {
    id: 71,
    title: "The Evolution of SEO to AEO: Mastering Answer Engine Optimization",
    category: "SEO",
    author: "SEO Team",
    date: "6 January 2025",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In the ever-changing world of digital marketing, the shift from SEO to AEO is revolutionizing how businesses engage."
  },
  {
    id: 72,
    title: "Decoding Social Commerce: How to Sell Directly Through Instagram and Facebook",
    category: "Social Media",
    author: "Social Team",
    date: "27 December 2024",
    readTime: "4 Min",
    image: ASSETS.servicesVideo,
    excerpt: "Social commerce is transforming how businesses connect with their audiences."
  },
  {
    id: 73,
    title: "Podcast Advertising: The Untapped Channel for Digital Marketers",
    category: "Marketing",
    author: "Marketing Team",
    date: "26 December 2024",
    readTime: "4 Min",
    image: ASSETS.servicesVideo,
    excerpt: "The digital marketing landscape is constantly evolving, with innovative platforms reshaping how brands connect."
  },
  {
    id: 74,
    title: "The Untapped Power of Color Psychology in Digital Advertising",
    category: "Design",
    author: "Design Team",
    date: "20 December 2024",
    readTime: "4 Min",
    image: ASSETS.webDevVideo,
    excerpt: "In today's saturated digital landscape, where consumers are overwhelmed by countless marketing messages."
  },
  {
    id: 75,
    title: "Gamification in Marketing: Engaging Customers Through Interactive Content",
    category: "Marketing",
    author: "Marketing Team",
    date: "12 December 2024",
    readTime: "4 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In today's saturated digital landscape, where consumers are overwhelmed by countless marketing messages."
  },
  {
    id: 76,
    title: "Are You Destroying Your Social Media?",
    category: "Social Media",
    author: "Social Team",
    date: "6 December 2024",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "The Hidden Pitfalls That No One Talks About and How to Revive It Like a Pro"
  },
  {
    id: 77,
    title: "Micro-Influencers vs. Macro-Influencers: Which is Right for Your Brand?",
    category: "Influencer Marketing",
    author: "Influencer Team",
    date: "3 December 2024",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In today's digital-first world, Influencer Marketing is no longer a trend—it's a cornerstone of any successful strategy."
  },
  {
    id: 78,
    title: "Digital Marketing Audit: An Essential Service for Businesses in 2024",
    category: "Marketing",
    author: "Marketing Team",
    date: "26 November 2024",
    readTime: "2 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In today's competitive digital landscape, businesses must continually optimize their online presence."
  },
  {
    id: 79,
    title: "How to Create Engaging Social Media Content with AI Tools",
    category: "AI & Marketing",
    author: "AI Team",
    date: "22 November 2024",
    readTime: "3 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Social media is a powerful platform for connecting with audiences and promoting brands."
  },
  {
    id: 80,
    title: "SEO in 2024: What's Changed and How to Adapt",
    category: "SEO",
    author: "SEO Team",
    date: "18 November 2024",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "Search Engine Optimization (SEO) is constantly evolving, and 2024 has brought significant changes."
  },
  {
    id: 81,
    title: "E-commerce Marketing Strategies for Small Businesses in 2024",
    category: "E-commerce",
    author: "E-commerce Team",
    date: "12 November 2024",
    readTime: "4 Min",
    image: ASSETS.servicesVideo,
    excerpt: "The e-commerce industry continues to evolve, with 2024 bringing fresh trends and strategies."
  },
  {
    id: 82,
    title: "The Rise of Influencer Marketing in Niche Industries",
    category: "Influencer Marketing",
    author: "Influencer Team",
    date: "5 November 2024",
    readTime: "3 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In recent years, influencer marketing has surged in popularity, becoming an essential strategy."
  },
  {
    id: 83,
    title: "How to Maximize ROI with Multi-Channel PPC Campaigns",
    category: "PPC",
    author: "PPC Team",
    date: "23 October 2024",
    readTime: "4 Min",
    image: ASSETS.servicesVideo,
    excerpt: "Pay-per-click (PPC) campaigns are one of the most powerful tools in digital marketing."
  },
  {
    id: 84,
    title: "The Social Media Blackout Challenge: How Brands Are Thriving Without Posting",
    category: "Social Media",
    author: "Social Team",
    date: "17 October 2024",
    readTime: "4 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In a world where every brand seems to be constantly vying for attention, an unconventional strategy has emerged."
  },
  {
    id: 85,
    title: "Building Trust through Transparency: The Role of Ethical Digital Marketing",
    category: "Marketing",
    author: "Marketing Team",
    date: "8 October 2024",
    readTime: "4 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In an increasingly Digital World, the importance of trust in online interactions cannot be overstated."
  },
  {
    id: 86,
    title: "Crafting the Perfect CTA: A Guide to Winning Over Your Audience",
    category: "Marketing",
    author: "Marketing Team",
    date: "4 October 2024",
    readTime: "4 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In the fast-paced world of digital marketing, crafting the perfect Call-to-Action (CTA) can be decisive."
  },
  {
    id: 87,
    title: "From Zero to Hero: Building a Successful Brand on Social Media in 2024",
    category: "Branding",
    author: "Branding Team",
    date: "26 September 2024",
    readTime: "4 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In today's digital-first world, social media is no longer optional—it's essential for building a successful brand."
  },
  {
    id: 88,
    title: "Data Privacy in Digital Marketing: Navigating the New Regulation",
    category: "Marketing",
    author: "Marketing Team",
    date: "18 September 2024",
    readTime: "4 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In today's digital age, user data plays a crucial role in delivering personalized marketing experiences."
  },
  {
    id: 89,
    title: "The Rise of Video Content: How to Maximize Engagement in 2024",
    category: "Content",
    author: "Content Team",
    date: "12 September 2024",
    readTime: "5 Min",
    image: ASSETS.servicesVideo,
    excerpt: "In today's fast-paced digital landscape, video content is dominating the scene."
  },
  {
    id: 90,
    title: "The AI Revolution in Digital Marketing: Buckle Up for the Future!",
    category: "AI & Marketing",
    author: "AI Team",
    date: "5 September 2024",
    readTime: "4 Min",
    image: ASSETS.webDevVideo,
    excerpt: "Welcome to the age of AI, where the line between science fiction and reality is blurring fast!"
  },
];

export const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const parseDate = (dateStr: string) => {
    const months: { [key: string]: number } = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    const parts = dateStr.match(/(\d+)\s+(\w+),?\s*(\d+)/);
    if (parts) {
      const day = parseInt(parts[1]);
      const month = months[parts[2]] || 0;
      const year = parseInt(parts[3]);
      return new Date(year, month, day);
    }
    return new Date(0);
  };

  const parseReadTime = (readTimeStr: string) => {
    const match = readTimeStr.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case 'date-desc':
        filtered.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
        break;
      case 'date-asc':
        filtered.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
        break;
      case 'readtime-asc':
        filtered.sort((a, b) => parseReadTime(a.readTime) - parseReadTime(b.readTime));
        break;
      case 'readtime-desc':
        filtered.sort((a, b) => parseReadTime(b.readTime) - parseReadTime(a.readTime));
        break;
    }

    return filtered;
  }, [searchQuery, sortBy, selectedCategory]);

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
                  onClick={() => post.slug && navigate(`/blog/${post.slug}`)}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 uppercase italic">
              All <span className="text-gradient-blue">Articles</span>
            </h2>
          </FadeIn>

          {/* Search and Filter Bar */}
          <FadeIn delay={0.1}>
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search blogs by title, category, or author..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none px-6 py-4 pr-12 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500 transition-all cursor-pointer min-w-[200px]"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="bg-slate-900 text-white">{cat}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-6 py-4 pr-12 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500 transition-all cursor-pointer min-w-[200px]"
                  >
                    <option value="date-desc" className="bg-slate-900 text-white">Newest First</option>
                    <option value="date-asc" className="bg-slate-900 text-white">Oldest First</option>
                    <option value="readtime-asc" className="bg-slate-900 text-white">Shortest Read</option>
                    <option value="readtime-desc" className="bg-slate-900 text-white">Longest Read</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-between">
                <p className="text-slate-400">
                  Showing <span className="text-white font-bold">{filteredAndSortedPosts.length}</span> of {blogPosts.length} articles
                  {searchQuery && <span> for "<span className="text-blue-400">{searchQuery}</span>"</span>}
                  {selectedCategory !== 'All' && <span> in <span className="text-blue-400">{selectedCategory}</span></span>}
                </p>
                {(searchQuery || selectedCategory !== 'All') && (
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Blog Grid */}
          {filteredAndSortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedPosts.map((post, idx) => (
                <FadeIn key={post.id} delay={idx * 0.03}>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    onClick={() => post.slug && navigate(`/blog/${post.slug}`)}
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
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} className="text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
              <p className="text-slate-400 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
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
