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

  // 🔥 STORY ARC
  story?: {
    timeline: {
      date: string;
      title: string;
      sentiment: "positive" | "negative" | "neutral";
      detail: string;
    }[];
    prediction: string;
  };

  // 🔥 AI Q&A
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

    story: {
      timeline: [
        { date: "Now", title: "RBI holds rates", sentiment: "neutral", detail: "Market stable" },
        { date: "Short Term", title: "Loan impact", sentiment: "positive", detail: "Stable EMIs" },
        { date: "Future", title: "Policy shift possible", sentiment: "neutral", detail: "Depends on inflation" }
      ],
      prediction: "Interest rates likely to remain stable in near term."
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

    story: {
      timeline: [
        { date: "Now", title: "Funding raised", sentiment: "positive", detail: "Strong demand" },
        { date: "Short Term", title: "Expansion", sentiment: "positive", detail: "New cities" },
        { date: "Future", title: "IPO", sentiment: "neutral", detail: "Public listing soon" }
      ],
      prediction: "Zepto likely to become major quick commerce leader."
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

    story: {
      timeline: [
        { date: "Now", title: "Construction starts", sentiment: "positive", detail: "Big milestone" },
        { date: "Short Term", title: "Jobs created", sentiment: "positive", detail: "Industrial growth" },
        { date: "Future", title: "Chip independence", sentiment: "positive", detail: "Less imports" }
      ],
      prediction: "India may become global semiconductor hub."
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

    story: {
      timeline: [
        { date: "Now", title: "Budget announced", sentiment: "positive", detail: "Markets rise" },
        { date: "Short Term", title: "Tax changes", sentiment: "positive", detail: "Business boost" },
        { date: "Future", title: "Economic growth", sentiment: "positive", detail: "GDP increase" }
      ],
      prediction: "Budget may accelerate India's economic growth."
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

    story: {
      timeline: [
        { date: "Now", title: "OpenAI + Reliance partnership", sentiment: "positive", detail: "AI expansion across India" },
        { date: "Short Term", title: "Jio AI rollout", sentiment: "positive", detail: "Millions get AI access" },
        { date: "Future", title: "AI ecosystem growth", sentiment: "positive", detail: "India leads AI adoption" }
      ],
      prediction: "India could become one of the largest AI-powered economies."
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

    story: {
      timeline: [
        { date: "Now", title: "$20B investment announced", sentiment: "positive", detail: "Major renewable push" },
        { date: "Short Term", title: "Solar & wind expansion", sentiment: "positive", detail: "Capacity increases" },
        { date: "Future", title: "Green hydrogen scale", sentiment: "positive", detail: "Clean energy leadership" }
      ],
      prediction: "Adani could become a global renewable energy giant."
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

    story: {
      timeline: [
        { date: "Now", title: "New IPO rules introduced", sentiment: "neutral", detail: "Focus on transparency" },
        { date: "Short Term", title: "Stricter disclosures", sentiment: "positive", detail: "Investor protection" },
        { date: "Future", title: "Stable IPO market", sentiment: "positive", detail: "Less risky listings" }
      ],
      prediction: "IPO market may become more stable but slower."
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
    story: {
      timeline: [
        { date: "Now", title: "New IPO rules introduced", sentiment: "neutral", detail: "Focus on transparency" },
        { date: "Short Term", title: "Stricter disclosures", sentiment: "positive", detail: "Investor protection" },
        { date: "Future", title: "Stable IPO market", sentiment: "positive", detail: "Less risky listings" }
      ],
      prediction: "IPO market may become more stable but slower."
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

    story: {
      timeline: [
        { date: "Now", title: "India Stack 3.0 launched", sentiment: "positive", detail: "AI democratization begins" },
        { date: "Short Term", title: "Startup adoption rises", sentiment: "positive", detail: "Lower costs" },
        { date: "Future", title: "Mass AI innovation", sentiment: "positive", detail: "Ecosystem growth" }
      ],
      prediction: "India could lead global open AI infrastructure."
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

    story: {
      timeline: [
        { date: "Now", title: "Wealth platform launched", sentiment: "positive", detail: "AI investing begins" },
        { date: "Short Term", title: "User adoption grows", sentiment: "positive", detail: "Retail participation" },
        { date: "Future", title: "AI finance rise", sentiment: "positive", detail: "Automation dominates" }
      ],
      prediction: "AI-based investing may become mainstream."
    },
    
    qa: {
      why: "To simplify investing using AI.",
      impact: "Improves financial inclusion.",
      future: "AI advisors may replace traditional ones.",
      default: "Fintech is evolving rapidly."
    }
  },



];