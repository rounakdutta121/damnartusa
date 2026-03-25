import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, BookOpen, Volume2, VolumeX } from 'lucide-react';
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
    image: "https://cdni.iconscout.com/illustration/premium/thumb/group-architects-create-and-engineering-project-of-city-illustration-svg-download-png-1850571.png",
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
  'healthy-living-nurturing-our-golden-years': {
    id: 2,
    title: "Healthy Living: Proactive Steps for Healthy Aging and Flu Protection",
    category: "Healthy Living",
    author: "Dr. Clara Wren",
    date: "19 November 2025",
    readTime: "4 Min",
    image: "https://img.freepik.com/free-vector/pharmacy-store-interior-with-buyer-pharmacist_107791-30927.jpg?semt=ais_hybrid&w=740&q=80",
    excerpt: "Nurturing Our Golden Years: Proactive Steps for Healthy Aging and Flu Protection",
    content: `Good morning, dear readers! As the seasons shift, our thoughts often turn to staying well. Let's explore how we can proactively nurture our health and protect our loved ones.

Nurturing Our Golden Years: Proactive Steps for Healthy Aging and Flu Protection

Seniors enjoying healthy living

I often reflect on the wisdom our older generations hold and the vibrant lives many continue to lead. It's a beautiful testament to resilience, and yet, we know that as we age, our bodies need a little extra care and attention. I was particularly moved by a recent focus on healthy aging and flu prevention. It's not just about avoiding illness; it's about embracing life with vitality.

I recall speaking with Mrs. Evelyn, a sprightly 87-year-old, who shared how her annual flu jab allows her to continue her weekly dance class without worry. These updated guidelines truly echo her sentiment: that regular physical activity, a balanced diet, and simply staying connected with loved ones are as crucial as our annual vaccinations. It's about building a robust shield, not just for ourselves, but for the entire community. Every step we take to safeguard our health contributes to a stronger, happier society.

Have you ever found yourself needing quick, reliable health advice for those everyday concerns? It's wonderful to see our local pharmacies stepping up to fill that vital role.

Your Local Pharmacy: A Welcoming Hub for Everyday Health and Expert Care

Pharmacy interior with pharmacist and customer

It's truly heartening to witness the evolution of our local pharmacies. They've always been a cornerstone of our communities, but now, they're becoming even more indispensable. I recently heard from Mr. Davies, a gentleman who was struggling with muffled hearing, which was beginning to affect his confidence in social settings. He shared how he used to dread the lengthy wait for a GP appointment for something he suspected was just ear wax. Imagine his relief when he discovered he could simply walk into his local pharmacy and receive professional, quick, and safe ear wax removal. It's stories like these that highlight the profound impact of accessible care. Pharmacists, with their extensive training, are stepping up to offer a range of services, alleviating pressure on our busy doctors and, most importantly, providing immediate, trusted support to those who need it.

In our busy lives, it's easy to feel isolated, but I've always believed in the power of connection for our mental wellbeing. Let's talk about finding that support.

Bridging Gaps: New Community Initiatives Foster Mental Wellbeing Through Connection

People connecting in a community setting

In the heart of every community lies a profound need for connection, especially when navigating the complexities of our mental health. I'm always so inspired by initiatives that bring people together, and just a little while ago, I was hearing about the wonderful impact of new community support programmes. These weren't just about clinical advice; they were about shared understanding, a safe space to talk, and the simple act of listening.

I remember hearing about a young woman, Sarah, who found immense comfort in a local support group. She spoke of feeling less alone, finding strength in others' stories, and gradually rediscovering her own voice. It truly highlighted that sometimes, the most potent medicine comes from human connection, from knowing that someone cares and understands. It reminds us that sometimes, true innovation lies in bringing essential care closer to home, right where we need it most. These initiatives are quietly weaving a stronger fabric of support throughout our neighbourhoods.`
  },
  'funnel-stages': {
    id: 3,
    title: "If Your Funnel Still Has Stages, You're Already Behind",
    category: "Marketing",
    author: "DamnArt",
    date: "11 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774414178/Idhar-Udhar-ke-use-2025-04-11T101138.735-768x432_f7c6im.jpg",
    excerpt: "The Traditional Funnel Is Dead. Here's What Replaced It.",
    content: `Remember the good old marketing funnel? Awareness at the top. Consideration in the middle. Conversion at the bottom. Neat. Linear. Predictable.

Now? That funnel's cracked—and if you're still building your marketing strategy around it, you're bleeding leads, relevance, and revenue.

In 2025, the customer journey isn't a funnel. It's a fluid, real-time ecosystem. And brands stuck on stages are losing to those building adaptive, stage-less systems.

Let's break it down.

What's Wrong with the Traditional Funnel?

Funnel thinking assumes linear behavior. But users today zigzag across platforms, binge content, ghost your emails, and buy based on emotion, experience, and urgency.

Ask yourself: Are you optimizing for the stage… or for the moment?

From Funnels to Flywheels: The New Marketing Mindset

Traditional funnels were built for control. Today's growth systems are built for speed, feedback, and emotional velocity.

Instead of pushing people down a predefined path, brands now attract, engage, and serve dynamically.

Here's the difference: Funnel vs. Flywheel

Reimagining the Customer Journey

This new mind map shows that everything is interconnected. A click on a Reel can lead to a webinar sign-up or an impulse buy. A great customer experience can trigger social sharing, feeding your acquisition. No stage. Just flow.

Adaptive Customer Journey (2025 Edition)

Notice something? No stages. Just intelligent responsiveness at every moment.

The Engine of Stage-less Growth: Real-Time Data + Behavior Mapping

If your CRM only sends nurture emails on day 3, day 5, and day 7—you're already too late.

You need:

Behavioral Triggers: Personalize content based on micro-actions (scrolls, hovers, abandoned tabs).

360-Degree Profiles: Use AI to map every touchpoint across devices and channels.

Emotional Targeting: Craft content not for demographics—but for decisions made in emotional micro-moments.

Case Study Snapshot: Brands That Dropped the Funnel

Glossier: Doesn't follow stages. Instead, creates viral moments across TikTok, email, and pop-ups simultaneously.

Duolingo: Uses gamified retention and push alerts based on your mood and behavior—not your "stage."

Tesla: Converts without traditional advertising. Relies on community, curiosity, and direct response.

Are You Still Using Stages? Ask Yourself:

Is your automation based on time or behavior?

Are your ads optimized for the platform or the person?

Do you build email sequences or real-time conversations?

If you answered "time," "platform," or "sequences"—you might be funnel-stuck.

Tools That Enable Stage-less Growth

Brought to You by DamnArt – Where Digital Is Done Right

At DamnArt, we don't believe in the old-school funnel.

We build stage-less, behavior-first systems that convert curious clicks into loyal customers. Our digital marketing strategies are designed for 2025—rooted in emotion, motion, and precision.

From viral content creation to AI-fueled engagement flows, we don't just get you leads—we get you obsessed fans.

Want your brand to grow beyond stages? DM us or visit www.www.damnart.com – Let's design something unforgettable.

Final Thoughts

The future of marketing belongs to brands that listen before they speak, adapt before they push, and act in moments—not stages.

The funnel isn't just outdated.

It's slowing you down.

Ready to drop the stages and step into velocity?`
  },
  'whisper-marketing': {
    id: 4,
    title: "How Brands Are Secretly 'Whispering' to You on Social Media",
    category: "Marketing",
    author: "DamnArt",
    date: "9 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774415128/unnamed-2025-04-09T143637.417-768x768_slsvrm.jpg",
    excerpt: "Ever scrolled through your Instagram feed and felt like a post was speaking directly to you?",
    content: `Introduction

Ever scrolled through your Instagram feed and felt like a post was speaking directly to you? You're not imagining it. Brands today aren't shouting anymore—they're whispering. This subtle, emotional, highly-targeted communication is what makes you stop mid-scroll, nod in agreement, and sometimes even click "buy."

Welcome to the world of stealthy storytelling, micro-messaging, and algorithmic influence.

What Is Whisper Marketing?

Whisper marketing is the art of subtle persuasion. Instead of loud, direct ads, brands now slide into your feed like a friend—offering value, empathy, and familiarity. It's not about "Buy now!" anymore—it's about, "We get you."

Popular Keywords Used in This Strategy:

Emotional marketing, Social listening, Influencer microcontent, User-generated content (UGC), Behavioral targeting, Brand storytelling, Instagram marketing, TikTok trends, Personalized engagement, Native advertising

Why Is This Strategy So Effective?

Because you don't see it coming. Whisper marketing feels like content—not an ad. And that's what makes it so powerful.

Old-School Ads vs Modern Whisper Tactics:

Old-school ads use loud CTAs like "Buy Now!" while modern whisper tactics use subtle hooks like "Ever felt this way?" Old-school focuses on direct selling while whisper tactics focus on emotional connection. Instead of product-focused, it's lifestyle-focused. Rather than one-size-fits-all, it's personalized and data-driven.

How Whisper Marketing Works

The process flows from social listening and trend mining, through micro-influencers and authentic voices, to native ads and emotional hooks. Each step builds on the last, creating a seamless experience that feels organic rather than promotional.

The Psychology Behind Whisper Marketing

Here are the core psychological elements that brands tap into when they "whisper" on social media:

Emotion: Brands leverage relatability, empathy-driven messaging, and feel-good storytelling to create genuine connections.

Timing: They capitalize on trending topics, cultural moments and events, and post when users are most active.

Trust: By using micro-influencers for authenticity, sharing real stories and user experiences, and avoiding over-branding, they build credibility.

Subtlety: They minimize direct promotion, blend in with native content, and let visuals and tone do the talking.

Each of these elements connects to one another, forming a web of emotional influence, where the audience feels understood rather than sold to.

Real Examples: Are These Ads or Just "Good Vibes"?

Dove posts body-positive quotes that look like inspiration, not promotion.

Apple uses user-shot content to "show" rather than tell you to buy the iPhone.

Nike drops reels that focus on mindset, struggle, and motivation, not shoes.

Netflix uses memes and reactions to promote shows with zero hard sell.

You double-tap, share, or laugh—without realizing you're becoming part of a campaign.

How Brands Whisper: Core Techniques

1. Social Listening & Trend Mining

Brands use tools like Brandwatch, Sprout Social, and Hootsuite to listen to what people are feeling—not just what they're saying. Ever noticed how a brand launches a relatable post just after a trending meme goes viral? That's no coincidence.

2. Micro-Influencers & Authentic Voices

Instead of celebrities, brands now use influencers with 5K–50K followers. Why? Because their content feels genuine and relatable.

3. Native Ads

These are ads that don't "look" like ads. Sponsored posts, reels, or TikToks that blend in with your content feed—seamless and persuasive.

4. Emotional Hooks

Instead of selling features, they sell feelings.

Example:

Old Ad: "Get 5GB data with this plan."

New Whisper: "Stay connected to what matters most."

5. Minimal Branding

Sometimes the product or brand name is barely mentioned, letting emotion do the heavy lifting.

Platforms & Whisper Techniques

Instagram uses relatable reels and quote carousels with mental health and lifestyle content.

TikTok leverages trending sounds and relatable skits with brand humor and challenges.

LinkedIn focuses on thought leadership posts and storytelling with behind-the-scenes branding.

Facebook uses community posts and soft-sell testimonials with story-based product promotion.

YouTube Shorts features user-focused storytelling with subtle product use in travel vlogs.

Ask Yourself:

Have you ever shared a "relatable" post that subtly included a brand?

Do you recognize when a meme is actually marketing?

Are you following brands that make you feel "seen" more than sold to?

Chances are, you've already been whispered to. More than once.

So... Should You Whisper Too?

If you're a brand, yes. In fact, it might be the only way to cut through the noise in 2024 and beyond.

DamnArt's Take

At DamnArt, we specialize in building human-first digital marketing strategies that connect—quietly but effectively. From micro-influencer campaigns to emotion-driven social storytelling, we help brands like yours whisper the right message to the right audience at the right time.

Need social media content that converts?

Want subtle, powerful campaigns that build real loyalty?

Let's talk. Visit www.www.damnart.com and let's talk!

Final Thoughts

In a digital world full of noise, quiet influence wins. The brands that whisper are the ones that stick—because they don't feel like strangers. They feel like friends.`
  },
};

export const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isSpeaking, setIsSpeaking] = useState(false);

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
                  <span className="text-2xl font-black text-blue-500">{blog.author.split(' ').map((n: string) => n[0]).join('')}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{blog.author}</h4>
                  <p className="text-slate-400">{blog.category} Expert</p>
                </div>
              </div>
              <p className="text-slate-400">
                This article is part of our {blog.category} insights series, bringing you the latest trends and expert perspectives.
              </p>
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
