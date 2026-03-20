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
  },
  {
    id: "2",
    title: "Zepto Raises $500M in Pre-IPO Round at $8B Valuation",
    summary: "Quick-commerce unicorn Zepto secures massive funding as it prepares for a public listing later this year.",
    category: "Startup",
    content: "Zepto, India's leading quick-commerce platform, has raised $500 million in a pre-IPO funding round that values the company at approximately $8 billion. The round was led by prominent global investors including DST Global, StepStone Group, and existing backers Glade Brook Capital and Nexus Venture Partners. CEO Aadit Palicha stated that the funds will be used to expand dark store infrastructure across tier-2 cities and invest in AI-driven inventory management systems. The company has seen its revenue grow 3x year-over-year, reaching an annualized GMV of $4 billion. Zepto plans to file its DRHP with SEBI by Q2 2026, targeting a listing on both BSE and NSE.",
    date: "Mar 17, 2026",
    readTime: "5 min",
    author: "Rohan Mehta",
  },
  {
    id: "3",
    title: "India's Semiconductor Fab Construction Begins in Gujarat",
    summary: "The $15 billion chip fabrication facility marks India's entry into advanced semiconductor manufacturing.",
    category: "Tech",
    content: "Ground has been broken on India's first advanced semiconductor fabrication facility in Dholera, Gujarat, marking a pivotal moment in the country's quest for chip self-sufficiency. The $15 billion project, a joint venture between Tata Electronics and TSMC, aims to produce chips at the 28nm node initially, with plans to scale to 7nm within five years. Prime Minister Modi called it 'a historic step towards Atmanirbhar Bharat in technology.' The facility is expected to create over 20,000 direct jobs and spawn an ecosystem of ancillary suppliers. Industry experts note that while this puts India on the semiconductor map, it will still rely heavily on imports for cutting-edge chips used in AI and 5G applications.",
    date: "Mar 16, 2026",
    readTime: "6 min",
    author: "Ananya Desai",
  },
  {
    id: "4",
    title: "Union Budget 2026: Key Highlights for Businesses",
    summary: "Finance Minister unveils a growth-oriented budget with significant tax reforms and infrastructure spending.",
    category: "Policy",
    content: "Finance Minister Nirmala Sitharaman presented the Union Budget 2026-27 with a clear focus on boosting capital expenditure, simplifying the tax regime, and supporting India's manufacturing ambitions. Key highlights include a reduction in corporate tax for MSMEs from 25% to 22%, a new Production-Linked Incentive scheme for the electronics sector worth ₹50,000 crore, and increased allocation for national highways by 30%. The budget also introduced a Digital India Innovation Fund of ₹10,000 crore to support AI startups. Markets reacted positively, with the Sensex climbing 800 points in intra-day trade. However, economists flagged concerns about the fiscal deficit target of 4.5% of GDP, suggesting it may be challenging to achieve given the expanded spending plans.",
    date: "Mar 15, 2026",
    readTime: "7 min",
    author: "Vikram Singh",
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
  },
];

export const categoryColors: Record<string, string> = {
  Finance: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Startup: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  Tech: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Policy: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

export const storyArcData = {
  title: "Adani Group: From Controversy to Comeback",
  timeline: [
    { date: "Jan 2023", event: "Hindenburg Research publishes short-seller report", sentiment: "negative" as const },
    { date: "Feb 2023", event: "₹20,000 Cr FPO cancelled amid stock crash", sentiment: "negative" as const },
    { date: "Mar 2023", event: "Supreme Court panel formed to investigate", sentiment: "neutral" as const },
    { date: "Jun 2023", event: "GQG Partners invests $1.87B, signaling confidence", sentiment: "positive" as const },
    { date: "Jan 2024", event: "Stocks recover 80% of losses, debt reduced by $6B", sentiment: "positive" as const },
    { date: "Sep 2024", event: "Adani acquires cement major ACC-Ambuja", sentiment: "positive" as const },
    { date: "Mar 2025", event: "Group revenue crosses $40B annually", sentiment: "positive" as const },
    { date: "Jan 2026", event: "Adani Green becomes world's largest solar developer", sentiment: "positive" as const },
  ],
  keyPlayers: [
    { name: "Gautam Adani", role: "Chairman, Adani Group" },
    { name: "Nate Anderson", role: "Founder, Hindenburg Research" },
    { name: "Rajiv Jain", role: "CEO, GQG Partners" },
    { name: "Jugeshinder Singh", role: "CFO, Adani Group" },
  ],
  predictions: [
    "Potential listing of Adani subsidiary in international markets",
    "Expansion into AI and data center business",
    "Resolution of ongoing regulatory investigations",
    "Strategic partnerships with global energy majors",
  ],
};

export const briefingTopics = [
  { id: "budget", label: "Union Budget 2026" },
  { id: "ai", label: "AI Revolution in India" },
  { id: "startup", label: "Startup Ecosystem" },
  { id: "markets", label: "Market Outlook" },
];

export const briefingData: Record<string, { summary: string; highlights: string[]; sections: { title: string; content: string }[] }> = {
  budget: {
    summary: "The Union Budget 2026-27 focuses on accelerating India's path to a $5 trillion economy through infrastructure spending, tax simplification, and digital innovation incentives.",
    highlights: [
      "Corporate tax for MSMEs reduced from 25% to 22%",
      "₹50,000 Cr PLI scheme for electronics manufacturing",
      "National highways allocation increased by 30%",
      "₹10,000 Cr Digital India Innovation Fund for AI startups",
      "Fiscal deficit target maintained at 4.5% of GDP",
    ],
    sections: [
      { title: "Economic Impact", content: "The budget is projected to add 0.5% to GDP growth through multiplier effects of capital expenditure. Infrastructure spending creates 12 million jobs directly and catalyzes private investment estimated at 3x the government outlay." },
      { title: "Industry Impact", content: "Manufacturing sector stands to gain the most with expanded PLI schemes. IT services benefit from the AI fund, while real estate sees positive signals from affordable housing tax incentives. Banking sector expects improved asset quality." },
      { title: "Key Players", content: "Finance Ministry leads implementation with NITI Aayog providing strategic oversight. RBI coordinates monetary policy alignment. Industry bodies CII and FICCI have broadly endorsed the budget direction." },
    ],
  },
  ai: {
    summary: "India is positioning itself as a global AI powerhouse through strategic government initiatives, private sector innovation, and the world's largest pool of AI engineering talent.",
    highlights: [
      "India Stack 3.0 provides open-source AI infrastructure",
      "OpenAI-Reliance partnership brings GPT-5 to 450M users",
      "AI-first startups raised $8B in 2025",
      "Government mandates AI literacy in school curriculum",
      "12 Indian language AI models now commercially available",
    ],
    sections: [
      { title: "Economic Impact", content: "AI is estimated to add $500 billion to India's GDP by 2030. Automation of routine tasks could displace 15 million jobs while creating 25 million new roles in AI-adjacent fields." },
      { title: "Industry Impact", content: "Financial services leads AI adoption at 65% penetration. Healthcare AI diagnostics now serve 200 million patients. Agricultural AI tools deployed across 10 million farms." },
      { title: "Key Players", content: "Reliance Jio, TCS, Infosys, and Wipro lead enterprise AI. Startups like Krutrim, Sarvam AI, and Yellow.ai drive innovation. IITs and IISc produce 50,000 AI engineers annually." },
    ],
  },
  startup: {
    summary: "India's startup ecosystem has matured significantly, with a focus on profitability, deeper tech innovation, and expansion into tier-2/3 cities driving the next wave of growth.",
    highlights: [
      "107 unicorns as of March 2026",
      "IPO pipeline exceeds 40 startups",
      "Tier-2 city startups raised 30% of total funding",
      "Deeptech startups grew 4x in two years",
      "Women-led startups received record $2B funding",
    ],
    sections: [
      { title: "Economic Impact", content: "Startups now contribute 8% of India's GDP and employ 1.5 million people directly. The multiplier effect in local economies is estimated at 5x for every startup job created." },
      { title: "Industry Impact", content: "Quick commerce, EV, and climate tech are the fastest-growing sectors. SaaS exports from India crossed $20B. Fintech penetration in rural areas doubled in 18 months." },
      { title: "Key Players", content: "Sequoia India, Accel, Peak XV lead funding. Zepto, PhonePe, and Razorpay are IPO-bound. Government's Startup India 3.0 scheme provides enhanced tax benefits." },
    ],
  },
  markets: {
    summary: "Indian equity markets continue their structural bull run, supported by strong domestic flows, corporate earnings growth, and India's increasing weight in global indices.",
    highlights: [
      "Sensex crossed 95,000 mark in Q1 2026",
      "SIP flows exceed ₹25,000 Cr monthly",
      "FII flows turned positive after 6-month outflow",
      "Mid-cap index outperformed large-cap by 15%",
      "IPO market saw ₹1.2 lakh Cr raised in FY26",
    ],
    sections: [
      { title: "Economic Impact", content: "Market capitalization of listed Indian companies exceeds $6 trillion. Household financial savings increasingly directed to equities, with demat accounts crossing 200 million." },
      { title: "Industry Impact", content: "Banking and financial services lead market gains. IT sector recovery underway after 2-year correction. Manufacturing companies see re-rating on China+1 theme." },
      { title: "Key Players", content: "SEBI maintains regulatory vigilance with new disclosure norms. NSE and BSE compete for market share. Mutual fund AUM crosses ₹75 lakh crore." },
    ],
  },
};
