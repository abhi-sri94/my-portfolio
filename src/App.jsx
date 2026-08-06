import {
  ChevronUp,
  Code2,
  Cpu,
  Rocket,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  Globe,
  Zap,
  MessageSquare,
  Calendar,
  Sparkles,
  MapPin,
  Menu,
  X
} from "lucide-react";

function Github({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function Linkedin({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}
import { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation'
import profilePic from './assets/abhishek.jpg'
import SafarShareImg from './assets/SafarShare.png'

import dayli1 from './assets/Dayli1.png'
import dayli2 from './assets/Dayli2.png'
import dayli3 from './assets/Dayli3.png'
import dayli4 from './assets/dayli4.png'
import dayli5 from './assets/dayli5.png'
import dayli6 from './assets/dayli6.png'

import rockclimb1 from './assets/rockclimb1.png'
import rockclimb2 from './assets/rockclimb2.png'
import rockclimb3 from './assets/rockclimb3.png'

import interviewiq1 from './assets/interviewiq1.png'
import interviewiq3 from './assets/interviewiq3.png'
import interviewiq4 from './assets/interviewiq4.png'
import interviewiq5 from './assets/interviewiq5.png'
import interviewiq6 from './assets/interviewiq6.png'
import gitvisual1 from './assets/gitvisual1.png'

export default function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [showMobileCalculator, setShowMobileCalculator] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Project Planner State
  const [projectType, setProjectType] = useState("mvp"); // mvp, saas, performance
  const [projectScope, setProjectScope] = useState("medium"); // simple, medium, enterprise
  const [projectTimeline, setProjectTimeline] = useState("standard"); // urgent, standard, flexible

  // Lead Form State
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Project Inquiry Form State
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryCompany, setInquiryCompany] = useState("");
  const [inquiryProjectType, setInquiryProjectType] = useState("web-app");
  const [inquiryBudget, setInquiryBudget] = useState("1000-3000");
  const [inquiryTimeline, setInquiryTimeline] = useState("1-2-months");
  const [inquiryBrief, setInquiryBrief] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquirySubmitting, setInquirySubmitting] = useState(false);
  const [inquiryError, setInquiryError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const services = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: "Full-Stack MVP Development",
      description: "Build a launch-ready product from absolute zero. I help you refine your scope, define architecture, and build a fast, secure product to show investors & early users.",
      features: [
        "Interactive UI & UX Design",
        "Secure Authentication & User Roles",
        "Stripe Payment Integrations",
        "Production-ready deployment & hosting setup"
      ],
      glowClass: "hover-glow-blue"
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "SaaS Platforms & AI Solutions",
      description: "Integrate smart logic, third-party APIs, and AI endpoints (like Google Gemini) to automate manual workflows and build custom features that your customers will pay for.",
      features: [
        "Gemini AI / LLM orchestration",
        "Robust custom API design (REST/GraphQL)",
        "Automated cron jobs & databases (MongoDB/SQL)",
        "Webhooks and third-party SaaS connections"
      ],
      glowClass: "hover-glow-purple"
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      title: "Speed & Frontend Optimization",
      description: "Is your app slow or losing mobile traffic? I audit performance, optimize Core Web Vitals (LCP/INP), and refactor frontends to boost search rankings and customer retention.",
      features: [
        "Core Web Vitals & PageSpeed audit",
        "React render performance optimization",
        "Clean, semantic SEO & schema architecture",
        "Modern CSS scroll-driven & micro-animations"
      ],
      glowClass: "hover-glow-teal"
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      description: "We map out your business objectives, target audience, and engineering constraints. We finalize a scoped feature list for a fixed-budget MVP, eliminating wasted weeks."
    },
    {
      num: "02",
      title: "Agile Development",
      description: "I build the software in weekly iterations. You get access to a private live staging link, allowing you to click around, give feedback, and see progress in real time."
    },
    {
      num: "03",
      title: "Launch & Support",
      description: "We launch your app to production, hook up analytics and tracking, and run a complete code walkthrough so your team is fully independent."
    }
  ];

  const projects = [
    {
      title: 'InterviewIQ',
      tag: 'saas',
      description: 'An AI-powered technical interview simulator. Uses Google Gemini AI and remote containerized code execution to provide realistic, pressure-tested coding rounds and behavioral interviews with real-time speech-to-text.',
      challenge: 'Job seekers lack realistic coding rounds and custom behavioral feedback without paying expensive human coaches.',
      solution: 'Leveraged Gemini LLM, speech recognition, and secure docker environments for isolated code grading.',
      impact: 'Allows candidates to run mock technical rounds with instant AI-driven line-by-line feedback.',
      tech: ['React', 'Node.js', 'Express', 'Gemini AI', 'Tailwind CSS'],
      live: 'https://interviewiq-frontend-ten.vercel.app/',
      github: 'https://github.com/abhi-sri94/interviewiq-backend',
      images: [interviewiq1, interviewiq3, interviewiq4, interviewiq5, interviewiq6],
    },
    {
      title: 'Git-Visual',
      tag: 'saas',
      description: 'An interactive full-stack MERN cyberpunk-themed Git branching simulator. Users type real git commands to visualize branch states, complete tutorial hacks, and save progress.',
      challenge: 'Visualizing Git branch splits, detaches, and merges is notoriously difficult for developers starting out.',
      solution: 'Built a state parser in React that executes virtual git environments in the browser and updates a real-time topological map.',
      impact: 'Cyberpunk-themed gamified training platform with persistent MongoDB save progress.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      live: 'https://git-visual.onrender.com/',
      github: 'https://github.com/abhi-sri94/git-visual',
      images: [gitvisual1],
    },
    {
      title: 'SafarShare',
      tag: 'mvp',
      description: 'India-focused ride-sharing platform designed to improve passenger safety, smart ride management, and reliable intercity travel experiences.',
      challenge: 'Expensive intercity transport and lack of localized ride trust mechanics.',
      solution: 'Created custom geolocation algorithms matching route coordinates, safety logs, and passenger identities.',
      impact: 'Enabled cost-effective and secure community rides across regional highway paths.',
      tech: ['React', 'Node.js', 'MongoDB'],
      live: 'https://safarshare.in',
      github: 'https://github.com/abhi-sri94/SafarShare',
      images: [SafarShareImg],
    },
    {
      title: 'Dayli Delivery',
      tag: 'mvp',
      description: 'A modern quick-commerce grocery delivery platform focused on ultra-fast local deliveries, smooth ordering experience, and scalable operations.',
      challenge: 'Fast commerce operations require real-time stock sync and quick routing calculations on weak mobile networks.',
      solution: 'Connected a real-time reactive Firestore layer that updates products and order statuses instantly with zero reload.',
      impact: 'Ultra-fast cart responsiveness and dashboard notifications for fulfillment operators.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      live: 'https://dayli.co.in',
      github: 'https://github.com/abhi-sri94',
      images: [dayli1, dayli2, dayli3, dayli4, dayli5, dayli6],
    },
    {
      title: 'Rockclimb Networks',
      tag: 'performance',
      description: 'A digital solutions company website showcasing services like web development, app development, hosting, digital marketing, and IT security solutions.',
      challenge: 'B2B services sites need premium design, fast response rates, and high-converting marketing layouts.',
      solution: 'Optimized asset load priorities, reduced LCP times, and created a sleek modern brand styling.',
      impact: 'Serves as the main gateway for B2B hosting and web systems development acquisition.',
      tech: ['React', 'Web Development', 'Hosting'],
      live: 'https://rockclimbnetworks.netlify.app/',
      github: 'https://github.com/abhi-sri94/rcn-website',
      images: [rockclimb1, rockclimb2, rockclimb3],
    },
  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'Tailwind CSS',
    'Firebase',
    'GitHub',
    'Vercel',
    'UI/UX Design',
    'Responsive Design',
  ];

  // Price Calculation Logic (Adjusted for $200 USD Base Price)
  const calculatePrice = () => {
    const base = 200; // Baseline of $200

    let typeMultiplier = 1.0; // Performance Base
    if (projectType === "mvp") typeMultiplier = 2.0; // MVP starts at $400
    if (projectType === "saas") typeMultiplier = 3.0; // SaaS starts at $600

    let scopeMultiplier = 1.0; // Medium Scope
    if (projectScope === "simple") scopeMultiplier = 0.8;
    if (projectScope === "enterprise") scopeMultiplier = 1.6;

    let timelineAdd = 0;
    if (projectTimeline === "urgent") timelineAdd = 60; // Rush fee proportional to $200 base
    if (projectTimeline === "flexible") timelineAdd = -40; // Flexible discount proportional to $200 base

    const minEstimate = Math.round((base * typeMultiplier * scopeMultiplier + timelineAdd) / 10) * 10;
    const maxEstimate = Math.round((minEstimate * 1.3) / 10) * 10;

    return { minEstimate, maxEstimate };
  };

  const { minEstimate, maxEstimate } = calculatePrice();

  const handlePlannerSubmit = async (e) => {
    e.preventDefault();
    if (!clientName || !clientEmail) {
      alert("Please fill out your Name and Email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "271d54b0-09da-41e7-bd0a-e6ffb5e11173";

    // If no access key is configured in env, fallback to mailto client-side flow
    if (!accessKey) {
      const subject = encodeURIComponent(`New Project Brief: ${projectType.toUpperCase()} Proposal`);
      const body = encodeURIComponent(
        `Hi Abhishek,\n\nI just submitted a project proposal on your portfolio website with these selections:\n\n` +
        `--- Selection Summary ---\n` +
        `- Project Type: ${projectType.toUpperCase()}\n` +
        `- Project Scope: ${projectScope.toUpperCase()}\n` +
        `- Timeline: ${projectTimeline.toUpperCase()}\n` +
        `- Estimated Budget Range: $${minEstimate.toLocaleString()} - $${maxEstimate.toLocaleString()}\n\n` +
        `--- Project Brief ---\n` +
        `${projectBrief}\n\n` +
        `Best regards,\n` +
        `${clientName}\n` +
        `Contact Email: ${clientEmail}`
      );
      window.location.href = `mailto:asri.4247@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Lead: ${clientName} (${projectType.toUpperCase()})`,
          from_name: "Portfolio MVP Planner",
          name: clientName,
          email: clientEmail,
          project_type: projectType,
          project_scope: projectScope,
          project_timeline: projectTimeline,
          estimated_budget: `$${minEstimate.toLocaleString()} - $${maxEstimate.toLocaleString()}`,
          project_brief: projectBrief
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setSubmitError("A connection error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryBrief) {
      alert("Please fill out your Name, Email, and Project Brief.");
      return;
    }

    setInquirySubmitting(true);
    setInquiryError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "271d54b0-09da-41e7-bd0a-e6ffb5e11173";

    if (!accessKey) {
      setInquiryError("Something went wrong. Please email me directly at asri.4247@gmail.com");
      setInquirySubmitting(false);
      return;
    }

    try {
      // Calculate current pricing estimator selections to include as context
      const { minEstimate, maxEstimate } = calculatePrice();
      const calcSummary = `Service: ${projectType.toUpperCase()}, Scale: ${projectScope.toUpperCase()}, Timeline: ${projectTimeline.toUpperCase()}, Budget: $${minEstimate.toLocaleString()} - $${maxEstimate.toLocaleString()}`;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Lead Inquiry: ${inquiryName} (${inquiryProjectType.toUpperCase()})`,
          from_name: "Portfolio Inquiry Form",
          name: inquiryName,
          email: inquiryEmail,
          company: inquiryCompany || "N/A",
          project_type: inquiryProjectType,
          budget_range: inquiryBudget,
          timeline: inquiryTimeline,
          project_brief: inquiryBrief,
          calculator_selections: calcSummary
        })
      });

      const result = await response.json();
      if (result.success) {
        setInquirySubmitted(true);
      } else {
        setInquiryError(result.message || "Something went wrong. Please email me directly at asri.4247@gmail.com");
      }
    } catch (err) {
      setInquiryError("A connection error occurred. Please email me directly at asri.4247@gmail.com");
    } finally {
      setInquirySubmitting(false);
    }
  };


  const renderForm = () => (
    <form onSubmit={handlePlannerSubmit} className="bg-zinc-950 border border-zinc-850 rounded-3xl p-6 sm:p-8 space-y-8 w-full text-left">
      {/* Parameter 1: Project Type */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          1. What are we building?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { val: "mvp", title: "Product MVP", desc: "Build & launch from 0" },
            { val: "saas", title: "SaaS / API Systems", desc: "Complex backend & logic" },
            { val: "performance", title: "Speed / Core Vitals", desc: "Speed optimization" }
          ].map((item) => (
            <button
              key={item.val}
              type="button"
              onClick={() => setProjectType(item.val)}
              className={`p-4 rounded-2xl text-left border transition ${projectType === item.val
                ? "bg-blue-500/5 border-blue-500 text-white"
                : "bg-zinc-900/50 border-zinc-850 text-zinc-400 hover:border-zinc-800"
                }`}
            >
              <p className="font-bold text-sm text-zinc-200">{item.title}</p>
              <p className="text-xxs sm:text-xs text-zinc-500 mt-1">{item.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Parameter 2: Project Scope */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          2. Project Scope & Complexity
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { val: "simple", title: "Standard", desc: "Core vital features" },
            { val: "medium", title: "Growth", desc: "Integrations & custom DB" },
            { val: "enterprise", title: "Enterprise / Advanced", desc: "Large scale app" }
          ].map((item) => (
            <button
              key={item.val}
              type="button"
              onClick={() => setProjectScope(item.val)}
              className={`p-4 rounded-2xl text-left border transition ${projectScope === item.val
                ? "bg-blue-500/5 border-blue-500 text-white"
                : "bg-zinc-900/50 border-zinc-850 text-zinc-400 hover:border-zinc-800"
                }`}
            >
              <p className="font-bold text-sm text-zinc-200">{item.title}</p>
              <p className="text-xxs sm:text-xs text-zinc-500 mt-1">{item.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Parameter 3: Timeline */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          3. Launch Timeline
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { val: "urgent", title: "Urgent (< 4 weeks)", desc: "Priority timeline booking" },
            { val: "standard", title: "Standard (1-2 months)", desc: "Regular delivery scale" },
            { val: "flexible", title: "Flexible (3+ months)", desc: "Flexible timeline savings" }
          ].map((item) => (
            <button
              key={item.val}
              type="button"
              onClick={() => setProjectTimeline(item.val)}
              className={`p-4 rounded-2xl text-left border transition ${projectTimeline === item.val
                ? "bg-blue-500/5 border-blue-500 text-white"
                : "bg-zinc-900/50 border-zinc-850 text-zinc-400 hover:border-zinc-800"
                }`}
            >
              <p className="font-bold text-sm text-zinc-200">{item.title}</p>
              <p className="text-xxs sm:text-xs text-zinc-500 mt-1">{item.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Lead Capture Fields */}
      <div className="border-t border-zinc-850 pt-8 space-y-4">
        <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400">
          4. Your Details
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 text-sm text-white placeholder-zinc-500 text-left"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 text-sm text-white placeholder-zinc-500 text-left"
          />
        </div>
        <textarea
          rows="4"
          placeholder="Describe your project brief (features, purpose, integrations needed...)"
          value={projectBrief}
          onChange={(e) => setProjectBrief(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 text-sm text-white placeholder-zinc-500 text-left"
        />
      </div>

      <div className="space-y-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold py-4 rounded-xl shadow-lg transition text-center flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Proposal...
            </>
          ) : (
            "Submit Proposal & Request Quote"
          )}
        </button>

        {submitError && (
          <p className="text-xs font-semibold text-rose-400 text-center mt-2 animate-pulse">
            ⚠️ {submitError}
          </p>
        )}
      </div>
    </form>
  );

  const renderPanel = () => (
    <div className="flex flex-col justify-between bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden w-full text-left">
      <div className="absolute top-0 right-0 h-32 w-32 bg-blue-500/5 blur-2xl rounded-full"></div>

      <div>
        <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6">Estimate Summary</p>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">Service:</span>
            <span className="font-semibold text-zinc-300 capitalize">{projectType}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">Scale:</span>
            <span className="font-semibold text-zinc-300 capitalize">{projectScope}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">Timeline:</span>
            <span className="font-semibold text-zinc-300 capitalize">{projectTimeline}</span>
          </div>
        </div>

        <div className="border-t border-zinc-800/80 pt-8 pb-4 text-center">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2 font-semibold">Estimated Budget Range</p>
          <p className="text-3xl sm:text-5xl font-extrabold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ${minEstimate.toLocaleString()} - ${maxEstimate.toLocaleString()}
          </p>
          <p className="text-xxs sm:text-xs text-zinc-500 mt-3 leading-relaxed">
            *Estimates are calculated based on market standards. Full quotes provided following Discovery calls.
          </p>
        </div>
      </div>

      {/* Form Success Panel */}
      {isSubmitted ? (
        <div className="bg-zinc-900 border border-emerald-500/30 p-5 rounded-2xl mt-6 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-white">Proposal Received!</h4>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Thanks {clientName}. I will review your project brief and get back to you at {clientEmail} within 24 hours.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-zinc-900/50 border border-zinc-850 p-5 rounded-2xl mt-6 flex items-start gap-3">
          <MessageSquare className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Next Step</h4>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              Fill out your details on the left to request a secure discovery booking code.
            </p>
          </div>
        </div>
      )}
    </div>
  );

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(p => p.tag === activeTab);

  return (
    <div className="bg-black text-zinc-100 min-h-screen w-full overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-6 sm:px-10 py-5">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-2 group">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition">
              A
            </span>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-zinc-300 transition">
              Abhishek.
            </span>
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#estimator" className="hover:text-white transition">Cost Calculator</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a 
              href="/abhishek_updated_profile.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition flex items-center gap-1"
            >
              View Resume
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/60 hover:border-zinc-600 text-white text-xs sm:text-sm font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-blue-400" />
              Start Your Project
            </a>

            {/* Mobile menu trigger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden text-zinc-400 hover:text-white p-1.5 transition duration-200 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-900 animate-fadeIn">
            <div className="flex flex-col px-6 py-6 space-y-4 text-base font-semibold text-zinc-300">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-white transition py-2 border-b border-zinc-900/50"
              >
                Services
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-white transition py-2 border-b border-zinc-900/50"
              >
                Projects
              </a>
              <a 
                href="#process" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-white transition py-2 border-b border-zinc-900/50"
              >
                Process
              </a>
              <a 
                href="#estimator" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-white transition py-2 border-b border-zinc-900/50"
              >
                Cost Calculator
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-white transition py-2 border-b border-zinc-900/50"
              >
                Contact
              </a>
              <a 
                href="/abhishek_updated_profile.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-white transition py-2 border-b border-zinc-900/50 flex items-center justify-between"
              >
                <span>View Resume</span>
                <ExternalLink className="w-4 h-4 text-zinc-500" />
              </a>
              
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white text-sm font-semibold py-3 px-4 rounded-xl transition duration-300 w-full"
              >
                <Calendar className="w-4 h-4 text-blue-400" />
                Start Your Project
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-12 lg:pt-32 lg:pb-0 lg:py-0 overflow-hidden">
        {/* Glow ambient backdrops */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full relative z-10">
          <div className="order-1 lg:order-none lg:col-span-7 flex flex-col items-start animate-fadeIn">
            <div className="flex items-start justify-between w-full mb-8 lg:mb-10">
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide text-blue-400 self-start">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Available for Freelance & Contract MVPs
                </div>
                <div className="inline-flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide text-zinc-300 self-start">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500 animate-pulse" />
                  Delhi, India ➔ Serving Clients Globally
                </div>
              </div>

              {/* Mobile-only avatar - increased size, top aligned and floating */}
              <div className="lg:hidden shrink-0 ml-4 relative -translate-y-1 translate-x-1 animate-micro-float">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-md opacity-30"></div>
                <div className="h-20 w-20 rounded-full p-0.5 bg-gradient-to-br from-blue-500 via-transparent to-purple-600">
                  <img
                    src={profilePic}
                    alt="Abhishek Srivastava portrait"
                    className="h-full w-full rounded-full object-cover border border-zinc-800"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-4 lg:mb-6 tracking-tight text-white animate-fadeIn max-w-[290px] sm:max-w-none">
              I Build, Launch, and Scale{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                High-Performance
              </span>{" "}
              Web Applications
            </h1>

            <p className="text-zinc-400 text-sm sm:text-lg md:text-xl max-w-2xl mb-6 lg:mb-8 animate-fadeIn" style={{ lineHeight: '1.75' }}>
              <span className="inline lg:hidden">
                Turn your business vision into structured, revenue-ready software. I partner with founders globally to build production-grade MVPs, SaaS platforms, and high-speed web apps.
              </span>
              <span className="hidden lg:inline">
                Turn your business vision into structured, revenue-ready software. Operating out of <strong className="text-white font-semibold">Delhi, India</strong>, I partner with forward-thinking startups and founders globally to build production-grade MVPs, scalable SaaS platforms, and high-speed web apps.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm sm:text-base font-semibold px-6 py-3.5 lg:px-8 lg:py-4 rounded-2xl shadow-lg shadow-blue-500/15 hover:scale-[1.02] active:scale-95 transition duration-300 text-center"
              >
                🚀 Get Instant Estimate
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-300 hover:text-white text-sm sm:text-base px-6 py-3.5 lg:px-8 lg:py-4 rounded-2xl font-semibold shadow-sm hover:scale-[1.02] active:scale-95 transition duration-300 text-center"
              >
                💬 Start Your Project
              </a>
            </div>

            {/* Desktop Only Stats */}
            <div className="hidden lg:grid grid-cols-3 gap-6 sm:gap-10 border-t border-zinc-800/80 mt-12 pt-8 w-full max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">4 Weeks</p>
                <p className="text-xs sm:text-sm text-zinc-500">Average MVP Launch</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs sm:text-sm text-zinc-500">Client Code Ownership</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">95+</p>
                <p className="text-xs sm:text-sm text-zinc-500">PageSpeed Performance</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image Panel - Desktop Only */}
          <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end animate-fadeIn mt-6 lg:mt-0">
            <div className="relative">
              {/* Outer decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-20 animate-pulse"></div>

              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-3xl p-1 bg-gradient-to-br from-blue-500/40 via-transparent to-purple-600/40">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-zinc-900 border border-zinc-800">
                  <img
                    src={profilePic}
                    alt="Abhishek Srivastava portrait"
                    className="w-full h-full object-cover hover:scale-[1.02] transition duration-500 ease-out"
                  />
                </div>

                {/* Floating client proof tags */}
                <div className="absolute -bottom-4 -left-4 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-3 rounded-2xl shadow-xl flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400">Services Handover</p>
                    <p className="text-xs font-bold text-white">Turnkey Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Only Stats */}
          <div className="order-3 lg:hidden w-full grid grid-cols-3 gap-3 border-t border-zinc-900 mt-6 pt-6 max-w-md mx-auto">
            <div className="text-center">
              <p className="text-xl font-extrabold text-white">4 Weeks</p>
              <p className="text-[10px] text-zinc-500 mt-0.5">Avg MVP Launch</p>
            </div>
            <div className="text-center border-l border-zinc-900">
              <p className="text-xl font-extrabold text-white">100%</p>
              <p className="text-[10px] text-zinc-500 mt-0.5">Code Ownership</p>
            </div>
            <div className="text-center border-l border-zinc-900">
              <p className="text-xl font-extrabold text-white">95+</p>
              <p className="text-[10px] text-zinc-500 mt-0.5">PageSpeed Audit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-t border-zinc-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-3">Specialization</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Services Tailored to Launch and Optimize Your Business
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg">
              No generic code blocks. I deliver dedicated full-cycle engineering, from mapping logic on whiteboards to launching servers handling hundreds of active users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className={`glass-card hover-glow ${srv.glowClass} rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full`}
              >
                <div>
                  <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 lg:mb-6">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 lg:mb-4">{srv.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 lg:mb-6 line-clamp-2 lg:line-clamp-none">{srv.description}</p>
                </div>

                <div className="border-t border-zinc-800/80 pt-4 lg:pt-6 mt-4 lg:mt-6">
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2 lg:mb-4 hidden lg:block">What's included</p>
                  <ul className="space-y-2 lg:space-y-3">
                    {srv.features.map((feat, fidx) => (
                      <li key={fidx} className={`items-start gap-2.5 text-xs sm:text-sm text-zinc-300 ${fidx >= 3 ? 'hidden lg:flex' : 'flex'}`}>
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Projects */}
      <section id="projects" className="py-24 px-6 border-t border-zinc-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-purple-400 font-semibold tracking-widest text-xs uppercase mb-3">Featured Projects</p>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                Self-Initiated & Open-Source Products
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base">
                Case studies of full-stack platforms and tools I have engineered, launched, and open-sourced.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 bg-zinc-950 p-1.5 rounded-2xl border border-zinc-900 w-fit">
              {["all", "saas", "mvp", "performance"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition ${activeTab === tab
                    ? "bg-zinc-800 text-white border border-zinc-700/50 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 hover:shadow-xl hover:shadow-blue-500/[0.02] transition duration-300"
              >
                <div>
                  {/* Screenshots gallery viewport */}
                  <div className="project-gallery flex gap-3 overflow-x-auto snap-x snap-mandatory mb-6 pb-2">
                    {project.images?.map((img, idx) => (
                      <div
                        key={idx}
                        className={`snap-center shrink-0 ${project.images.length > 1
                          ? "w-[85%] sm:w-[75%] lg:w-full"
                          : "w-full"
                          }`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} snapshot ${idx + 1}`}
                          className="w-full h-48 sm:h-56 object-cover rounded-2xl border border-zinc-800"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <span className="px-3 py-1 bg-zinc-850 border border-zinc-800 rounded-full text-xs text-blue-400 capitalize">
                      {project.tag}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 lg:mb-6 line-clamp-3 lg:line-clamp-none">
                    {project.description}
                  </p>

                  {/* Case Study Details - Desktop Only */}
                  <div className="hidden lg:block space-y-4 border-t border-zinc-800/80 pt-6 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">❌ The Problem</p>
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">🛠️ Engineering Solution</p>
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">🚀 Product & Technical Impact</p>
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{project.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-zinc-950 border border-zinc-850 px-3 py-1.5 rounded-lg text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-row gap-3 border-t border-zinc-800/80 pt-6 items-stretch sm:items-center justify-between mt-auto">
                  <div className="flex gap-3 flex-1 sm:flex-initial">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition duration-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="lg:hidden w-full sm:w-auto inline-flex items-center justify-center gap-1 border border-zinc-800 hover:border-zinc-700 bg-zinc-950 hover:bg-zinc-900 text-blue-400 hover:text-blue-300 text-xs font-bold py-2.5 px-4 rounded-xl transition duration-200"
                  >
                    Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="process" className="py-24 px-6 border-t border-zinc-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-teal-400 font-semibold tracking-widest text-xs uppercase mb-3">Transparency</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              My Structured Engineering Process
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Hiring a developer shouldn't feel like guessing. Here is the step-by-step pipeline I follow to ensure projects ship on-time and with maximum clarity.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-800 -translate-y-1/2 hidden md:block z-0"></div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {processSteps.map((stp, idx) => (
                <div key={idx} className="bg-zinc-950 border border-zinc-850 p-8 rounded-3xl hover:border-zinc-700 transition">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-4xl font-extrabold text-blue-500/20">{stp.num}</span>
                    <span className="h-4 w-4 rounded-full bg-blue-500/10 border border-blue-500 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{stp.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{stp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Cost Estimator & Lead Capture */}
      <section id="estimator" className="py-24 px-6 border-t border-zinc-900 scroll-mt-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-3">Instant Pricing</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Project Blueprint & Estimate Planner
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Select your specifications below to calculate an instant budget estimation range. Zero guesswork, immediate pricing alignment.
            </p>
          </div>

          <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 flex">
              {renderForm()}
            </div>
            <div className="lg:col-span-5 flex">
              {renderPanel()}
            </div>
          </div>

          <div className="lg:hidden">
            {!showMobileCalculator ? (
              <div className="bg-zinc-950 border border-zinc-850 rounded-3xl p-8 text-center max-w-md mx-auto">
                <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-lg font-bold text-white mb-2">Instant Project Quote Calculator</h3>
                <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
                  Select your specifications to calculate an instant budget estimation range. Zero guesswork, immediate pricing alignment.
                </p>
                <button
                  onClick={() => setShowMobileCalculator(true)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3.5 rounded-xl text-sm shadow-lg transition"
                >
                  Start Project Quote Planner →
                </button>
              </div>
            ) : (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
                <div className="bg-zinc-950 border border-zinc-850 rounded-3xl w-full max-w-md p-5 relative my-8 max-h-[90vh] overflow-y-auto space-y-6">
                  <button
                    onClick={() => setShowMobileCalculator(false)}
                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white"
                  >
                    ✕
                  </button>
                  <h3 className="text-xl font-bold text-white mb-2 text-left">Project Quote Planner</h3>
                  <div className="space-y-6">
                    {renderForm()}
                    {renderPanel()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tech Grid Section */}
      <section id="skills" className="py-24 px-6 border-t border-zinc-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Core Technical Capabilities
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              My engineering stack is optimized for product speed, secure database state execution, and smooth custom frontends.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#121214] to-[#18181b] border border-zinc-850 rounded-2xl px-6 py-5 flex items-center justify-center hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-1 transition duration-350"
              >
                <span className="text-sm font-semibold text-zinc-300 group-hover:text-cyan-400 transition">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience History */}
      <section className="py-24 px-6 border-t border-zinc-900 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-purple-400 font-semibold tracking-widest text-xs uppercase mb-3">Timeline</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Professional Background
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                role: "Founder & Full-Stack Developer",
                company: "Rockclimb Networks",
                period: "2024 - Present",
                desc: "Direct agency and consulting systems development. Built customized web products, server routing, and security audits for high-speed small business setups."
              },
              {
                role: "Founder & Lead Developer",
                company: "SafarShare",
                period: "In Active Development",
                desc: "Developing a safety-focused long-distance ride sharing system, optimization of route-math, real-time coordinate parsing, and scale databases."
              },
              {
                role: "Founder & Developer",
                company: "Dayli Delivery",
                period: "In Development",
                desc: "Creating responsive fast-commerce inventory platforms utilizing Google Firebase DB and sub-second checkout synchronizations."
              },
              {
                role: "Independent Product Builder",
                company: "Personal Development Lab",
                period: "2022 - Present",
                desc: "Designing and developing responsive web applications, experimenting with modern JavaScript technologies, and building full-stack products from scratch."
              }
            ].map((exp, eidx) => {
              const isHiddenOnMobile = eidx > 0 && !showAllExperience;
              return (
                <div
                  key={eidx}
                  className={`bg-zinc-950 border border-zinc-850/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:justify-between md:items-start gap-4 hover:border-zinc-800 transition ${isHiddenOnMobile ? "hidden md:flex" : "flex"
                    }`}
                >
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-sm font-semibold text-purple-400">{exp.company}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">{exp.desc}</p>
                  </div>
                  <span className="bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-400 shrink-0 self-start md:self-auto">
                    {exp.period}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Toggle Experience Button on Mobile */}
          <div className="flex justify-center mt-6 md:hidden">
            <button
              onClick={() => setShowAllExperience(!showAllExperience)}
              className="text-xs font-bold text-blue-400 hover:text-blue-300 py-2.5 px-6 border border-zinc-800 rounded-xl hover:border-zinc-700 transition"
            >
              {showAllExperience ? "Collapse Timeline" : "View Full Timeline"}
            </button>
          </div>
        </div>
      </section>

      {/* Start Your Project Section */}
      <section id="contact" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-zinc-900 bg-zinc-950/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              🚀 Start Your Project
            </h2>
            <p className="text-zinc-400 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
              Have an idea? Tell me what you're building and I'll reply within 24 hours with next steps, timeline and estimated budget.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="bg-zinc-950 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">✅ Thanks!</h3>
              <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                I've received your project brief. I'll review it personally and get back to you at <strong className="text-white">{inquiryEmail}</strong> within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="bg-zinc-950 border border-zinc-850 rounded-3xl p-6 sm:p-10 space-y-6 text-left shadow-2xl shadow-blue-500/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Abhishek Srivastava"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-zinc-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-zinc-600 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Company <span className="text-zinc-600">(Optional)</span></label>
                  <input
                    type="text"
                    value={inquiryCompany}
                    onChange={(e) => setInquiryCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-zinc-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Project Type</label>
                  <select
                    value={inquiryProjectType}
                    onChange={(e) => setInquiryProjectType(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white transition"
                  >
                    <option value="web-app">Web App</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="saas">SaaS</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="ai-tool">AI Tool</option>
                    <option value="internal-dashboard">Internal Dashboard</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Estimated Budget</label>
                  <select
                    value={inquiryBudget}
                    onChange={(e) => setInquiryBudget(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white transition"
                  >
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-3000">$1,000 - $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="above-5000">$5,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Target Timeline</label>
                <select
                  value={inquiryTimeline}
                  onChange={(e) => setInquiryTimeline(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white transition"
                >
                  <option value="asap">ASAP</option>
                  <option value="2-4-weeks">2 - 4 weeks</option>
                  <option value="1-2-months">1 - 2 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">What are you building?</label>
                <textarea
                  required
                  rows={5}
                  value={inquiryBrief}
                  onChange={(e) => setInquiryBrief(e.target.value)}
                  placeholder="Tell me about your product vision, target audience, core features, or stack preferences..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-zinc-650 resize-none transition"
                />
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={inquirySubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-zinc-800 disabled:to-zinc-800 disabled:text-zinc-500 text-white font-bold py-4 rounded-xl shadow-lg transition text-center flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {inquirySubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Project Inquiry...
                    </>
                  ) : (
                    "Send Project Inquiry"
                  )}
                </button>

                <p className="text-center text-xs text-zinc-500 mt-2">
                  🔒 I'll personally review your project and reply within 24 hours.
                </p>

                {inquiryError && (
                  <div className="bg-red-950/40 border border-red-500/20 rounded-2xl p-4 text-center mt-3 text-red-300 text-xs font-semibold leading-relaxed">
                    ⚠️ {inquiryError}
                  </div>
                )}
              </div>
            </form>
          )}

          {/* Alternative Contacts Grid */}
          <div className="mt-12 border-t border-zinc-900 pt-8 text-center">
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-6">Or connect directly</p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a
                href="mailto:asri.4247@gmail.com"
                className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-xl px-5 py-3 text-zinc-300 hover:text-white text-sm font-semibold transition"
              >
                <Mail className="w-4.5 h-4.5 text-blue-400" />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/abhishekcodes1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-xl px-5 py-3 text-zinc-300 hover:text-white text-sm font-semibold transition"
              >
                <Linkedin className="w-4.5 h-4.5 text-blue-400" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & General CTAs */}
      <footer id="footer" className="border-t border-zinc-900 bg-zinc-950/60 py-12 text-center text-zinc-500 text-xs sm:text-sm scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600">
            © {new Date().getFullYear()} Abhishek Srivastava. All client deliverables include full source code ownership.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center text-zinc-400 text-xs">
            <a href="mailto:asri.4247@gmail.com" className="hover:text-white transition inline-flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-blue-400" />
              asri.4247@gmail.com
            </a>
            <span className="text-zinc-800 hidden sm:inline">|</span>
            <a href="https://github.com/abhi-sri94" target="_blank" rel="noopener noreferrer" className="hover:text-white transition inline-flex items-center gap-1.5">
              <Github className="w-4.5 h-4.5 text-blue-400" />
              GitHub
            </a>
            <span className="text-zinc-800 hidden sm:inline">|</span>
            <a href="https://www.linkedin.com/in/abhishekcodes1/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition inline-flex items-center gap-1.5">
              <Linkedin className="w-4.5 h-4.5 text-blue-400" />
              LinkedIn
            </a>
            <span className="text-zinc-800 hidden sm:inline">|</span>
            <a href="https://x.com/abhisricodes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition inline-flex items-center gap-1.5">
              <XIcon className="w-4 h-4 text-blue-400" />
              X (Twitter)
            </a>
          </div>
        </div>
      </footer>

      {/* Case Study Modal Overlay (for mobile/tablet view) */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
          <div className="bg-zinc-950 border border-zinc-850 rounded-3xl w-full max-w-xl p-6 sm:p-8 space-y-6 relative my-8 max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-white pr-8">{selectedCaseStudy.title}</h3>

            <p className="text-zinc-400 text-sm leading-relaxed">{selectedCaseStudy.description}</p>

            <div className="space-y-5 border-t border-zinc-900 pt-6">
              <div>
                <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">❌ The Problem</p>
                <p className="text-zinc-300 text-sm leading-relaxed">{selectedCaseStudy.challenge}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">🛠️ Engineering Solution</p>
                <p className="text-zinc-300 text-sm leading-relaxed">{selectedCaseStudy.solution}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">🚀 Product & Technical Impact</p>
                <p className="text-zinc-300 text-sm leading-relaxed">{selectedCaseStudy.impact}</p>
              </div>
            </div>

            <div className="flex gap-4 border-t border-zinc-900 pt-6">
              <a
                href={selectedCaseStudy.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl text-sm transition"
              >
                Live Demo
              </a>
              <a
                href={selectedCaseStudy.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border border-zinc-800 hover:bg-zinc-900 text-zinc-300 py-3 rounded-xl text-sm transition"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      )}

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-500 p-3 lg:p-4 rounded-full shadow-lg shadow-blue-500/20 hover:scale-110 active:scale-95 transition duration-300 border border-white/10"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
}
