export const categoryColors: Record<string, string> = {
  Finance: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Startup: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  Tech: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Policy: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: "Finance" | "Startup" | "Tech" | "Policy";
  content: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;

  // 🔥 STORY ARC (UPGRADED)
  story?: {
    timeline: {
      date: string;
      title: string;
      sentiment: "positive" | "negative" | "neutral";
      detail: string;
    }[];

    // ✅ NEW: KEY PLAYERS
    keyPlayers: {
      name: string;
      role: string;
      impact: string;
    }[];

    // ✅ EXISTING
    prediction: string;
  };

  // 🔥 AI Q&A (you can keep or remove later)
  qa?: {
    why: string;
    impact: string;
    future: string;
    default: string;
  };
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "RBI Holds Rates Steady Amid Global Uncertainty",
    summary: "The Reserve Bank of India maintained its benchmark repo rate at 6.5%, citing persistent inflation concerns and global headwinds.",
    category: "Finance",
    content: "The Reserve Bank of India (RBI) on Thursday decided to hold its key lending rate steady at 6.5% for the eighth consecutive meeting, as it weighs persistent inflationary pressures against slowing global growth. Governor Shaktikanta Das emphasized the need for vigilance on food price volatility while acknowledging the resilience of domestic economic activity. The decision was widely anticipated by market participants, though some had hoped for a surprise cut given recent softening in core inflation metrics. Bond yields remained largely unchanged following the announcement, while equity markets showed modest gains. Analysts noted that the RBI's forward guidance suggests any rate action is unlikely before Q3 2026, with the central bank preferring to wait for more clarity on the monsoon season and its impact on food prices.",
    date: "Mar 18, 2026",
    readTime: "4 min",
    author: "Priya Sharma",
    image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/05/rbi-governor-shaktikanta-das-27-march-2020-1590115707.jpg",

    story: {
      timeline: [
        {
          date: "Feb 2023",
          title: "RBI begins aggressive rate hikes",
          sentiment: "negative",
          detail: "Repo rate increased to control post-pandemic inflation surge"
        },
        {
          date: "Aug 2023",
          title: "Inflation moderates slightly",
          sentiment: "neutral",
          detail: "Supply chains stabilize but core inflation remains sticky"
        },
        {
          date: "Jan 2024",
          title: "RBI pauses rate hikes",
          sentiment: "neutral",
          detail: "Shift to data-driven approach amid global uncertainty"
        },
        {
          date: "Sep 2024",
          title: "Global slowdown impacts exports",
          sentiment: "negative",
          detail: "Weak demand affects India’s external sector"
        },
        {
          date: "Mar 2025",
          title: "Food inflation spikes again",
          sentiment: "negative",
          detail: "Climate issues drive volatility in food prices"
        },
        {
          date: "Jan 2026",
          title: "Markets anticipate rate cuts",
          sentiment: "positive",
          detail: "Cooling inflation raises easing expectations"
        },
        {
          date: "Mar 2026",
          title: "RBI holds repo rate at 6.5%",
          sentiment: "neutral",
          detail: "Balances growth with inflation risks"
        }
      ],
    
      keyPlayers: [
        {
          name: "Shaktikanta Das",
          role: "Governor, RBI",
          impact: "Leads monetary policy and rate decisions"
        },
        {
          name: "Reserve Bank of India",
          role: "Central Bank",
          impact: "Controls inflation, liquidity, and interest rates"
        },
        {
          name: "Government of India",
          role: "Policy Partner",
          impact: "Aligns fiscal policy with RBI actions"
        },
        {
          name: "Commercial Banks",
          role: "Financial Intermediaries",
          impact: "Transmit rate changes to loans and deposits"
        }
      ],
    
      prediction: "RBI is likely to maintain a cautious stance, with gradual rate cuts only if inflation stabilizes sustainably."
    },

    qa: {
      why: "RBI held rates due to inflation and global uncertainty.",
      impact: "Stable rates help borrowers and businesses.",
      future: "Rates may remain unchanged for upcoming quarters.",
      default: "RBI balances growth and inflation."
    }
  },

  {
    id: "2",
    title: "Zepto Raises $500M in Pre-IPO Round",
    summary: "Quick-commerce unicorn Zepto secures massive funding as it prepares for a public listing later this year.",
    category: "Startup",
    content: "Zepto, India's leading quick-commerce platform, has raised $500 million in a pre-IPO funding round that values the company at approximately $8 billion. The round was led by prominent global investors including DST Global, StepStone Group, and existing backers Glade Brook Capital and Nexus Venture Partners. CEO Aadit Palicha stated that the funds will be used to expand dark store infrastructure across tier-2 cities and invest in AI-driven inventory management systems. The company has seen its revenue grow 3x year-over-year, reaching an annualized GMV of $4 billion. Zepto plans to file its DRHP with SEBI by Q2 2026, targeting a listing on both BSE and NSE.",
    date: "Mar 17, 2026",
    readTime: "5 min",
    author: "Rohan Mehta",
    image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202602/6995b9dc31c8b-zepto-dark-store-at-ai-impact-summit-2026-180838567-16x9.png",

    story: {
      timeline: [
        {
          date: "2021",
          title: "Zepto founded during quick-commerce boom",
          sentiment: "positive",
          detail: "Rising demand for 10-minute delivery fuels rapid growth"
        },
        {
          date: "2022",
          title: "Rapid expansion across metros",
          sentiment: "positive",
          detail: "Dark store model scales aggressively"
        },
        {
          date: "Early 2023",
          title: "Competition intensifies",
          sentiment: "negative",
          detail: "Blinkit and Instamart increase pressure on margins"
        },
        {
          date: "Late 2023",
          title: "Shift towards profitability",
          sentiment: "neutral",
          detail: "Focus on cost optimization and unit economics"
        },
        {
          date: "2024",
          title: "Margins improve",
          sentiment: "positive",
          detail: "Higher basket size and operational efficiency"
        },
        {
          date: "2025",
          title: "Expansion to Tier-2 cities",
          sentiment: "positive",
          detail: "Scaling beyond metros for growth"
        },
        {
          date: "Mar 2026",
          title: "$500M funding raised pre-IPO",
          sentiment: "positive",
          detail: "Investor confidence ahead of public listing"
        }
      ],
    
      keyPlayers: [
        {
          name: "Aadit Palicha",
          role: "CEO, Zepto",
          impact: "Leads growth and IPO strategy"
        },
        {
          name: "DST Global",
          role: "Investor",
          impact: "Provides capital and global validation"
        },
        {
          name: "Blinkit & Swiggy Instamart",
          role: "Competitors",
          impact: "Drive competition and pricing pressure"
        },
        {
          name: "SEBI",
          role: "Market Regulator",
          impact: "Approves IPO and listing compliance"
        }
      ],
    
      prediction: "Zepto is expected to go public soon, potentially becoming a dominant player in India’s quick-commerce sector."
    },

    qa: {
      why: "To expand operations and logistics.",
      impact: "Increases competition in quick commerce.",
      future: "Zepto may go public soon.",
      default: "Startup ecosystem growing fast."
    }
  },

  {
    id: "3",
    title: "India Semiconductor Fab Begins",
    summary: "The $15 billion chip fabrication facility marks India's entry into advanced semiconductor manufacturing.",
    category: "Tech",
    content: "Ground has been broken on India's first advanced semiconductor fabrication facility in Dholera, Gujarat, marking a pivotal moment in the country's quest for chip self-sufficiency. The $15 billion project, a joint venture between Tata Electronics and TSMC, aims to produce chips at the 28nm node initially, with plans to scale to 7nm within five years. Prime Minister Modi called it 'a historic step towards Atmanirbhar Bharat in technology.' The facility is expected to create over 20,000 direct jobs and spawn an ecosystem of ancillary suppliers. Industry experts note that while this puts India on the semiconductor map, it will still rely heavily on imports for cutting-edge chips used in AI and 5G applications.",
    date: "Mar 16, 2026",
    readTime: "6 min",
    author: "Ananya Desai",
    image:"https://www.pcl.com/content/dam/insights-images/Microchip%20Manufacturing.jpg",

    story: {
      timeline: [
        {
          date: "2020",
          title: "Global chip shortage disrupts industries",
          sentiment: "negative",
          detail: "India faces heavy dependence on imports"
        },
        {
          date: "2022",
          title: "India launches semiconductor mission",
          sentiment: "positive",
          detail: "$10B incentive program announced"
        },
        {
          date: "2023",
          title: "Talks with global chipmakers begin",
          sentiment: "neutral",
          detail: "Government explores partnerships"
        },
        {
          date: "2024",
          title: "Tata finalizes semiconductor plans",
          sentiment: "positive",
          detail: "Major step toward domestic production"
        },
        {
          date: "2025",
          title: "Ecosystem development begins",
          sentiment: "positive",
          detail: "Supporting industries start forming"
        },
        {
          date: "Mar 2026",
          title: "Construction begins in Dholera",
          sentiment: "positive",
          detail: "India enters semiconductor manufacturing"
        }
      ],
    
      keyPlayers: [
        {
          name: "Narendra Modi",
          role: "Prime Minister",
          impact: "Drives semiconductor policy initiatives"
        },
        {
          name: "Tata Electronics",
          role: "Industry Leader",
          impact: "Leading India’s chip manufacturing efforts"
        },
        {
          name: "Global Chipmakers",
          role: "Technology Partners",
          impact: "Provide expertise and advanced tech"
        },
        {
          name: "Government of India",
          role: "Policy Maker",
          impact: "Funds and supports infrastructure"
        }
      ],
    
      prediction: "India could become a key semiconductor hub, reducing import dependency and strengthening global supply chains."
    },

    qa: {
      why: "To reduce dependency on imports.",
      impact: "Boosts tech industry and jobs.",
      future: "India could lead semiconductor manufacturing.",
      default: "Important step for tech growth."
    }
  },

  {
    id: "4",
    title: "Union Budget 2026 Highlights",
    summary: "Finance Minister unveils a growth-oriented budget with significant tax reforms and infrastructure spending.",
    category: "Policy",
    content: "Finance Minister Nirmala Sitharaman presented the Union Budget 2026-27 with a clear focus on boosting capital expenditure, simplifying the tax regime, and supporting India's manufacturing ambitions. Key highlights include a reduction in corporate tax for MSMEs from 25% to 22%, a new Production-Linked Incentive scheme for the electronics sector worth ₹50,000 crore, and increased allocation for national highways by 30%. The budget also introduced a Digital India Innovation Fund of ₹10,000 crore to support AI startups. Markets reacted positively, with the Sensex climbing 800 points in intra-day trade. However, economists flagged concerns about the fiscal deficit target of 4.5% of GDP, suggesting it may be challenging to achieve given the expanded spending plans.",
    date: "Mar 15, 2026",
    readTime: "7 min",
    author: "Vikram Singh",
    image:"https://images.hindustantimes.com/img/2024/07/23/1600x900/Members-during-the-presentation-of-Union-Budget-in_1721716787192.jpg",

    story: {
      timeline: [
        {
          date: "Feb 2025",
          title: "Pre-budget consultations begin",
          sentiment: "neutral",
          detail: "Government engages industry leaders and economists"
        },
        {
          date: "Jan 2026",
          title: "Focus on manufacturing and AI announced",
          sentiment: "positive",
          detail: "Signals shift toward innovation-driven economy"
        },
        {
          date: "Mar 15, 2026",
          title: "Union Budget 2026 presented",
          sentiment: "positive",
          detail: "Tax cuts, infrastructure push, AI fund introduced"
        },
        {
          date: "Mar 2026",
          title: "Markets react positively",
          sentiment: "positive",
          detail: "Sensex rises 800 points after announcement"
        },
        {
          date: "Mid 2026",
          title: "Implementation phase begins",
          sentiment: "neutral",
          detail: "Execution challenges and fiscal concerns emerge"
        }
      ],
    
      keyPlayers: [
        {
          name: "Nirmala Sitharaman",
          role: "Finance Minister",
          impact: "Designs and presents fiscal policy roadmap"
        },
        {
          name: "Government of India",
          role: "Policy Maker",
          impact: "Drives infrastructure and economic reforms"
        },
        {
          name: "Indian Corporates",
          role: "Beneficiaries",
          impact: "Gain from tax cuts and incentives"
        },
        {
          name: "Investors",
          role: "Market Participants",
          impact: "React to policy signals and economic outlook"
        }
      ],
    
      prediction: "If executed effectively, the budget could accelerate India's growth, but fiscal deficit risks remain a concern."
    },

    qa: {
      why: "To boost growth and investment.",
      impact: "Improves infrastructure and business conditions.",
      future: "Economy likely to grow faster.",
      default: "Growth-focused budget."
    }
  },
  {
    id: "5",
    title: "OpenAI Partners with Reliance for India AI Push",
    summary: "Strategic partnership to bring advanced AI models to Indian enterprises and consumers through Jio platforms.",
    category: "Tech",
    content: "OpenAI has announced a landmark partnership with Reliance Industries to accelerate AI adoption across India. Under the agreement, OpenAI's GPT-5 and upcoming models will be integrated into Jio's ecosystem of products serving over 450 million users. The partnership includes co-development of AI solutions for Indian languages, with initial support for Hindi, Tamil, Telugu, and Bengali. Mukesh Ambani described the deal as 'transformative for India's digital economy,' while OpenAI CEO Sam Altman highlighted India as 'the most exciting market for AI globally.' The collaboration will also establish an AI research center in Hyderabad, creating 5,000 high-skilled jobs.",
    date: "Mar 14, 2026",
    readTime: "5 min",
    author: "Neha Kapoor",
    image:"https://assets.telecomtv.com/assets/telecomtv/rcp-mumbai-18839.jpg?w=1200",

    story: {
      timeline: [
        {
          date: "2024",
          title: "India emerges as key AI market",
          sentiment: "positive",
          detail: "Rapid adoption across enterprises and startups"
        },
        {
          date: "Late 2025",
          title: "Talks between OpenAI and Reliance begin",
          sentiment: "neutral",
          detail: "Focus on large-scale AI deployment"
        },
        {
          date: "Mar 14, 2026",
          title: "Partnership officially announced",
          sentiment: "positive",
          detail: "AI integration into Jio ecosystem"
        },
        {
          date: "2026",
          title: "AI rollout across 450M users",
          sentiment: "positive",
          detail: "Mass adoption across India"
        },
        {
          date: "2027",
          title: "India AI ecosystem expands",
          sentiment: "positive",
          detail: "Startup and enterprise adoption surges"
        }
      ],
    
      keyPlayers: [
        {
          name: "Sam Altman",
          role: "CEO, OpenAI",
          impact: "Drives global AI expansion strategy"
        },
        {
          name: "Mukesh Ambani",
          role: "Chairman, Reliance",
          impact: "Leverages Jio ecosystem for AI scale"
        },
        {
          name: "Reliance Jio",
          role: "Platform Provider",
          impact: "Distributes AI to millions of users"
        },
        {
          name: "Indian Developers",
          role: "Ecosystem Builders",
          impact: "Build applications using AI infrastructure"
        }
      ],
    
      prediction: "India could become one of the largest AI markets globally, accelerating digital transformation across sectors."
    },

    qa: {
      why: "To scale AI access across India's massive user base.",
      impact: "Boosts AI adoption in telecom, enterprise, and consumers.",
      future: "India may become a global AI leader.",
      default: "AI expansion in India is accelerating rapidly."
    },
  },
  {
    id: "6",
    title: "Adani Group Announces $20B Green Energy Investment",
    summary: "Conglomerate doubles down on renewable energy with massive solar and wind capacity expansion plans.",
    category: "Finance",
    content: "The Adani Group has unveiled an ambitious $20 billion investment plan to expand its renewable energy portfolio to 50 GW by 2030. The announcement comes as the group seeks to solidify its position as the world's largest solar energy developer. Chairman Gautam Adani stated that the investment will span solar parks in Rajasthan and Gujarat, offshore wind projects along the Tamil Nadu coast, and a new green hydrogen facility in Mundra. The plan includes partnerships with European energy companies and Japanese trading houses for technology and financing. Environmental groups have cautiously welcomed the commitment while calling for greater transparency in environmental impact assessments.",
    date: "Mar 13, 2026",
    readTime: "5 min",
    author: "Arjun Patel",
    image:"https://i.insider.com/637b88f12c8b9a0018cbdb77?format=jpeg&width=1200",

    story: {
      timeline: [
        {
          date: "2023",
          title: "Adani recovers from crisis",
          sentiment: "neutral",
          detail: "Focus shifts to rebuilding investor confidence"
        },
        {
          date: "2024",
          title: "Renewable investments increase",
          sentiment: "positive",
          detail: "Expansion into solar and wind sectors"
        },
        {
          date: "2025",
          title: "Global partnerships formed",
          sentiment: "positive",
          detail: "European and Japanese collaborations"
        },
        {
          date: "Mar 13, 2026",
          title: "$20B investment announced",
          sentiment: "positive",
          detail: "Major push into green energy"
        },
        {
          date: "2030 (Target)",
          title: "50 GW renewable capacity goal",
          sentiment: "positive",
          detail: "Global leadership in solar energy"
        }
      ],
    
      keyPlayers: [
        {
          name: "Gautam Adani",
          role: "Chairman, Adani Group",
          impact: "Leads renewable expansion strategy"
        },
        {
          name: "Adani Green Energy",
          role: "Energy Company",
          impact: "Executes solar and wind projects"
        },
        {
          name: "Global Energy Partners",
          role: "Collaborators",
          impact: "Provide funding and technology"
        },
        {
          name: "Environmental Groups",
          role: "Watchdogs",
          impact: "Monitor sustainability impact"
        }
      ],
    
      prediction: "Adani could emerge as a global renewable leader, but execution and regulatory scrutiny remain key risks."
    },

    qa: {
      why: "To lead renewable energy transition globally.",
      impact: "Boosts clean energy supply and reduces emissions.",
      future: "India may dominate green energy markets.",
      default: "Renewable investments are increasing globally."
    }
  },
  {
    id: "7",
    title: "SEBI Tightens IPO Disclosure Norms",
    summary: "New regulations require enhanced financial transparency from companies seeking public listings in India.",
    category: "Policy",
    content: "The Securities and Exchange Board of India (SEBI) has introduced stricter disclosure requirements for companies planning initial public offerings, in a move aimed at protecting retail investors. The new norms mandate detailed unit economics disclosure, three-year profitability roadmaps, and enhanced related-party transaction reporting. SEBI Chairperson Madhabi Puri Buch stated that the regulations are designed to ensure 'informed decision-making by investors in an increasingly complex market.' The changes come in the wake of several high-profile IPO listings that saw significant price declines post-listing, drawing criticism from investor advocacy groups. Market intermediaries have expressed mixed reactions, with some praising the transparency push while others worry about deterring legitimate companies from going public.",
    date: "Mar 12, 2026",
    readTime: "4 min",
    author: "Siddharth Jain",
    image:"https://bsmedia.business-standard.com/_media/bs/img/article/2025-10/17/full/1760724574-5817.jpg",
    story: {
      timeline: [
        {
          date: "2023",
          title: "IPO market volatility rises",
          sentiment: "negative",
          detail: "Many listings underperform post-IPO"
        },
        {
          date: "2024",
          title: "Investor concerns grow",
          sentiment: "negative",
          detail: "Calls for better transparency"
        },
        {
          date: "Early 2026",
          title: "SEBI drafts new regulations",
          sentiment: "neutral",
          detail: "Focus on protecting retail investors"
        },
        {
          date: "Mar 12, 2026",
          title: "New IPO norms announced",
          sentiment: "positive",
          detail: "Stricter disclosures introduced"
        },
        {
          date: "Late 2026",
          title: "IPO market adjusts",
          sentiment: "neutral",
          detail: "Fewer but higher-quality listings"
        }
      ],
    
      keyPlayers: [
        {
          name: "Madhabi Puri Buch",
          role: "Chairperson, SEBI",
          impact: "Leads regulatory reforms"
        },
        {
          name: "SEBI",
          role: "Market Regulator",
          impact: "Ensures investor protection"
        },
        {
          name: "IPO-bound Companies",
          role: "Market Participants",
          impact: "Must comply with stricter norms"
        },
        {
          name: "Retail Investors",
          role: "Beneficiaries",
          impact: "Gain better transparency"
        }
      ],
    
      prediction: "IPO market may become more stable and trustworthy, though overall listing activity could slow down."
    },

    qa: {
      why: "To protect retail investors and improve transparency.",
      impact: "Reduces risk of overvalued IPOs.",
      future: "Higher quality IPOs expected.",
      default: "Regulation improves market trust."
    }
  },
  {
    id: "8",
    title: "Flipkart's AI Shopping Assistant Crosses 100M Users",
    summary: "The conversational commerce feature has transformed online shopping in India with personalized recommendations.",
    category: "Startup",
    content: "Flipkart's AI-powered shopping assistant, launched just eight months ago, has crossed the 100 million user milestone, making it one of the fastest-adopted AI features in Indian e-commerce. The assistant, built on a custom large language model trained on Indian shopping patterns, supports conversations in 12 Indian languages and has driven a 40% increase in average order value among its users. CEO Kalyan Krishnamurthy attributed the success to deep investment in understanding Indian consumer behavior. The feature uses multimodal AI to allow users to search by uploading photos, describing products in natural language, or even sharing voice notes. Walmart-backed Flipkart is now exploring licensing the technology to other retailers in Southeast Asia.",
    date: "Mar 11, 2026",
    readTime: "5 min",
    author: "Meera Rajendran",
    image:"https://static.startuptalky.com/2024/03/Flipkart-Quick-Commerce-StartupTalky.jpg",
    story: {
      timeline: [
        {
          date: "2025",
          title: "Flipkart launches AI shopping assistant",
          sentiment: "positive",
          detail: "Conversational commerce introduced"
        },
        {
          date: "Late 2025",
          title: "Rapid adoption across users",
          sentiment: "positive",
          detail: "Millions start using AI assistant"
        },
        {
          date: "Mar 2026",
          title: "100M users milestone reached",
          sentiment: "positive",
          detail: "One of fastest AI adoptions in India"
        },
        {
          date: "2026",
          title: "Multimodal AI features expand",
          sentiment: "positive",
          detail: "Voice, image-based search added"
        }
      ],
    
      keyPlayers: [
        {
          name: "Kalyan Krishnamurthy",
          role: "CEO, Flipkart",
          impact: "Drives AI-led commerce strategy"
        },
        {
          name: "Flipkart",
          role: "E-commerce Platform",
          impact: "Implements AI shopping experience"
        },
        {
          name: "Walmart",
          role: "Parent Company",
          impact: "Provides funding and global strategy"
        },
        {
          name: "Consumers",
          role: "End Users",
          impact: "Adopt AI for shopping decisions"
        }
      ],
    
      prediction: "AI-driven commerce could redefine online shopping, with conversational interfaces becoming standard."
    },

    qa: {
      why: "To protect retail investors and improve transparency.",
      impact: "Reduces risk of overvalued IPOs.",
      future: "Higher quality IPOs expected.",
      default: "Regulation improves market trust."
    }

  },
  {
    id: "9",
    title: "India Stack 3.0: Government Launches Unified AI Platform",
    summary: "New digital public infrastructure aims to democratize AI access for startups and small businesses.",
    category: "Tech",
    content: "The Indian government has launched India Stack 3.0, an ambitious digital public infrastructure initiative that provides open-source AI tools, datasets, and compute resources to startups and small businesses. Built on the success of UPI and Aadhaar, the platform offers pre-trained AI models for common business tasks including document processing, customer service automation, and financial analysis. IT Minister Ashwini Vaishnaw announced that the platform will provide subsidized GPU access through partnerships with AWS, Google Cloud, and domestic data center providers. Early adopters include over 500 startups that participated in the beta program, reporting average cost savings of 60% on AI implementation.",
    date: "Mar 10, 2026",
    readTime: "6 min",
    author: "Karthik Subramaniam",
    image:"https://framerusercontent.com/images/ZHfo1O8H8PpzDiRGQexDwPBtZpA.png",

    story: {
      timeline: [
        {
          date: "2016–2022",
          title: "UPI and Aadhaar scale massively",
          sentiment: "positive",
          detail: "Foundation for digital public infrastructure"
        },
        {
          date: "2023",
          title: "AI adoption rises globally",
          sentiment: "positive",
          detail: "India plans next-gen infrastructure"
        },
        {
          date: "Mar 10, 2026",
          title: "India Stack 3.0 launched",
          sentiment: "positive",
          detail: "Open AI tools for startups"
        },
        {
          date: "2026",
          title: "Startup adoption increases",
          sentiment: "positive",
          detail: "Cost savings of 60% reported"
        }
      ],
    
      keyPlayers: [
        {
          name: "Ashwini Vaishnaw",
          role: "IT Minister",
          impact: "Leads digital infrastructure initiatives"
        },
        {
          name: "Government of India",
          role: "Platform Creator",
          impact: "Provides AI tools and funding"
        },
        {
          name: "Startups",
          role: "Primary Users",
          impact: "Leverage AI for innovation"
        },
        {
          name: "Cloud Providers",
          role: "Infrastructure Partners",
          impact: "Provide compute resources"
        }
      ],
    
      prediction: "India could lead in open AI infrastructure, enabling mass-scale innovation across industries."
    },

    qa: {
      why: "To make AI accessible to startups.",
      impact: "Reduces cost of AI adoption.",
      future: "Mass innovation across industries.",
      default: "Digital infrastructure is evolving fast."
    }
  },
  {
    id: "10",
    title: "PhonePe Enters Wealth Management with AI-First Approach",
    summary: "Digital payments giant launches robo-advisory platform targeting India's emerging middle-class investors.",
    category: "Finance",
    content: "PhonePe has officially launched its wealth management vertical, PhonePe Wealth, positioning it as India's first AI-native investment platform for the mass market. The service offers automated portfolio construction, tax-loss harvesting, and personalized financial planning powered by proprietary AI models. With a minimum investment of just ₹100, the platform targets the 300 million Indians who have bank accounts but don't invest. CEO Sameer Nigam emphasized that the platform's AI advisor can explain complex financial concepts in simple language across 8 Indian languages. PhonePe Wealth has already secured SEBI registration as an investment advisor and partnered with 15 AMCs for direct mutual fund distribution.",
    date: "Mar 9, 2026",
    readTime: "5 min",
    author: "Divya Narayan",
    image:"https://zet-cms-production-b2c.s3.ap-south-1.amazonaws.com/How_to_Transfer_Money_From_Phonepe_Wallet_to_Bank_Account_7c5376c792.jpg",
    story: {
      timeline: [
        {
          date: "2023",
          title: "Fintech adoption rises",
          sentiment: "positive",
          detail: "Digital payments dominate India"
        },
        {
          date: "2024",
          title: "AI enters financial services",
          sentiment: "positive",
          detail: "Robo-advisors gain traction"
        },
        {
          date: "Mar 9, 2026",
          title: "PhonePe Wealth launched",
          sentiment: "positive",
          detail: "AI-driven investing platform introduced"
        },
        {
          date: "2026",
          title: "Mass adoption begins",
          sentiment: "positive",
          detail: "Retail investors enter markets"
        }
      ],
    
      keyPlayers: [
        {
          name: "Sameer Nigam",
          role: "CEO, PhonePe",
          impact: "Leads fintech innovation"
        },
        {
          name: "PhonePe",
          role: "Platform Provider",
          impact: "Delivers AI investment tools"
        },
        {
          name: "SEBI",
          role: "Regulator",
          impact: "Ensures compliance and trust"
        },
        {
          name: "Retail Investors",
          role: "Target Users",
          impact: "Gain access to investing"
        }
      ],
    
      prediction: "AI-driven wealth management could become mainstream, transforming how Indians invest."
    },

    qa: {
      why: "To simplify investing using AI.",
      impact: "Improves financial inclusion.",
      future: "AI advisors may replace traditional ones.",
      default: "Fintech is evolving rapidly."
    }
  },



];